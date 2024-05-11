import Container from "../shared/container";
import HCard from "../shared/h-card";
import HeadingPrimary from "../typography/heading-primary";

const Blogs = () => {
  return (
    <Container className="mb-[100px]">
      <HeadingPrimary className="mb-10">Latest Blog post</HeadingPrimary>
      <div className="grid grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <HCard key={item} />
        ))}
      </div>
    </Container>
  );
};

export default Blogs;
