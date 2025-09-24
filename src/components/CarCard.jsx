import React from "react";
import { Link } from "react-router-dom";

function CarCard({ car }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transform transition">
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{car.name}</h3>
        <p className="text-gray-500 text-lg">{car.price}</p>

        {/* Link to Car Details */}
        <Link to={`/cars/${car.id}`}>
          <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
