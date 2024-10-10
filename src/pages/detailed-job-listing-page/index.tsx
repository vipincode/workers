import { useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "../../components/jobs/job-card";

type JobListing = {
  id: number;
  jobId: number;
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
    jobId: 2,
    company: "TATA",
    location: "Delhi (Laxmi Nagar)",
    dailyWage: 900,
    vacancy: 190,
    facilities: ["Lodge", "Day/Night Shift", "Transport", "Food", "ESI/PF"],
    aboutJob: "Need 190 mason in TATA Group for their Airport Project",
  },
  {
    id: 2,
    jobId: 1,
    company: "AFCONS infra",
    location: "Lucknow",
    dailyWage: 450,
    vacancy: 460,
    facilities: ["Lodge", "Transport", "Overtime", "ESI/PF"],
    aboutJob: "Need 460 Helper in Afcons infrastructure for their Road Project",
  },
  {
    id: 3,
    jobId: 3,
    company: "Larsen & Tourbo",
    location: "Punjab",
    dailyWage: 500,
    vacancy: 620,
    facilities: ["Transport", "Lodge", "ESI/PF", "Overtime"],
    aboutJob: "Need 620 Helper in L&T Group for their Highway Project",
  },
];

export default function DetailedJobListingPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const { id } = useParams();
  const jobLists = jobListings.filter((job) => job.jobId === parseInt(id));

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex justify-center items-center h-[200px] bg-gray-200 mb-10 rounded-md">
        <h2 className="text-2xl font-bold text-center">Jobs by Categories</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6">
          {jobLists.map((job) => (
            <JobCard key={job.id} job={job} expandedJob={expandedJob} setExpandedJob={setExpandedJob} />
          ))}
        </div>
      </div>
    </div>
  );
}
