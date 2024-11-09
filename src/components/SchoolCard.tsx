import React from 'react';

interface SchoolCardProps {
  id: string;
  name: string;
  description: string;
  logo: string;
  image: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    hover: string;
    text: string;
  };
  onClick: () => void;
}

export default function SchoolCard({
  name,
  description,
  logo,
  image,
  colors,
  onClick
}: SchoolCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
    >
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-black bg-opacity-30`}></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div className="flex items-center">
            <span className="text-4xl mr-3">{logo}</span>
            <div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-white text-opacity-90">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <button 
          className={`w-full bg-${colors.primary} text-white py-3 rounded-md hover:bg-${colors.hover} transition-colors font-medium`}
        >
          Explore School
        </button>
      </div>
    </div>
  );
}