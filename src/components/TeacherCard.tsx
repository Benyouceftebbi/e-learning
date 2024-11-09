import React from 'react';
import { User, Video, Wifi } from 'lucide-react';
import { useSchool } from '../context/SchoolContext';

interface TeacherCardProps {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  experience: string;
  recordings: {
    id: string;
    title: string;
    duration: string;
    thumbnail: string;
  }[];
  liveStreams: {
    id: string;
    title: string;
    scheduledFor: string;
    thumbnail: string;
  }[];
  onWatchRecording: (teacherId: string, recordingId: string) => void;
  onJoinLiveStream: (teacherId: string, streamId: string) => void;
}

export default function TeacherCard({
  id,
  name,
  avatar,
  rating,
  experience,
  recordings,
  liveStreams,
  onWatchRecording,
  onJoinLiveStream,
}: TeacherCardProps) {
  const { currentSchool } = useSchool();
  const themeColor = currentSchool?.colors.primary.split('-')[0] || 'purple';

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden border border-${themeColor}-200`}>
      <div className="p-6">
        <div className="flex items-center mb-6">
          {avatar ? (
            <img src={avatar} alt={name} className="w-16 h-16 rounded-full object-cover" />
          ) : (
            <User className={`w-16 h-16 p-4 bg-${themeColor}-100 rounded-full text-${themeColor}-600`} />
          )}
          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <div className="flex items-center mt-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-${i < rating ? 'yellow-400' : 'gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">{experience}</span>
            </div>
          </div>
        </div>

        {/* Recordings Section */}
        {recordings.length > 0 && (
          <div className="mt-6">
            <h4 className={`text-lg font-semibold text-${themeColor}-600 mb-3 flex items-center`}>
              <Video className="w-5 h-5 mr-2" />
              Recordings
            </h4>
            <div className="space-y-3">
              {recordings.map((recording) => (
                <div
                  key={recording.id}
                  className={`flex items-center justify-between p-4 bg-${themeColor}-50 rounded-lg`}
                >
                  <div>
                    <h5 className="font-medium text-gray-900">{recording.title}</h5>
                    <span className="text-sm text-gray-600">{recording.duration}</span>
                  </div>
                  <button 
                    onClick={() => onWatchRecording(id, recording.id)}
                    className={`px-4 py-2 bg-${themeColor}-600 text-white rounded-md hover:bg-${themeColor}-700 transition-colors`}
                  >
                    Watch
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live Streams Section */}
        {liveStreams.length > 0 && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-red-600 mb-3 flex items-center">
              <Wifi className="w-5 h-5 mr-2" />
              Live Sessions
            </h4>
            <div className="space-y-3">
              {liveStreams.map((stream) => (
                <div
                  key={stream.id}
                  className="flex items-center justify-between p-4 bg-red-50 rounded-lg"
                >
                  <div>
                    <h5 className="font-medium text-gray-900">{stream.title}</h5>
                    <span className="text-sm text-gray-600">
                      Scheduled for: {stream.scheduledFor}
                    </span>
                  </div>
                  <button 
                    onClick={() => onJoinLiveStream(id, stream.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    Join
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}