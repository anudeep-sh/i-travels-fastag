
import React from 'react';
import { Wallet, Car, ArrowUpRight, ArrowDownLeft, Plus, ShieldCheck, Zap } from 'lucide-react';
import { User, Vehicle } from '../types';
import { MOCK_TRANSACTIONS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface DashboardProps {
  user: User;
  vehicles: Vehicle[];
  onAddVehicle: () => void;
  onRecharge: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, vehicles, onAddVehicle, onRecharge }) => {
  const chartData = [
    { name: 'Mon', amount: 450 },
    { name: 'Tue', amount: 120 },
    { name: 'Wed', amount: 890 },
    { name: 'Thu', amount: 230 },
    { name: 'Fri', amount: 670 },
    { name: 'Sat', amount: 1200 },
    { name: 'Sun', amount: 500 },
  ];

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 space-y-8 animate-in fade-in duration-700">
      {/* Top Welcome Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Fleet Service Hub</h2>
          <p className="text-xs text-slate-500 font-medium">Your registered vehicle tags are monitored for high-speed transit.</p>
        </div>
        <div className="flex items-center space-x-3 bg-emerald-50 px-4 py-2 rounded-xl text-emerald-600 border border-emerald-100">
          <ShieldCheck size={18} />
          <span className="text-[10px] font-black uppercase tracking-widest">Official Registration Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wallet Balance - Emerald Gradient */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                <Wallet className="text-white" size={24} />
              </div>
              <button 
                onClick={onRecharge}
                className="bg-white text-emerald-700 px-5 py-2 rounded-full text-xs font-black hover:bg-emerald-50 transition-all shadow-lg active:scale-95"
              >
                Recharge Now
              </button>
            </div>
            <p className="text-emerald-100 text-[10px] font-black uppercase tracking-widest opacity-80">Available Wallet Balance</p>
            <h3 className="text-4xl font-black mt-1">₹{user.walletBalance.toLocaleString()}</h3>
          </div>
          <Zap size={200} className="absolute -bottom-10 -right-10 text-white/5 -rotate-12 group-hover:scale-110 transition-transform duration-700" />
        </div>

        {/* Vehicles Summary */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-base font-black text-slate-900 tracking-tight uppercase">Active Fleet</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{vehicles.length} Vehicle(s) Linked</p>
            </div>
            <button onClick={onAddVehicle} className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors shadow-sm active:scale-90 border border-emerald-100">
              <Plus size={20} />
            </button>
          </div>
          <div className="space-y-3 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
            {vehicles.map((v) => (
              <div key={v.id} className="flex items-center p-3.5 rounded-2xl border border-slate-50 bg-slate-50/30 hover:bg-emerald-50/50 transition-colors group">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center mr-3 text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Car size={18} />
                </div>
                <div>
                  <p className="font-black text-[11px] uppercase tracking-wider text-slate-900">{v.number}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{v.bank}</p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Portal */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="relative z-10">
            <h4 className="text-base font-black uppercase tracking-tight mb-2 flex items-center">
               <Zap size={16} className="mr-2 text-emerald-400" /> Service AI
            </h4>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Real-time monitoring for toll disputes, blacklisted tags, and instant recharge assistance.
            </p>
          </div>
          <div className="relative z-10 mt-6 pt-6 border-t border-white/5 flex justify-between items-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Always Online</span>
            <div className="flex -space-x-2">
               {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-emerald-600" />)}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <h4 className="text-base font-black text-slate-900 mb-8 uppercase tracking-tight">Toll Consumption Analysis</h4>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#cbd5e1', fontSize: 10, fontWeight: 700}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#cbd5e1', fontSize: 10, fontWeight: 700}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  cursor={{ fill: '#f1f5f9' }}
                />
                <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.amount > 1000 ? '#059669' : '#e2e8f0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <h4 className="text-base font-black text-slate-900 uppercase tracking-tight mb-8">Recent Wallet Activity</h4>
          <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
            {MOCK_TRANSACTIONS.map((t) => (
              <div key={t.id} className="flex items-center p-4 rounded-[1.5rem] border border-slate-50 hover:bg-slate-50 transition-all hover:border-emerald-100">
                <div className={`p-3 rounded-xl mr-4 ${t.type === 'Credit' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'}`}>
                  {t.type === 'Credit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                </div>
                <div className="flex-1">
                  <p className="font-black text-[12px] text-slate-800 uppercase">{t.description}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">{t.date} • {t.vehicleNumber}</p>
                </div>
                <div className="text-right">
                  <p className={`font-black text-[13px] ${t.type === 'Credit' ? 'text-emerald-600' : 'text-slate-900'}`}>
                    {t.type === 'Credit' ? '+' : '-'}₹{t.amount.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
