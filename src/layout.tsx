import { Outlet } from "react-router-dom";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
