
import React, { useState, useEffect } from 'react';
import { Car, ShieldCheck, Maximize, Minimize } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'recharge', label: 'Recharge' },
    { id: 'documentation', label: 'KYC Docs' },
    { id: 'fees', label: 'Pricing' },
    { id: 'faq', label: 'Help' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'legal', label: 'Policies' },
  ];

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <nav className="bg-slate-900 py-4 sticky top-0 z-50 border-b border-red-600/30 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="bg-red-600 p-2.5 rounded-xl text-white mr-3 transition-transform group-hover:scale-110 shadow-lg shadow-red-600/20">
            <Car size={22} />
          </div>
          <div>
            <span className="text-white text-xl font-black tracking-tighter">On road Go</span>
            <p className="text-[7px] text-blue-400 font-black uppercase tracking-[0.25em] -mt-1">By MTST SEVA</p>
          </div>
        </div>

        <div className="hidden lg:flex flex-wrap justify-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                currentPage === item.id 
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={toggleFullscreen}
            className="p-2.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors border border-white/5"
            title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
          >
            {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
          </button>
          <div className="hidden sm:flex items-center text-blue-400 text-[8px] font-black uppercase tracking-widest bg-blue-950/40 px-4 py-2 rounded-xl border border-blue-900/50">
            <ShieldCheck size={12} className="mr-2" /> Secure Portal
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
