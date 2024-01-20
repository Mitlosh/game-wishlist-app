import { Outlet, useLocation } from "react-router-dom";
import { Navbar, Footer } from "../components/common/index";
import { useEffect } from "react";

const BaseLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
