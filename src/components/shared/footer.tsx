import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent/90">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-normal">
              <li className="mb-4">
                <Link to="/about" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/faqs" className="hover:underline">
                  FAQs
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link to="#" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/cancellation-policy" className="hover:underline">
                  Cancellation policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/terms-and-conditions" className="hover:underline">
                  Terms And Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">Careers</h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/jobs" className="hover:underline">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 bg-secondary md:flex md:items-center md:justify-between">
        <div className="mx-auto w-full max-w-screen-xl">
          <span className="text-sm text-accent dark:text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Dehatwala™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <Link to="#" className="text-accent hover:text-accent/50 dark:hover:text-white">
              <FaFacebookF size={18} /> <span className="cursor-pointer" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="text-accent hover:text-accent/50 dark:hover:text-white">
              <FaInstagram size={18} /> <span className="cursor-pointer" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="text-accent hover:text-accent/50 dark:hover:text-white">
              <IoLogoYoutube size={18} /> <span className="cursor-pointer" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
