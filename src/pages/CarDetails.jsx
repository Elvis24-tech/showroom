import React from "react";
import { useParams, Link } from "react-router-dom";
const cars = [
  { id: 1, name: "Tesla Model S", price: "$85,000", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tesla_Model_S_%28Facelift_ab_04-2016%29_%28cropped%29.jpg", description: "An all-electric luxury sedan with autopilot and insane acceleration." },
  { id: 2, name: "BMW i8", price: "$140,000", img: "https://machineswithsouls.com/wp-content/uploads/2024/12/bmw-i8-scaled.jpg", description: "A plug-in hybrid sports car with futuristic design and gullwing doors." },
  { id: 3, name: "Audi R8", price: "$180,000", img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", description: "A high-performance supercar with a roaring V10 engine." },
  { id: 4, name: "Lamborghini Aventador", price: "$400,000", img: "https://www.exoticcarhacks.com/wp-content/uploads/2024/02/uFcbfiuL-scaled.jpeg", description: "An iconic Lamborghini with extreme power and bold design." },
  { id: 5, name: "Porsche 911 Turbo", price: "$170,000", img: "https://i.ytimg.com/vi/G6Cgj4PWA-o/hq720.jpg", description: "A timeless sports car with twin-turbocharged performance." },
  { id: 6, name: "Mercedes AMG GT", price: "$150,000", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg", description: "A grand tourer with AMG’s signature performance and luxury." },
];

function CarDetails() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Car not found</h2>
        <Link to="/cars" className="text-blue-600 underline mt-4 block">
          Back to Cars
        </Link>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <img
        src={car.img}
        alt={car.name}
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-6">{car.name}</h1>
      <p className="text-xl text-gray-700 mt-2">{car.price}</p>
      <p className="mt-4 text-gray-600">{car.description}</p>
      <Link
        to="/cars"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Back to Cars
      </Link>
    </div>
  );
}

export default CarDetails;
