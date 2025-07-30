// src/components/Button.tsx
import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  label: string;
  variant: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ label, variant }) => {
  const baseClasses = "py-3 px-10 rounded font-semibold transition-all duration-300 ease-in-out text-sm";

  const variantClasses = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-md",
    secondary: "border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
  };

  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`}>
      {label}
    </button>
  );
};

export default Button;