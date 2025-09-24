import React from "react";
import CarCard from "../components/CarCard";

const cars = [
  { id: 1, name: "Tesla Model S", price: "$85,000", img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Tesla_Model_S_%28Facelift_ab_04-2016%29_%28cropped%29.jpg" },
  { id: 2, name: "BMW i8", price: "$140,000", img: "https://machineswithsouls.com/wp-content/uploads/2024/12/bmw-i8-scaled.jpg" },
  { id: 3, name: "Audi R8", price: "$180,000", img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Lamborghini Aventador", price: "$400,000", img: "https://www.exoticcarhacks.com/wp-content/uploads/2024/02/uFcbfiuL-scaled.jpeg" },
  { id: 5, name: "Porsche 911 Turbo", price: "$170,000", img: "https://i.ytimg.com/vi/G6Cgj4PWA-o/hq720.jpg" },
  { id: 6, name: "Mercedes AMG GT", price: "$150,000", img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Festival_automobile_international_2015_-_Mercedes_AMG_GT_-_003.jpg" },
];

function Cars() {
  return (
    <main className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </main>
  );
}

export default Cars;
