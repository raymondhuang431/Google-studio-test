import React, { useState } from 'react';
import { Map, Clock, Star, Utensils, ShoppingBag, ExternalLink, MapPin } from 'lucide-react';
import { ITINERARY } from '../constants';
import { DayPlan, ItineraryItem } from '../types';
import { Card } from './ui/Card';

const Tag: React.FC<{ text: string }> = ({ text }) => {
  let colorClass = "bg-slate-100 text-slate-600";
  let Icon = null;

  if (text.includes('美食') || text.includes('必吃') || text.includes('大餐')) {
    colorClass = "bg-orange-100 text-orange-700";
    Icon = Utensils;
  } else if (text.includes('預約')) {
    colorClass = "bg-red-100 text-red-700";
    Icon = Clock;
  } else if (text.includes('購物')) {
    colorClass = "bg-emerald-100 text-emerald-700";
    Icon = ShoppingBag;
  }

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium ${colorClass}`}>
      {Icon && <Icon size={10} />}
      {text}
    </span>
  );
};

const TimelineItem: React.FC<{ item: ItineraryItem }> = ({ item }) => (
  <div className={`relative pl-8 pb-8 last:pb-0 ${item.isHighlight ? 'bg-amber-50/50 -mx-4 px-8 py-4 rounded-lg' : ''}`}>
    {/* Line */}
    <div className="absolute left-[11px] top-2 bottom-0 w-0.5 bg-slate-200 last:bg-transparent"></div>
    {/* Dot */}
    <div className={`absolute left-[6px] top-2 w-3 h-3 rounded-full border-2 ${item.isHighlight ? 'bg-amber-400 border-amber-400' : 'bg-white border-blue-400'}`}></div>
    
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
      <div className="font-mono text-sm font-semibold text-slate-500 w-12 flex-shrink-0 pt-0.5">{item.time}</div>
      
      <div className="flex-1 space-y-2">
        <div>
          <h4 className={`font-bold text-slate-800 flex items-center gap-2 ${item.isHighlight ? 'text-lg text-amber-900' : 'text-base'}`}>
            {item.title}
            {item.isHighlight && <Star size={16} className="text-amber-500 fill-amber-500" />}
          </h4>
          <p className="text-slate-600 text-sm mt-1 leading-relaxed">{item.description}</p>
        </div>

        {/* Tags */}
        {item.tags && (
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, idx) => <Tag key={idx} text={tag} />)}
          </div>
        )}

        {/* Map Link Section */}
        {item.mapUrl && (
          <div className="mt-2">
            <a 
              href={item.mapUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <MapPin size={14} />
              Google Maps
              <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>
    </div>
  </div>
);

const DayCard: React.FC<{ dayPlan: DayPlan }> = ({ dayPlan }) => {
  const [activeGroup, setActiveGroup] = useState<'A' | 'B'>('B'); // Default to B as they stay longer
  const hasSplit = !!dayPlan.splitPlan;

  return (
    <div className="mb-8 relative">
       {/* Date Header Sticky */}
      <div className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur py-3 mb-4 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center shadow-md">
            D{dayPlan.day}
          </div>
          <div>
            <h2 className="font-bold text-slate-800">{dayPlan.date}</h2>
            <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">{dayPlan.title}</p>
          </div>
        </div>
      </div>

      <Card>
        {/* Main Itinerary */}
        <div className="pt-2">
            {dayPlan.items.map((item, idx) => (
              <TimelineItem key={idx} item={item} />
            ))}
        </div>

        {/* Split Itinerary Logic */}
        {hasSplit && dayPlan.splitPlan && (
          <div className="mt-8 border-t border-dashed border-slate-300 pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-slate-700 flex items-center gap-2">
                <Map size={18} /> 分組行程
              </h3>
              <div className="flex bg-slate-100 p-1 rounded-lg">
                <button 
                  onClick={() => setActiveGroup('A')}
                  className={`px-3 py-1 text-sm rounded-md transition-all ${activeGroup === 'A' ? 'bg-white shadow text-blue-600 font-bold' : 'text-slate-500'}`}
                >
                  Group A (耀云)
                </button>
                <button 
                  onClick={() => setActiveGroup('B')}
                  className={`px-3 py-1 text-sm rounded-md transition-all ${activeGroup === 'B' ? 'bg-white shadow text-blue-600 font-bold' : 'text-slate-500'}`}
                >
                  Group B (媽&耀庭)
                </button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 animate-fadeIn">
              {activeGroup === 'A' ? (
                dayPlan.splitPlan.groupA.map((item, idx) => <TimelineItem key={`a-${idx}`} item={item} />)
              ) : (
                dayPlan.splitPlan.groupB.map((item, idx) => <TimelineItem key={`b-${idx}`} item={item} />)
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export const Itinerary: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {ITINERARY.map((day) => (
        <DayCard key={day.day} dayPlan={day} />
      ))}
    </div>
  );
};