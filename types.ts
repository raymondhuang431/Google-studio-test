export enum GroupType {
  ALL = 'All',
  A = 'Group A',
  B = 'Group B'
}

export interface Flight {
  id: string;
  date: string;
  type: 'Departure' | 'Return';
  route: string;
  time: string;
  terminal: string;
  passengers: string;
  group: GroupType;
}

export interface Accommodation {
  id: string;
  name: string;
  dates: string;
  location: string;
  note?: string;
  mapUrl?: string;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  tags?: string[];
  isHighlight?: boolean;
  mapUrl?: string;   // Google Maps URL
}

export interface DayPlan {
  day: number;
  date: string;
  title: string;
  items: ItineraryItem[];
  splitPlan?: {
    groupA: ItineraryItem[];
    groupB: ItineraryItem[];
  };
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
}

export interface ShoppingItem {
  name: string;
  brand?: string;
  location?: string;
  note: string;
  category: 'supplies' | 'souvenirs';
}