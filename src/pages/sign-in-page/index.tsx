import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../../react-query/constants";
import { z } from "zod";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/auth-store";

const formSchemaStep1 = z.object({
  mobile_no: z.string().min(10, "Mobile number is required."),
});

const formSchemaStep2 = z.object({
  otp: z.string().min(4, "OTP is required."),
});

export type FormDataStep1 = z.infer<typeof formSchemaStep1>;
export type FormDataStep2 = z.infer<typeof formSchemaStep2>;

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postData = async (url: string, data: object) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found");
        } else if (response.status === 401) {
          throw new Error("Invalid or expired OTP");
        } else if (response.status === 500) {
          throw new Error("Server error");
        } else {
          throw new Error("Request failed");
        }
      }
      return await response.json();
    } catch (err) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { postData, loading, error };
};

export default function SignIn() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [mobileNumber, setMobileNumber] = useState(""); // Store the mobile number after Step 1
  const { postData, loading, error } = useApi();
  const navigate = useNavigate();
  const location = useLocation();

  // Form handlers for Step 1 and Step 2
  const {
    register: registerStep1,
    handleSubmit: handleSubmitStep1,
    formState: { errors: errorsStep1 },
  } = useForm<FormDataStep1>();

  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
  } = useForm<FormDataStep2>();

  const handleMobileSubmit: SubmitHandler<FormDataStep1> = async (data) => {
    const result = await postData(`${API_URL}/request-otp`, data);
    if (result) {
      setMobileNumber(data.mobile_no);
      setStep(2);
    }
  };

  const handleOtpSubmit: SubmitHandler<FormDataStep2> = async (data) => {
    const result = await postData(`${API_URL}/login`, { mobile_no: mobileNumber, otp: data.otp });
    if (result) {
      // Get User from API
      const { token, user } = result;
      useAuthStore.getState().setUserData(user, token);

      toast.success("Login successful");
      const redirectTo = location.state?.from || "/"; // Redirect to the previous page or home
      navigate(redirectTo);
    }
  };

  return (
    <div className="min-h-[80vh] py-10 bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign In</h2>

          {step === 1 && (
            <form onSubmit={handleSubmitStep1(handleMobileSubmit)}>
              <div className="form-control">
                <label className="label" htmlFor="mobile">
                  <span className="label-text">Mobile number</span>
                </label>
                <input
                  type="text"
                  id="mobile"
                  placeholder="+91-9000000000"
                  className={`input input-bordered ${errorsStep1.mobile_no ? "input-error" : ""}`}
                  {...registerStep1("mobile_no", {
                    required: "Mobile number is required",
                  })}
                />
                {errorsStep1.mobile_no && (
                  <span className="text-error text-sm mt-1">{errorsStep1.mobile_no.message}</span>
                )}
              </div>

              {error && <div className="text-error mt-2">{error}</div>}

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? <span className="loading loading-spinner"></span> : "Continue"}
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmitStep2(handleOtpSubmit)}>
              <div className="form-control">
                <label className="label" htmlFor="otp">
                  <span className="label-text">OTP</span>
                </label>
                <input
                  type="text"
                  id="otp"
                  placeholder="Your OTP"
                  className={`input input-bordered ${errorsStep2.otp ? "input-error" : ""}`}
                  {...registerStep2("otp", {
                    required: "OTP is required",
                  })}
                />
                {errorsStep2.otp && <span className="text-error text-sm mt-1">{errorsStep2.otp.message}</span>}
              </div>

              {error && <div className="text-error mt-2">{error}</div>}

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? <span className="loading loading-spinner"></span> : "Sign In"}
                </button>
              </div>
            </form>
          )}

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/sign-up" className="link link-primary">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
