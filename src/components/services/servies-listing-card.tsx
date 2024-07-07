import { Link } from "react-router-dom";

const ServicesListingCard = () => {
  return (
    <Link to="/services-listing">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[80px] w-[100px]"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body px-4 py-0 justify-center">
          <h2 className="card-title text-base font-normal">New movie is released!</h2>
        </div>
      </div>
    </Link>
  );
};

export default ServicesListingCard;
