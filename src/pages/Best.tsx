import React from "react";
import NavBar from "../components/Navbar";
import CarCard from "../components/card";

import blackCar from "../assets/black-car.png";
import redCar from "../assets/red-car.png";
import whiteCar from "../assets/white-car.png";
import Footer from "../components/footer";

const BestService: React.FC = () => {
const cars = [
  {
    image: blackCar,
    name: "Toyota Corolla T-20",
    features: [
      "Air Conditioned",
      "Bluetooth Sound System",
      "Sunroof Available",
    ],
  },
  {
    image: redCar,
    name: "Toyota Camry",
    features: [
      "Air Conditioned",
      "Bluetooth Sound System",
      "Sunroof Available",
    ],
  },
  {
    image: whiteCar,
    name: "White BMW-M5",
    features: [
      "Air Conditioned",
      "Bluetooth Sound System",
      "Sunroof Available",
    ],
  },
];
  return (
    <div className="bg-gray-100">
      <NavBar />
      <div className="absolute top-8 left-16 text-2xl font-bold text-gray-800 cursor-pointer  ">
        car<span className="text-red-600">Rentify</span>
        <div className="h-0.5 w-8 bg-red-600 mt-1"></div>
      </div>
      <div className="flex flex-col items-center justify-center h-screen   bg-gray-100">
        <h1 className=" mt-60 justify-center text-red-600  hover:text-black ">
          BEST SERVICES
        </h1>
        <h2 className="text-gray-800 text-2xl">
          Most Popular Car Rental Deals
        </h2>
        <p>Explore below our best car services experience like never before</p>
        Generated code
        <div className="flex justify-center gap-8 bg-gray-100 p-10">
          {cars.map((car, index) => (
            <CarCard key={index} {...car} />
          ))}
        </div>
      </div>
      <div className="pt-48">
        <Footer />
      </div>
    </div>
  );
};
export default BestService;