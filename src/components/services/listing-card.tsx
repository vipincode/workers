import { Calendar, MapPin } from "lucide-react";
import Rating from "../shared/ratings";
import { Link } from "react-router-dom";

const ListingCard = () => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Link to="/services-details">
          <img
            className="max-h-[200px]"
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </Link>
      </figure>
      <div className="card-body space-y-6">
        <div className="flex flex-wrap justify-between">
          <div>
            <Link to="/services-details">
              <h2 className="card-title">Service Title</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="flex items-center flex-col gap-1">
            <div className="badge">
              <Calendar size={12} /> <span className="pl-2">12-09-2024</span>
            </div>
            <div className="badge">
              <p className="text-xs flex items-center gap-1">
                <MapPin size={12} /> <span>45, Street Delhi</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-actions justify-between items-center">
          <div className="space-y-1">
            <Rating />
          </div>
          <Link to="/services-details">
            <button className="btn btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
