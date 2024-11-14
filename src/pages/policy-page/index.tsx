import { useParams } from "react-router-dom";
import { useFetchPolicies } from "../../react-query/hooks";
import DOMPurify from "dompurify";

const PolicyPage = () => {
  const { slug } = useParams();

  const { data, isError, isLoading } = useFetchPolicies(slug);
  if (isError) {
    return <p>Oops something went wrong...</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div className="container mx-auto p-14 min-h-[60vh] bg-gray-100 my-[60px] rounded-md">
        <h1 className="text-center text-3xl font-semibold">{data.page.title}</h1>
        <div>
          <div
            className="mt-10"
            dangerouslySetInnerHTML={{
              __html: data.page.content ? DOMPurify.sanitize(data.page.content) : "<p>No content available</p>",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
