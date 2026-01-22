
import React from 'react';
import { Info } from 'lucide-react';

const FeesContent: React.FC = () => {
  const generalFees = [
    { particulars: 'Tag Issuance Fee (one time)', amount: '₹100/- (inclusive of taxes)' },
    { particulars: 'Reissuance Fees', amount: '₹100/- (inclusive of taxes)' },
    { particulars: 'Security Deposit', amount: '₹200/-' },
    { particulars: 'Minimum Recharge', amount: '₹100/- (customer will have the option for additional recharge)' },
  ];

  const vehicleClasses = [
    { class: '4', description: 'Car / Jeep / Van', minBalance: '₹1/-' },
    { class: '4', description: 'Tata Ace and similar mini Light Commercial Vehicle', minBalance: '₹160/-' },
    { class: '5', description: 'Light Commercial Vehicle (LCV)', minBalance: '₹140/-' },
    { class: '6', description: 'Bus 3 Axle / Truck 3 Axle', minBalance: '₹300/-' },
    { class: '7', description: 'Bus 2 Axle / Truck 2 Axle', minBalance: '₹200/-' },
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Fees & Charges</h1>
        <p className="text-slate-500 text-base font-medium">Transparent pricing for all FASTag related services.</p>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-3xl flex items-start space-x-4">
        <div className="p-2 bg-emerald-600 text-white rounded-xl shadow-lg">
          <Info size={20} />
        </div>
        <p className="text-emerald-800 text-sm font-medium leading-relaxed">
          The following charges are standardized across all NHAI authorized issuing banks. Note that some banks might have additional promotional offers or convenience fees for credit card payments.
        </p>
      </div>

      {/* Table 1: Particulars */}
      <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="px-8 py-6 text-sm font-black uppercase tracking-widest border-r border-white/10">Service Particulars</th>
              <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Amount (INR)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {generalFees.map((fee, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-6 text-sm text-slate-700 font-bold border-r border-slate-50">{fee.particulars}</td>
                <td className="px-8 py-6 text-sm text-slate-600 font-medium">{fee.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table 2: Vehicle Class */}
      <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-emerald-600 text-white">
            <tr>
              <th className="px-8 py-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-1/4">Class ID</th>
              <th className="px-8 py-6 text-sm font-black uppercase tracking-widest border-r border-white/10 w-1/2">Vehicle Description</th>
              <th className="px-8 py-6 text-sm font-black uppercase tracking-widest">Min. Balance Required</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-slate-100">
            {vehicleClasses.map((v, idx) => (
              <tr key={idx} className="hover:bg-slate-50 transition-colors">
                <td className="px-8 py-6 text-sm text-slate-900 font-black border-r border-slate-50">{v.class}</td>
                <td className="px-8 py-6 text-sm text-slate-700 font-bold border-r border-slate-50">{v.description}</td>
                <td className="px-8 py-6 text-sm text-emerald-600 font-black">{v.minBalance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <p className="text-[10px] text-slate-400 font-bold text-center uppercase tracking-[0.2em]">
        * Minimum balance is essential to keep the tag active at toll plazas.
      </p>
    </div>
  );
};

export default FeesContent;
