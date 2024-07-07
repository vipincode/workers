import { Link } from "react-router-dom";

const ListingBanner = () => {
  return (
    <div className="w-full h-[240px] bg-gray-100 p-4 flex justify-center items-center bg-hero-background bg-cover bg-center flex-col">
      <div className="breadcrumbs max-w-xs text-sm text-white">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>services listing</li>
        </ul>
      </div>
    </div>
  );
};

export default ListingBanner;
