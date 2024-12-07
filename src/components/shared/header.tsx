import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";
import { twMerge } from "tailwind-merge";
import { LuUser2 } from "react-icons/lu";
import LogoutButton from "../auth/logout";

const Header = () => {
  const { user } = useAuthStore();

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
            <li>
              <Link className="font-medium text-sm" to="/blog">
                Blog
              </Link>
            </li>
            {!user && (
              <li className="pr-6">
                <Link className="font-medium text-sm" to="/sign-in">
                  Sign in
                </Link>
              </li>
            )}
          </ul>
        </div>
        {user && (
          <div className={twMerge("dropdown dropdown-end", user ? "pl-6" : "pl-0")}>
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar bg-black text-white hover:bg-black/90"
            >
              {user ? <span className="text-xs uppercase">{user.name.slice(0, 1)}</span> : <LuUser2 size={18} />}
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  {user ? user.name : "Welcome"}
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to={`/booked-services`}>Booked service</Link>
              </li>
              <li>
                <Link to={`/service-reviews`}>Service review</Link>
              </li>
              <li className="mt-2">
                <LogoutButton />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
