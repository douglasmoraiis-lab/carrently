import React from "react";
import carImage from "../assets/red-car.png"; // coloque sua imagem aqui

const WhyChooseUs: React.FC = () => {
  return (
    <section className="flex items-center justify-between bg-white px-16 py-20">
      {/* Lado Esquerdo - Imagem com formas */}
      <div className="relative w-1/2 flex justify-center items-center">
        {/* Background shapes */}
        <div className="absolute w-[80%] h-[80%] bg-red-600 rotate-[25deg] -z-10 rounded-lg"></div>
        <div className="absolute w-[85%] h-[85%] border-8 border-red-500 rounded-full -z-20"></div>
        <div className="absolute w-[90%] h-[90%] border-8 border-blue-500 rounded-full -z-30"></div>

        {/* Car image */}
        <img
          src={carImage}
          alt="Mazda6"
          className="relative w-[80%] max-w-xl drop-shadow-2xl"
        />
      </div>

      {/* Lado Direito - Texto */}
      <div className="w-1/2 pl-16">
        <h3 className="text-red-600 font-medium tracking-wide mb-2">
          WHY CHOOSE US
        </h3>
        <h2 className="text-3xl font-bold mb-4">
          Best Car Rental Services
        </h2>
        <p className="text-gray-600 mb-8">
          We provide Best classic services as below
        </p>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg">24/7 Customer Support</h4>
            <p className="text-gray-600 text-sm">
              We keep our valued customers happy and provide 24/7 customer support
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">Best Price Guarantee</h4>
            <p className="text-gray-600 text-sm">
              We are committed for the best prices and ensure you for it
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">All locations in Tanzania</h4>
            <p className="text-gray-600 text-sm">
              We provide our services at each and every place all over Dar es salaam
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
