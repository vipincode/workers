import { Flag, Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[-20px]">
      <div className="flex gap-2">
        <div className="w-[100px] bg-white rounded-md border border-gray-300 items-center px-2">
          <div className="flex items-center mt-2">
            <div className="flex-1">
              <Flag className="text-gray-400" />
            </div>
            <div className="w-[40px] text-[16px] text-gray-400 font-semibold leading-5">Delhi NCR</div>
          </div>
        </div>
        <label className="flex-1 input input-bordered input-lg flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search for services" />
          <Search className="text-gray-400" />
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
