import React from 'react';
import { useSchool } from '../context/SchoolContext';

interface SubjectCardProps {
  icon: string;
  name: string;
  description: string;
  onClick: () => void;
}

export default function SubjectCard({ icon, name, description, onClick }: SubjectCardProps) {
  const { currentSchool } = useSchool();
  const themeColor = currentSchool?.colors.primary || 'purple';

  return (
    <div
      onClick={onClick}
      className={`bg-${themeColor}/5 rounded-lg p-6 cursor-pointer transform transition-all hover:scale-105 hover:shadow-lg border border-${themeColor}/10`}
    >
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="font-semibold text-gray-900 mb-2 text-lg">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}