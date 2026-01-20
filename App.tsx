
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import RechargeForm from './components/RechargeForm';
import LegalContent from './components/LegalContent';
import FeesContent from './components/FeesContent';
import DocumentationContent from './components/DocumentationContent';
import AIChatWidget from './components/AIChatWidget';
import VehicleModal from './components/VehicleModal';
import { User, Vehicle, VehicleType } from './types';
import { ShieldCheck, ArrowRight, Smartphone, Zap, CheckCircle, Car, MapPin, AlertCircle, Info, UserPlus, Navigation, Phone } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User | null>(null);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showVehicleModal, setShowVehicleModal] = useState(false);

  const handleLogin = () => {
    const mockUser: User = {
      id: 'sk-777',
      name: 'Sri Krishna',
      email: 'srikrishna@itravels.com',
      walletBalance: 3000.00
    };
    const mockVehicles: Vehicle[] = [
      { id: 'v1', number: 'HR26DQ1234', type: VehicleType.CAR, bank: 'Axis Bank' },
      { id: 'v2', number: 'DL3CAY5678', type: VehicleType.CAR, bank: 'HDFC Bank' }
    ];
    setUser(mockUser);
    setVehicles(mockVehicles);
    setShowAuthModal(false);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setVehicles([]);
    setCurrentPage('home');
  };

  const handleRechargeSuccess = (amount: number) => {
    if (user) {
      setUser({ ...user, walletBalance: user.walletBalance + amount });
    }
  };

  const handleAddVehicle = (newVehicle: Vehicle) => {
    setVehicles([...vehicles, newVehicle]);
    setShowVehicleModal(false);
  };

  const renderHome = () => (
    <div className="space-y-20 pb-20">
      {/* Hero Section - Removed Background Image */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-indigo-950 opacity-50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-2.5 rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
            <ShieldCheck size={16} className="mr-2 text-indigo-400" /> Registered as I travels Private limited
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-lg">
            Elevated Highway <br /><span className="text-indigo-500 italic">Intelligence.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            The premium digital platform for secure FASTag management, real-time recharges, and automated fleet safety.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => user ? setCurrentPage('recharge') : setShowAuthModal(true)}
              className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-black text-lg flex items-center justify-center transition-all hover:bg-indigo-700 shadow-xl shadow-indigo-600/30"
            >
              Get Started <ArrowRight size={20} className="ml-3" />
            </button>
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10">
               <Phone size={18} className="text-indigo-400" />
               <div className="text-left">
                  <p className="text-white text-lg font-black tracking-tight">1800 3300 3333</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Stats Bar */}
      <section className="max-w-7xl mx-auto px-4 -mt-24 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-xl p-12 grid grid-cols-1 md:grid-cols-4 gap-8 border border-slate-100">
           <div className="text-center">
             <h4 className="text-4xl font-black text-indigo-600">35+</h4>
             <p className="text-slate-400 font-bold uppercase text-[10px] mt-2 tracking-widest">Issuing Banks</p>
           </div>
           <div className="text-center border-x-0 md:border-x border-slate-100">
             <h4 className="text-4xl font-black text-indigo-600">100%</h4>
             <p className="text-slate-400 font-bold uppercase text-[10px] mt-2 tracking-widest">Secure Flow</p>
           </div>
           <div className="text-center border-r-0 md:border-r border-slate-100">
             <h4 className="text-4xl font-black text-indigo-600">₹3k</h4>
             <p className="text-slate-400 font-bold uppercase text-[10px] mt-2 tracking-widest">Entry Limit</p>
           </div>
           <div className="text-center">
             <h4 className="text-4xl font-black text-indigo-600">24/7</h4>
             <p className="text-slate-400 font-bold uppercase text-[10px] mt-2 tracking-widest">Support Hub</p>
           </div>
        </div>
      </section>

      {/* Feature Blocks - Removed Images */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="relative rounded-[3rem] overflow-hidden group shadow-lg h-[400px] bg-slate-900 flex items-center p-12">
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-indigo-900/40 to-transparent"></div>
            <div className="relative z-10">
               <ShieldCheck size={48} className="text-indigo-500 mb-6" />
               <h3 className="text-white text-3xl font-black mb-3">Registered Reliability.</h3>
               <p className="text-slate-300 text-base max-w-md font-medium">
                 Official partner for all national toll plazas, ensuring zero-stop travel for registered fleets.
               </p>
            </div>
          </div>
          <div className="relative rounded-[3rem] overflow-hidden group shadow-lg h-[400px] bg-indigo-950 flex items-center p-12">
            <div className="absolute inset-0 z-0 bg-gradient-to-bl from-slate-900/40 to-transparent"></div>
            <div className="relative z-10 text-white">
               <CheckCircle size={48} className="text-indigo-400 mb-6" />
               <h3 className="text-3xl font-black mb-3">Seamless Safetys.</h3>
               <p className="text-indigo-100 text-base max-w-md font-medium">
                 End-to-end encryption for every transaction, verified by I travels Private limited.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: 'Authorized', desc: 'Officially registered as I travels Private limited.', icon: <ShieldCheck size={28} /> },
             { title: 'Safetys', desc: 'Enterprise-grade protection for your travel wallet.', icon: <CheckCircle size={28} /> },
             { title: 'Verified', desc: 'Direct integration with 35+ major Indian banks.', icon: <Zap size={28} /> },
           ].map((item, idx) => (
             <div key={idx} className="bg-slate-50 p-12 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-lg transition-all text-center">
                <div className="inline-flex p-4 bg-indigo-600 text-white rounded-2xl mb-6">{item.icon}</div>
                <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-slate-500 font-medium text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return user ? (
          <Dashboard 
            user={user} 
            vehicles={vehicles} 
            onAddVehicle={() => setShowVehicleModal(true)}
            onRecharge={() => setCurrentPage('recharge')}
          />
        ) : <div className="p-32 text-center font-black text-slate-400 text-2xl uppercase tracking-[0.2em]">Login Required.</div>;
      case 'recharge':
        return <RechargeForm onSuccess={handleRechargeSuccess} />;
      case 'fees':
        return <FeesContent />;
      case 'documentation':
        return <DocumentationContent />;
      case 'legal':
        return <LegalContent />;
      case 'home':
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-indigo-100 bg-white">
      <Navbar 
        user={user} 
        onLogout={handleLogout} 
        onOpenAuth={() => { setIsSignup(false); setShowAuthModal(true); }} 
        onNavigate={setCurrentPage}
      />
      
      <main className="flex-1">
        {renderContent()}
      </main>

      <footer className="bg-slate-950 text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
             <div className="col-span-1 md:col-span-2 space-y-8">
                <div className="flex items-center">
                  <div className="bg-indigo-600 p-3 rounded-xl text-white mr-4 shadow-xl">
                    <Car size={32} />
                  </div>
                  <span className="text-3xl font-black tracking-tighter">I travels</span>
                </div>
                <p className="text-slate-400 max-w-md text-base font-medium leading-relaxed">
                  The exclusive registered gateway for premium travel recharges and FASTag logistics. Built for India's national expressway network.
                </p>
                <div className="flex items-center space-x-4 text-green-400 font-black uppercase text-[10px] tracking-widest bg-white/5 w-fit px-6 py-3 rounded-full border border-white/10">
                  <ShieldCheck size={18} /> <span>Registered as I travels Private limited</span>
                </div>
             </div>
             <div>
                <h5 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-indigo-400">Hub</h5>
                <ul className="space-y-4 text-slate-400 font-bold text-sm">
                  <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
                  <li><button onClick={() => setCurrentPage('recharge')} className="hover:text-white transition-colors">Recharge</button></li>
                  <li><button onClick={() => setCurrentPage('dashboard')} className="hover:text-white transition-colors">Dashboard</button></li>
                  <li><button onClick={() => setCurrentPage('documentation')} className="hover:text-white transition-colors">Documentation</button></li>
                  <li><button onClick={() => setCurrentPage('fees')} className="hover:text-white transition-colors">Fees</button></li>
                  <li><button onClick={() => setCurrentPage('legal')} className="hover:text-white transition-colors">Safetys</button></li>
                </ul>
             </div>
             <div>
                <h5 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-indigo-400">Contact</h5>
                <ul className="space-y-6 text-slate-400 font-bold text-sm">
                  <li className="text-white text-xl font-black">1800 3300 3333</li>
                  <li>support@itravels.com</li>
                  <li>Mumbai, India</li>
                </ul>
             </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] gap-8">
            <p>© 2024 I travels Private limited. Safetys Guaranteed.</p>
            <div className="flex space-x-8">
               <span className="hover:text-indigo-400 cursor-pointer transition-all">Twitter</span>
               <span className="hover:text-indigo-400 cursor-pointer transition-all">LinkedIn</span>
               <span className="hover:text-indigo-400 cursor-pointer transition-all">Instagram</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Auth Modal - No Images */}
      {showAuthModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl" onClick={() => setShowAuthModal(false)}></div>
          <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden p-16 text-center animate-in zoom-in-95 duration-500">
            <div className="mb-8 inline-flex p-6 bg-indigo-50 text-indigo-600 rounded-3xl shadow-inner">
              <Car size={48} />
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Portal Access</h2>
            <p className="text-slate-500 mb-10 text-base font-medium leading-relaxed">Login as **Sri Krishna** to manage your registered fleet.</p>
            
            <div className="space-y-6">
              <button 
                onClick={handleLogin}
                className="w-full bg-indigo-600 text-white font-black py-6 rounded-2xl hover:bg-indigo-700 transition-all flex items-center justify-center shadow-lg text-xl"
              >
                Sign in as Sri Krishna
              </button>
              <div className="flex items-center space-x-3 justify-center bg-slate-50 py-6 rounded-2xl border border-slate-100">
                 <Phone size={18} className="text-indigo-600" />
                 <span className="text-lg font-black text-slate-900">1800 3300 3333</span>
              </div>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-3 text-slate-400">
               <ShieldCheck size={20} className="text-indigo-400" />
               <span className="text-[10px] uppercase tracking-[0.3em] font-black">Registered Entity Secure Gate</span>
            </div>
          </div>
        </div>
      )}

      {showVehicleModal && (
        <VehicleModal 
          onClose={() => setShowVehicleModal(false)} 
          onAdd={handleAddVehicle} 
        />
      )}

      <AIChatWidget />
    </div>
  );
};

export default App;
