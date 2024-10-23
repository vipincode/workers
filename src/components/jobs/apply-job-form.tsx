"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputs } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { applyJob } from "../../react-query/apis";
import toast from "react-hot-toast";

export default function ApplyJobForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const mutation = useMutation({
    mutationFn: applyJob,
    onSuccess: () => {
      toast.success("Apply job successfully!");
    },
    onError: (error) => {
      console.error("Error saving data:", error);
      toast.error("Error submitting form. Please try again.");
    },
  });
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-[100px]">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            type="text"
            {...register("name", { required: "Name is required" })}
            className="input input-bordered w-full"
          />
          {errors.name && <p className="text-error mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="input input-bordered w-full"
          />
          {errors.email && <p className="text-error mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="city" className="label">
            <span className="label-text">City</span>
          </label>
          <input
            id="city"
            type="text"
            {...register("city", { required: "City is required" })}
            className="input input-bordered w-full"
          />
          {errors.city && <p className="text-error mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <label htmlFor="state" className="label">
            <span className="label-text">State</span>
          </label>
          <input
            id="state"
            type="text"
            {...register("state", { required: "State is required" })}
            className="input input-bordered w-full"
          />
          {errors.state && <p className="text-error mt-1">{errors.state.message}</p>}
        </div>

        <div>
          <label htmlFor="skills" className="label">
            <span className="label-text">Your Skills</span>
          </label>
          <input
            id="skills"
            type="text"
            {...register("skills", { required: "Skills are required" })}
            className="input input-bordered w-full"
          />
          {errors.skills && <p className="text-error mt-1">{errors.skills.message}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", { required: "Phone is required" })}
            className="input input-bordered w-full"
          />
          {errors.phone && <p className="text-error mt-1">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="aboutYourself" className="label">
            <span className="label-text">Tell me about yourself (Optional)</span>
          </label>
          <textarea
            id="aboutYourself"
            {...register("aboutYourself")}
            className="textarea textarea-bordered w-full"
            rows={4}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
