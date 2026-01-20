
import React from 'react';
import { FileText, CheckCircle2, ShieldCheck, Camera, Info, Users } from 'lucide-react';

const DocumentationContent: React.FC = () => {
  const documents = [
    "A duly filled-in application form.",
    "Copy of your vehicle's Registration Certificate (RC).",
    "Copy of PAN Card.",
    "Valid KYC document - Aadhaar Card/Driving License/Voter ID/Passport/NREGA Job Card/NPR.",
    "Please share the following 5 images to successfully complete the application - Vehicle front image, vehicle side image, RC image front & RC image back. An additional tag affixed image of the vehicle windshield to be submitted after delivery of FASTag"
  ];

  return (
    <div className="max-w-7xl mx-auto py-24 px-4 animate-in fade-in duration-500">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden sticky top-28">
            <button className="w-full flex items-center px-8 py-6 bg-indigo-600 text-white font-black text-sm uppercase tracking-widest text-left">
              <FileText size={18} className="mr-3" />
              Documentation
            </button>
            <button className="w-full flex items-center px-8 py-6 text-slate-400 hover:text-indigo-600 font-black text-sm uppercase tracking-widest text-left hover:bg-slate-50 transition-all">
              <Users size={18} className="mr-3" />
              Business Correspondents
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Documents required for FASTag</h1>
            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl">
              You are required to provide certain documents to get a FASTag for your car. Here's the complete list of documents that you need to keep ready before applying for a FASTag:
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-100">
            <ul className="space-y-8">
              {documents.map((doc, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mt-1 mr-5 flex-shrink-0 text-green-500">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-slate-600 text-lg font-medium leading-relaxed">{doc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-[2rem] p-8 flex items-start space-x-4">
            <div className="p-3 bg-indigo-600 text-white rounded-xl shadow-lg">
              <Camera size={24} />
            </div>
            <div>
              <h4 className="text-indigo-900 font-black uppercase text-xs tracking-widest mb-1">Image Verification Protocol</h4>
              <p className="text-indigo-700/80 text-sm font-medium leading-relaxed">
                Images must be clear and documents legible to ensure 24-hour verification by I travels Private limited.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationContent;
