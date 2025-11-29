import React from 'react';
import { ShoppingBag, Gift, Shirt } from 'lucide-react';
import { SHOPPING_ITEMS } from '../constants';
import { Card } from './ui/Card';

export const ShoppingList: React.FC = () => {
  const supplies = SHOPPING_ITEMS.filter(item => item.category === 'supplies');
  const souvenirs = SHOPPING_ITEMS.filter(item => item.category === 'souvenirs');

  return (
    <div className="space-y-6">
      <Card title="實用補給品 (Day 1 - Ario / 藥妝店)" icon={<Shirt size={20} />} className="border-t-4 border-t-blue-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supplies.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-100">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-800">{item.name}</h4>
                {item.brand && (
                  <span className="text-xs font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    {item.brand}
                  </span>
                )}
              </div>
              {item.location && (
                 <p className="text-xs text-slate-500 mb-2 font-medium">📍 {item.location}</p>
              )}
              <p className="text-sm text-slate-600">{item.note}</p>
            </div>
          ))}
        </div>
      </Card>

      <Card title="北海道限定美食伴手禮 (小樽/機場)" icon={<Gift size={20} />} className="border-t-4 border-t-pink-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {souvenirs.map((item, idx) => (
            <div key={idx} className="bg-pink-50/50 p-4 rounded-lg border border-pink-100">
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-800">{item.name}</h4>
                {item.brand && (
                  <span className="text-xs font-bold bg-pink-100 text-pink-700 px-2 py-0.5 rounded">
                    {item.brand}
                  </span>
                )}
              </div>
              {item.location && (
                 <p className="text-xs text-slate-500 mb-2 font-medium">📍 {item.location}</p>
              )}
              <p className="text-sm text-slate-600">{item.note}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
