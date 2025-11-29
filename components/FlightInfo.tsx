import React from 'react';
import { Plane, ArrowRight, Clock, MapPin, Users } from 'lucide-react';
import { FLIGHTS } from '../constants';
import { Card } from './ui/Card';
import { GroupType } from '../types';

export const FlightInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {FLIGHTS.map((flight) => (
        <Card key={flight.id} className="h-full border-t-4 border-t-blue-500">
          <div className="flex justify-between items-start mb-4">
            <span className={`px-2 py-1 text-xs font-bold rounded ${
              flight.type === 'Departure' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
            }`}>
              {flight.type === 'Departure' ? '去程' : '回程'}
            </span>
            <span className="text-sm font-medium text-slate-500">{flight.date}</span>
          </div>

          <div className="flex items-center justify-between mb-4">
             <div className="text-center flex-1">
                <div className="text-xl font-bold text-slate-800">{flight.route.split(' ➔ ')[0].split(' ')[0]}</div>
             </div>
             <div className="px-2 text-slate-300 flex flex-col items-center">
                <Plane size={20} className="transform rotate-90 mb-1 text-blue-400" />
                <ArrowRight size={14} />
             </div>
             <div className="text-center flex-1">
                <div className="text-xl font-bold text-slate-800">{flight.route.split(' ➔ ')[1].split(' ')[0]}</div>
             </div>
          </div>

          <div className="space-y-3 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-slate-400" />
              <span>{flight.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-slate-400" />
              <span>{flight.terminal}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={16} className="text-slate-400" />
              <span className={flight.group !== GroupType.ALL ? 'text-amber-600 font-medium' : ''}>
                {flight.passengers}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};