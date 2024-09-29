import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";
import { useBlogs } from "../../react-query/hooks";
import SingleBlogCardLoading from "./loader/single-blog-card-loading";

const SingleBlogCard = ({ blogId }: { blogId: number }) => {
  const { data, status } = useBlogs();

  if (status === "pending") {
    return <SingleBlogCardLoading />;
  }

  if (status === "error") {
    return <p>Oops something went wrong try again!</p>;
  }

  if (status === "success") {
    const { blogs } = data;
    const otherBlogData = blogs.filter((blog) => blog.id !== blogId);

    return (
      <>
        {otherBlogData.map((blog) => (
          <div className="flex bg-white h-[110px]" key={blog.id}>
            <div className="w-[140px] h-full">
              <img className="h-[110px]" src={`${VITE_IMAGE_PATH_URL}/blog/${blog.blogimg}`} alt="" />
            </div>
            <div className="flex-1 p-4">
              <h3 className="text-sm font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm font-normal">{blog.short_description}</p>
            </div>
          </div>
        ))}
      </>
    );
  }

  return <p>No blog post available</p>;
};

export default SingleBlogCard;
