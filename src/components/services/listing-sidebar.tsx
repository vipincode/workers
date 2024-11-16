import { twMerge } from "tailwind-merge";
import { useCategories, useSubCategories } from "../../react-query/hooks";
import { Link, useLocation } from "react-router-dom";

const ListingSideBar = ({ categoryId }: { categoryId: number }) => {
  const useQueryParams = () => {
    const { search } = useLocation();
    return new URLSearchParams(search);
  };

  // Get query params
  const queryParams = useQueryParams();
  const subCategoryId = queryParams.get("sub-category");
  console.log(subCategoryId);
  // Category
  const { data: CategoryData, isLoading, isError, error } = useCategories();
  const { data: subCategoryData, status } = useSubCategories(categoryId);

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex flex-col gap-6">
        <div className="space-y-2">
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
        </div>
        <div className="space-y-2">
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
        </div>
      </div>
    );
  }

  if (isError) <p>Oops! Something went wrong! {error.message}</p>;

  const { categories } = CategoryData;

  //Sub Category
  if (status === "error") {
    return <p>Error something went wrong!</p>;
  }
  if (status === "pending") {
    return (
      <div className="min-h-[80vh] flex flex-col gap-6">
        <div className="space-y-2">
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
        </div>
        <div className="space-y-2">
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
          <div className="skeleton h-6 w-full rounded-md"></div>
        </div>
      </div>
    );
  }

  const subCategories = subCategoryData.sub_category;

  return (
    <div className="border-r min-h-[600px] max-h-[800px] overflow-y-auto space-y-3">
      <div>
        <h2 className="text-lg font-semibold mb-4">Category</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li
              key={category.id}
              className={twMerge(
                "text-sm font-normal text-gray-500",
                categoryId === category.id ? "text-black font-medium" : ""
              )}
            >
              <Link to={`/services-listing?category-id=${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Sub Category</h2>
        <ul className="space-y-3">
          {subCategories.map((subCategory) => (
            <li key={subCategory.id} className="text-sm font-normal text-gray-500">
              <Link to={`/services-listing?category-id=${categoryId}&sub-category=${subCategory.id}`}>
                {subCategory.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListingSideBar;
