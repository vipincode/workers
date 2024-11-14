import { useCategories } from "../../react-query/hooks";

const ListingSideBar = () => {
  const { data, isLoading, isError, error } = useCategories();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) <p>Oops! Something went wrong! {error.message}</p>;

  const { categories } = data;
  return (
    <div className="border-r min-h-[600px] max-h-[800px] overflow-y-auto space-y-3">
      <div>
        <h2 className="text-lg font-semibold mb-4">Category</h2>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li className="text-sm font-medium text-gray-500">{category.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-4">Sub Category</h2>
        <ul className="space-y-3">
          <li className="text-sm font-medium text-gray-500">Category 1</li>
          <li className="text-sm font-medium text-gray-500">Category 2</li>
          <li className="text-sm font-medium text-gray-500">Category 3</li>
          <li className="text-sm font-medium text-gray-500">Category 4</li>
          <li className="text-sm font-medium text-gray-500">Category 5</li>
          <li className="text-sm font-medium text-gray-500">Category 6</li>
          <li className="text-sm font-medium text-gray-500">Category 7</li>
          <li className="text-sm font-medium text-gray-500">Category 8</li>
        </ul>
      </div>
    </div>
  );
};

export default ListingSideBar;
