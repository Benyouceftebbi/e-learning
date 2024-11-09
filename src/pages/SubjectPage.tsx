import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TeacherCard from '../components/TeacherCard';
import AuthModal from '../components/AuthModal';
import BackButton from '../components/BackButton';
import { subjectData } from '../data/subjectData';
import { levelData } from '../data/levelData';
import { useSchool } from '../context/SchoolContext';

export default function SubjectPage() {
  const { levelId, subjectId } = useParams<{ levelId: string; subjectId: string }>();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState('');
  const { currentSchool } = useSchool();
  const themeColor = currentSchool?.themeColor || 'purple';

  // Find the level and grade information for breadcrumb navigation
  const level = levelId ? levelData[levelId as keyof typeof levelData] : null;
  
  // Parse the subject path to get the full subject key
  const fullSubjectKey = subjectId || '';
  
  // Find the subject data
  const subject = subjectData[fullSubjectKey];

  // Parse the subject path for breadcrumb
  const pathParts = subjectId?.split('-') || [];
  const gradeId = pathParts[0];
  const grade = level?.grades.find(g => g.id === gradeId);
  
  // For high school, we need to handle branches
  const branchId = pathParts[1];
  const actualSubjectId = pathParts[pathParts.length - 1];
  
  const branch = grade?.branches?.find(b => b.id === branchId);
  const subjectName = branch
    ? branch.subjects.find(s => s.id === actualSubjectId)?.name
    : grade?.subjects?.find(s => s.id === actualSubjectId)?.name;

  if (!subject || !level) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Subject not found</h2>
          <button
            onClick={() => navigate(`/level/${levelId}`)}
            className="mt-4 text-purple-600 hover:text-purple-500"
          >
            Return to Level
          </button>
        </div>
      </div>
    );
  }

  const handleWatchRecording = (teacherId: string, recordingId: string) => {
    setSelectedContent(`recording/${teacherId}-${recordingId}`);
    setIsAuthModalOpen(true);
  };

  const handleJoinLiveStream = (teacherId: string, streamId: string) => {
    setSelectedContent(`stream/${teacherId}-${streamId}`);
    setIsAuthModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BackButton themeColor={themeColor} />

      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
        <span>{level.title}</span>
        <span>/</span>
        <span>{grade?.name}</span>
        {branch && (
          <>
            <span>/</span>
            <span>{branch.name}</span>
          </>
        )}
        <span>/</span>
        <span className="font-medium text-gray-900">{subjectName}</span>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">{subjectName}</h1>

      <div className="space-y-8">
        {subject.teachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            {...teacher}
            onWatchRecording={handleWatchRecording}
            onJoinLiveStream={handleJoinLiveStream}
          />
        ))}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        contentType={selectedContent}
      />
    </div>
  );
}