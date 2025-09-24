import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20">
      <h2 className="text-5xl font-extrabold mb-6">Find Your Dream Car</h2>
      <p className="text-lg max-w-2xl mx-auto">
        Explore the best selection of luxury and sports cars — performance,
        style, and elegance all in one place.
      </p>
      <Link to="/cars">
        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Explore Cars
        </button>
      </Link>
    </header>
  );
}

export default Home;
