import { Link } from "react-router-dom";
import CuttingImage from "../../assets/images/cutting.jpg";

const HCard = () => {
  return (
    <Link
      to="#"
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row overflow-hidden"
    >
      <img className="object-cover w-full h-[200px] md:w-48 " src={CuttingImage} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-[24px] leading-[30px] font-semibold tracking-tight">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
        </p>
      </div>
    </Link>
  );
};

export default HCard;
