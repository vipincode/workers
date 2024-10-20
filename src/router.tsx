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
import CartPage from "./pages/cart-page";
import ServiceLetterPage from "./pages/service-letter";
import JoinUsPage from "./pages/joinus-page";
import JobListingsPage from "./pages/job-listings-page";
import JobCategoriesPage from "./pages/job-categories-page";
import DetailedJobListingPage from "./pages/detailed-job-listing-page";
import JobDetailedViewPage from "./pages/detailed-job-view-page";

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
        path: "/blog/:id",
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
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/service-letter",
        element: <ServiceLetterPage />,
      },
      {
        path: "/joinus",
        element: <JoinUsPage />,
      },
      {
        path: "/jobs",
        element: <JobListingsPage />,
      },
      {
        path: "/more-jobs",
        element: <JobCategoriesPage />,
      },
      {
        path: "/more-jobs/:slug",
        element: <DetailedJobListingPage />,
      },
      {
        path: "/job-detail/:slug",
        element: <JobDetailedViewPage />,
      },
    ],
  },
]);

export default router;
