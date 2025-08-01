import React from "react";
import HeroSplitScreen from "../components/Header";
import BookingForm from "../components/BookingForm";
import Footer from "../components/footer";
import Carousel from "../components/carousel";

const HomePage: React.FC = () => {
  return (
    <div  className="bg-gray-100 min-h-screen">
      <HeroSplitScreen />

      <div className="fixed top-0 z-20 bg-gray-100 shadow-md bottom-3.5">
        <BookingForm />
      </div>
      <div className="h-96"></div>
      <Carousel />
      <Footer />

      <div className="h-96"></div>
    </div>
  );
};

export default HomePage;