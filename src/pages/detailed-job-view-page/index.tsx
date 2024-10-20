import { useParams } from "react-router-dom";
import { useJobsBySlug } from "../../react-query/hooks";
import JobDetailSkelton from "../../components/skeleton/job-detal-skeltton";

export default function JobDetailedViewPage() {
  const { slug } = useParams();

  const { data, isLoading, isError } = useJobsBySlug(slug);

  if (isError) {
    return <p>Error, Something went wrong</p>;
  }
  if (isLoading) {
    return <JobDetailSkelton />;
  }

  const job = data?.job;

  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 py-10 mb-[100px]">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <img
              src={job.image_link || "https://dummyimage.com/300x200/000/fff"}
              alt="Company Logo"
              className="w-24 h-24 mx-auto rounded-md"
            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6">{job.title}</h1>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Post:</p>
                <p>{job.post}</p>
              </div>
              <div>
                <p className="font-semibold">Vacancy:</p>
                <p>{job.vaccancy} Post</p>
              </div>
              <div>
                <p className="font-semibold">Daily wages:</p>
                <p>{job.salary}/Day</p>
              </div>
              <div>
                <p className="font-semibold">Facilities:</p>
                <p>{job.facilities}</p>
              </div>
              <div>
                <p className="font-semibold">Experience:</p>
                <p>{job.experience} Year</p>
              </div>
              <div>
                <p className="font-semibold">Job Skill:</p>
                <p>{job.skill}</p>
              </div>
              <div>
                <p className="font-semibold">Location:</p>
                <p>{job.location}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">Job description:</p>
              <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: job.description }} />
            </div>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <button className="btn btn-primary">Call Now</button>
            <button className="btn btn-secondary">Apply Now</button>
            <button className="btn btn-accent">WhatsApp</button>
          </div>
        </div>
      </div>
    </div>
  );
}
