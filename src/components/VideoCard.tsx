import React from 'react';
import { Play, Video } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  isLive?: boolean;
  onWatch: () => void;
}

export default function VideoCard({ title, thumbnail, duration, isLive, onWatch }: VideoCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={onWatch}
            className="bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700"
          >
            {isLive ? <Video className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </button>
        </div>
        {isLive && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
            LIVE
          </span>
        )}
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
          {duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <button
          onClick={onWatch}
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors"
        >
          {isLive ? 'Join Stream' : 'Watch Now'}
        </button>
      </div>
    </div>
  );
}