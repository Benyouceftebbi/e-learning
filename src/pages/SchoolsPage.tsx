import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { schoolsData } from '../data/schoolsData';

export default function SchoolsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your School</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Select from our prestigious educational institutions and begin your journey to excellence
            </p>
          </div>
        </div>
      </div>

      {/* Schools Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(schoolsData).map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 cursor-pointer"
              onClick={() => navigate(`/school/${school.id}`)}
            >
              <div className="relative h-48">
                <img 
                  src={school.image} 
                  alt={school.name} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-${school.themeColor}-900/60 to-transparent`}></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white">{school.name}</h3>
                  <p className="text-white/90">{school.description}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{school.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">Est. {school.established}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {school.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <GraduationCap className={`h-5 w-5 text-${school.themeColor}-600 mt-1 mr-2 flex-shrink-0`} />
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className={`mt-6 w-full bg-${school.themeColor}-600 text-white py-2 rounded-md hover:bg-${school.themeColor}-700 transition-colors`}>
                  View Programs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}