import Container from "../shared/container";
import BlogCard from "../shared/blog-card";
import HeadingPrimary from "../typography/heading-primary";
import { useBlogs } from "../../react-query/hooks";

const Blogs = () => {
  const { data, status } = useBlogs();

  if (status === "pending") {
    return <p>Blog is loading...</p>;
  }

  if (status === "error") {
    return <p>Oops something went wrong try again!</p>;
  }

  const { blogs } = data;

  return (
    <Container className="mb-[100px]">
      <HeadingPrimary className="mb-10">Latest Blog post</HeadingPrimary>
      <div className="grid grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} data={blog} />
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
