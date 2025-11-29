import React, { useState, useEffect } from 'react';
import { CheckSquare, Square } from 'lucide-react';
import { CHECKLIST_ITEMS } from '../constants';
import { Card } from './ui/Card';
import { ChecklistItem } from '../types';

export const TravelChecklist: React.FC = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('hokkaido_checklist');
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  const toggleItem = (id: string) => {
    const nextState = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(nextState);
    localStorage.setItem('hokkaido_checklist', JSON.stringify(nextState));
  };

  // Group by category
  const groupedItems = CHECKLIST_ITEMS.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ChecklistItem[]>);

  const progress = Math.round((Object.values(checkedItems).filter(Boolean).length / CHECKLIST_ITEMS.length) * 100);

  return (
    <Card title="旅行備忘錄" icon={<CheckSquare size={20} />} className="border-t-4 border-t-emerald-500">
      <div className="mb-6">
        <div className="flex justify-between text-sm text-slate-600 mb-1">
          <span>準備進度</span>
          <span className="font-bold">{progress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2.5">
          <div 
            className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">{category}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => toggleItem(item.id)}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all border ${
                    checkedItems[item.id] 
                      ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
                      : 'bg-white border-slate-100 hover:border-blue-200'
                  }`}
                >
                  {checkedItems[item.id] ? (
                    <CheckSquare className="text-emerald-500 flex-shrink-0" size={20} />
                  ) : (
                    <Square className="text-slate-300 flex-shrink-0" size={20} />
                  )}
                  <span className={`text-sm ${checkedItems[item.id] ? 'line-through opacity-70' : 'text-slate-700'}`}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};