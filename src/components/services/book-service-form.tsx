import { Link } from "react-router-dom";

const BookServicesForm = () => {
  return (
    <div>
      <form>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Company name
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full font-medium text-sm" />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Email Address
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full font-medium text-sm" />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Owner Name
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full font-medium text-sm" />
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Which shifts workers do you need
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select shift
                </option>
                <option>Day Shift</option>
                <option>Night Shift</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                City{" "}
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select your city
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                State{" "}
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select your state
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Address{" "}
              </label>
              <textarea
                className="textarea textarea-bordered w-full font-medium text-sm"
                placeholder="Address"
              ></textarea>
            </div>
          </div>

          <div className="space-y-8 mt-6">
            <div>
              <h3 className="text-[16px] font-medium">How many workers you want</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Meson
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Helper
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-medium mt-4">What faculties do you provide to workers</h3>
              <div className="flex gap-6 mt-4">
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input type="checkbox" defaultChecked className="checkbox" /> Food
                </label>
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input type="checkbox" className="checkbox" /> Stay
                </label>
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input type="checkbox" className="checkbox" /> Over time
                </label>
                <label htmlFor="" className="font-medium text-sm flex items-center gap-2">
                  <input type="checkbox" className="checkbox" /> Medical insurance
                </label>
              </div>
            </div>
            <div>
              <h3 className="text-[16px] font-medium mt-4">How long do u need workers </h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Day{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Month{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-medium text-sm">
                    Year{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full font-medium text-sm"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                What position are working in the company
              </label>
              <select className="select select-bordered w-full">
                <option disabled selected>
                  Select your position
                </option>
                <option>Managing director</option>
                <option>Project Manager</option>
                <option>Senior engineer</option>
                <option>Junior engineer</option>
                <option>Supervisor</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="" className="font-medium text-sm">
                Phone number
              </label>
              <input type="text" placeholder="Type here" className="input input-bordered w-full font-medium text-sm" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 my-4">
            <input type="checkbox" className="checkbox" />
            <label htmlFor="" className="font-medium text-sm">
              Do you accept our term and condition{" "}
              <Link to="#" title="Terms & Condition" className="text-blue-700">
                Terms
              </Link>
            </label>
          </div>
          <button className="btn btn-primary">Get OTP</button>
        </div>
      </form>
    </div>
  );
};

export default BookServicesForm;
