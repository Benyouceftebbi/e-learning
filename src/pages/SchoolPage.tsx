import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import LevelCard from '../components/LevelCard';
import { levelData } from '../data/levelData';
import { schoolData } from '../data/schoolData';
import { useSchool } from '../context/SchoolContext';

export default function SchoolPage() {
  const { schoolId } = useParams<{ schoolId: string }>();
  const navigate = useNavigate();
  const { currentSchool, setCurrentSchool } = useSchool();

  useEffect(() => {
    if (schoolId) {
      const school = schoolData[schoolId as keyof typeof schoolData];
      if (school) {
        setCurrentSchool(school);
      }
    }
  }, [schoolId, setCurrentSchool]);

  if (!currentSchool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">School not found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 text-purple-600 hover:text-purple-500"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  const handleLevelClick = (levelId: string) => {
    navigate(`/school/${schoolId}/level/${levelId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* School Header */}
      <div 
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${currentSchool.image})` }}
      >
        <div className={`absolute inset-0 bg-gradient-to-r from-${currentSchool.colors.primary} to-${currentSchool.colors.secondary} opacity-90`}></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex items-center">
              <span className="text-6xl mr-6">{currentSchool.logo}</span>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{currentSchool.name}</h1>
                <p className="text-xl text-white text-opacity-90">{currentSchool.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Academic Levels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center mb-8">
          <BookOpen className={`h-8 w-8 text-${currentSchool.colors.text} mr-3`} />
          <h2 className="text-3xl font-bold text-gray-900">Academic Levels</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(levelData).map(([id, level]) => (
            <LevelCard
              key={id}
              {...level}
              id={id}
              onClick={() => handleLevelClick(id)}
              themeColor={currentSchool.colors.primary}
              image={level.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}