import React from 'react';
import { Calendar } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden rounded-b-3xl shadow-lg">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 opacity-10 pattern-dots"></div>

      <div className="relative flex flex-col items-center text-center pt-10 pb-12 px-4 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-sm border border-white/20">
          <Calendar size={14} />
          <span>2025/12/03 - 12/09</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-md">
          北海道冬日家族之旅
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light">
          札幌 · 小樽 · 旭川 — 七天六夜雪國回憶
        </p>
      </div>
    </div>
  );
};