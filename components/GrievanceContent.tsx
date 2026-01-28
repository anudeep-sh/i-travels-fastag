
import React from 'react';
import { ShieldAlert, Mail, Phone, MapPin, Scale, Clock } from 'lucide-react';

const GrievanceContent: React.FC = () => {
  const escalationMatrix = [
    {
      level: "Level 1",
      title: "Customer Support Hub",
      description: "First point of contact for all transaction and tag related queries.",
      contact: "+91 9490053646",
      email: "support@mtstsevakendra.in",
      timeline: "Resolution within 48 Hours"
    },
    {
      level: "Level 2",
      title: "Grievance Officer",
      description: "Escalate here if Level 1 does not resolve your query within the timeline.",
      contact: "Grievance Redressal Cell",
      email: "grievance@mtstsevakendra.in",
      timeline: "Resolution within 15 Days"
    },
    {
      level: "Level 3",
      title: "Nodal Officer",
      description: "Highest escalation point within On road Go for unresolved complaints.",
      contact: "Nodal Officer Desk",
      email: "nodal@mtstsevakendra.in",
      timeline: "Resolution within 30 Days"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto py-20 px-4 space-y-16 animate-in fade-in duration-700">
      <div className="text-center space-y-4">
        <div className="inline-flex p-4 bg-red-50 text-red-600 rounded-3xl mb-4">
          <Scale size={48} />
        </div>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">Grievance Redressal</h1>
        <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
          MTST SEVA Technologies is committed to a transparent and fair resolution process. Our multi-level mechanism ensures every traveler is heard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {escalationMatrix.map((item, idx) => (
          <div key={idx} className={`bg-white rounded-[2.5rem] p-8 border shadow-sm relative group transition-all ${idx % 2 === 0 ? 'border-red-100 hover:border-red-300' : 'border-blue-100 hover:border-blue-300'}`}>
            <span className={`absolute -top-4 left-8 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg ${idx % 2 === 0 ? 'bg-red-600' : 'bg-blue-600'}`}>
              {item.level}
            </span>
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.description}</p>
              
              <div className="pt-4 space-y-3 border-t border-slate-50">
                <div className="flex items-center text-slate-700 text-xs font-bold">
                  <Mail size={14} className={`mr-2 ${idx % 2 === 0 ? 'text-red-500' : 'text-blue-500'}`} /> {item.email}
                </div>
                <div className="flex items-center text-slate-400 text-[10px] font-black uppercase tracking-wider">
                  <Clock size={14} className={`mr-2 ${idx % 2 === 0 ? 'text-red-500' : 'text-blue-500'}`} /> {item.timeline}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border-l-8 border-red-600">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-black tracking-tight flex items-center">
              <ShieldAlert className="mr-4 text-red-500" size={32} /> How to file a complaint?
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", text: "Identify your transaction ID or Vehicle Number in the On road Go dashboard." },
                { step: "02", text: "Email our support desk with the subject 'Complaint: [Your ID]' or call +91 9490053646." },
                { step: "03", text: "Receive an automated Ticket ID via SMS/Email for tracking." },
                { step: "04", text: "Escalate to the Grievance Officer if unresolved within 15 days." }
              ].map((step, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <span className={`${i % 2 === 0 ? 'text-red-500' : 'text-blue-500'} font-black text-2xl opacity-40 group-hover:opacity-100 transition-opacity`}>{step.step}</span>
                  <p className="text-slate-300 font-medium leading-relaxed pt-1">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] space-y-6">
            <h4 className="text-sm font-black uppercase tracking-widest text-red-400">Official Nodal Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-4 text-blue-500 mt-1" size={20} />
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  11-9-15, A J MILLS, OCITY, Shivnagar, Warangal – 506002, Telangana.
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-4 text-red-500" size={18} />
                <p className="text-sm font-bold">+91 9490053646</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-4 text-blue-500" size={18} />
                <p className="text-sm font-bold">support@mtstsevakendra.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">
          MTST SEVA Technologies Pvt. Ltd. • Certified Resolution Process
        </p>
      </div>
    </div>
  );
};

export default GrievanceContent;
