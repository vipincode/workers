import { HelpCircle, PhoneCall } from "lucide-react";
import { FaConnectdevelop, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io5";

const SmallHeader = () => {
  return (
    <div className="px-5 bg-primary text-white py-2 min-h-[30px]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
        <div className="text-xs tracking-wide flex  space-x-2">
          <PhoneCall size={18} /> <span className="cursor-pointer">+91-8600999922</span>
          <div className="flex items-center gap-6 pl-8">
            <Link to="#">
              <FaFacebookF size={14} /> <span className="cursor-pointer" />
            </Link>
            <Link to="#">
              <FaInstagram size={14} /> <span className="cursor-pointer" />
            </Link>
            <Link to="#">
              <IoLogoYoutube size={14} /> <span className="cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 mt-4 lg:mt-0">
          <Link to="/become-a-part-of-dehatwala" className="text-xs tracking-wide flex gap-2">
            <FaConnectdevelop size={18} />
            <span>Become a Part of Dehatwala</span>
          </Link>
          <Link to="#" className="text-xs tracking-wide flex gap-2">
            <HelpCircle size={18} />
            <span>Help</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SmallHeader;
