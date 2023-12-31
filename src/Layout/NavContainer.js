import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/navbar/Navbar";
import s from "./NavContainer.module.scss";

// eslint-disable-next-line react/prop-types, arrow-body-style
const NavContainer = ({ setMobileMenuOpen }) => {
  return (
    <div className={s["navbar-container"]}>
      <Navbar setMobileMenuOpen={setMobileMenuOpen} />
      <div className={s["footer-wrapper"]}>
        <Footer />
      </div>
    </div>
  );
};

export default NavContainer;
