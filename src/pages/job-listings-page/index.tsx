import { useState } from "react";
import JobCard from "../../components/jobs/job-card";
import { Link } from "react-router-dom";
import JobCardSkeleton from "../../components/skeleton/job-card-skeleton";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../../react-query/apis";
import { SearchIcon } from "lucide-react";
import { useJobsCategory } from "../../react-query/hooks";
import { JobApiResponse } from "../../types";

export default function JobListingsPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [filters, setFilters] = useState({});
  const { register, handleSubmit } = useForm({
    defaultValues: {
      location: "",
      category: "",
      experience: "",
      salary: "",
    },
  });

  const {
    data: jobApiResponse,
    isLoading,
    isError,
  } = useQuery<JobApiResponse>({
    queryKey: ["fetch-jobs", filters],
    queryFn: () => fetchJobs(filters),
    enabled: true,
  });

  const jobs = jobApiResponse?.jobs ?? [];

  const { data: Categories, isLoading: categoryLoading, isError: categoryError } = useJobsCategory();

  const onSubmit = (data) => {
    setFilters(data);
  };

  if (isLoading) return <JobCardSkeleton />;
  if (isError || categoryError) return <p>Error loading jobs or categories.</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center items-center py-6 bg-accent/40 mb-10 rounded-md">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-2xl font-medium">Find Your Ideal Jobs</h2>
            <p>Search by Location, Industry, Experience, and Salary</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="pt-4 relative w-full">
              <input
                {...register("location")}
                type="text"
                placeholder="Search by location, name..."
                className="input input-bordered w-full input-md"
              />
              <SearchIcon className="absolute right-5 top-7" />
            </div>
            <div className="md:flex md:items-center md:gap-4  space-y-4 md:space-y-0">
              {categoryLoading ? (
                "Loading..."
              ) : (
                <div>
                  <label htmlFor="category" className="font-medium block text-sm mb-1">
                    Category
                  </label>
                  <select {...register("category")} defaultValue="" className="select select-bordered w-full">
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
              )}
              <div>
                <label htmlFor="experience" className="font-medium block text-sm mb-1">
                  Experience
                </label>
                <select {...register("experience")} defaultValue="" className="select select-bordered w-full">
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
                <select {...register("salary")} defaultValue="" className="select select-bordered w-full">
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
            </div>
          </form>
        </div>
      </div>

      <div className="container mx-auto md:px-4 mb-[100px]">
        {jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} expandedJob={expandedJob} setExpandedJob={setExpandedJob} />
            ))}
          </div>
        ) : (
          <p>No jobs available</p>
        )}

        <div className="mt-6 text-center">
          <Link to="/more-jobs" className="btn btn-secondary btn-link btn-sm">
            View more Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
