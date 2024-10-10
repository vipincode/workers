import { Link } from "react-router-dom";
import JobCategoryCarousel from "../../components/jobs/job-category-carousel";

const jobCategories = [
  { id: 1, name: "Mason/Helper", available: 450 },
  { id: 2, name: "Loading/Unloading/Packaging", available: 1200 },
  { id: 3, name: "Heavy Machine Operator", available: 250 },
  { id: 4, name: "Shuttering Carpenter", available: 320 },
  { id: 5, name: "Steel Bar Bender", available: 500 },
  { id: 6, name: "Scaffolding workers", available: 180 },
  { id: 7, name: "Painter", available: 260 },
  { id: 8, name: "Electrician", available: 300 },
  { id: 9, name: "Plumber", available: 350 },
];

export default function JobCategoriesPage() {
  const sliderTexts = [
    "अब सिर्फ एक क्लिक में नौकरी पाएं",
    "नौकरी का सीधा अपडेट आपके फोन पर",
    "देश भर में हजारो नौकरिया अभी अप्लाई करें",
    "अब आपकी मनचाही नौकरी खुद आपको ढूंढेगी",
    "100% सत्यापित और निशुल्क नौकरिया",
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-6">
        <JobCategoryCarousel data={sliderTexts} />
      </div>
      <div className="mx-auto max-w-[500px] h-[60px] bg-gray-200 mb-10 rounded-md flex justify-center items-center">
        <h2 className="text-2xl font-bold text-center">Choose Job by Categories</h2>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobCategories.map((category) => (
            <Link to={`/more-jobs/${category.id}`}>
              <div key={category.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-gray-600">{category.available} Jobs Available</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
