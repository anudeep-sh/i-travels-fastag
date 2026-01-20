
import React from 'react';
import { CreditCard, Truck, ShieldCheck, Info } from 'lucide-react';

const FeesContent: React.FC = () => {
  const generalFees = [
    { particulars: 'Tag Issuance Fee (one time)', amount: '₹100/- (inclusive of taxes)' },
    { particulars: 'Reissuance Fees', amount: '₹100/- (inclusive of taxes)' },
    { particulars: 'Security Deposit', amount: '₹200/-' },
    { particulars: 'Minimum Recharge', amount: '₹100/- (additional options available)' },
  ];

  const vehicleClasses = [
    { class: '4', description: 'Car / Jeep / Van', minBalance: '₹1/-' },
    { class: '4', description: 'Tata Ace and similar mini Light Commercial Vehicle', minBalance: '₹160/-' },
    { class: '5', description: 'Light Commercial Vehicle (LCV)', minBalance: '₹140/-' },
    { class: '6', description: 'Bus 3 Axle / Truck 3 Axle', minBalance: '₹300/-' },
    { class: '7', description: 'Bus 2 Axle / Truck 2 Axle', minBalance: '₹200/-' },
  ];

  return (
    <div className="max-w-5xl mx-auto py-24 px-4 space-y-20 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Fees & Charges</h1>
        <p className="text-slate-500 text-xl font-medium">Transparent pricing for your registered I travels FASTag.</p>
      </div>

      <div className="space-y-12">
        {/* General Fees Table */}
        <section className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-indigo-600 px-10 py-6 flex items-center text-white">
            <CreditCard size={24} className="mr-4" />
            <h2 className="text-xl font-black uppercase tracking-tight">One-time Particulars</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 bg-slate-50/50">
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Particulars</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Amount (INR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {generalFees.map((fee, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-10 py-6 text-sm font-bold text-slate-700">{fee.particulars}</td>
                    <td className="px-10 py-6 text-sm font-black text-indigo-600">{fee.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Vehicle Class Table */}
        <section className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-slate-100">
          <div className="bg-indigo-900 px-10 py-6 flex items-center text-white">
            <Truck size={24} className="mr-4" />
            <h2 className="text-xl font-black uppercase tracking-tight">Vehicle Class Thresholds</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-50 bg-slate-50/50">
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Class</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Vehicle Description</th>
                  <th className="px-10 py-5 text-[10px] font-black uppercase tracking-widest text-slate-400">Min. Balance*</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {vehicleClasses.map((v, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-10 py-6 text-sm font-black text-slate-900">{v.class}</td>
                    <td className="px-10 py-6 text-sm font-medium text-slate-500 leading-relaxed">{v.description}</td>
                    <td className="px-10 py-6 text-sm font-black text-indigo-600">{v.minBalance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 px-10 py-4 flex items-center space-x-3 border-t border-slate-100">
            <Info size={14} className="text-indigo-400" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              * Minimum balance is threshold for tag to remain active.
            </p>
          </div>
        </section>
      </div>

      <div className="bg-indigo-600 rounded-[3rem] p-16 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <ShieldCheck size={48} className="mx-auto mb-8 text-indigo-200" />
          <h3 className="text-3xl font-black mb-4">Official NHAI Compliance</h3>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            All fees are strictly regulated as per I travels Private limited registration and National Electronic Toll Collection guidelines.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <span className="bg-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">Authorized Provider</span>
             <span className="bg-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/20">No Hidden Costs</span>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      </div>
    </div>
  );
};

export default FeesContent;
