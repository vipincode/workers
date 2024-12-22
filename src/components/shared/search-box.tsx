import { useState } from "react";
import { Search } from "lucide-react"; // Import icons (example from React Icons)

interface SearchBoxProps {
  setSearchQuery: (value: string) => void; // Function to pass the value back to the parent
}

const SearchBox = ({ setSearchQuery }: SearchBoxProps) => {
  const [inputValue, setInputValue] = useState("");

  // Handle input change and pass the value to parent
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setSearchQuery(event.target.value); // Update parent state
  };

  return (
    <div className="max-w-[800px] mx-auto mt-[-20px] relative z-10">
      <div className="flex gap-2">
        <label className="flex-1 rounded-lg border border-secondary input-md md:input-lg flex items-center gap-2">
          {/* <div className="bg-white items-center px-2">
            <div className="flex items-center">
              <div className="flex-1">
                <Landmark size={30} className="text-secondary" />
              </div>
              <div className="w-[40px] text-[14px] text-gray-400 font-semibold leading-4">Delhi NCR</div>
            </div>
          </div> */}
          <input
            type="text"
            className="grow outline-none w-full text-sm md-text-base"
            placeholder="Search for services... "
            value={inputValue}
            onChange={handleInputChange}
          />
          <Search size={32} className="text-secondary" />
        </label>
      </div>
    </div>
  );
};

export default SearchBox;
