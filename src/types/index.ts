export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  homeAddress?: string;
  workAddress?: string;
  transportMode: 'driving' | 'transit' | 'walking' | 'bicycling';
}

export interface CalendarEvent {
  id: string;
  title: string;
  location: string;
  startTime: Date;
  endTime: Date;
  category: 'work' | 'personal' | 'health' | 'other';
}

export interface RouteInfo {
  durationMinutes: number;
  distanceKm: number;
  trafficLevel: 'low' | 'moderate' | 'heavy';
  departureTime: Date;
  status: 'on_time' | 'leaving_soon' | 'late';
}

export interface SmartEvent extends CalendarEvent {
  route: RouteInfo;
}
