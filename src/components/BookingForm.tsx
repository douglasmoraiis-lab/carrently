import React from "react";
import {
  MapPinIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

interface FormFieldProps {
  icon: React.ReactNode;
  label: string;
}

const FormField: React.FC<FormFieldProps> = ({ icon, label }) => (
  <div className="flex items-center gap-3 cursor-pointer">
    {icon}
    <div className="flex items-center gap-2">
      <span className="text-gray-700 font-medium">{label}</span>
      <ChevronDownIcon className="h-4 w-4 text-gray-500" />
    </div>
  </div>
);

const BookingForm: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto z-9999 top-0 -translate-y-1/2  -mb-44">
      <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center justify-between gap-6">
        <div className="flex">
          <FormField
            icon={<MapPinIcon className="h-8 w-6 text-gray-500" />}
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
