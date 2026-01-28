
import React, { useState } from 'react';
import Navbar from './Navbar';
import Dashboard from './components/Dashboard';
import RechargeForm from './components/RechargeForm';
import LegalContent from './LegalContent';
import FeesContent from './components/FeesContent';
import DocumentationContent from './components/DocumentationContent';
import FAQContent from './components/FAQContent';
import VehicleModal from './components/VehicleModal';
import GrievanceContent from './components/GrievanceContent';
import { User, Vehicle, VehicleType } from './types';
import { ShieldCheck, Car, Phone, Zap, Clock, Globe, CheckCircle, Mail, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User>({
    id: 'u-777',
    name: 'Valued Customer',
    email: 'support@mtstsevakendra.in',
    walletBalance: 3000.00
  });
  
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 'v1', number: 'TS08EB1234', type: VehicleType.CAR, bank: 'State Bank of India' },
    { id: 'v2', number: 'TS03AH5678', type: VehicleType.CAR, bank: 'HDFC Bank' }
  ]);

  const [showVehicleModal, setShowVehicleModal] = useState(false);

  const handleRechargeSuccess = (amount: number) => {
    setUser(prev => ({ ...prev, walletBalance: prev.walletBalance + amount }));
  };

  const handleAddVehicle = (newVehicle: Vehicle) => {
    setVehicles(prev => [...prev, newVehicle]);
    setShowVehicleModal(false);
  };

  const renderHome = () => (
    <div className="space-y-0 pb-20">
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-slate-900 to-red-950 opacity-95"></div>
        <div className="relative z-10 text-center max-w-5xl px-4">
          <div className="inline-flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full text-blue-300 text-[10px] uppercase font-black tracking-[0.3em] mb-8">
            <ShieldCheck size={14} className="mr-2 text-red-500" /> Authorized MTST SEVA Portal
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-6 tracking-tighter leading-none">
            ON ROAD <span className="text-red-600">GO.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            Premium FASTag solutions by <span className="text-blue-400 font-bold">MTST SEVA Technologies</span>. Instant recharges and secure fleet tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('recharge')}
              className="bg-red-600 text-white px-14 py-6 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30 active:scale-95"
            >
              Start Recharge
            </button>
            <div className="flex items-center space-x-4 bg-white/5 px-10 py-6 rounded-2xl border border-white/10 text-white hover:bg-white/10 transition-colors">
              <Phone size={20} className="text-blue-500" /> 
              <span className="font-black text-lg tracking-tight">+91 9490053646</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 -mt-20 relative z-20">
        {[
          { title: "Instant", desc: "Balance reflects in seconds", color: "red" },
          { title: "Reliable", desc: "99.9% Toll Plaza Uptime", color: "blue" },
          { title: "Secure", desc: "Bank-grade protection", color: "red" },
          { title: "Global", desc: "1000+ Plazas nationwide", color: "blue" },
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100">
            <h3 className={`text-xs font-black uppercase mb-1 ${item.color === 'red' ? 'text-red-600' : 'text-blue-600'}`}>{item.title}</h3>
            <p className="text-slate-500 text-xs font-bold">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="max-w-7xl mx-auto px-4 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <h2 className="text-5xl font-black text-slate-900 leading-[1.1]">The Gold Standard of <span className="text-red-600">Highway Transit</span></h2>
            <div className="space-y-8">
              {[
                "100% Cashless movement across all National Highways.",
                "Real-time SMS and Email transaction alerts.",
                "Automated low-balance warnings for commercial fleets.",
                "Consolidated reporting for GST and business audits.",
                "Official processing by MTST SEVA Technologies Pvt. Ltd."
              ].map((text, i) => (
                <div key={i} className="flex items-start space-x-5">
                  <div className={`mt-1.5 p-1 rounded-lg ${i % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'} text-white`}>
                    <CheckCircle size={14} />
                  </div>
                  <p className="text-slate-700 font-bold leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 rounded-[4rem] p-16 text-white shadow-2xl border-b-[12px] border-red-600">
            <div className="space-y-8">
              <h3 className="text-3xl font-black">Performance Stats</h3>
              <p className="text-slate-400 font-medium leading-relaxed">
                MTST SEVA powers thousands of vehicles in Telangana, providing the backbone for efficient logistics and personal travel.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <p className="text-[10px] font-black uppercase text-red-500 tracking-widest mb-1">Active Users</p>
                  <p className="text-4xl font-black">50K+</p>
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">Daily Tolls</p>
                  <p className="text-4xl font-black">120K</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard user={user} vehicles={vehicles} onAddVehicle={() => setShowVehicleModal(true)} onRecharge={() => setCurrentPage('recharge')} />;
      case 'recharge':
        return <RechargeForm onSuccess={handleRechargeSuccess} />;
      case 'fees':
        return <FeesContent />;
      case 'documentation':
        return <DocumentationContent />;
      case 'faq':
        return <FAQContent />;
      case 'legal':
        return <LegalContent />;
      case 'grievance':
        return <GrievanceContent />;
      case 'home':
      default:
        return renderHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-red-100 selection:text-red-900">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1">{renderContent()}</main>
      
      {showVehicleModal && <VehicleModal onClose={() => setShowVehicleModal(false)} onAdd={handleAddVehicle} />}
      
      <footer className="bg-slate-950 text-white py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-10">
              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-2xl text-white mr-4 shadow-xl shadow-red-600/20">
                  <Car size={28} />
                </div>
                <div>
                  <span className="text-3xl font-black tracking-tighter">On road Go</span>
                  <p className="text-[8px] text-blue-500 font-black uppercase tracking-[0.3em] -mt-1">MTST SEVA TECHNOLOGIES</p>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm font-medium leading-relaxed">
                Official FASTag facilitation partner for commercial and private transit across India. Powered by <span className="text-white font-black">MTST SEVA</span> security.
              </p>
              <div className="space-y-5">
                <div className="flex items-start text-slate-400">
                  <MapPin className="mr-4 text-red-600 flex-shrink-0" size={20} />
                  <span className="text-xs leading-relaxed font-bold">11-9-15, A J MILLS, OCITY, Shivnagar, Warangal – 506002, Telangana</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Phone className="mr-4 text-blue-500" size={18} />
                  <span className="text-xs font-black">+91 9490053646</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Mail className="mr-4 text-red-600" size={18} />
                  <span className="text-xs font-black">support@mtstsevakendra.in</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-black mb-10 uppercase text-[10px] tracking-[0.4em] text-red-600">Site Links</h5>
              <ul className="space-y-5 text-slate-400 font-black text-xs uppercase tracking-widest">
                <li><button onClick={() => setCurrentPage('recharge')} className="hover:text-red-500 transition-colors">Recharge</button></li>
                <li><button onClick={() => setCurrentPage('fees')} className="hover:text-red-500 transition-colors">Pricing</button></li>
                <li><button onClick={() => setCurrentPage('documentation')} className="hover:text-red-500 transition-colors">KYC Docs</button></li>
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-red-500 transition-colors">Help Center</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black mb-10 uppercase text-[10px] tracking-[0.4em] text-blue-600">Company</h5>
              <ul className="space-y-5 text-slate-400 font-black text-xs uppercase tracking-widest">
                <li><button onClick={() => setCurrentPage('legal')} className="hover:text-blue-500 transition-colors">Privacy</button></li>
                <li><button onClick={() => setCurrentPage('legal')} className="hover:text-blue-500 transition-colors">Terms</button></li>
                <li><button onClick={() => setCurrentPage('legal')} className="hover:text-blue-500 transition-colors">Refunds</button></li>
                <li><button onClick={() => setCurrentPage('grievance')} className="hover:text-blue-500 transition-colors">Grievance</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] opacity-50">
            <p>© 2026 MTST SEVA Technologies Pvt. Ltd. All Rights Reserved.</p>
            <div className="flex space-x-8">
              <span>GSTIN: REGISTERED</span>
              <span>CIN: REGISTERED</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
