import { useState } from "react";
import JobCard from "../../components/jobs/job-card";
import { Link } from "react-router-dom";

type JobListing = {
  id: number;
  company: string;
  location: string;
  dailyWage: number;
  vacancy: number;
  facilities: string[];
  aboutJob: string;
};

const jobListings: JobListing[] = [
  {
    id: 1,
    company: "Adani Group",
    location: "Delhi (Vasant Bihar)",
    dailyWage: 900,
    vacancy: 150,
    facilities: ["Lodge", "Overtime", "Day/Night Shift", "ESI/PF"],
    aboutJob: "Need 150 shuttering mason in Adani Group",
  },
  {
    id: 2,
    company: "DLF",
    location: "Gujarat (Gandhi Dam)",
    dailyWage: 800,
    vacancy: 200,
    facilities: ["Lodge", "Overtime", "Day/Night Shift", "ESI/PF"],
    aboutJob: "Need 200 Steel Bar Bender in DLF",
  },
  {
    id: 3,
    company: "NCC",
    location: "Noida (Sector 62)",
    dailyWage: 800,
    vacancy: 140,
    facilities: ["Lodge", "Overtime", "Day/Night Shift", "Fooding"],
    aboutJob: "Need 140 mason workers in NCC for their High rise Tower Project",
  },
  {
    id: 4,
    company: "Reliance",
    location: "Mumbai (Dharavi)",
    dailyWage: 500,
    vacancy: 1200,
    facilities: ["Lodge", "Transport", "Overtime", "ESI/PF", "Fooding"],
    aboutJob: "Need 1200 workers for Packaging & Product Framing for their Jio Factory Project",
  },
];

export default function JobListingsPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center items-center h-[200px] bg-gray-200 mb-10 rounded-md">
        <h2 className="text-2xl font-bold text-center">Apply the best suitable Jobs for you</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4">
          {jobListings.map((job) => (
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
