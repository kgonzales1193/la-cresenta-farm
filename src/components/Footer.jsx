import React from "react";

// import logo
import Logowhite from "../assets/images/logo-1.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bg-primary py-12">
        <div className="container mx-auto flex flex-col items-center justify-center gap-y-6 text-white lg:flex-row lg:justify-between">
          {/* footer logo */}
          <a href="/">
            <img src={Logowhite} alt="logo image" />
          </a>
          Copyrights &copy; 2023. All rights reseved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
