import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Service } from "../../types";
import { useCategories } from "../../react-query/hooks";
import ServicesCard from "../shared/services-card";
import HeadingPrimary from "../typography/heading-primary";

interface SearchData {
  category_id: number;
  kyword: string;
}

interface ServiceResponse {
  message: string;
  data: Service[];
}

const SearchServices = () => {
  const [categoryId, setCategoryId] = useState("");
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<Service[]>([]);

  // Mutation function for searching services
  const searchServices = async (searchData: SearchData): Promise<ServiceResponse> => {
    const response = await axios.post<ServiceResponse>("https://dehatwala.com/api/search-services", searchData);
    return response.data;
  };

  // useMutation hook
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: searchServices,
    onSuccess: (data: ServiceResponse) => {
      setResults(data.data || []);
    },
    onError: (error: Error) => {
      console.error("Error searching services:", error);
      alert("Failed to fetch services. Please try again.");
    },
  });

  // Form submit handler
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchData: SearchData = {
      category_id: Number(categoryId),
      kyword: keyword,
    };
    // Trigger the mutation
    mutate(searchData);
  };

  // Get Services
  const { data, error, isLoading, isError: serviceError } = useCategories();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center bg-gray-100 p-3 rounded">
        <div className="skeleton h-[100px] w-full max-w-[800px] mx-auto px-3 mb-6" />
      </div>
    );
  }

  if (serviceError) {
    return <p>Error{error.message}</p>;
  }

  return (
    <div className="bg-gray-100 p-3 rounded">
      <div className="flex justify-center items-center">
        <form onSubmit={handleSearch}>
          <div className="flex items-center border rounded-md px-2 py-1 bg-white">
            <div>
              <select
                className="py-3 px-6 outline-none"
                id="category_id"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="">Select a category</option>
                {data.categories.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                id="kyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword"
                required
                className="w-full min-w-[300px] py-3 px-6 outline-none"
              />
            </div>
            <button type="submit" disabled={isPending} className="bg-black text-white px-3 py-2 rounded">
              {isPending ? "Searching..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {isError && <p>Error fetching services.</p>}

      {isSuccess && (
        <div className="container mx-auto px-4">
          <div className="pb-[100px]">
            <HeadingPrimary className="mb-6 mt-6 text-center">Search Results:</HeadingPrimary>
            <div className="grid grid-cols-4 gap-4">
              {results.length > 0 ? (
                results.map((service) => <ServicesCard key={service.id} data={service} />)
              ) : (
                <p className="text-center">No results found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchServices;
