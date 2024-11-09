import React from 'react';
import SubjectCard from './SubjectCard';
import { useSchool } from '../context/SchoolContext';

interface Subject {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface Branch {
  id: string;
  name: string;
  subjects: Subject[];
}

interface GradeSectionProps {
  levelId: string;
  gradeId: string;
  name: string;
  branches?: Branch[];
  subjects?: Subject[];
  onSubjectClick: (subjectId: string) => void;
}

export default function GradeSection({ 
  levelId,
  gradeId,
  name, 
  branches, 
  subjects, 
  onSubjectClick 
}: GradeSectionProps) {
  const { currentSchool } = useSchool();
  const themeColor = currentSchool?.colors.primary || 'purple';

  const handleSubjectClick = (branchId: string | null, subjectId: string) => {
    const fullSubjectId = branchId 
      ? `${gradeId}-${branchId}-${subjectId}`
      : `${gradeId}-${subjectId}`;
    onSubjectClick(fullSubjectId);
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 border border-${themeColor}/10`}>
      <h2 className={`text-2xl font-bold text-${themeColor} mb-6`}>{name}</h2>
      
      {branches ? (
        <div className="space-y-10">
          {branches.map((branch) => (
            <div key={branch.id}>
              <h3 className={`text-xl font-semibold text-${themeColor} mb-4 flex items-center`}>
                <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                {branch.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branch.subjects.map((subject) => (
                  <SubjectCard
                    key={subject.id}
                    {...subject}
                    onClick={() => handleSubjectClick(branch.id, subject.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects?.map((subject) => (
            <SubjectCard
              key={subject.id}
              {...subject}
              onClick={() => handleSubjectClick(null, subject.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}