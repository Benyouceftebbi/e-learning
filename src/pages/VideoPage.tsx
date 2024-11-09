import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { subjectData } from '../data/subjectData';
import BackButton from '../components/BackButton';
import { useSchool } from '../context/SchoolContext';

interface VideoContent {
  title: string;
  thumbnail: string;
  teacherName: string;
}

export default function VideoPage() {
  const { contentType, contentId } = useParams<{ contentType: string; contentId: string }>();
  const [content, setContent] = useState<VideoContent | null>(null);
  const { currentSchool } = useSchool();
  const themeColor = currentSchool?.themeColor || 'purple';

  useEffect(() => {
    if (contentId) {
      const [teacherId, videoId] = contentId.split('-');
      
      // Search through all subjects to find the matching teacher and content
      Object.values(subjectData).forEach(subject => {
        const teacher = subject.teachers.find(t => t.id === teacherId);
        if (teacher) {
          if (contentType === 'recording') {
            const recording = teacher.recordings.find(r => r.id === videoId);
            if (recording) {
              setContent({
                title: recording.title,
                thumbnail: recording.thumbnail,
                teacherName: teacher.name
              });
            }
          } else if (contentType === 'stream') {
            const stream = teacher.liveStreams.find(s => s.id === videoId);
            if (stream) {
              setContent({
                title: stream.title,
                thumbnail: stream.thumbnail,
                teacherName: teacher.name
              });
            }
          }
        }
      });
    }
  }, [contentType, contentId]);

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Content not found</h2>
          <BackButton themeColor={themeColor} />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BackButton themeColor={themeColor} />

      <div className="bg-black aspect-video rounded-lg overflow-hidden mb-8">
        {contentType === 'stream' ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-900">
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Live Stream</h2>
              <p className="text-lg mb-4">{content.title}</p>
              <p className={`text-${themeColor}-400`}>With {content.teacherName}</p>
            </div>
          </div>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${content.thumbnail})` }}
          >
            <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50">
              <div className="text-white text-center">
                <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
                <p className={`text-${themeColor}-400`}>With {content.teacherName}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {content.title}
        </h1>
        <p className="text-gray-600 mb-2">Instructor: {content.teacherName}</p>
        <div className="prose max-w-none">
          <p className="text-gray-600">
            {contentType === 'stream'
              ? 'Join the interactive live session with your teacher. Feel free to ask questions and participate in the discussion.'
              : 'Watch this recorded lesson at your own pace. You can pause, rewind, and review the content as needed.'}
          </p>
        </div>
      </div>
    </div>
  );
}