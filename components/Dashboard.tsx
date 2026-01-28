
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
    <div className="max-w-7xl mx-auto py-12 px-4 space-y-10 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm">
        <div>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Fleet Monitoring</h2>
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">Real-time highway transit surveillance</p>
        </div>
        <div className="flex items-center space-x-3 bg-blue-50 px-6 py-3 rounded-2xl text-blue-700 border border-blue-100">
          <ShieldCheck size={20} className="text-red-600" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">MTST Verified Access</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gradient-to-br from-red-600 via-red-700 to-blue-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-10">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-xl border border-white/10">
                <Wallet className="text-white" size={28} />
              </div>
              <button 
                onClick={onRecharge}
                className="bg-white text-red-700 px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl active:scale-95"
              >
                Top-up
              </button>
            </div>
            <p className="text-red-100 text-[10px] font-black uppercase tracking-[0.3em] opacity-70 mb-1">On road Go Balance</p>
            <h3 className="text-5xl font-black tracking-tighter">₹{user.walletBalance.toLocaleString()}</h3>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        </div>

        <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest">Active Fleet</h4>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">{vehicles.length} Units Registered</p>
            </div>
            <button onClick={onAddVehicle} className="p-3 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors border border-red-100 active:scale-90">
              <Plus size={22} />
            </button>
          </div>
          <div className="space-y-4 max-h-[140px] overflow-y-auto pr-2 custom-scrollbar">
            {vehicles.map((v) => (
              <div key={v.id} className="flex items-center p-4 rounded-2xl border border-slate-50 bg-slate-50/50 group hover:border-blue-200 transition-all">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mr-4 text-blue-600 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Car size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-black text-xs uppercase tracking-widest text-slate-900">{v.number}</p>
                  <p className="text-[9px] text-slate-400 font-black uppercase">{v.bank}</p>
                </div>
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-pulse shadow-lg shadow-blue-500/50"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-xl flex flex-col justify-between border-t-8 border-blue-600">
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center text-red-500">
               <Zap size={16} className="mr-2" /> Global Status
            </h4>
            <p className="text-slate-400 text-xs font-bold leading-relaxed">
              Monitoring 1,200+ toll plazas for transaction integrity and tag health.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 flex justify-between items-center">
            <span className="text-[9px] font-black uppercase tracking-widest text-blue-400">Network Stable</span>
            <div className="flex -space-x-3">
               {[1,2,3].map(i => <div key={i} className={`w-8 h-8 rounded-full border-4 border-slate-900 ${i % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'}`} />)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-slate-100">
          <h4 className="text-sm font-black text-slate-900 mb-10 uppercase tracking-widest">Spending Analytics</h4>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 900}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1.5rem', border: 'none', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)', fontWeight: 'bold' }}
                  cursor={{ fill: '#f8fafc' }}
                />
                <Bar dataKey="amount" radius={[8, 8, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.amount > 1000 ? '#dc2626' : '#2563eb'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-[3.5rem] p-10 shadow-sm border border-slate-100">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-10">Transaction Logs</h4>
          <div className="space-y-4 max-h-[280px] overflow-y-auto pr-3 custom-scrollbar">
            {MOCK_TRANSACTIONS.map((t) => (
              <div key={t.id} className="flex items-center p-5 rounded-[2rem] border border-slate-50 hover:bg-slate-50 transition-all group">
                <div className={`p-4 rounded-2xl mr-5 ${t.type === 'Credit' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                  {t.type === 'Credit' ? <ArrowDownLeft size={22} /> : <ArrowUpRight size={22} />}
                </div>
                <div className="flex-1">
                  <p className="font-black text-xs text-slate-800 uppercase tracking-tight">{t.description}</p>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{t.date} • {t.vehicleNumber}</p>
                </div>
                <div className="text-right">
                  <p className={`font-black text-base ${t.type === 'Credit' ? 'text-red-600' : 'text-blue-900'}`}>
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
