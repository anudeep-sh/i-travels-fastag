
import React, { useState } from 'react';
import { INDIAN_BANKS, VEHICLE_TYPES } from '../constants';
import { CreditCard, ShieldCheck, CheckCircle2, QrCode, Smartphone, Zap, ArrowRight } from 'lucide-react';

interface RechargeFormProps {
  onSuccess: (amount: number) => void;
}

const RechargeForm: React.FC<RechargeFormProps> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'net'>('card');
  const [upiId, setUpiId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
        onSuccess(Number(amount));
      }, 2500);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-indigo-600 p-12 text-white text-center">
          <h2 className="text-3xl font-black tracking-tight">FASTag Wallet Top-up</h2>
          <p className="text-indigo-100 mt-2 font-bold uppercase text-[10px] tracking-widest">Registered NHAI Service Provider</p>
        </div>

        <div className="p-12">
          {step === 1 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Vehicle Number</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. MH01AB1234"
                  className="w-full px-8 py-5 rounded-2xl border-2 border-slate-50 focus:border-indigo-600 outline-none transition-all uppercase text-2xl font-black text-slate-900 bg-slate-50 placeholder:text-slate-300"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Issuing Bank</label>
                <select 
                  required
                  className="w-full px-8 py-5 rounded-2xl border-2 border-slate-50 focus:border-indigo-600 outline-none bg-slate-50 font-bold text-slate-700"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Select your bank</option>
                  {INDIAN_BANKS.map(bank => (
                    <option key={bank.id} value={bank.name}>{bank.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Amount (INR)</label>
                <input 
                  type="number"
                  required
                  min="100"
                  placeholder="₹ 500.00"
                  className="w-full px-8 py-5 rounded-2xl border-2 border-slate-50 focus:border-indigo-600 outline-none transition-all text-2xl font-black text-indigo-600 bg-slate-50"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button className="w-full bg-indigo-600 text-white font-black py-6 rounded-2xl shadow-xl flex items-center justify-center text-xl">
                Proceed to Pay <ArrowRight className="ml-3" />
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div className="bg-slate-900 p-8 rounded-3xl text-white">
                <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Total Bill</p>
                <h3 className="text-4xl font-black text-white">₹{amount}.00</h3>
              </div>

              <div className="space-y-4">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center p-6 border-2 rounded-2xl transition-all ${paymentMethod === 'card' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}
                >
                  <CreditCard className="mr-4" size={24} />
                  <span className="font-black">Debit / Credit Card</span>
                </button>
                <button 
                  onClick={() => setPaymentMethod('upi')}
                  className={`w-full flex items-center p-6 border-2 rounded-2xl transition-all ${paymentMethod === 'upi' ? 'border-indigo-600 bg-indigo-50' : 'border-slate-50'}`}
                >
                  <QrCode className="mr-4" size={24} />
                  <span className="font-black">UPI Instant Pay</span>
                </button>
              </div>

              <button 
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full bg-indigo-600 text-white font-black py-6 rounded-2xl text-xl shadow-xl flex items-center justify-center"
              >
                {isProcessing ? "Processing Securely..." : "Pay Securely"}
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-8 space-y-8">
               <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500 text-white rounded-full shadow-xl">
                 <CheckCircle2 size={48} />
               </div>
               <div>
                 <h2 className="text-4xl font-black text-slate-900">Payment Successful</h2>
                 <p className="text-slate-500 font-medium mt-4">
                   Your wallet has been credited with ₹{amount}. Transaction verified.
                 </p>
               </div>
               <button 
                  onClick={() => setStep(1)}
                  className="w-full bg-slate-950 text-white font-black py-5 rounded-2xl"
                >
                  Back to Hub
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RechargeForm;
