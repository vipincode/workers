import { useState } from "react";
import JobCard from "../../components/jobs/job-card";
import { Link } from "react-router-dom";
import { useJobs, useJobsCategory } from "../../react-query/hooks";
import JobCardSkeleton from "../../components/skeleton/job-card-skeleton";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { searchCategory } from "../../react-query/apis";

export default function JobListingsPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  // Fetch job and category data
  const { data, isLoading, isError } = useJobs();
  const { data: Categories, isLoading: categoryLoading, isError: categoryError } = useJobsCategory();

  // React Hook Form setup
  const { register, handleSubmit } = useForm();

  // Mutation for category search
  const mutation = useMutation({
    mutationFn: searchCategory,
  });

  const onSubmit = (data) => {
    console.log(data);
    mutation.mutate(data);
  };

  // Loading and error states
  if (isError || categoryError) {
    return <p>Error, Something went wrong</p>;
  }
  if (isLoading || categoryLoading) {
    return <JobCardSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center items-center h-[200px] bg-gray-200 mb-10 rounded-md">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Apply the best suitable Jobs for you</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4">
            <div>
              <label htmlFor="category" className="font-medium block text-sm mb-1">
                Category
              </label>
              <select {...register("category")} defaultValue="" className="select select-bordered w-full max-w-xs">
                <option value="" disabled>
                  Select category
                </option>
                {Categories?.categories?.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="font-medium block text-sm mb-1">
                Location
              </label>
              <input
                {...register("location")}
                type="text"
                placeholder="Type location here"
                className="input input-bordered w-full max-w-xs"
              />
            </div>

            <div>
              <label htmlFor="experience" className="font-medium block text-sm mb-1">
                Experience
              </label>
              <select {...register("experience")} defaultValue="" className="select select-bordered w-full max-w-xs">
                <option value="" disabled>
                  Select experience
                </option>
                <option>0-1 Year</option>
                <option>1-2 Year</option>
                <option>2-3 Year</option>
                <option>3-4 Year</option>
                <option>4-5 Year</option>
                <option>5-6 Year</option>
                <option>7-8 Year</option>
                <option>9-10 Year</option>
                <option>10+ Year</option>
                <option>20+ Year</option>
              </select>
            </div>

            <div>
              <label htmlFor="salary" className="font-medium block text-sm mb-1">
                Salary
              </label>
              <select {...register("salary")} defaultValue="" className="select select-bordered w-full max-w-xs">
                <option value="" disabled>
                  Select salary
                </option>
                <option>0-10000</option>
                <option>10000-20000</option>
                <option>20000-30000</option>
                <option>30000-40000</option>
                <option>40000-50000</option>
                <option>50000-60000</option>
                <option>70000-80000</option>
                <option>90000-100000</option>
                <option>100000+</option>
                <option>200000+</option>
              </select>
            </div>

            <div className="mt-auto">
              <button type="submit" className="btn btn-primary">
                Find
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {data?.jobs?.length ? (
          <div className="grid grid-cols-2 gap-4">
            {data.jobs.map((job) => (
              <JobCard key={job.id} job={job} expandedJob={expandedJob} setExpandedJob={setExpandedJob} />
            ))}
          </div>
        ) : (
          <p>No jobs available</p>
        )}

        <div className="mt-6 text-center">
          <Link to="/more-jobs" className="btn btn-secondary">
            View more Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import JobCard from "../../components/jobs/job-card";
// import { Link } from "react-router-dom";
// import { useJobs, useJobsCategory } from "../../react-query/hooks";
// import JobCardSkeleton from "../../components/skeleton/job-card-skeleton";
// import { useForm } from "react-hook-form";
// import { useMutation } from "@tanstack/react-query";
// import { searchCategory } from "../../react-query/apis";

// export default function JobListingsPage() {
//   const [expandedJob, setExpandedJob] = useState<string | null>(null);

//   const { data, isLoading, isError } = useJobs();
//   const { data: Categories, isLoading: categoryLoading, isError: categoryError } = useJobsCategory();
//   if (isError) {
//     return <p>Error, Something went wrong</p>;
//   }
//   if (isLoading) {
//     return <JobCardSkeleton />;
//   }
//   if (categoryError) {
//     return <p>Error, Something went wrong</p>;
//   }
//   if (categoryLoading) {
//     return <JobCardSkeleton />;
//   }

//   const { register, handleSubmit } = useForm();

//   const mutation = useMutation({
//     mutationFn: searchCategory,
//   });

//   const onSubmit = (data) => {
//     mutation.mutate(data);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="flex justify-center items-center h-[200px] bg-gray-200 mb-10 rounded-md">
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-center">Apply the best suitable Jobs for you</h2>
//           <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-4">
//             <div>
//               <label htmlFor="" className="font-medium block text-sm mb-1">
//                 Category
//               </label>
//               <select {...register("category")} className="select select-bordered w-full max-w-xs">
//                 <option disabled selected>
//                   Select category
//                 </option>
//                 {Categories.categories.map((category) => (
//                   <option key={category.id} value={category.name}>
//                     {category.name}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label htmlFor="" className="font-medium block text-sm mb-1">
//                 Location
//               </label>
//               <input
//                 {...register("location")}
//                 type="text"
//                 placeholder="Type location here"
//                 className="input input-bordered w-full max-w-xs"
//               />
//             </div>
//             <div>
//               <label htmlFor="" className="font-medium block text-sm mb-1">
//                 Experience
//               </label>
//               <select {...register("experience")} className="select select-bordered w-full max-w-xs">
//                 <option disabled selected>
//                   Select experience
//                 </option>
//                 <option>0-1 Year</option>
//                 <option>1-2 Year</option>
//                 <option>2-3 Year</option>
//                 <option>3-4 Year</option>
//                 <option>4-5 Year</option>
//                 <option>5-6 Year</option>
//                 <option>7-8 Year</option>
//                 <option>9-10 Year</option>
//                 <option>10+ Year</option>
//                 <option>20+ Year</option>
//               </select>
//             </div>
//             <div>
//               <label htmlFor="" className="font-medium block text-sm mb-1">
//                 Salary
//               </label>
//               <select {...register("salary")} className="select select-bordered w-full max-w-xs">
//                 <option disabled selected>
//                   Select salary
//                 </option>
//                 <option>0-10000</option>
//                 <option>10000-20000</option>
//                 <option>20000-30000</option>
//                 <option>30000-40000</option>
//                 <option>40000-50000</option>
//                 <option>50000-60000</option>
//                 <option>70000-80000</option>
//                 <option>90000-100000</option>
//                 <option>100000+</option>
//                 <option>200000+</option>
//               </select>
//             </div>
//             <div className="mt-auto">
//               <button type="submit" className="btn btn-primary">
//                 Find
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 gap-4">
//           {data.jobs.map((job) => (
//             <JobCard key={job.id} job={job} expandedJob={expandedJob} setExpandedJob={setExpandedJob} />
//           ))}
//         </div>
//         <div className="mt-6 text-center">
//           <Link to="/more-jobs" className="btn btn-secondary">
//             View more Jobs
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }
