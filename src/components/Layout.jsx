import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FloatingWhatsApp from "./FloatingWhatsApp";
import Footer from "./Footer";
import MobileQuickActions from "./MobileQuickActions";
import Navbar from "./Navbar";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function Layout() {
  return (
    <div className="page-shell min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-28 pt-6 sm:px-6 md:pb-12 lg:px-8">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileQuickActions />
    </div>
  );
}

export default Layout;
