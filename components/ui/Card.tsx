import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  icon?: ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title, icon }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden ${className}`}>
      {(title || icon) && (
        <div className="px-5 py-4 border-b border-slate-50 flex items-center gap-2 bg-slate-50/50">
          {icon && <span className="text-blue-500">{icon}</span>}
          {title && <h3 className="font-bold text-slate-800 text-lg">{title}</h3>}
        </div>
      )}
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};