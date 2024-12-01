import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Service } from "../../types";
import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";
import ServiceRating from "../shared/service-rating";

const ListingCard = ({ data }: { data: Service }) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <Link to="/services-detail">
          <img
            className="max-h-[200px] w-[150px] h-full object-cover"
            src={`${VITE_IMAGE_PATH_URL}/service/${data.service_image}`}
            alt="Movie"
          />
        </Link>
      </figure>
      <div className="card-body space-y-6">
        <div className="flex flex-wrap justify-between">
          <div>
            <Link to="/services-detail">
              <h2 className="card-title">{data.title}</h2>
            </Link>
            <p>{data.short_description}</p>
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
            <ServiceRating reviews={data.reviews} rating={data.rating} />
          </div>
          <Link to={`/services-detail/${data.slug}`}>
            <button className="btn btn-sm">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
