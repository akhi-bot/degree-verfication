import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>Degree verification</span>Built
        By{" "}
        <a href="https://juppiterailabs.com/" target="__blank">
          Juppiter AI Labs
        </a>
      </p>
    </footer>
  );
};

export default Footer;
