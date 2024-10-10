import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

// Define the Job type
type Job = {
  id: number;
  company: string;
  location: string;
  dailyWage: number;
  vacancy: number;
  facilities: string[];
  aboutJob: string;
};

// Props type definition
interface JobCardProps {
  job: Job;
  expandedJob: string | null;
  setExpandedJob: (company: string | null) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, expandedJob, setExpandedJob }) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{job.company}</h2>
          <Link to={`/jobs-details/${job.id}`} className="btn btn-primary btn-sm">
            Apply Now
          </Link>
        </div>
        <p className="text-gray-600">Location: {job.location}</p>
        <p className="text-gray-600">Daily Wage: ₹{job.dailyWage}/day</p>
        <p className="text-gray-600">Vacancy: {job.vacancy} Post</p>
        <div className="mt-2">
          <button
            className="text-blue-600 hover:underline flex items-center"
            onClick={() => setExpandedJob(expandedJob === job.company ? null : job.company)}
          >
            {expandedJob === job.company ? (
              <>
                Less Info <ChevronUp className="ml-1" />
              </>
            ) : (
              <>
                More Info <ChevronDown className="ml-1" />
              </>
            )}
          </button>
        </div>
        {expandedJob === job.company && (
          <div className="mt-2">
            <p className="text-gray-600">Facilities: {job.facilities.join(", ")}</p>
            <p className="text-gray-600">About Job: {job.aboutJob}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
