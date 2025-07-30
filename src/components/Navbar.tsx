// src/components/Navigation.tsx
import React from 'react';

const Navigation: React.FC = () => (
  <nav className="absolute top-0 right-0 py-8 px-16 z-30">
    <ul className="flex items-center space-x-8 text-gray-600 font-medium text-sm">
      <li>
        <a href="#home" className="border-b-2 border-red-600 pb-1 text-gray-900 font-semibold">
          Home
        </a>
      </li>
      <li>
        <a href="#rent" className="hover:text-red-600 transition-colors">
          Rent Details
        </a>
      </li>
      <li>
        <a href="#why-us" className="hover:text-red-600 transition-colors">
          Why Choose Us
        </a>
      </li>
      <li>
        <a href="#register" className="hover:text-red-600 transition-colors">
          Register
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;