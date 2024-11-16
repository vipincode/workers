import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../react-query/constants";
import { FcGoogle } from "react-icons/fc";

type SignUpInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
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
        throw new Error("Sign up failed");
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
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignUpInputs>();
  const { postData, loading, error } = useApi();
  const router = useNavigate();

  const onSubmit: SubmitHandler<SignUpInputs> = async (data) => {
    const result = await postData(`${API_URL}/signup`, data);
    if (result) {
      // Successful sign-up, redirect to dashboard or login page
      router("/sign-in");
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Create an Account</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label" htmlFor="name">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className={`input input-bordered ${errors.name ? "input-error" : ""}`}
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && <span className="text-error text-sm mt-1">{errors.name.message}</span>}
            </div>
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
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
              />
              {errors.password && <span className="text-error text-sm mt-1">{errors.password.message}</span>}
            </div>
            <div className="form-control">
              <label className="label" htmlFor="confirm-password">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                className={`input input-bordered ${errors.confirmPassword ? "input-error" : ""}`}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val: string) => {
                    if (watch("password") != val) {
                      return "Your passwords do not match";
                    }
                  },
                })}
              />
              {errors.confirmPassword && (
                <span className="text-error text-sm mt-1">{errors.confirmPassword.message}</span>
              )}
            </div>
            {error && <div className="text-error mt-2">{error}</div>}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="form-control">
            <button className="btn btn-outline btn-primary">
              <FcGoogle size={24} />
              <span>Sign up with Google</span>
            </button>
          </div>
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
