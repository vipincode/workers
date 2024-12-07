import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { API_URL } from "../../react-query/constants";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";

interface ReviewFormData {
  service_id: number;
  name: string;
  mobile_no: string;
  rating: number;
  review_comments: string;
  status: number;
  user_id: number;
}

export default function ReviewForm() {
  const navigate = useNavigate();
  const { token, user } = useAuthStore();
  const { id } = useParams();

  const serviceId = parseInt(id);
  const userId = user?.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>({
    defaultValues: {
      service_id: serviceId,
      status: 1,
    },
  });

  useEffect(() => {
    if (!token || !userId || !id) {
      toast.error("Access denied. Please log in to continue.");
      navigate("/"); // Redirect to home page
    }
  }, [token, userId, id, navigate]);

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: ReviewFormData) => {
      const response = await fetch(`${API_URL}/save-service-review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      return response.json();
    },
    onSuccess: () => {
      reset();
      toast.success("Review submitted successfully!");
    },
    onError: (error) => {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    },
  });

  const onSubmit = (data: ReviewFormData) => {
    mutate({ ...data, user_id: userId });
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-4 mb-[100px]">
      <h2 className="text-2xl font-semibold mb-4">Add Reviews</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
            placeholder="Enter your name"
          />
          {errors.name && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.name.message}</span>
            </label>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="tel"
            {...register("mobile_no", {
              required: "Mobile number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Please enter a valid 10-digit mobile number",
              },
            })}
            className="input input-bordered w-full"
            placeholder="Enter your mobile number"
          />
          {errors.mobile_no && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.mobile_no.message}</span>
            </label>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <div className="rating rating-lg">
            {[1, 2, 3, 4, 5].map((value) => (
              <input
                key={value}
                type="radio"
                {...register("rating", { required: "Please select a rating" })}
                value={value}
                className="mask mask-star-2 bg-orange-400"
              />
            ))}
          </div>
          {errors.rating && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.rating.message}</span>
            </label>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Review Comments</span>
          </label>
          <textarea
            {...register("review_comments", { required: "Please provide your review" })}
            className="textarea textarea-bordered h-24"
            placeholder="Write your review here"
          />
          {errors.review_comments && (
            <label className="label">
              <span className="label-text-alt text-error">{errors.review_comments.message}</span>
            </label>
          )}
        </div>

        <button type="submit" className={`btn btn-primary w-full ${isPending ? "loading" : ""}`} disabled={isPending}>
          {isPending ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
}
