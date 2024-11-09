import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LevelsPage from './pages/LevelsPage';
import LevelPage from './pages/LevelPage';
import SubjectPage from './pages/SubjectPage';
import VideoPage from './pages/VideoPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<LevelsPage />} />
          <Route path="/level/:levelId" element={<LevelPage />} />
          <Route path="/level/:levelId/subject/:subjectId" element={<SubjectPage />} />
          <Route path="/watch/:contentType/:contentId" element={<VideoPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;