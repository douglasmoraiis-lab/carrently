import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      style={{ backgroundColor: "#ECEEF4" }}
      className="h-90 text-black py-6 -mt-14 relative"
    >
      <div className="container mx-auto flex justify-start gap-20 mt-10">
        <div className="text-2xl font-bold ml-10">
          car<span className="text-red-600">Rentify</span>
          <div className="h-0.5 w-8 bg-red-600 mt-1"></div>
        </div>
        <ul className="flex flex-col items-start space-y-4">
          <h1 className="text-lg font-semibold text-black">Company</h1>
          <li className="text-gray-600 font-medium text-sm">Rent Details</li>
          <li className="text-gray-600 font-medium text-sm">Why Choose Us</li>
          <li className="text-gray-600 font-medium text-sm">Register</li>
          <li className="text-gray-600 font-medium text-sm">
            Terms and Conditions
          </li>
        </ul>
        <ul className="flex flex-col items-start space-y-4">
          <h2 className="text-lg font-semibold text-black">Features</h2>
          <li className="text-gray-600 font-medium text-sm">Vehicle Tracker</li>
          <li className="text-gray-600 font-medium text-sm">
            iOS & Android Apps
          </li>
          <li className="text-gray-600 font-medium text-sm">Business Trips</li>
          <li className="text-gray-600 font-medium text-sm">Locations</li>
        </ul>
        {/* Contact US */}
        <ul className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold text-black">Contact US</h3>
          <li className="text-gray-600 font-medium text-sm">
            info@carrentify.com
          </li>
          <li className="text-gray-600 font-medium text-sm">
            +255 752 186 174
          </li>
          <li className="text-gray-600 font-medium text-sm">
            Dar es salaam,Tanzania
          </li>
        </ul>
        <div className="flex flex-col items-start space-y-4">
          <h4 className="text-lg font-semibold text-black">
            Get deals and discounts
          </h4>
          <p className="text-gray-600 text-sm mt-1">
            Subscribe to our newsletter
          </p>

          <input
            type="email"
            placeholder="Email"
            className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <h5 className="absolute mt-60 ml-10 text-gray-600 text-sm">
          © Copyright Team Inc.
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
