
import React from 'react';
import { ShieldCheck, FileText, Lock, Globe, MapPin } from 'lucide-react';

const LegalContent: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-24 px-4 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Legal & Compliance</h1>
        <p className="text-slate-500 text-xl font-medium">Standard operating procedures for NEOFIN NEX India Private Limited.</p>
      </div>

      <section className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
        <div className="flex items-center mb-8 text-emerald-600">
          <ShieldCheck className="mr-4" size={40} />
          <h2 className="text-3xl font-black tracking-tight">Corporate Registration</h2>
        </div>
        <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg font-medium space-y-4">
          <p>
            NEO Travels is an official brand operated by <strong>NEOFIN NEX India Private Limited</strong>. We are a registered entity authorized to facilitate National Electronic Toll Collection (NETC) services across the Indian highway network.
          </p>
          <div className="flex items-start bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <MapPin className="mr-4 text-emerald-600 flex-shrink-0" size={24} />
            <div>
              <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Registered Office</p>
              <p className="text-slate-700 text-sm font-bold">
                Plot no 102, First floor, Sukiran Apartments, Venkatagiri, Yousufguda, Hyderabad, Telangana 500045.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex items-center mb-8 text-emerald-600">
            <FileText className="mr-3" size={28} />
            <h2 className="text-2xl font-black tracking-tight">Terms of Use</h2>
          </div>
          <div className="text-slate-500 space-y-4 font-bold text-sm leading-relaxed">
            <p>1. <strong>Accuracy:</strong> Users must provide correct vehicle registration data to NEOFIN NEX.</p>
            <p>2. <strong>Payments:</strong> All top-ups are processed via secure encrypted bank gateways.</p>
            <p>3. <strong>Liability:</strong> NEO Travels is not responsible for physical tag damage after delivery.</p>
          </div>
        </section>

        <section className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
          <div className="flex items-center mb-8 text-emerald-600">
            <Lock className="mr-3" size={28} />
            <h2 className="text-2xl font-black tracking-tight">Nex Privacy</h2>
          </div>
          <div className="text-slate-500 space-y-4 font-bold text-sm leading-relaxed">
            <p>1. <strong>Encryption:</strong> Financial data is secured using AES-256 Nex encryption.</p>
            <p>2. <strong>Zero-Share:</strong> We never sell traveler movement logs to third-party advertisers.</p>
            <p>3. <strong>Retention:</strong> Logs are stored for 12 months for compliance then purged.</p>
          </div>
        </section>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-16 text-white text-center shadow-2xl">
        <Globe size={48} className="mx-auto mb-8 text-emerald-500" />
        <h3 className="text-3xl font-black mb-4">India-Wide Nex Network</h3>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto font-medium">
          Authorized and verified across 1000+ toll plazas in the Bharat-NETC network.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
           <span className="bg-emerald-600 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500">NPCI Registered Partner</span>
           <span className="bg-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">NEOFIN NEX Secure Protocol</span>
        </div>
      </div>
    </div>
  );
};

export default LegalContent;
