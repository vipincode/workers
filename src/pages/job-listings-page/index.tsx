import { useState } from "react";
import JobCard from "../../components/jobs/job-card";
import { Link } from "react-router-dom";
import { useJobs } from "../../react-query/hooks";
import JobCardSkeleton from "../../components/skeleton/job-card-skeleton";

export default function JobListingsPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const { data, isLoading, isError } = useJobs();
  if (isError) {
    return <p>Error, Something went wrong</p>;
  }
  if (isLoading) {
    return <JobCardSkeleton />;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center items-center h-[200px] bg-gray-200 mb-10 rounded-md">
        <h2 className="text-2xl font-bold text-center">Apply the best suitable Jobs for you</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {data.jobs.map((job) => (
            <JobCard key={job.id} job={job} expandedJob={expandedJob} setExpandedJob={setExpandedJob} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/more-jobs" className="btn btn-secondary">
            View more Jobs
          </Link>
        </div>
      </div>
    </div>
  );
}
