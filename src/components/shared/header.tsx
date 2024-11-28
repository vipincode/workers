import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/auth-store";
import { twMerge } from "tailwind-merge";
import { LuUser2 } from "react-icons/lu";

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
        <div className={twMerge("avatar placeholder", user ? "pl-6" : "pl-0")}>
          <div className="bg-black text-white w-8 rounded-full">
            {user ? <span className="text-xs uppercase">{user.name.slice(0, 1)}</span> : <LuUser2 size={18} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
