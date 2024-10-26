// import { FormJoinUsType } from "../../schema/step-form";
// import { useQuery } from "@tanstack/react-query";
// import { CitiesResponse, StateProps } from "../../types";
// import { getCities, getStates } from "../../react-query/apis";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useCategories, useSubCategories } from "../../react-query/hooks";

// const StepForm = () => {
//   // Set and Get cities
//   const [selectedStateId, setSelectedStateId] = useState(null);
//   const {
//     data: states,
//     isLoading: isLoadingStates,
//     isError: isErrorStates,
//   } = useQuery<StateProps, Error>({
//     queryKey: ["states"],
//     queryFn: getStates,
//     staleTime: Infinity,
//   });

//   const {
//     data: cities,
//     isLoading: isLoadingCities,
//     isError: isErrorCities,
//   } = useQuery<CitiesResponse, Error>({
//     queryKey: ["cities", selectedStateId],
//     queryFn: () => getCities(selectedStateId),
//     enabled: !!selectedStateId,
//     staleTime: Infinity,
//   });

//   // Send Data.
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     watch,
//   } = useForm<FormJoinUsType>({
//     defaultValues: {
//       first_name: "",
//       last_name: "",
//       state_id: "",
//       city_id: "",
//       work_experience: "",
//       shift: "",
//       joining: "",
//       mobile_number: "",
//       password: "",
//       skills: [{ skill_name: "", skill_type: "", work_with_skill: [] }],
//     },
//   });

//   const stateValue = watch("state_id");

//   useEffect(() => {
//     setSelectedStateId(stateValue);
//   }, [stateValue]);

//   // Set Categories
//   const [cateName, setCatName] = useState<string[]>([]);
//   const { data: categories, isLoading: categoryLoading, isError: categoryError } = useCategories();
//   const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);

//   const {
//     data: subCategoriesData,
//     isLoading: subCategoryLoading,
//     isError: subCategoryError,
//   } = useSubCategories(selectedCategoryIds);

//   // Flatten the data in the component
//   const subCategories = subCategoriesData ? subCategoriesData.flatMap((item) => item.sub_category) : [];
//   // const subCategories = subCategoriesData ? subCategoriesData.flatMap((item) => item.sub_category) : [];

//   console.log(subCategories, "data");

//   const handleCategoryChange = (categoryId: number) => {
//     setSelectedCategoryIds((prev) => {
//       if (prev.includes(categoryId)) {
//         // If the category is already selected, remove it
//         return prev.filter((id) => id !== categoryId);
//       } else {
//         // If not selected, add it
//         return [...prev, categoryId];
//       }
//     });
//   };

//   const handleCategory = (catName: string) => {
//     setCatName((prev) => {
//       if (prev.includes(catName)) {
//         return prev.filter((name) => name !== catName);
//       }
//       return [...prev, catName];
//     });
//   };

//   // Form Submission
//   const onSubmit = (data: FormJoinUsType) => {
//     console.log(data);
//   };

//   if (isErrorStates || isErrorCities || categoryError || subCategoryError) {
//     return <p>error</p>;
//   }

//   if (isLoadingStates || isLoadingCities || categoryLoading || subCategoryLoading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Join Us</h1>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="form-control">
//             <label className="label" htmlFor="first_name">
//               <span className="label-text">First Name</span>
//             </label>
//             <input
//               type="text"
//               id="first_name"
//               {...register("first_name", { required: "First name is required" })}
//               placeholder="First Name"
//               className={`input input-bordered ${errors.first_name ? "input-error" : ""}`}
//             />
//             {errors.first_name && <span className="text-error text-sm mt-1">{errors.first_name.message}</span>}
//           </div>
//           <div className="form-control">
//             <label className="label" htmlFor="last_name">
//               <span className="label-text">Last Name</span>
//             </label>
//             <input
//               type="text"
//               id="last_name"
//               {...register("last_name", { required: "Last name is required" })}
//               placeholder="Last Name"
//               className={`input input-bordered ${errors.last_name ? "input-error" : ""}`}
//             />
//             {errors.last_name && <span className="text-error text-sm mt-1">{errors.last_name.message}</span>}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="form-control">
//             <label className="label" htmlFor="state_id">
//               <span className="label-text">State</span>
//             </label>
//             <select
//               id="state_id"
//               {...register("state_id", { required: "State is required" })}
//               className={`select select-bordered w-full ${errors.state_id ? "select-error" : ""}`}
//             >
//               <option value="">Select a state</option>
//               {states.states.map((state) => (
//                 <option key={state.id} value={state.id}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//             {errors.state_id && <span className="text-error text-sm mt-1">{errors.state_id.message}</span>}
//           </div>

//           <div className="form-control">
//             <label className="label" htmlFor="city_id">
//               <span className="label-text">City</span>
//             </label>
//             <select
//               id="city_id"
//               {...register("city_id", { required: "City is required" })}
//               className={`select select-bordered w-full ${errors.city_id ? "select-error" : ""}`}
//               disabled={!selectedStateId || isLoadingCities}
//             >
//               <option value="">Select a city</option>
//               {(cities?.cites || []).map((city) => (
//                 <option key={city.id} value={city.id}>
//                   {city.name}
//                 </option>
//               ))}
//             </select>
//             {errors.city_id && <span className="text-error text-sm mt-1">{errors.city_id.message}</span>}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div className="form-control">
//             <label className="label" htmlFor="work_experience">
//               <span className="label-text">Work Experience (years)</span>
//             </label>
//             <input
//               type="number"
//               id="work_experience"
//               {...register("work_experience", { required: "Work experience is required", min: 0 })}
//               className={`input input-bordered ${errors.work_experience ? "input-error" : ""}`}
//             />
//             {errors.work_experience && (
//               <span className="text-error text-sm mt-1">{errors.work_experience.message}</span>
//             )}
//           </div>

//           <div className="form-control">
//             <label className="label" htmlFor="shift">
//               <span className="label-text">Shift</span>
//             </label>
//             <select
//               id="shift"
//               {...register("shift", { required: "Shift is required" })}
//               className={`select select-bordered w-full ${errors.shift ? "select-error" : ""}`}
//             >
//               <option value="">Select a shift</option>
//               <option value="Day">Day</option>
//               <option value="Night">Night</option>
//             </select>
//             {errors.shift && <span className="text-error text-sm mt-1">{errors.shift.message}</span>}
//           </div>

//           <div className="form-control">
//             <label className="label" htmlFor="joining">
//               <span className="label-text">Joining</span>
//             </label>
//             <select
//               id="joining"
//               {...register("joining", { required: "Joining preference is required" })}
//               className={`select select-bordered w-full ${errors.joining ? "select-error" : ""}`}
//             >
//               <option value="">Select joining preference</option>
//               <option value="urgent">Urgent</option>
//               <option value="later">Later</option>
//             </select>
//             {errors.joining && <span className="text-error text-sm mt-1">{errors.joining.message}</span>}
//           </div>
//         </div>

//         <div className="form-control">
//           <label className="label" htmlFor="mobile_number">
//             <span className="label-text">Mobile Number</span>
//           </label>
//           <input
//             type="tel"
//             id="mobile_number"
//             {...register("mobile_number", {
//               required: "Mobile number is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Please enter a valid 10-digit mobile number",
//               },
//             })}
//             placeholder="Mobile Number"
//             className={`input input-bordered ${errors.mobile_number ? "input-error" : ""}`}
//           />
//           {errors.mobile_number && <span className="text-error text-sm mt-1">{errors.mobile_number.message}</span>}
//         </div>

//         <div className="form-control">
//           <label className="label" htmlFor="password">
//             <span className="label-text">Password</span>
//           </label>
//           <input
//             type="password"
//             id="password"
//             {...register("password", {
//               required: "Password is required",
//               minLength: {
//                 value: 8,
//                 message: "Password must be at least 8 characters long",
//               },
//             })}
//             placeholder="Password"
//             className={`input input-bordered ${errors.password ? "input-error" : ""}`}
//           />
//           {errors.password && <span className="text-error text-sm mt-1">{errors.password.message}</span>}
//         </div>

//         <div>
//           <h3 className="text-[20px] font-semibold my-6">Select Category</h3>
//           <div className="flex flex-wrap gap-4">
//             {categories.categories.map((category) => (
//               <div key={category.id} className="form-control ">
//                 <label className="cursor-pointer label bg-gray-200 px-4 py-3 rounded-md flex items-center gap-3">
//                   <span className="label-text">{category.name}</span>
//                   <input
//                     type="checkbox"
//                     value={category.id}
//                     onClick={() => handleCategory(category.name)}
//                     onChange={() => handleCategoryChange(category.id)}
//                     checked={selectedCategoryIds.includes(category.id)}
//                     className="checkbox checkbox-primary"
//                   />
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div>
//           {cateName.length > 0 && <h3 className="text-lg font-semibold my-6">Select Sub Category</h3>}
//           <div className="flex items-center flex-wrap gap-3 mb-6">
//             {cateName.map((item) => (
//               <h4 key={item} className="font-normal mb-1 bg-gray-200 text-[10px] px-2 py-1 rounded-sm">
//                 {item}
//               </h4>
//             ))}
//           </div>
//           <div className="flex flex-wrap gap-6">
//             {subCategories.map((subcategory) => (
//               <div key={subcategory.id} className="form-control border p-2 rounded-md">
//                 <label className="cursor-pointer flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     value={subcategory.id}
//                     className="checkbox checkbox-primary w-[16px] h-[16px] rounded-[5px]"
//                   />
//                   <span className="text-xs">{subcategory.name}</span>
//                 </label>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button type="submit" className="btn btn-primary mt-4 min-w-[200px]">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StepForm;
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getCities, getStates } from "../../react-query/apis";
import { useCategories, useSubFormCategories } from "../../react-query/hooks";
import { FormJoinUsType } from "../../schema/step-form";
import { CitiesResponse, StateProps } from "../../types";

const StepForm = () => {
  // States for selected categories and selected state ID
  const [selectedStateId, setSelectedStateId] = useState(null);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);

  const {
    data: states,
    isLoading: isLoadingStates,
    isError: isErrorStates,
  } = useQuery<StateProps, Error>({
    queryKey: ["states"],
    queryFn: getStates,
    staleTime: Infinity,
  });

  const {
    data: cities,
    isLoading: isLoadingCities,
    isError: isErrorCities,
  } = useQuery<CitiesResponse, Error>({
    queryKey: ["cities", selectedStateId],
    queryFn: () => getCities(selectedStateId),
    enabled: !!selectedStateId,
    staleTime: Infinity,
  });

  const { data: categories, isLoading: categoryLoading, isError: categoryError } = useCategories();
  const {
    data: subCategoriesData,
    isLoading: subCategoryLoading,
    isError: subCategoryError,
  } = useSubFormCategories(selectedCategoryIds);

  // Flattened subcategories array
  const subCategories = subCategoriesData ? subCategoriesData.flatMap((item) => item.sub_category) : [];

  // Set selected state ID based on form input
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormJoinUsType>({
    defaultValues: {
      first_name: "",
      last_name: "",
      state_id: "",
      city_id: "",
      work_experience: "",
      shift: "",
      joining: "",
      mobile_number: "",
      password: "",
      skills: [{ skill_name: "", skill_type: "", work_with_skill: [] }],
    },
  });

  const stateValue = watch("state_id");
  useEffect(() => {
    setSelectedStateId(stateValue);
  }, [stateValue]);

  // Toggle selected categories
  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategoryIds((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

  // Form Submission
  const onSubmit = (data: FormJoinUsType) => {
    console.log(data);
  };

  if (isErrorStates || isErrorCities || categoryError || subCategoryError) {
    return <p>Error loading data</p>;
  }

  if (isLoadingStates || isLoadingCities || categoryLoading || subCategoryLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Join Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label" htmlFor="first_name">
              <span className="label-text">First Name</span>
            </label>
            <input
              type="text"
              id="first_name"
              {...register("first_name", { required: "First name is required" })}
              placeholder="First Name"
              className={`input input-bordered ${errors.first_name ? "input-error" : ""}`}
            />
            {errors.first_name && <span className="text-error text-sm mt-1">{errors.first_name.message}</span>}
          </div>
          <div className="form-control">
            <label className="label" htmlFor="last_name">
              <span className="label-text">Last Name</span>
            </label>
            <input
              type="text"
              id="last_name"
              {...register("last_name", { required: "Last name is required" })}
              placeholder="Last Name"
              className={`input input-bordered ${errors.last_name ? "input-error" : ""}`}
            />
            {errors.last_name && <span className="text-error text-sm mt-1">{errors.last_name.message}</span>}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label" htmlFor="state_id">
              <span className="label-text">State</span>
            </label>
            <select
              id="state_id"
              {...register("state_id", { required: "State is required" })}
              className={`select select-bordered w-full ${errors.state_id ? "select-error" : ""}`}
            >
              <option value="">Select a state</option>
              {states.states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state_id && <span className="text-error text-sm mt-1">{errors.state_id.message}</span>}
          </div>

          <div className="form-control">
            <label className="label" htmlFor="city_id">
              <span className="label-text">City</span>
            </label>
            <select
              id="city_id"
              {...register("city_id", { required: "City is required" })}
              className={`select select-bordered w-full ${errors.city_id ? "select-error" : ""}`}
              disabled={!selectedStateId || isLoadingCities}
            >
              <option value="">Select a city</option>
              {(cities?.cites || []).map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            {errors.city_id && <span className="text-error text-sm mt-1">{errors.city_id.message}</span>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="form-control">
            <label className="label" htmlFor="work_experience">
              <span className="label-text">Work Experience (years)</span>
            </label>
            <input
              type="number"
              id="work_experience"
              {...register("work_experience", { required: "Work experience is required", min: 0 })}
              className={`input input-bordered ${errors.work_experience ? "input-error" : ""}`}
            />
            {errors.work_experience && (
              <span className="text-error text-sm mt-1">{errors.work_experience.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label" htmlFor="shift">
              <span className="label-text">Shift</span>
            </label>
            <select
              id="shift"
              {...register("shift", { required: "Shift is required" })}
              className={`select select-bordered w-full ${errors.shift ? "select-error" : ""}`}
            >
              <option value="">Select a shift</option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
            </select>
            {errors.shift && <span className="text-error text-sm mt-1">{errors.shift.message}</span>}
          </div>

          <div className="form-control">
            <label className="label" htmlFor="joining">
              <span className="label-text">Joining</span>
            </label>
            <select
              id="joining"
              {...register("joining", { required: "Joining preference is required" })}
              className={`select select-bordered w-full ${errors.joining ? "select-error" : ""}`}
            >
              <option value="">Select joining preference</option>
              <option value="urgent">Urgent</option>
              <option value="later">Later</option>
            </select>
            {errors.joining && <span className="text-error text-sm mt-1">{errors.joining.message}</span>}
          </div>
        </div>

        <div className="form-control">
          <label className="label" htmlFor="mobile_number">
            <span className="label-text">Mobile Number</span>
          </label>
          <input
            type="tel"
            id="mobile_number"
            {...register("mobile_number", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Please enter a valid 10-digit mobile number",
              },
            })}
            placeholder="Mobile Number"
            className={`input input-bordered ${errors.mobile_number ? "input-error" : ""}`}
          />
          {errors.mobile_number && <span className="text-error text-sm mt-1">{errors.mobile_number.message}</span>}
        </div>

        <div className="form-control">
          <label className="label" htmlFor="password">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            placeholder="Password"
            className={`input input-bordered ${errors.password ? "input-error" : ""}`}
          />
          {errors.password && <span className="text-error text-sm mt-1">{errors.password.message}</span>}
        </div>
        {/* State and City Selection */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label" htmlFor="state_id">
              State
            </label>
            <select
              id="state_id"
              {...register("state_id", { required: "State is required" })}
              className={`select select-bordered w-full ${errors.state_id ? "select-error" : ""}`}
            >
              <option value="">Select a state</option>
              {states.states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state_id && <span className="text-error text-sm mt-1">{errors.state_id.message}</span>}
          </div>

          <div className="form-control">
            <label className="label" htmlFor="city_id">
              City
            </label>
            <select
              id="city_id"
              {...register("city_id", { required: "City is required" })}
              className={`select select-bordered w-full ${errors.city_id ? "select-error" : ""}`}
              disabled={!selectedStateId || isLoadingCities}
            >
              <option value="">Select a city</option>
              {(cities?.cites || []).map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            {errors.city_id && <span className="text-error text-sm mt-1">{errors.city_id.message}</span>}
          </div>
        </div> */}

        {/* Categories and Subcategories */}
        <div>
          <h3 className="text-[20px] font-semibold my-6">Select Category</h3>
          <div className="flex flex-wrap gap-4">
            {categories.categories.map((category) => (
              <div key={category.id} className="form-control">
                <label className="cursor-pointer label bg-gray-200 px-4 py-3 rounded-md flex items-center gap-3">
                  <span className="label-text">{category.name}</span>
                  <input
                    type="checkbox"
                    value={category.id}
                    onChange={() => handleCategoryChange(category.id)}
                    checked={selectedCategoryIds.includes(category.id)}
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>
            ))}
          </div>
          {selectedCategoryIds.length > 0 && <h3 className="text-lg font-semibold my-6">Select Sub Category</h3>}
          <div className="space-y-4 max-w-[400px]">
            {selectedCategoryIds.map((categoryId) => {
              const categoryName = categories.categories.find((c) => c.id === categoryId)?.name;
              const relatedSubCategories = subCategories.filter((sub) => sub.parent_id === categoryId);

              return (
                <div key={categoryId} className="mb-4">
                  <h4 className="font-medium text-sm mb-2 capitalize">{categoryName}</h4>
                  <div className="space-y-4">
                    {relatedSubCategories.map((subcategory) => (
                      <div key={subcategory.id} className="form-control border p-2 rounded-md">
                        <label className="cursor-pointer flex items-center gap-2">
                          <input
                            type="checkbox"
                            value={subcategory.id}
                            className="checkbox checkbox-primary w-[16px] h-[16px] rounded-[5px]"
                          />
                          <span className="text-sm">{subcategory.name}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button type="submit" className="btn btn-primary mt-4 min-w-[200px]">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StepForm;
