import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../react-query/constants";
import { z } from "zod";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../store/auth-store";

const formSchemaStep1 = z.object({
  // mobile_no: z.string().min(10, "Mobile number is required."),
  mobile_no: z
    .string()
    .length(10, "Mobile number must be exactly 10 digits.")
    .regex(/^\d+$/, "Mobile number must contain only numbers."),
});

const formSchemaStep2 = z.object({
  name: z.string().optional(),
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
          throw new Error("Data format not good");
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

export default function SignUp() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [mobileNumber, setMobileNumber] = useState(""); // Store the mobile number after Step 1
  const { postData, loading, error } = useApi();
  const navigate = useNavigate();

  // Form handlers for Step 1 and Step 2
  const {
    register: registerStep1,
    handleSubmit: handleSubmitStep1,
    formState: { errors: errorsStep1 },
  } = useForm<FormDataStep1>({
    resolver: zodResolver(formSchemaStep1),
  });

  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
  } = useForm<FormDataStep2>();

  const handleMobileSubmit: SubmitHandler<FormDataStep1> = async (data) => {
    const result = await postData(`${API_URL}/register-otp`, data);
    if (result) {
      setMobileNumber(data.mobile_no);
      setStep(2);
    }
  };

  const handleOtpSubmit: SubmitHandler<FormDataStep2> = async (data) => {
    const result = await postData(`${API_URL}/register`, { name: data.name, mobile_no: mobileNumber, otp: data.otp });
    if (result) {
      const { token, user } = result;
      useAuthStore.getState().setUserData(user, token);

      toast.success("Register successful");
      navigate("/sign-in");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Create an Account</h2>
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
                <button type="submit" className="btn btn-primary">
                  Next
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
                  placeholder="Your otp"
                  className={`input input-bordered ${errorsStep2.otp ? "input-error" : ""}`}
                  {...registerStep2("otp", {
                    required: "OTP is required",
                  })}
                />
                {errorsStep2.otp && <span className="text-error text-sm mt-1">{errorsStep2.otp.message}</span>}
              </div>
              <div className="form-control">
                <label className="label" htmlFor="name">
                  <span className="label-text">Full Name (optional)</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className={`input input-bordered ${errorsStep2.name ? "input-error" : ""}`}
                  {...registerStep2("name", { required: "Full name is required" })}
                />
                {errorsStep2.name && <span className="text-error text-sm mt-1">{errorsStep2.name.message}</span>}
              </div>
              {error && <div className="text-error mt-2">{error}</div>}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                </button>
              </div>
            </form>
          )}

          <p className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/sign-in" className="link link-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
