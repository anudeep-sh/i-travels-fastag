
import React from 'react';
import { ShieldCheck, FileText, Lock, Globe } from 'lucide-react';

const LegalContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Policies & Compliance</h1>
        <p className="text-slate-500 text-xl font-medium">Official standards for I travels Private limited.</p>
      </div>

      <section className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
        <div className="flex items-center mb-8 text-indigo-600">
          <ShieldCheck className="mr-4" size={40} />
          <h2 className="text-3xl font-black tracking-tight">Official Registration</h2>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
          <p>I travels Private limited is a government-recognized entity operating within the NETC guidelines set by NPCI and NHAI. We provide secure, audited, and registered digital bridge services for Indian travelers.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex items-center mb-8 text-indigo-600">
            <FileText className="mr-3" size={28} />
            <h2 className="text-2xl font-black tracking-tight">Terms</h2>
          </div>
          <div className="text-slate-500 space-y-4 font-medium leading-relaxed">
            <p>1. <strong>Compliance:</strong> All users must adhere to NHAI vehicle classification standards.</p>
            <p>2. <strong>Wallet:</strong> Funds are held in RBI-regulated escrow accounts.</p>
            <p>3. <strong>Liability:</strong> I travels Private limited is responsible for secure data transmission only.</p>
          </div>
        </section>

        <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex items-center mb-8 text-indigo-600">
            <Lock className="mr-3" size={28} />
            <h2 className="text-2xl font-black tracking-tight">Privacy</h2>
          </div>
          <div className="text-slate-500 space-y-4 font-medium leading-relaxed">
            <p>1. <strong>Encryption:</strong> 256-bit SSL encryption for all personal data.</p>
            <p>2. <strong>Sharing:</strong> Data shared only with the selected issuing bank for fulfillment.</p>
            <p>3. <strong>Logs:</strong> Transaction history is stored for 7 years as per legal mandates.</p>
          </div>
        </section>
      </div>

      <div className="bg-indigo-600 rounded-[3rem] p-16 text-white text-center shadow-2xl shadow-indigo-600/20">
        <Globe size={48} className="mx-auto mb-8 text-indigo-200" />
        <h3 className="text-3xl font-black mb-4">Official NHAI Provider</h3>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
          Authorized as I travels Private limited for the 2024 operating year across all national toll plazas.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
           <span className="bg-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">NPCI Integrated</span>
           <span className="bg-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-white/20">GST Compliant</span>
        </div>
      </div>
    </div>
  );
};

export default LegalContent;
