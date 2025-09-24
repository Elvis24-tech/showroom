import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-center py-6">
      <p className="text-sm">
        © {new Date().getFullYear()} Car Showroom — All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
