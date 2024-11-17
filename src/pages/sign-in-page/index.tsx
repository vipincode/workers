import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../react-query/constants";

type SignInInputs = {
  email: string;
  password: string;
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
  const { postData, loading, error } = useApi();
  const router = useNavigate();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    const result = await postData(`${API_URL}/login`, data);
    if (result) {
      // Successful sign-in, redirect to dashboard
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
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="email@example.com"
                className={`input input-bordered ${errors.email ? "input-error" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <span className="text-error text-sm mt-1">{errors.email.message}</span>}
            </div>
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className={`input input-bordered ${errors.password ? "input-error" : ""}`}
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <span className="text-error text-sm mt-1">{errors.password.message}</span>}
              <label className="label">
                <Link to="/forgot-password" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            {error && <div className="text-error mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Sign In"}
              </button>
            </div>
          </form>
          {/* <div className="divider">OR</div>
          <div className="form-control">
            <button className="btn btn-outline btn-primary">
              <FcGoogle size={24} /> <span>Continue with Google</span>
            </button>
          </div> */}
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
