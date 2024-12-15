import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Service } from "../../types";
import { useCategories } from "../../react-query/hooks";
import ServicesCard from "../shared/services-card";
import { IoIosSearch } from "react-icons/io";
import HeadingPrimary from "../typography/heading-primary";

interface SearchData {
  category_id: number;
  kyword: string;
}

interface ServiceResponse {
  message: string;
  services: Service[];
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
      setResults(data.services || []);
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
          <div className="md:flex md:items-center border rounded-md px-2 py-1 bg-white">
            <div>
              <select
                className="py-3 px-6 outline-none"
                id="category_id"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a category
                </option>
                {data.categories.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex">
              <input
                type="text"
                id="kyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter keyword"
                className="w-full min-w-[300px] py-3 px-6 outline-none"
              />
              <button type="submit" disabled={isPending} className="btn ">
                <IoIosSearch size={24} />
              </button>
            </div>
          </div>
        </form>
      </div>

      {isError && <p>Error fetching services.</p>}

      {isSuccess && (
        <div className="container mx-auto px-4">
          <div className="pb-[100px]">
            {results.length ? <HeadingPrimary className="mb-6 mt-6 text-center">Search Results</HeadingPrimary> : null}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {results.length > 0 && results.map((service) => <ServicesCard key={service.id} data={service} />)}
            </div>
            {!results.length && (
              <div className="flex justify-center items-center min-h-[200px]">
                <div className="text-center">
                  <h3 className="text-xl font-medium">No services are available at the moment. </h3>
                  <p className="font-lg">Please check back later!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchServices;