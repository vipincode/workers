import { Link } from "react-router-dom";
import RoadImage from "../../assets/images/road.jpg";
import ServicesModal from "./modals";
import { useRef } from "react";
import ServicesListingCard from "../services/servies-listing-card";

const VCard = () => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleActiveModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg cursor-pointer" onClick={handleActiveModal}>
      <Link to="#">
        <img className="rounded-t-lg h-[100px] w-full object-cover" src={RoadImage} alt="" />
      </Link>
      <div className="p-5">
        <Link to="#">
          <h5 className="mb-2 text-[18px] leading-7 font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 ">
          Here are the biggest enterprise technology acquisitions of 2021.
        </p>
        <Link
          to="#"
          className="inline-flex items-center py-2 text-sm font-medium text-center  text-secondary rounded-md"
        >
          Book now
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>

      {/* Modals */}
      <ServicesModal ref={modalRef} title="Sub Category Popup!">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <ServicesListingCard key={item} />
        ))}
      </ServicesModal>
    </div>
  );
};

export default VCard;
