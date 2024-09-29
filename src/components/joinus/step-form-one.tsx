const StepFormOne = () => {
  return (
    <div className="flex justify-center items-center">
      <form className="space-y-6 w-[80%]">
        <div className="flex justify-center flex-col">
          <h3 className="text-center font-medium">Register with us</h3>
          <p className="text-center text-sm">Register as Labour | Mistry | Labour Thekedar</p>
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium leading-6" htmlFor="name">
            Your name
          </label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full" />
        </div>
        <div className="flex flex-col">
          <label className="text-xs font-medium leading-6" htmlFor="name">
            Your state
          </label>
          <select defaultValue="" className="select select-bordered w-full">
            <option value="" disabled>
              Select your state
            </option>
            <option value="Han Solo">Han Solo</option>
            <option value="Greedo">Greedo</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default StepFormOne;
