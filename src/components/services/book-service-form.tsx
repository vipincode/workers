import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { getCities, getStates, postEmployeeData } from "../../react-query/apis";
import { employeeFormData, employeeSchema } from "../../schema/permanent-service/schema";
import { useEffect, useState } from "react";
import { CitiesResponse, StateProps } from "../../types";
import { X } from "lucide-react";

const BookServicesForm = () => {
  const [selectedStateId, setSelectedStateId] = useState<number | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

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

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    watch,
    control,
    formState: { errors },
  } = useForm<employeeFormData>({
    resolver: zodResolver(employeeSchema),
    defaultValues: {
      faculties: [],
      upload_photos: [],
    },
  });

  const mutation = useMutation({
    mutationFn: postEmployeeData,
    onSuccess: (data) => {
      console.log("Data successfully saved:", data);
      toast.success("Form submitted successfully!");
    },
    onError: (error) => {
      console.error("Error saving data:", error);
      toast.error("Error submitting form. Please try again.");
    },
  });

  const stateValue = watch("state_id");
  useEffect(() => {
    setSelectedStateId(Number(stateValue));
  }, [stateValue]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const faculties = getValues("faculties");

    if (checked) {
      setValue("faculties", [...faculties, value]); // Add value if checked
    } else {
      setValue(
        "faculties",
        faculties.filter((item) => item !== value)
      ); // Remove value if unchecked
    }
  };

  const onSubmit = (data: employeeFormData) => {
    const formData = new FormData();
    selectedFiles.forEach((file) => formData.append("upload_photos", file));
    // Add other form fields to formData
    Object.entries(data).forEach(([key, value]) => {
      if (key !== "upload_photos") {
        formData.append(key, value as string);
      }
    });

    // console.log(data);
    mutation.mutate(formData as unknown as employeeFormData);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  if (isErrorStates || isErrorCities) return <p>Error loading data...</p>;

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="space-y-2">
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Company name
              </label>
              <input
                type="text"
                disabled={mutation.isPending}
                {...register("company_name")}
                placeholder="Type here"
                className="input input-bordered w-full font-medium text-sm"
              />
              {errors.company_name && (
                <p className="text-xs text-red-600 font-normal mt-2">{errors.company_name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Email Address
              </label>
              <input
                type="text"
                disabled={mutation.isPending}
                {...register("email")}
                placeholder="Type here"
                className="input input-bordered w-full font-medium text-sm"
              />
              {errors.email && <p className="text-xs text-red-600 font-normal mt-2">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Owner Name
              </label>
              <input
                {...register("owner_name")}
                type="text"
                disabled={mutation.isPending}
                placeholder="Type here"
                className="input input-bordered w-full font-medium text-sm"
              />
              {errors.owner_name && (
                <p className="text-xs text-red-600 font-normal mt-2">{errors.owner_name.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Available Worker Shifts
              </label>
              <select
                disabled={mutation.isPending}
                defaultValue=""
                {...register("shift")}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select shift
                </option>
                <option value="Day Shift">Day Shift</option>
                <option value="Night Shift">Night Shift</option>
              </select>
              {errors.shift && <p className="text-xs text-red-600 font-normal mt-2">{errors.shift.message}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isLoadingStates ? (
                <div className="space-y-3">
                  <div className="skeleton h-5 w-16" />
                  <div className="skeleton h-8 w-full" />
                </div>
              ) : (
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
                    {states?.states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  {errors.state_id && <span className="text-error text-sm mt-1">{errors.state_id.message}</span>}
                </div>
              )}

              {isLoadingCities ? (
                <div className="space-y-3">
                  <div className="skeleton h-5 w-16" />
                  <div className="skeleton h-8 w-full" />
                </div>
              ) : (
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
              )}
            </div>

            <div>
              <label htmlFor="" className="font-medium text-sm">
                Address{" "}
              </label>
              <textarea
                {...register("address")}
                disabled={mutation.isPending}
                className="textarea textarea-bordered w-full font-medium text-sm"
                placeholder="Type here"
              ></textarea>
              {errors.address && <p className="text-xs text-red-600 font-normal">{errors.address.message}</p>}
            </div>
            <div>
              <h3 className="text-[16px] font-medium">How many workers do you need?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Meson
                  </label>
                  <input
                    {...register("meson", { valueAsNumber: true })}
                    type="number"
                    disabled={mutation.isPending}
                    placeholder="ex: 23"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                  {errors.meson && <p className="text-xs text-red-600 font-normal mt-2">{errors.meson.message}</p>}
                </div>
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Helper
                  </label>
                  <input
                    {...register("helper", { valueAsNumber: true })}
                    type="number"
                    disabled={mutation.isPending}
                    placeholder="ex: 43"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                  {errors.helper && <p className="text-xs text-red-600 font-normal mt-2">{errors.helper.message}</p>}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-medium mt-4">What faculties do you provide to workers?</h3>
              <div className="flex gap-6 mt-4">
                {["food", "stay", "over_time", "medical_insurance"].map((facility) => (
                  <label key={facility} className="font-medium text-sm flex items-center gap-2">
                    <input type="checkbox" value={facility} onChange={handleCheckboxChange} className="checkbox" />
                    {facility.replace("_", " ")} {/* Display facility name */}
                  </label>
                ))}
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="space-y-6 mt-6">
            <div>
              <h3 className="text-[16px] font-medium mt-4">For how long do you need the workers? </h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Day{" "}
                  </label>
                  <input
                    {...register("day", { valueAsNumber: true })}
                    type="number"
                    disabled={mutation.isPending}
                    placeholder="ex:23"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                  {errors.day && <p className="text-xs text-red-600 font-normal mt-2">{errors.day.message}</p>}
                </div>
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Month{" "}
                  </label>
                  <input
                    {...register("month", { valueAsNumber: true })}
                    type="number"
                    disabled={mutation.isPending}
                    placeholder="ex: 3"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                  {errors.month && <p className="text-xs text-red-600 font-normal mt-2">{errors.month.message}</p>}
                </div>
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Year{" "}
                  </label>
                  <input
                    {...register("year", { valueAsNumber: true })}
                    type="number"
                    disabled={mutation.isPending}
                    placeholder="ex: 2024"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                  {errors.year && <p className="text-xs text-red-600 font-normal mt-2">{errors.year.message}</p>}
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                What is your position in the company?
              </label>
              <select
                disabled={mutation.isPending}
                defaultValue=""
                {...register("employee_position")}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select your position
                </option>
                <option value="Managing director">Managing director</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Senior engineer">Senior engineer</option>
                <option value="Junior engineer">Junior engineer</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Other">Other</option>
              </select>
              {errors.employee_position && (
                <p className="text-xs text-red-600 font-normal mt-2">{errors.employee_position.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Phone number
              </label>
              <input
                {...register("mobile_number")}
                type="text"
                disabled={mutation.isPending}
                placeholder="Type here"
                className="input input-bordered w-full font-medium text-sm"
              />
              {errors.mobile_number && (
                <p className="text-xs text-red-600 font-normal mt-2">{errors.mobile_number.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Upload Photos
              </label>
              {/* <Controller
                name="upload_photos"
                control={control}
                render={({ field }) => (
                  <input type="file" multiple onChange={(e) => field.onChange([...e.target.files])} />
                )}
              /> */}
            </div>
            <>
              <div>
                <label htmlFor="upload_photos" className="block text-sm font-medium text-gray-700">
                  Upload Photos
                </label>
                <Controller
                  name="upload_photos"
                  control={control}
                  render={({ field: { onChange, onBlur, name, ref } }) => (
                    <input
                      id="upload_photos"
                      type="file"
                      multiple
                      ref={ref}
                      onChange={(e) => {
                        const files = Array.from(e.target.files || []);
                        const updatedFiles = [...selectedFiles, ...files];

                        setSelectedFiles(updatedFiles);
                        onChange(updatedFiles); // Pass all selected files to the form state
                      }}
                      onBlur={onBlur}
                      name={name}
                      className="mt-1 block w-full text-sm text-gray-500
                   file:mr-4 file:py-2 file:px-4
                   file:rounded-md file:border-0
                   file:text-sm file:font-semibold
                   file:bg-blue-50 file:text-blue-700
                   hover:file:bg-blue-100"
                    />
                  )}
                />
                {errors.upload_photos && <p className="mt-2 text-sm text-red-600">{errors.upload_photos.message}</p>}
              </div>

              {selectedFiles.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-sm font-medium text-gray-900">Selected Files:</h4>
                  <ul className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="relative">
                        <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100">
                          {file.type.startsWith("image/") ? (
                            <img src={URL.createObjectURL(file)} alt={file.name} className="object-cover" />
                          ) : (
                            <div className="flex items-center justify-center h-full">
                              <span className="text-gray-500">{file.name}</span>
                            </div>
                          )}
                          <button
                            type="button"
                            className="absolute top-0 right-0 p-1 bg-white rounded-bl-lg"
                            onClick={() => removeFile(index)}
                          >
                            <X className="h-4 w-4 text-gray-500" />
                          </button>
                        </div>
                        <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                          {file.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Alternative Work
              </label>
              <input
                {...register("alternative_work")}
                type="text"
                disabled={mutation.isPending}
                placeholder="Alternative work: Brick work / Plaster work / etc."
                className="input input-bordered w-full font-medium text-sm"
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-2 my-4">
            <input type="checkbox" {...register("term_and_conditions")} className="checkbox" />
            <label htmlFor="" className="font-medium text-sm">
              Do you accept our terms and conditions?{" "}
              <Link to="#" title="Terms & Condition" className="text-blue-700">
                Terms
              </Link>
            </label>
          </div>
          {errors.term_and_conditions && (
            <p className="text-xs text-red-600 font-normal mb-8">{errors.term_and_conditions.message}</p>
          )}
          <button type="submit" className="btn btn-primary min-w-[120px]" disabled={mutation.isPending}>
            {mutation.isPending ? "Submitting..." : "Get OTP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookServicesForm;
