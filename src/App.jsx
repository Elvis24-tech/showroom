import React from "react";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$85,000",
    img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "BMW i8",
    price: "$140,000",
    img: "https://images.unsplash.com/photo-1617957748531-3aef12640add?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Audi R8",
    price: "$180,000",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-700">🚘 Car Showroom</h1>
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">Cars</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </nav>
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-20">
        <h2 className="text-5xl font-extrabold mb-6">Find Your Dream Car</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Explore the best selection of luxury and sports cars — performance,
          style, and elegance all in one place.
        </p>
        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
          Explore Cars
        </button>
      </header>
      <main className="flex-1 p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transform transition"
          >
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{car.name}</h3>
              <p className="text-gray-500 text-lg">{car.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition">
                Book Test Drive
              </button>
            </div>
          </div>
        ))}
      </main>
      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Car Showroom — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
