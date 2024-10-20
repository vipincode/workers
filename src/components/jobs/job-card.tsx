import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

interface JobCardProps {
  job: JobProps;
  expandedJob: string | null;
  setExpandedJob: (company: string | null) => void;
}

const JobCard = ({ job, expandedJob, setExpandedJob }: JobCardProps) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">{job.title}</h2>
          <Link to={`/job-detail/${job.slug}`} className="btn btn-primary btn-sm">
            Apply Now
          </Link>
        </div>
        <p className="text-gray-600">Location: {job.location}</p>
        <p className="text-gray-600">Daily Wage: ₹{job.salary}/day</p>
        <p className="text-gray-600">Vacancy: {job.vaccancy} Post</p>
        <div className="mt-2">
          <button
            className="text-blue-600 hover:underline flex items-center"
            onClick={() => setExpandedJob(expandedJob === job.title ? null : job.title)}
          >
            {expandedJob === job.title ? (
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
        {expandedJob === job.title && (
          <div className="mt-2">
            <p className="text-gray-600">Facilities: {job.facilities}</p>
            <div className="mt-1">
              <h3 className="font-semibold text-sm text-gray-700">Description</h3>
              <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: job.description }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
