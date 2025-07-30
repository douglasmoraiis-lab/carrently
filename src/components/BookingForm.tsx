// src/components/BookingForm.tsx

import React from 'react';
// Importe os ícones diretamente da biblioteca Heroicons
import { MapPinIcon, CalendarDaysIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

// O componente interno para cada campo do formulário
const FormField: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
  <div className="flex items-center gap-3 cursor-pointer">
    {/* O ícone será passado como prop */}
    {icon}
    <div className="flex items-center gap-2">
      <span className="text-gray-700 font-medium">{label}</span>
      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
    </div>
  </div>
);

const BookingForm: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto mt-44 z-30">
      <div className="bg-white p-5 rounded-2xl shadow-xl flex items-center justify-between space-x-4">
        
        <div className="flex-1">
          {/* Passe o ícone importado, definindo o estilo com className */}
          <FormField 
            icon={<MapPinIcon className="h-6 w-6 text-gray-500" />} 
            label="Choose a location" 
          />
        </div>

        <div className="h-8 w-px bg-gray-200"></div>

        <div className="flex-1">
          <FormField 
            icon={<CalendarDaysIcon className="h-6 w-6 text-gray-500" />} 
            label="Pickup Date" 
          />
        </div>

        <div className="h-8 w-px bg-gray-200"></div>

        <div className="flex-1">
          <FormField 
            icon={<CalendarDaysIcon className="h-6 w-6 text-gray-500" />} 
            label="Return Date" 
          />
        </div>

        <button className="bg-red-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-red-700 transition-colors duration-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default BookingForm;
