import SingleBlogCard from "../../components/blog/single-blog-card";
import CommentForm from "../../components/shared/comment-form";
import Container from "../../components/shared/container";
import SmallBanner from "../../components/shared/small-banner";
import { useParams } from "react-router-dom";
import { useSingleBlog } from "../../react-query/hooks";
import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";
import SingleBlogPageLoading from "../../components/blog/loader/single-blog-page-loading";

const BlogPage = () => {
  let { id } = useParams();

  const { data, status, error } = useSingleBlog(parseInt(id));

  if (status === "pending") {
    return <SingleBlogPageLoading />;
  }
  if (status === "error") {
    return <p>Oops something went wrong {error.message}</p>;
  }

  // Get the blog data
  const { blog } = data;

  if (status === "success") {
    return (
      <div>
        <SmallBanner
          title="Noteworthy technology acquisitions 2021"
          content="Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
        />
        <Container className="my-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="blog-content col-span-8">
              <div className="space-y-5">
                <h2>{blog.title}</h2>
                <img className="w-full" src={`${VITE_IMAGE_PATH_URL}/blog/${blog.blogimg}`} alt="" />
                <div>
                  <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.description }} />
                </div>
              </div>

              {/* COMMENTS */}
              <div>
                <h2 className="text-3xl font-semibold">Comments</h2>
                <hr />
              </div>
              <div className="mt-10">
                <CommentForm />
              </div>
            </div>
            <div className="col-span-4 space-y-4">
              <SingleBlogCard blogId={parseInt(id)} />
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return <p>No data found.</p>;
};

export default BlogPage;
