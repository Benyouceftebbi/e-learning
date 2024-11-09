import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  themeColor?: string;
}

export default function BackButton({ themeColor = 'purple' }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`flex items-center text-${themeColor}-600 hover:text-${themeColor}-700 transition-colors mb-8`}
    >
      <ArrowLeft className="h-5 w-5 mr-2" />
      <span className="font-medium">Go Back</span>
    </button>
  );
}