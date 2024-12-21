import { Link } from "react-router-dom";
import JobCategoryCarousel from "../../components/jobs/job-category-carousel";
import { useJobsCategory } from "../../react-query/hooks";
import JobCategorySkeleton from "../../components/skeleton/job-category-skeleton";

export default function JobCategoriesPage() {
  const sliderTexts = [
    "अब सिर्फ एक क्लिक में नौकरी पाएं",
    "नौकरी का सीधा अपडेट आपके फोन पर",
    "देश भर में हजारो नौकरिया अभी अप्लाई करें",
    "अब आपकी मनचाही नौकरी खुद आपको ढूंढेगी",
    "100% सत्यापित और निशुल्क नौकरिया",
  ];

  const { data, isLoading, isError } = useJobsCategory();

  if (isError) {
    return <p>Error, Something went wrong</p>;
  }
  if (isLoading) {
    return <JobCategorySkeleton />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-6">
        <JobCategoryCarousel data={sliderTexts} />
      </div>
      <div className="mx-auto max-w-[500px] h-[60px] mb-0 md:mb-10 rounded-md flex justify-center items-center">
        <h2 className="text-base md:text-2xl font-bold text-center">Choose Job by Categories</h2>
      </div>
      <div className="container mx-auto px-0 md:px-4 mb-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.categories.map((category) => (
            <Link to={`/more-jobs/${category.slug}`}>
              <div key={category.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-base font-semibold">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
