import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import HomePage from "./pages/home-page";
import ErrorPage from "./pages/error-page";
import BlogPage from "./pages/blog-page";
import ContactUsPage from "./pages/contact-page";
import AboutPage from "./pages/about-page";
import FaqsPage from "./pages/faqs-page";
import ListingPage from "./pages/services-listing-page";
import InstantServices from "./pages/instant-services";
import PermanentServices from "./pages/permanent-services";
import ServicesDetailsPage from "./pages/service-detail-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/faqs",
        element: <FaqsPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/services-listing",
        element: <ListingPage />,
      },
      {
        path: "/instant-services",
        element: <InstantServices />,
      },
      {
        path: "/permanent-services",
        element: <PermanentServices />,
      },
      {
        path: "/services-details",
        element: <ServicesDetailsPage />,
      },
    ],
  },
]);

export default router;
