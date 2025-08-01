import React from "react";

interface CarCardProps {
  image: string;
  name: string;
  features: string[];
}

const CarCard: React.FC<CarCardProps> = ({ image, name, features }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-72 flex flex-col items-center hover:shadow-lg transition">
      <img src={image} alt={name} className="w-52 mb-4" />
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-blue-500 text-xl">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-md transition">
        Rent Now
      </button>
    </div>
  );
};

export default CarCard;
