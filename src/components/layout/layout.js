import React, { Fragment } from "react";
import Navbars from "../nav/navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../nav/footer/footer";

const Layout = () => {
  const location = useLocation();

  // شرط إخفاء الناف بار والفوتر إذا كنت في صفحة معينة
  const hideNavbarAndFooter = location.pathname === '/login'; // استبدلي `/special` بالمسار المطلوب

  return (
    <Fragment>
      {/* عرض الناف بار إذا لم يكن المسار هو الخاص */}
      {!hideNavbarAndFooter && <Navbars />}

      <main>
        <Outlet />
      </main>

      {/* عرض الفوتر إذا لم يكن المسار هو الخاص */}
      {!hideNavbarAndFooter && <Footer />}
    </Fragment>
  );
};

export default Layout;
