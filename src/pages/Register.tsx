/* trunk-ignore-all(prettier) */
import React from "react";
import porscheImage from "../assets/porsche.png";

import NavBar from "../components/Navbar";

import Footer from "../components/footer";
import BookingForm from "../components/BookingForm";

const Register: React.FC = () => (
  <div className="bg-white ">
    <h2
      style={{ position: "absolute", zIndex: 10, top: "2rem", left: "4rem" }}
      className="text-2xl font-bold text-gray-800 cursor-pointer"
    >
      car<span className="text-red-600">Rentify</span>
      <div className="h-0.5 w-8 bg-red-600 mt-1"></div>
    </h2>

    <NavBar />

    <div className="relative h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={porscheImage}
          alt="Carro esportivo azul"
          className="w-full mt-12 h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        <h1 className="text-white text-center text-4xl md:text-6xl font-bold mb-10">
          Find Your Next Long <br /> Drive Now!
        </h1>
        <div className="mt-16">
  <BookingForm />
</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Register;
