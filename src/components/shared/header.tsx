import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-10">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Dehatwala™
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <ul className="flex items-center gap-6">
            <li>
              <Link className="font-medium text-sm" to="#">
                Link1
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm" to="#">
                Link2
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm" to="#">
                Link3
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm" to="#">
                Link4
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm" to="#">
                Link5
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm" to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
