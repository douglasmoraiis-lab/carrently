import React from 'react';
import Button from './Button';
import Navigation from './Navbar'; 
import carImage from '../assets/carImagem.jpg';

const Logo: React.FC = () => (
  <div className="absolute top-8 left-16 text-2xl font-bold text-gray-800 cursor-pointer">
    car<span className="text-red-600">Rentify</span>
    <div className="h-0.5 w-8 bg-red-600 mt-1"></div>
  </div>
);

const HeroSplitScreen: React.FC = () => {
  return (
    <div className="flex h-[90vh] w-full font-sans bg-white">
      <div className="relative flex w-1/2 flex-col justify-center bg-gray-100 p-16">
        <Logo />
        <div className="max-w-md">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Rent A Car &<br />
            Travel <span className="text-red-600">Endless</span>
          </h1>
          <p className="mt-6 text-base text-gray-500">
            No reservation costs. Great rates.<br />
            Find What You Need actually.
          </p>
          <div className="mt-8 flex gap-4">
            <Button label="Contact Us" variant="secondary" />
            <Button label="Book Now" variant="primary" />
          </div>
        </div>
      </div>

      <div className="relative w-1/2 bg-[#E0E0E0] overflow-hidden">
        <Navigation />
        
        <div 
          className="absolute bottom-[100%] left-[-30%] h-[120px] w-[120%] bg-gradient-to-r from-blue-400/40 via-blue-500/20 to-transparent z-10 opacity-70"
          style={{ filter: 'blur(25px)' }}
        ></div>
        
        <img
          src={carImage}
          alt="Blue car in motion"
          className="absolute bottom-0 right-[-10%] w-[110%] max-w-none z-20" 
        />
      </div>
    </div>
  );
};

export default HeroSplitScreen;
