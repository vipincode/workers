import HeadingPrimary from "../typography/heading-primary";
import CategoryCard from "../shared/category-card";

const Category = () => {
  return (
    <div className="bg-helmet-background min-h-[100vh] bg-center bg-no-repeat bg-cover bg-fixed">
      <div className="h-[100vh] flex items-center">
        <div className="bg-base-100/30 h-full w-[70%] p-[50px] pr-[100px] clip-rect">
          <div className="h-full max-w-[90%] flex justify-center items-center flex-col">
            <HeadingPrimary className="text-primary mb-10">Top Categories</HeadingPrimary>
            <div className="grid grid-cols-3 gap-4 w-full">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <CategoryCard key={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
