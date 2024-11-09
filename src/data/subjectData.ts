export const subjectData: Record<string, {
  name: string;
  teachers: {
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
  }[];
}> = {
  // Elementary School - First Year
  'first-year-math': {
    name: 'Mathematics',
    teachers: [{
      id: 'e1-math',
      name: 'Dr. Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      rating: 4.8,
      experience: '10 years experience',
      recordings: [{
        id: 'rec1',
        title: 'Introduction to Numbers',
        duration: '45 minutes',
        thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80'
      }],
      liveStreams: [{
        id: 'live1',
        title: 'Interactive Math Practice',
        scheduledFor: 'Tomorrow at 10:00 AM',
        thumbnail: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&q=80'
      }]
    }]
  },

  // Middle School - First Year
  'first-year-math-m1': {
    name: 'Mathematics',
    teachers: [{
      id: 'm1-math',
      name: 'Prof. Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      rating: 4.9,
      experience: '15 years experience',
      recordings: [{
        id: 'rec-m1-1',
        title: 'Algebra Foundations',
        duration: '50 minutes',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      }],
      liveStreams: [{
        id: 'live-m1-1',
        title: 'Algebra Problem Solving',
        scheduledFor: 'Tomorrow at 2:00 PM',
        thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80'
      }]
    }]
  },

  // High School - First Year Scientific
  'first-year-scientific-physics-h1': {
    name: 'Physics',
    teachers: [{
      id: 'h1-physics',
      name: 'Dr. Robert Wilson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      rating: 4.7,
      experience: '20 years experience',
      recordings: [{
        id: 'rec-h1-1',
        title: 'Advanced Mechanics',
        duration: '1 hour',
        thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80'
      }],
      liveStreams: [{
        id: 'live-h1-1',
        title: 'Physics Lab Demonstration',
        scheduledFor: 'Next Monday at 11:00 AM',
        thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80'
      }]
    }]
  },

  // High School - First Year Languages
  'first-year-languages-english-h1': {
    name: 'English',
    teachers: [{
      id: 'h1-english',
      name: 'Ms. Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      rating: 4.9,
      experience: '12 years experience',
      recordings: [{
        id: 'rec-h1-eng-1',
        title: 'Advanced Grammar',
        duration: '45 minutes',
        thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }],
      liveStreams: [{
        id: 'live-h1-eng-1',
        title: 'English Conversation Practice',
        scheduledFor: 'Wednesday at 3:00 PM',
        thumbnail: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80'
      }]
    }]
  },

  // High School - First Year Humanities
  'first-year-humanities-philosophy-h1': {
    name: 'Philosophy',
    teachers: [{
      id: 'h1-philosophy',
      name: 'Dr. Marcus Reid',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80',
      rating: 4.8,
      experience: '18 years experience',
      recordings: [{
        id: 'rec-h1-phil-1',
        title: 'Introduction to Philosophy',
        duration: '55 minutes',
        thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80'
      }],
      liveStreams: [{
        id: 'live-h1-phil-1',
        title: 'Philosophy Discussion Group',
        scheduledFor: 'Friday at 4:00 PM',
        thumbnail: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80'
      }]
    }]
  }
  // Note: This is a sample of the data structure. 
  // You would need to add similar entries for each subject in each year
  // following the same pattern but with unique IDs and appropriate content
};