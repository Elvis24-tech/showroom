import React from "react";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    price: "$85,000",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tesla_Model_S_%28Facelift_ab_04-2016%29_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "BMW i8",
    price: "$140,000",
    img: "https://machineswithsouls.com/wp-content/uploads/2024/12/bmw-i8-scaled.jpg",
  },
  {
    id: 3,
    name: "Audi R8",
    price: "$180,000",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Lamborghini Aventador",
    price: "$400,000",
    img: "https://www.exoticcarhacks.com/wp-content/uploads/2024/02/uFcbfiuL-scaled.jpeg",
  },
  {
    id: 5,
    name: "Porsche 911 Turbo",
    price: "$170,000",
    img: "https://i.ytimg.com/vi/G6Cgj4PWA-o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAp2xuy8N9NYf8iNMrTpYmzwirAqg",
  },
  {
    id: 6,
    name: "Mercedes AMG GT",
    price: "$150,000",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-blue-700"> Car Showroom</h1>
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
              loading="lazy"
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
