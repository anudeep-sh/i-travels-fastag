
import React from 'react';
import { Car, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { id: 'home', label: 'Features' },
    { id: 'recharge', label: 'Recharge' },
    { id: 'documentation', label: 'Documents' },
    { id: 'fees', label: 'Pricing' },
    { id: 'faq', label: 'FAQs' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'legal', label: 'Policies' },
  ];

  return (
    <nav className="bg-slate-900 py-4 sticky top-0 z-50 border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="bg-emerald-600 p-2 rounded-lg text-white mr-3 transition-transform group-hover:scale-105">
            <Car size={20} />
          </div>
          <div>
            <span className="text-white text-lg font-black tracking-tighter">NEO Travels</span>
            <p className="text-[7px] text-emerald-500 font-black uppercase tracking-[0.2em] -mt-1">By NEOFIN NEX</p>
          </div>
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-5 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all ${
                currentPage === item.id 
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                : 'text-white/60 hover:bg-white/5 hover:text-white border border-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center">
          <div className="hidden lg:flex items-center text-emerald-400 text-[9px] font-black uppercase tracking-widest bg-emerald-950/50 px-4 py-2 rounded-full border border-emerald-900/50">
            <ShieldCheck size={12} className="mr-2" /> Verified Nex Portal
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
