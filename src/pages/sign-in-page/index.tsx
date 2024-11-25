import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../react-query/constants";

type SignInInputs = {
  phone: string;
  otp: string;
};

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
        throw new Error("Sign in failed");
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();
  const { postData, loading } = useApi();
  const router = useNavigate();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    const result = await postData(`${API_URL}/request-otp`, data);
    if (result) {
      router("/");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Sign In</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="phone">
                <span className="label-text">Mobile number</span>
              </label>
              <input
                type="text"
                id="phone"
                placeholder="+95-90000000"
                className={`input input-bordered ${errors.phone ? "input-error" : ""}`}
                {...register("phone", {
                  required: "phone is required",
                })}
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="otp">
                <span className="label-text">OTP</span>
              </label>
              <input
                type="text"
                id="otp"
                placeholder="Type your otp here"
                className={`input input-bordered ${errors.otp ? "input-error" : ""}`}
                {...register("otp", {
                  required: "otp is required",
                })}
              />
            </div>

            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "continue"}
              </button>
            </div>
          </form>
          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/join-us" className="link link-primary">
              Join Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
