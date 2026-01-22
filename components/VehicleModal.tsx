
import React, { useState } from 'react';
import { X, Car, Info, ShieldCheck } from 'lucide-react';
import { INDIAN_BANKS, VEHICLE_TYPES } from '../constants';
import { VehicleType, Vehicle } from '../types';

interface VehicleModalProps {
  onClose: () => void;
  onAdd: (vehicle: Vehicle) => void;
}

const VehicleModal: React.FC<VehicleModalProps> = ({ onClose, onAdd }) => {
  const [vNumber, setVNumber] = useState('');
  const [vType, setVType] = useState<VehicleType>(VehicleType.CAR);
  const [vBank, setVBank] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newVehicle: Vehicle = {
      id: Math.random().toString(36).substr(2, 9),
      number: vNumber.toUpperCase(),
      type: vType,
      bank: vBank
    };
    onAdd(newVehicle);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        <div className="bg-emerald-600 p-8 text-white flex justify-between items-center">
          <div>
            <h3 className="text-xl font-black flex items-center tracking-tight">
              <Car className="mr-3" /> Register Vehicle
            </h3>
            <p className="text-[10px] text-emerald-100 font-bold uppercase tracking-widest mt-1">Official NHAI Linking Service</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-10 space-y-8">
          <div className="bg-emerald-50 p-6 rounded-3xl flex items-start space-x-4 border border-emerald-100">
            <Info className="mt-0.5 flex-shrink-0 text-emerald-600" size={20} />
            <p className="text-emerald-800 text-xs font-medium leading-relaxed">
              Verify your Registration Certificate (RC) details before submission. Tags are linked instantly to your Emerald Wallet.
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Registration Number</label>
            <input 
              required
              type="text"
              placeholder="e.g. MH01AB1234"
              className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 focus:border-emerald-600 outline-none transition-all uppercase font-black text-xl text-slate-900 bg-slate-50"
              value={vNumber}
              onChange={(e) => setVNumber(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Vehicle Class</label>
              <select 
                className="w-full px-4 py-4 rounded-2xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700 text-sm"
                value={vType}
                onChange={(e) => setVType(e.target.value as VehicleType)}
              >
                {VEHICLE_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Issuing Bank</label>
              <select 
                required
                className="w-full px-4 py-4 rounded-2xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700 text-sm"
                value={vBank}
                onChange={(e) => setVBank(e.target.value)}
              >
                <option value="">Select Bank</option>
                {INDIAN_BANKS.map(bank => (
                  <option key={bank.id} value={bank.name}>{bank.name}</option>
                ))}
              </select>
            </div>
          </div>

          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-5 rounded-2xl shadow-xl transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center text-lg">
            <ShieldCheck size={20} className="mr-3" /> Confirm & Link Tag
          </button>
        </form>
      </div>
    </div>
  );
};

export default VehicleModal;
