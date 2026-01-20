
import React, { useState } from 'react';
import { X, Car, Landmark, Info } from 'lucide-react';
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
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95">
        <div className="bg-indigo-600 p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold flex items-center">
            <Car className="mr-3" /> Register New Vehicle
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="bg-blue-50 p-4 rounded-2xl flex items-start space-x-3 text-blue-700 text-sm">
            <Info className="mt-0.5 flex-shrink-0" size={18} />
            <p>Ensure your vehicle number matches the RC exactly. FASTag activation takes 24-48 hours after successful registration.</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Vehicle Registration Number</label>
            <input 
              required
              type="text"
              placeholder="e.g. MH01AB1234"
              className="w-full px-5 py-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none transition-all uppercase font-bold"
              value={vNumber}
              onChange={(e) => setVNumber(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Vehicle Class</label>
              <select 
                className="w-full px-4 py-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none bg-white"
                value={vType}
                onChange={(e) => setVType(e.target.value as VehicleType)}
              >
                {VEHICLE_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Issuing Bank</label>
              <select 
                required
                className="w-full px-4 py-4 rounded-2xl border-2 border-slate-100 focus:border-indigo-500 outline-none bg-white"
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

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5">
            Link FASTag to Wallet
          </button>
        </form>
      </div>
    </div>
  );
};

export default VehicleModal;
