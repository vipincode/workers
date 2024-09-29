import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { postEmployeeData } from "../../react-query/apis";
import { employeeFormData, employeeSchema } from "../../schema/permanent-service/schema";

const BookServicesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<employeeFormData>({
    resolver: zodResolver(employeeSchema),
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

  const onSubmit = (data: employeeFormData) => {
    mutation.mutate(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-6">
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
                {...register("email_address")}
                placeholder="Type here"
                className="input input-bordered w-full font-medium text-sm"
              />
              {errors.email_address && (
                <p className="text-xs text-red-600 font-normal mt-2">{errors.email_address.message}</p>
              )}
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
                Which shifts workers do you need
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
            <div>
              <label htmlFor="" className="font-medium text-sm">
                City{" "}
              </label>
              <select
                disabled={mutation.isPending}
                defaultValue=""
                {...register("city")}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select your city
                </option>
                <option value="Han Solo">Han Solo</option>
                <option value="Greedo">Greedo</option>
              </select>
              {errors.city && <p className="text-xs text-red-600 font-normal mt-2">{errors.city.message}</p>}
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                State
              </label>
              <select
                disabled={mutation.isPending}
                defaultValue=""
                {...register("state")}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select your state
                </option>
                <option value="Han Solo">Han Solo</option>
                <option value="Greedo">Greedo</option>
              </select>
              {errors.state && <p className="text-xs text-red-600 font-normal mt-2">{errors.state.message}</p>}
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
          </div>

          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-[16px] font-medium">How many workers do you need?</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Meson
                  </label>
                  <input
                    {...register("meson")}
                    type="text"
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
                    {...register("helper")}
                    type="text"
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
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input {...register("food")} type="checkbox" defaultChecked className="checkbox" /> Food
                </label>
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input {...register("stay")} type="checkbox" className="checkbox" /> Stay
                </label>
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input {...register("over_time")} type="checkbox" className="checkbox" /> Over time
                </label>
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input {...register("medical_insurance")} type="checkbox" className="checkbox" /> Medical insurance
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-medium mt-4">For how long do you need the workers? </h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Day{" "}
                  </label>
                  <input
                    {...register("day")}
                    type="text"
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
                    {...register("month")}
                    type="text"
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
                    {...register("year")}
                    type="text"
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
                {...register("phone_number")}
                type="text"
                disabled={mutation.isPending}
                placeholder="Type here"
                className="input input-bordered w-full font-medium text-sm"
              />
              {errors.phone_number && (
                <p className="text-xs text-red-600 font-normal mt-2">{errors.phone_number.message}</p>
              )}
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 my-4">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="font-medium text-sm">
              Do you accept our terms and conditions?{" "}
              <Link to="#" title="Terms & Condition" className="text-blue-700">
                Terms
              </Link>
            </label>
          </div>
          <button className="btn btn-primary min-w-[120px]">{mutation.isPending ? "Submitting..." : "Get OTP"}</button>
        </div>
      </form>
    </div>
  );
};

export default BookServicesForm;
