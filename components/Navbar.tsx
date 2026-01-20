
import React from 'react';
import { ShieldCheck, User as UserIcon, LogOut, Car } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
  onOpenAuth: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout, onOpenAuth, onNavigate }) => {
  return (
    <nav className="bg-white border-b sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between h-full items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="bg-indigo-600 p-2 rounded-lg text-white mr-3 transition-transform group-hover:scale-105">
              <Car size={24} />
            </div>
            <div>
              <span className="text-xl font-black text-indigo-950 tracking-tighter">I travels</span>
              <p className="text-[8px] text-indigo-600 font-black -mt-1 uppercase tracking-[0.2em]">Official & Registered</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => onNavigate('home')} className="text-slate-500 hover:text-indigo-600 font-bold uppercase text-[10px] tracking-widest transition-colors">Home</button>
            <button onClick={() => onNavigate('dashboard')} className="text-slate-500 hover:text-indigo-600 font-bold uppercase text-[10px] tracking-widest transition-colors">Dashboard</button>
            <button onClick={() => onNavigate('recharge')} className="text-slate-500 hover:text-indigo-600 font-bold uppercase text-[10px] tracking-widest transition-colors">Recharge</button>
            <button onClick={() => onNavigate('documentation')} className="text-slate-500 hover:text-indigo-600 font-bold uppercase text-[10px] tracking-widest transition-colors">Documentation</button>
            <button onClick={() => onNavigate('fees')} className="text-slate-500 hover:text-indigo-600 font-bold uppercase text-[10px] tracking-widest transition-colors">Fees</button>
            <button onClick={() => onNavigate('legal')} className="text-slate-500 hover:text-indigo-600 font-bold uppercase text-[10px] tracking-widest transition-colors">Policies</button>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-black text-slate-900 tracking-tight">Sri Krishna</p>
                  <p className="text-[10px] text-indigo-600 font-black">₹{user.walletBalance.toLocaleString()}</p>
                </div>
                <button 
                  onClick={onLogout}
                  className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button 
                onClick={onOpenAuth}
                className="flex items-center bg-indigo-600 text-white px-6 py-2.5 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-indigo-700 transition-all shadow-md"
              >
                <UserIcon size={14} className="mr-2" />
                Sign in
              </button>
            )}
            <div className="hidden lg:flex items-center text-green-600 text-[8px] font-black uppercase tracking-widest bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
              <ShieldCheck size={12} className="mr-1.5" />
              Registered
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
