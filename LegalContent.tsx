
import React, { useState } from 'react';
import { ShieldCheck, FileText, Lock, MapPin, Scale, ShieldAlert, CreditCard } from 'lucide-react';

const LegalContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'safety' | 'refund'>('terms');

  const policies = {
    terms: {
      title: "Terms & Conditions",
      icon: <FileText className="mr-3" size={24} />,
      content: (
        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>Welcome to On road Go. These terms and conditions outline the rules and regulations for the use of MTST SEVA Technologies Pvt. Ltd.'s Website and services.</p>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">1. Acceptance of Terms</h4>
            <p>By accessing this website, we assume you accept these terms and conditions. Do not continue to use On road Go if you do not agree to take all of the terms and conditions stated on this page.</p>
          </section>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">2. FASTag Services</h4>
            <p>MTST SEVA Technologies Pvt. Ltd. acts as a facilitator for NETC FASTag services. Users are responsible for providing accurate Vehicle Registration numbers and RC documents.</p>
          </section>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">3. User Responsibilities</h4>
            <p>Users must maintain a minimum balance as per their vehicle class to avoid blacklisting. MTST SEVA is not liable for tolls deducted due to incorrect tag placement.</p>
          </section>
          <p className="text-[10px] text-slate-400 font-bold italic mt-8">© 2026 MTST SEVA Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      )
    },
    privacy: {
      title: "Privacy Policy",
      icon: <Lock className="mr-3" size={24} />,
      content: (
        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>Your privacy is of utmost importance to MTST SEVA Technologies Pvt. Ltd. This policy details how we collect and protect your data.</p>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">1. Data Collection</h4>
            <p>We collect personal identification information (Name, email, phone) and vehicle details solely for FASTag registration and transaction processing.</p>
          </section>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">2. Data Usage</h4>
            <p>Collected data is used to facilitate toll payments and comply with NHAI/NPCI regulations. We do not sell your data to third-party marketers.</p>
          </section>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">3. Security</h4>
            <p>All financial transactions are processed through AES-256 encrypted tunnels. MTST SEVA uses bank-grade security protocols for your peace of mind.</p>
          </section>
          <p className="text-[10px] text-slate-400 font-bold italic mt-8">© 2026 MTST SEVA Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      )
    },
    safety: {
      title: "Safety Policy",
      icon: <ShieldAlert className="mr-3" size={24} />,
      content: (
        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>Safety on the road and safety of your digital identity are our top priorities at MTST SEVA Technologies Pvt. Ltd.</p>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">1. Road Safety</h4>
            <p>We encourage all travelers to adhere to speed limits. On road Go alerts are designed to be non-intrusive to avoid driver distraction.</p>
          </section>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">2. Transaction Safety</h4>
            <p>Always ensure you are on the official 'mtstsevakendra.in' domain before entering payment details. Never share your OTP with anyone.</p>
          </section>
          <p className="text-[10px] text-slate-400 font-bold italic mt-8">© 2026 MTST SEVA Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      )
    },
    refund: {
      title: "Refund Policy",
      icon: <CreditCard className="mr-3" size={24} />,
      content: (
        <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
          <p>MTST SEVA Technologies Pvt. Ltd. strives for seamless transactions, but we have clear protocols for refund processing.</p>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">1. Eligibility</h4>
            <p>Refunds are applicable for double toll deductions or failed wallet recharges where the amount was debited from the bank.</p>
          </section>
          <section className="space-y-3">
            <h4 className="text-slate-900 font-black uppercase text-sm">2. Timeline</h4>
            <p>Valid requests are processed within 7-10 working days after verification with NPCI logs.</p>
          </section>
          <p className="text-[10px] text-slate-400 font-bold italic mt-8">© 2026 MTST SEVA Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      )
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-24 px-4 space-y-12 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Legal Center</h1>
        <p className="text-slate-500 text-xl font-medium">Official policies of MTST SEVA Technologies Pvt. Ltd.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="lg:w-80 flex-shrink-0">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-4 shadow-sm sticky top-24">
            <div className="space-y-2">
              {(Object.keys(policies) as Array<keyof typeof policies>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full flex items-center px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                    activeTab === key
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                  }`}
                >
                  <span className={activeTab === key ? 'text-white' : 'text-blue-500'}>
                    {policies[key].icon}
                  </span>
                  {policies[key].title}
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center text-red-600 mb-2">
                <MapPin size={16} className="mr-2" />
                <span className="text-[10px] font-black uppercase tracking-widest">Headquarters</span>
              </div>
              <p className="text-[10px] text-slate-500 font-bold leading-relaxed">
                11-9-15, A J MILLS, OCITY, Shivnagar, Warangal – 506002, Telangana.
              </p>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-sm min-h-[600px] relative overflow-hidden">
          <div className="relative z-10 animate-in slide-in-from-right-4 duration-500">
            <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight flex items-center">
              <span className="bg-red-50 text-red-600 p-3 rounded-2xl mr-4">
                {policies[activeTab].icon}
              </span>
              {policies[activeTab].title}
            </h2>
            <div className="h-px bg-slate-50 w-full mb-10" />
            {policies[activeTab].content}
          </div>
        </main>
      </div>

      <div className="text-center pt-8">
        <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em]">
          MTST SEVA Technologies Pvt. Ltd. • All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default LegalContent;
