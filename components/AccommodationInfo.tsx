import React from 'react';
import { BedDouble, MapPin, CalendarDays, Info, ExternalLink } from 'lucide-react';
import { ACCOMMODATIONS } from '../constants';
import { Card } from './ui/Card';

export const AccommodationInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      {ACCOMMODATIONS.map((hotel) => (
        <Card key={hotel.id} className="border-l-4 border-l-indigo-500">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                <BedDouble className="text-indigo-500" size={20} />
                {hotel.name}
              </h3>
              <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-600 mb-3">
                <span className="flex items-center gap-1.5 bg-indigo-50 px-2 py-1 rounded text-indigo-700 font-medium">
                  <CalendarDays size={14} />
                  {hotel.dates}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-slate-400" />
                  {hotel.location}
                </span>
              </div>
              
              {hotel.mapUrl && (
                <a 
                   href={hotel.mapUrl} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
                 >
                   <MapPin size={14} />
                   在 Google Maps 上查看
                   <ExternalLink size={12} />
                 </a>
              )}
            </div>
            {hotel.note && (
               <div className="md:max-w-xs w-full bg-amber-50 p-3 rounded-lg border border-amber-100 flex gap-2">
                 <Info size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                 <p className="text-xs text-amber-800 leading-relaxed">{hotel.note}</p>
               </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
};
