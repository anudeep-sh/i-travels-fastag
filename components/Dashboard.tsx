
import React from 'react';
import { Wallet, Car, ArrowUpRight, ArrowDownLeft, Plus, History, ShieldCheck, CheckCircle } from 'lucide-react';
import { User, Vehicle, Transaction } from '../types';
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
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Welcome, {user.name}</h2>
          <p className="text-xs text-slate-500 font-medium">Your registered fleet is fully operational across all toll plazas.</p>
        </div>
        <div className="flex items-center space-x-3 bg-indigo-50 px-4 py-2 rounded-xl text-indigo-600">
          <ShieldCheck size={18} />
          <span className="text-[10px] font-black uppercase tracking-widest">I travels Verified</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Wallet Balance */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[2.5rem] p-8 text-white shadow-xl relative overflow-hidden group">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
                <Wallet className="text-white" size={24} />
              </div>
              <button 
                onClick={onRecharge}
                className="bg-white text-indigo-600 px-5 py-2 rounded-full text-xs font-black hover:bg-slate-100 transition-all shadow-lg active:scale-95"
              >
                Top Up
              </button>
            </div>
            <p className="text-indigo-100 text-[10px] font-black uppercase tracking-widest opacity-80">Wallet Balance</p>
            <h3 className="text-4xl font-black mt-1">₹{user.walletBalance.toLocaleString()}</h3>
            <div className="mt-8 flex items-center space-x-2 text-[10px] font-black uppercase tracking-tighter bg-white/10 w-fit px-3 py-1 rounded-lg">
               <ArrowUpRight size={14} className="text-green-400" />
               <span>₹3,000 Verified Pool</span>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors"></div>
        </div>

        {/* Vehicles Summary */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h4 className="text-base font-black text-slate-900 tracking-tight uppercase">Fleet Hub</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{vehicles.length} Active Tags</p>
            </div>
            <button onClick={onAddVehicle} className="p-2.5 bg-slate-50 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors shadow-sm active:scale-90">
              <Plus size={20} />
            </button>
          </div>
          <div className="space-y-3 max-h-[160px] overflow-y-auto pr-2 custom-scrollbar">
            {vehicles.length > 0 ? vehicles.map((v) => (
              <div key={v.id} className="flex items-center p-3.5 rounded-2xl border border-slate-50 bg-slate-50/30 hover:bg-slate-50 transition-colors">
                <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center mr-3 text-indigo-600 shadow-sm">
                  <Car size={18} />
                </div>
                <div>
                  <p className="font-black text-[11px] uppercase tracking-wider text-slate-900">{v.number}</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">{v.bank}</p>
                </div>
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                </div>
              </div>
            )) : (
              <div className="text-center py-8">
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">No Vehicles Registered</p>
              </div>
            )}
          </div>
        </div>

        {/* AI Portal Prompt */}
        <div className="bg-slate-950 rounded-[2.5rem] p-8 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h4 className="text-base font-black uppercase tracking-tight mb-2">Sri Krishna AI</h4>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Real-time travel assistance for NHAI disputes, toll rates, and digital bridge status.
            </p>
          </div>
          <button className="relative z-10 w-full bg-white/10 hover:bg-white/20 text-white font-black text-xs uppercase tracking-[0.2em] py-4 rounded-2xl mt-6 transition-all border border-white/10 backdrop-blur-md">
            Enter AI Portal
          </button>
          <div className="absolute top-0 right-0 p-4 opacity-10">
             <ShieldCheck size={100} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spending Analysis */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <h4 className="text-base font-black text-slate-900 mb-8 uppercase tracking-tight">Spending Trends</h4>
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f8fafc" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#cbd5e1', fontSize: 10, fontWeight: 700}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#cbd5e1', fontSize: 10, fontWeight: 700}} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', fontSize: '10px', fontWeight: 'bold' }}
                />
                <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.amount > 1000 ? '#4f46e5' : '#e2e8f0'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Transaction History without Imagery */}
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-8">
            <h4 className="text-base font-black text-slate-900 uppercase tracking-tight">Recent Activity</h4>
            <History className="text-slate-300" size={18} />
          </div>
          <div className="space-y-4">
            {MOCK_TRANSACTIONS.map((t) => (
              <div key={t.id} className="group flex items-center p-4 rounded-[1.5rem] border border-slate-50 hover:border-indigo-100 hover:bg-indigo-50/10 transition-all cursor-default">
                <div className={`p-3 rounded-xl mr-4 ${t.type === 'Credit' ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-600'}`}>
                  {t.type === 'Credit' ? <ArrowDownLeft size={20} /> : <ArrowUpRight size={20} />}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-black text-[12px] text-slate-800 tracking-tight truncate uppercase">{t.description}</p>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-tighter mt-0.5">
                    {t.date} • <span className="text-slate-500">{t.vehicleNumber}</span>
                  </p>
                </div>

                <div className="text-right ml-4">
                  <p className={`font-black text-[13px] tracking-tight ${t.type === 'Credit' ? 'text-green-600' : 'text-slate-900'}`}>
                    {t.type === 'Credit' ? '+' : '-'}₹{t.amount.toFixed(2)}
                  </p>
                  <div className="flex items-center justify-end mt-1">
                    <CheckCircle className="text-green-500 mr-1" size={10} />
                    <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Success</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full text-center py-4 text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em] hover:text-indigo-700 mt-4 border-t border-slate-50 pt-6">
            View All Logs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
