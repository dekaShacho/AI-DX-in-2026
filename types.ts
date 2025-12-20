export interface Organizer {
  name: string;
  kana?: string;
  role: string;
  description: string;
  imageUrl: string;
  socials: {
    youtube?: string;
    twitter?: string;
  };
}

export interface Guest {
  name: string;
  tag: string;
  tagColor: 'blue' | 'pink' | 'orange' | 'purple' | 'green' | 'teal';
  achievement: string;
  description: string;
  imageUrl: string;
}

export interface EventDetails {
  date: string;
  time: string;
  placeName: string;
  address: string;
  mapUrl: string;
  fee: string;
  capacity: string;
}