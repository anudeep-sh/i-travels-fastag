
import React, { useState } from 'react';
import { INDIAN_BANKS } from '../constants';
import { CreditCard, CheckCircle2, QrCode, ArrowRight, ShieldCheck, Lock, Calendar, User } from 'lucide-react';

interface RechargeFormProps {
  onSuccess: (amount: number) => void;
}

const RechargeForm: React.FC<RechargeFormProps> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [selectedBank, setSelectedBank] = useState('');
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');
  
  // Card Details State
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16);
    const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 4) value = value.slice(0, 4);
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }
    setExpiry(value);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setIsProcessing(true);
      // Simulate bank gateway processing
      setTimeout(() => {
        setIsProcessing(false);
        setStep(3);
        onSuccess(Number(amount));
      }, 3000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-20 px-4">
      <div className="bg-white rounded-[3rem] shadow-[0_35px_60px_-15px_rgba(16,185,129,0.1)] overflow-hidden border border-slate-100">
        <div className="bg-emerald-600 p-12 text-white text-center">
          <h2 className="text-3xl font-black tracking-tight">FASTag Wallet Top-up</h2>
          <p className="text-emerald-100 mt-2 font-bold uppercase text-[10px] tracking-widest">Instant Emerald Recharge Service</p>
        </div>

        <div className="p-10 lg:p-12">
          {step === 1 && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Vehicle Registration Number</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. MH01AB1234"
                  className="w-full px-8 py-5 rounded-2xl border-2 border-slate-50 focus:border-emerald-600 outline-none transition-all uppercase text-2xl font-black text-slate-900 bg-slate-50 placeholder:text-slate-300"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Select Issuing Bank</label>
                <select 
                  required
                  className="w-full px-8 py-5 rounded-2xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                >
                  <option value="">Choose your bank</option>
                  {INDIAN_BANKS.map(bank => (
                    <option key={bank.id} value={bank.name}>{bank.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest">Recharge Amount (INR)</label>
                <input 
                  type="number"
                  required
                  min="100"
                  placeholder="₹ 500.00"
                  className="w-full px-8 py-5 rounded-2xl border-2 border-slate-50 focus:border-emerald-600 outline-none transition-all text-2xl font-black text-emerald-600 bg-slate-50"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Minimum recharge amount is ₹100</p>
              </div>

              <button className="w-full bg-emerald-600 text-white font-black py-6 rounded-2xl shadow-xl flex items-center justify-center text-xl hover:bg-emerald-500 transition-colors">
                Proceed to Payment <ArrowRight className="ml-3" />
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div className="flex items-center justify-between bg-slate-900 p-8 rounded-3xl text-white">
                <div>
                  <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Vehicle: {vehicleNumber.toUpperCase()}</p>
                  <h3 className="text-4xl font-black text-emerald-400">₹{amount}.00</h3>
                </div>
                <div className="bg-emerald-600/20 p-3 rounded-2xl border border-emerald-500/30">
                  <ShieldCheck className="text-emerald-400" />
                </div>
              </div>

              <div className="flex p-1 bg-slate-50 rounded-2xl">
                <button 
                  onClick={() => setPaymentMethod('card')}
                  className={`flex-1 flex items-center justify-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${paymentMethod === 'card' ? 'bg-white shadow-sm text-emerald-600' : 'text-slate-400'}`}
                >
                  <CreditCard size={16} className="mr-2" /> Card Payment
                </button>
                <button 
                  onClick={() => setPaymentMethod('upi')}
                  className={`flex-1 flex items-center justify-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all ${paymentMethod === 'upi' ? 'bg-white shadow-sm text-emerald-600' : 'text-slate-400'}`}
                >
                  <QrCode size={16} className="mr-2" /> UPI Gateway
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Cardholder Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="text"
                        required
                        placeholder="NAME ON CARD"
                        className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700 uppercase"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                      <input 
                        type="text"
                        required
                        placeholder="0000 0000 0000 0000"
                        className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700 tracking-[0.2em]"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Expiry Date</label>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="text"
                          required
                          placeholder="MM / YY"
                          className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700"
                          value={expiry}
                          onChange={handleExpiryChange}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">CVV</label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                        <input 
                          type="password"
                          required
                          placeholder="***"
                          className="w-full pl-12 pr-6 py-4 rounded-xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700"
                          value={cvv}
                          onChange={handleCvvChange}
                        />
                      </div>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-emerald-600 text-white font-black py-6 rounded-2xl text-xl shadow-xl flex items-center justify-center hover:bg-emerald-500 disabled:bg-slate-200"
                  >
                    {isProcessing ? (
                      <div className="flex items-center">
                        <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Securing Funds...
                      </div>
                    ) : `Pay ₹${amount}.00 Now`}
                  </button>
                </form>
              ) : (
                <div className="space-y-6 text-center py-4">
                  <div className="bg-slate-50 p-8 rounded-[2rem] border border-dashed border-slate-200">
                    <div className="bg-white p-4 rounded-2xl inline-block shadow-sm mb-4">
                      <QrCode size={120} className="text-slate-800" />
                    </div>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Scan QR or enter VPA</p>
                  </div>
                  <input 
                    type="text"
                    placeholder="example@upi"
                    className="w-full px-8 py-4 rounded-xl border-2 border-slate-50 focus:border-emerald-600 outline-none bg-slate-50 font-bold text-slate-700 text-center"
                  />
                  <button 
                    onClick={handleSubmit}
                    disabled={isProcessing}
                    className="w-full bg-emerald-600 text-white font-black py-6 rounded-2xl text-xl shadow-xl"
                  >
                    {isProcessing ? "Verifying VPA..." : "Initiate UPI Request"}
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center space-x-6 text-slate-300 font-black uppercase text-[8px] tracking-[0.3em]">
                <div className="flex items-center"><Lock size={12} className="mr-1" /> PCI-DSS Compliant</div>
                <div className="flex items-center"><ShieldCheck size={12} className="mr-1" /> Verified by Visa</div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-12 space-y-8 animate-in zoom-in duration-500">
               <div className="inline-flex items-center justify-center w-28 h-28 bg-emerald-500 text-white rounded-full shadow-[0_20px_50px_-10px_rgba(16,185,129,0.5)]">
                 <CheckCircle2 size={56} />
               </div>
               <div>
                 <h2 className="text-4xl font-black text-slate-900 tracking-tight">Top-up Successful</h2>
                 <p className="text-slate-500 font-medium mt-4 leading-relaxed">
                   Transaction ID: <span className="font-bold text-slate-900">#TRX-88294</span><br />
                   Your wallet balance for {vehicleNumber.toUpperCase()} has been updated.<br />
                   A digital invoice is on its way to your email.
                 </p>
               </div>
               <button 
                  onClick={() => { setStep(1); setCardNumber(''); setExpiry(''); setCvv(''); setCardName(''); }}
                  className="w-full bg-slate-950 text-white font-black py-6 rounded-2xl active:scale-95 transition-transform text-lg shadow-xl"
                >
                  Return to Dashboard
                </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RechargeForm;
