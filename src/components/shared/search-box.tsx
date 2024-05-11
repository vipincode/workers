import { Landmark, Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="max-w-[800px] mx-auto mt-[-20px]">
      <div className="flex gap-2">
        <label className="flex-1 input input-bordered input-lg flex items-center gap-2">
          <div className="bg-white items-center px-2">
            <div className="flex items-center">
              <div className="flex-1">
                <Landmark size={30} className="text-gray-400" />
              </div>
              <div className="w-[40px] text-[14px] text-gray-400 font-semibold leading-4">Delhi NCR</div>
            </div>
          </div>
          <input type="text" className="grow" placeholder="Search for services" />
          <Search className="text-gray-400" />
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
