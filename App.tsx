import React from 'react';
import { Header } from './components/Header';
import { FlightInfo } from './components/FlightInfo';
import { AccommodationInfo } from './components/AccommodationInfo';
import { Itinerary } from './components/Itinerary';
import { TravelChecklist } from './components/TravelChecklist';
import { ShoppingList } from './components/ShoppingList';
import { Plane, Home, Calendar, CheckCircle2, ShoppingBag } from 'lucide-react';

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string; id: string }> = ({ icon, title, id }) => (
  <div id={id} className="flex items-center gap-2 mb-6 mt-12 scroll-mt-24 px-4">
    <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
      {icon}
    </div>
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Header />
      
      <main className="max-w-5xl mx-auto -mt-8 relative z-10 px-4 space-y-8">
        
        {/* Quick Navigation / Summary Cards */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4 mb-8">
           <a href="#flights" className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition text-center">
             <Plane className="text-blue-500" size={24} />
             <span className="text-xs font-bold text-slate-600">航班資訊</span>
           </a>
           <a href="#hotels" className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition text-center">
             <Home className="text-indigo-500" size={24} />
             <span className="text-xs font-bold text-slate-600">住宿資訊</span>
           </a>
           <a href="#itinerary" className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition text-center">
             <Calendar className="text-amber-500" size={24} />
             <span className="text-xs font-bold text-slate-600">每日行程</span>
           </a>
           <a href="#shopping" className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition text-center">
             <ShoppingBag className="text-pink-500" size={24} />
             <span className="text-xs font-bold text-slate-600">購物推薦</span>
           </a>
           <a href="#checklist" className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 hover:shadow-md transition text-center">
             <CheckCircle2 className="text-emerald-500" size={24} />
             <span className="text-xs font-bold text-slate-600">備忘錄</span>
           </a>
        </div>

        <div className="space-y-4">
          <SectionHeader id="flights" icon={<Plane size={24} />} title="航班資訊" />
          <FlightInfo />
          
          <SectionHeader id="hotels" icon={<Home size={24} />} title="住宿資訊" />
          <AccommodationInfo />
          
          <SectionHeader id="itinerary" icon={<Calendar size={24} />} title="詳細行程" />
          <Itinerary />
          
          <SectionHeader id="shopping" icon={<ShoppingBag size={24} />} title="購物清單" />
          <ShoppingList />
          
          <SectionHeader id="checklist" icon={<CheckCircle2 size={24} />} title="旅行清單" />
          <TravelChecklist />
        </div>

      </main>

      <footer className="mt-16 py-8 text-center text-slate-400 text-sm">
        <p>© 2025 Hokkaido Family Trip. Have a wonderful journey!</p>
      </footer>
    </div>
  );
}

export default App;
