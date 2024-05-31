import React from "react";
import ShowCase from "../pages/comps/showcase";
import Footer from "../pages/comps/footer";

function Layout({ children }) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
