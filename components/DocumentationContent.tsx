
import React from 'react';
import { CheckCircle2, FileText, UserCheck } from 'lucide-react';

const DocumentationContent: React.FC = () => {
  const documents = [
    "A duly filled-in application form (provided during sign-up).",
    "Copy of your vehicle's Registration Certificate (RC).",
    "Passport size photograph of the vehicle owner.",
    "KYC document - Aadhaar Card / Driving License / Voter ID / Passport.",
    "PAN Card (Mandatory for commercial vehicles).",
    "5 Vehicle Images - Front, Side, Rear, and Dashboard view for verification."
  ];

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-[2rem] overflow-hidden shadow-sm">
            <div className="px-8 py-6 bg-emerald-600 text-white text-xs font-black uppercase tracking-widest flex items-center">
              <FileText size={18} className="mr-3" /> Documentation
            </div>
            <button className="w-full px-8 py-6 text-slate-400 text-xs font-black uppercase tracking-widest border-b border-slate-100 bg-slate-50 flex items-center hover:text-emerald-600 transition-colors">
              <UserCheck size={18} className="mr-3" /> Business Agents
            </button>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 space-y-8">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100">
            <h1 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">KYC Requirements</h1>
            <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium">
              To ensure 24-hour tag activation, please keep the following scanned documents ready. Our automated system uses AI to verify documents instantly.
            </p>
            
            <ul className="space-y-6">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mt-1 mr-4 text-emerald-500">
                    <CheckCircle2 size={24} className="fill-emerald-50" />
                  </div>
                  <p className="text-slate-700 text-[15px] leading-relaxed font-bold">{doc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-[2rem] p-8 border border-emerald-100">
            <h4 className="text-emerald-900 font-black uppercase text-[10px] tracking-[0.2em] mb-4">Pro Tip</h4>
            <p className="text-emerald-800 text-sm font-medium leading-relaxed">
              For commercial fleet operators (more than 5 vehicles), you can submit GST certificates instead of individual PAN cards for faster batch processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationContent;
