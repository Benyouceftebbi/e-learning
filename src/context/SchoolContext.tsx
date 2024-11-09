import React, { createContext, useContext, useState } from 'react';
import { schoolData } from '../data/schoolData';

interface SchoolContextType {
  currentSchool: typeof schoolData[keyof typeof schoolData] | null;
  setCurrentSchool: (school: typeof schoolData[keyof typeof schoolData] | null) => void;
}

const SchoolContext = createContext<SchoolContextType>({
  currentSchool: null,
  setCurrentSchool: () => {},
});

export const useSchool = () => useContext(SchoolContext);

export const SchoolProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSchool, setCurrentSchool] = useState<typeof schoolData[keyof typeof schoolData] | null>(null);

  return (
    <SchoolContext.Provider value={{ currentSchool, setCurrentSchool }}>
      {children}
    </SchoolContext.Provider>
  );
};