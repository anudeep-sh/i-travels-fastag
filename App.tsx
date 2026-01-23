
import React, { useState } from 'react';
import Navbar from './Navbar';
import Dashboard from './components/Dashboard';
import RechargeForm from './components/RechargeForm';
import LegalContent from './LegalContent';
import FeesContent from './components/FeesContent';
import DocumentationContent from './components/DocumentationContent';
import FAQContent from './components/FAQContent';
import AIChatWidget from './components/AIChatWidget';
import VehicleModal from './components/VehicleModal';
import GrievanceContent from './components/GrievanceContent';
import { User, Vehicle, VehicleType } from './types';
import { ShieldCheck, Car, Phone, Zap, Clock, Globe, CheckCircle, Mail, MapPin } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState<User>({
    id: 'u-777',
    name: 'Customer',
    email: 'support@thequickpayme.com',
    walletBalance: 3000.00
  });
  
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 'v1', number: 'HR26DQ1234', type: VehicleType.CAR, bank: 'Axis Bank' },
    { id: 'v2', number: 'DL3CAY5678', type: VehicleType.CAR, bank: 'HDFC Bank' }
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
    <div className="space-y-16 pb-20">
      <section className="relative h-[85vh] flex items-center justify-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] to-[#111827] opacity-90"></div>
        <div className="relative z-10 text-center max-w-5xl px-4 animate-in fade-in zoom-in duration-1000">
          <div className="inline-flex items-center bg-white/5 border border-white/10 px-6 py-2 rounded-full text-white/70 text-[10px] uppercase font-black tracking-widest mb-8">
            <ShieldCheck size={14} className="mr-2 text-emerald-400" /> Authorized NHAI Service Portal • 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-tight">
            NEO Travels. <br /><span className="text-emerald-500">Fast. Green. Secure.</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
            India's premium platform for FASTag management. Instant recharges, automated fleet tracking, and nationwide coverage.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => setCurrentPage('recharge')}
              className="bg-emerald-600 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-emerald-500 transition-all shadow-2xl shadow-emerald-600/20 active:scale-95"
            >
              Start Recharge
            </button>
            <div className="flex items-center space-x-4 bg-white/5 px-10 py-5 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer">
              <Phone size={20} className="text-emerald-400" /> 
              <span className="font-black text-lg">8143900450</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expanded Information Section */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 -mt-32 relative z-20">
        {[
          { title: "NEO Instant", desc: "Balance reflects in 60 seconds", icon: <Zap className="text-emerald-500" /> },
          { title: "99.9% Uptime", desc: "No delays at toll plazas", icon: <Clock className="text-emerald-500" /> },
          { title: "Pan-India", desc: "Works at 1000+ toll plazas", icon: <Globe className="text-emerald-500" /> },
          { title: "Nex Security", desc: "Bank-grade data safety", icon: <ShieldCheck className="text-emerald-500" /> },
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 transition-transform hover:-translate-y-2">
            <div className="mb-4 bg-emerald-50 w-12 h-12 flex items-center justify-center rounded-2xl">{item.icon}</div>
            <h3 className="text-sm font-black uppercase mb-1 text-slate-900">{item.title}</h3>
            <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Benefits Information */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-black text-slate-900 leading-tight">Why Choose <span className="text-emerald-600 italic underline decoration-emerald-200">NEO Travels</span> Official Services?</h2>
            <div className="space-y-6">
              {[
                "Cashless transactions for a seamless journey across Bharat.",
                "Proprietary security protocols for wallet protection.",
                "SMS alerts for every toll deduction and low balance.",
                "Enterprise portal for easy tracking and historical reporting.",
                "Official NHAI & NPCI registered facilitation partner."
              ].map((text, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="mt-1 bg-emerald-100 p-1 rounded-full text-emerald-600"><CheckCircle size={16} /></div>
                  <p className="text-slate-600 font-medium leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-emerald-600 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-black mb-4">The NEO Advantage</h3>
              <p className="text-emerald-100 font-medium mb-8 leading-relaxed">
                NEO Travels ensures that your road travel is backed by the most stable fintech infrastructure in Hyderabad. From private cars to large commercial fleets, we handle it all with precision.
              </p>
              <div className="bg-white/10 p-6 rounded-3xl border border-white/20">
                <p className="text-xs font-black uppercase tracking-widest mb-2 text-emerald-300">Total Registered Vehicles</p>
                <p className="text-5xl font-black">50,000+</p>
              </div>
            </div>
            <Car size={300} className="absolute -bottom-20 -right-20 text-emerald-700/30 rotate-12" />
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
    <div className="min-h-screen flex flex-col bg-white selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <main className="flex-1">{renderContent()}</main>
      
      {showVehicleModal && <VehicleModal onClose={() => setShowVehicleModal(false)} onAdd={handleAddVehicle} />}
      <AIChatWidget />
      
      <footer className="bg-slate-900 text-white py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center">
                <div className="bg-emerald-600 p-2 rounded-xl text-white mr-3">
                  <Car size={24} />
                </div>
                <span className="text-2xl font-black tracking-tighter">NEO Travels</span>
              </div>
              <p className="text-slate-400 max-w-sm font-medium leading-relaxed">
                The leading FASTag portal by <span className="text-emerald-500 font-bold">NEOFIN NEX India Private Limited</span>. Facilitating high-speed transit across every toll gate in India.
              </p>
              <div className="space-y-4">
                <div className="flex items-start text-slate-400">
                  <MapPin className="mr-3 text-emerald-500 flex-shrink-0" size={20} />
                  <span className="text-xs leading-relaxed">Plot no 102, First floor, Sukiran Apartments, Venkatagiri, Yousufguda, Hyderabad, Telangana 500045</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Phone className="mr-3 text-emerald-500" size={18} />
                  <span className="text-xs">8143900450</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Mail className="mr-3 text-emerald-500" size={18} />
                  <span className="text-xs">support@thequickpayme.com</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-emerald-500">Navigation</h5>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><button onClick={() => setCurrentPage('recharge')} className="hover:text-white transition-colors">Recharge Wallet</button></li>
                <li><button onClick={() => setCurrentPage('fees')} className="hover:text-white transition-colors">Fees & Charges</button></li>
                <li><button onClick={() => setCurrentPage('documentation')} className="hover:text-white transition-colors">Required Docs</button></li>
                <li><button onClick={() => setCurrentPage('faq')} className="hover:text-white transition-colors">Help Center</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-emerald-500">Legal Compliance</h5>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><button onClick={() => setCurrentPage('legal')} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setCurrentPage('legal')} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><button onClick={() => setCurrentPage('legal')} className="hover:text-white transition-colors">Refund Policy</button></li>
                <li><button onClick={() => setCurrentPage('grievance')} className="hover:text-white transition-colors">Grievance Redressal</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-medium uppercase tracking-[0.3em] opacity-60 text-center md:text-left">
            <p>© 2026 NEOFIN NEX India Private Limited. All Rights Reserved.</p>
            <div className="flex space-x-6 text-[10px]">
              <span className="bg-emerald-950 px-4 py-2 rounded border border-emerald-900/50">GSTIN: Registered</span>
              <span className="bg-emerald-950 px-4 py-2 rounded border border-emerald-900/50">CIN: Registered</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
