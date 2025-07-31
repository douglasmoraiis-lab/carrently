import React from "react";
import HeroSplitScreen from "../components/Header";
import BookingForm from "../components/BookingForm";

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSplitScreen />
      
        <BookingForm />
 

      <div className="h-96"></div>
    </div>
  );
};

export default HomePage;
