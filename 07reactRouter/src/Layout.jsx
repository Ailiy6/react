import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/index";
import { Footer } from "./components/Footer/index";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
