import HeadingPrimary from "../typography/heading-primary";
import CategoryCard from "../shared/category-card";
import { useCategories } from "../../react-query/apis";

const Category = () => {
  const { data, isPending, isError, error } = useCategories();

  const categories = data?.categories || [];
  // const topCategories = categories.slice(0, 8);

  if (isPending) {
    return <p>Loading...</p>;
  }

  if (error) <p>Oops! Something went wrong! {error.message}</p>;

  return (
    <div className="bg-helmet-background bg-center bg-no-repeat bg-cover bg-fixed">
      <div className="container mx-auto px-4 py-10">
        <HeadingPrimary className="mb-6 mt-6 text-center text-white">Our Services</HeadingPrimary>
        <div className="grid grid-cols-4 gap-4 w-full">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
