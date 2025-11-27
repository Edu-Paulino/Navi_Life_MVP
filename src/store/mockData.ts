import { SmartEvent, User } from "../types";
import { addHours, addMinutes, subMinutes } from "date-fns";

export const MOCK_USER: User = {
  id: '1',
  name: 'Alexandre Silva',
  email: 'alex@exemplo.com',
  transportMode: 'driving',
  homeAddress: 'Av. Paulista, 1000, São Paulo',
  workAddress: 'Rua Funchal, 200, São Paulo'
};

export interface Location {
  id: string;
  name: string;
  address: string;
  type: 'home' | 'work' | 'other';
}

export const MOCK_LOCATIONS: Location[] = [
  { id: '1', name: 'Casa', address: 'Av. Paulista, 1000, Bela Vista', type: 'home' },
  { id: '2', name: 'Trabalho', address: 'Rua Funchal, 200, Vila Olímpia', type: 'work' },
  { id: '3', name: 'Academia Iron', address: 'Rua Augusta, 1500, Consolação', type: 'other' },
  { id: '4', name: 'Casa da Mãe', address: 'Rua dos Pinheiros, 500', type: 'other' },
];

const now = new Date();

// Helper to create realistic looking times relative to "now"
export const MOCK_EVENTS: SmartEvent[] = [
  {
    id: '1',
    title: 'Reunião de Estratégia',
    location: 'Escritório Central',
    startTime: addMinutes(now, 45), // Starts in 45 mins
    endTime: addHours(now, 2),
    category: 'work',
    route: {
      durationMinutes: 25,
      distanceKm: 5.2,
      trafficLevel: 'moderate',
      departureTime: addMinutes(now, 20), // Leave in 20 mins
      status: 'leaving_soon'
    }
  },
  {
    id: '2',
    title: 'Almoço com Cliente',
    location: 'Restaurante Fasano',
    startTime: addHours(now, 4),
    endTime: addHours(now, 5.5),
    category: 'work',
    route: {
      durationMinutes: 15,
      distanceKm: 3.0,
      trafficLevel: 'low',
      departureTime: addHours(now, 3.75),
      status: 'on_time'
    }
  },
  {
    id: '3',
    title: 'Dentista',
    location: 'Consultório Dr. Silva',
    startTime: addHours(now, 26), // Tomorrow
    endTime: addHours(now, 27),
    category: 'health',
    route: {
      durationMinutes: 20,
      distanceKm: 4.0,
      trafficLevel: 'low',
      departureTime: addHours(now, 25.5),
      status: 'on_time'
    }
  },
   {
    id: '4',
    title: 'Jantar de Aniversário',
    location: 'Ristorante Italiano',
    startTime: addHours(now, 30), // Tomorrow night
    endTime: addHours(now, 33),
    category: 'personal',
    route: {
      durationMinutes: 35,
      distanceKm: 12.0,
      trafficLevel: 'moderate',
      departureTime: addHours(now, 29.2),
      status: 'on_time'
    }
  }
];
