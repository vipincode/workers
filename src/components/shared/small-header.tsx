import { HelpCircle, PhoneCall, User } from "lucide-react";
import { Link } from "react-router-dom";

const SmallHeader = () => {
  return (
    <div className="px-5 bg-primary text-white py-2 min-h-[30px]">
      <div className="flex justify-between items-center ">
        <div className="text-xs tracking-wide flex space-x-2">
          <PhoneCall size={18} /> <span className="cursor-pointer">+91-8600999922</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="#" className="text-xs tracking-wide flex gap-2">
            <User size={18} />
            <span>Register as admin</span>
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
