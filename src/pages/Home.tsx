import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GraduationCap, Users, Trophy, BookOpen } from 'lucide-react';
import { schoolsData } from '../data/schoolsData';

export default function Home() {
  const navigate = useNavigate();
  const { schoolId } = useParams();
  const school = schoolId ? schoolsData[schoolId] : null;

  if (!school) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">School not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 text-purple-600 hover:text-purple-500"
          >
            Return to Schools
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{ backgroundImage: `url(${school.image})` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-${school.themeColor}-900/90 to-${school.themeColor}-600/90`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6">{school.name}</h1>
              <p className="text-xl text-white/90 mb-8">{school.description}</p>
              <button 
                onClick={() => navigate(`/school/${schoolId}/levels`)}
                className={`bg-white text-${school.themeColor}-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-${school.themeColor}-50 transition-colors`}
              >
                Explore Our Programs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {school.features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              {feature.icon === 'graduation-cap' && <GraduationCap className={`h-12 w-12 text-${school.themeColor}-600 mb-4`} />}
              {feature.icon === 'users' && <Users className={`h-12 w-12 text-${school.themeColor}-600 mb-4`} />}
              {feature.icon === 'trophy' && <Trophy className={`h-12 w-12 text-${school.themeColor}-600 mb-4`} />}
              {feature.icon === 'book-open' && <BookOpen className={`h-12 w-12 text-${school.themeColor}-600 mb-4`} />}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join {school.name} and experience education that goes beyond traditional learning.
          </p>
          <button 
            onClick={() => navigate(`/school/${schoolId}/levels`)}
            className={`bg-${school.themeColor}-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-${school.themeColor}-700 transition-colors`}
          >
            View Academic Levels
          </button>
        </div>
      </div>
    </div>
  );
}