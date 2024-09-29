import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Dehatwala™
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <ul className="flex items-center gap-6">
            <li>
              <Link className="font-medium text-sm" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm" to="/contact">
                Contact
              </Link>
            </li>
            <li className="pr-6">
              <Link className="font-medium text-sm" to="/blog">
                Blog
              </Link>
            </li>
            <li className="pr-6">
              <Link className="font-medium text-sm" to="/joinus">
                Join us
              </Link>
            </li>
          </ul>
        </div>
        <div className="avatar placeholder">
          <div className="bg-black text-white w-8 rounded-full">
            <span className="text-xs">V</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
