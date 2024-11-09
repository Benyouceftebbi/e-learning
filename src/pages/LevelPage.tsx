import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { levelData } from '../data/levelData';
import GradeSection from '../components/GradeSection';
import BackButton from '../components/BackButton';
import { useSchool } from '../context/SchoolContext';

export default function LevelPage() {
  const { levelId } = useParams<{ levelId: string }>();
  const navigate = useNavigate();
  const { currentSchool } = useSchool();
  const themeColor = currentSchool?.themeColor || 'purple';
  
  const level = levelId ? levelData[levelId as keyof typeof levelData] : null;

  if (!level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Level not found</h2>
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

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/level/${levelId}/subject/${subjectId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BackButton themeColor={themeColor} />
      
      <div className="flex items-center mb-8">
        <BookOpen className={`h-8 w-8 text-${themeColor}-600 mr-3`} />
        <h1 className="text-3xl font-bold text-gray-900">{level.title}</h1>
      </div>
      
      <div className="space-y-12">
        {level.grades.map((grade) => (
          <GradeSection
            key={grade.id}
            levelId={levelId}
            gradeId={grade.id}
            name={grade.name}
            branches={grade.branches}
            subjects={grade.subjects}
            onSubjectClick={handleSubjectClick}
          />
        ))}
      </div>
    </div>
  );
}