import React from 'react';
import { ChevronRight } from 'lucide-react';

interface LevelCardProps {
  id: string;
  title: string;
  grades: Array<{
    id: string;
    name: string;
    subjects: Array<{
      id: string;
      name: string;
    }>;
  }>;
  image: string;
  onClick: () => void;
  themeColor?: string;
}

export default function LevelCard({ title, grades, image, onClick, themeColor = 'purple' }: LevelCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{grades.length} Years Available</p>
        <div className="space-y-2">
          {grades.slice(0, 3).map((grade) => (
            <div key={grade.id} className="flex items-center text-gray-700">
              <ChevronRight className={`h-4 w-4 text-${themeColor}-600 mr-2`} />
              <span>{grade.name}</span>
            </div>
          ))}
        </div>
        <button className={`mt-4 w-full bg-${themeColor}-600 text-white py-2 rounded-md hover:bg-${themeColor}-700 transition-colors`}>
          Explore Level
        </button>
      </div>
    </div>
  );
}