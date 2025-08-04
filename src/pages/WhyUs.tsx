import React from "react";
import carImage from "../assets/red-mazda-car-8hq 2.png";
import NavBar from "../components/Navbar";
import Footer from "../components/footer";
import bgGroud from "../assets/Group.png";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col  ">
      <NavBar />
      <h1 className="absolute top-8 left-16 text-2xl font-bold text-gray-800 cursor-pointer">
        car<span className="text-red-600">Rentify</span>
        <div className="h-0.5 w-8 bg-red-600 mt-1"></div>
      </h1>

      <section className="flex items-center justify-between px-16 py-20 mt-24 flex-1 mb-24">
        <div className="relative w-1/2 flex justify-center items-center">
          <div className="absolute w-[80%] h-[80%] bg-red-600 rotate-[25deg] -z-10 rounded-lg"></div>
          <div className="absolute w-[85%] h-[85%] border-8 border-red-500 rounded-full -z-20"></div>
          <div className="absolute w-[90%] h-[90%] border-8 border-blue-500 rounded-full -z-30"></div>

          <div className="relative w-full flex justify-center items-center">
            <div className="absolute mr-20  left-[-12%] z-0">
              <img
                src={bgGroud}
                alt="Fundo decorativo"
                className="w-[90%] max-w-3xl"
              />
            </div>{" "}
            <img
              src={carImage}
              alt="Mazda6"
              className="relative w-[80%] max-w-xl drop-shadow-2xl z-10 left-[-12%]"
            />
          </div>
        </div>

        <div className="w-1/2 pl-16">
          <h3 className="text-red-600 font-medium tracking-wide mb-2">
            WHY CHOOSE US
          </h3>
          <h2 className="text-3xl font-bold mb-4">Best Car Rental Services</h2>
          <p className="text-gray-600 mb-8">
            We provide the best classic services as below
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg">24/7 Customer Support</h4>
              <p className="text-gray-600 text-sm">
                We keep our valued customers happy and provide 24/7 customer
                support.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">Best Price Guarantee</h4>
              <p className="text-gray-600 text-sm">
                We are committed to the best prices and ensure you for it.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg">
                All Locations in Tanzania
              </h4>
              <p className="text-gray-600 text-sm">
                We provide our services at each and every place all over Dar es
                Salaam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
