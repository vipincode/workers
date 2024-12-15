import React from "react";
import { Link } from "react-router-dom";
import { VITE_IMAGE_PATH_URL } from "../../react-query/constants";
import { ServicesCardProps } from "../../types";
import ServiceRating from "./service-rating";

const ServicesCard: React.FC<ServicesCardProps> = ({ data }) => {
  return (
    <>
      {data && (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer">
          <Link to={`/services-detail/${data.slug}`}>
            <img
              className="rounded-t-lg h-[100px] w-full object-cover"
              src={`${VITE_IMAGE_PATH_URL}/service/${data?.service_image}`}
              alt={data.slug}
            />
          </Link>
          <div className="p-5">
            <Link to={`/services-detail/${data.slug}`}>
              <h5 className="mb-0 text-[18px] leading-7 font-bold tracking-tight text-gray-900">{data.title}</h5>
            </Link>
            <div className="mb-2 flex justify-between items-center">
              <span className="text-xs bg-gray-100 py-[2px] leading-4 px-2 rounded-md text-gray-400">
                {data.category_name}
              </span>
            </div>
            <p className="mb-3 font-normal text-gray-700 ">{data.short_description}</p>
            <div className="my-6">
              <ServiceRating rating={data.rating} reviews={data.reviews} />
            </div>
            <Link
              to={`/services-detail/${data.slug}`}
              className="inline-flex items-center py-2 text-sm font-medium text-center  text-secondary rounded-md"
            >
              View detail
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ServicesCard;
