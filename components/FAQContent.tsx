
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, HelpCircleIcon, Phone } from 'lucide-react';

const FAQContent: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is FASTag and how does it benefit me?",
      a: "FASTag is an RFID-enabled device for toll payments while your vehicle is in motion. Benefits include avoiding long queues, cashless transactions via NEO Travels, and contributing to reduced fuel consumption."
    },
    {
      q: "Is there any cash back on FASTag?",
      a: "Yes, various issuing banks offer monthly cash backs (typically 2.5% to 5%) on toll payments. Check your linked bank's portal or the NEO Travels dashboard for promotional offers."
    },
    {
      q: "Can I use my FASTag for parking at airports or malls?",
      a: "Yes! FASTag is now being integrated for parking payments at major airports and shopping malls across metro cities like Hyderabad, Delhi, and Mumbai."
    },
    {
      q: "What should I do if my tag is blacklisted?",
      a: "Tags are blacklisted if the wallet balance falls below the threshold. Recharge your wallet via NEO Travels 'Recharge' section to re-activate it instantly."
    },
    {
      q: "How do I dispute an incorrect toll deduction?",
      a: "You can raise a dispute through our Support Hub. If a toll was deducted twice, we coordinate with NHAI/NPCI to reverse the funds within 7-10 working days."
    },
    {
      q: "Is FASTag mandatory for all vehicles?",
      a: "Yes, as per NHAI guidelines, FASTag is mandatory for all private and commercial 4+ wheel vehicles. Non-FASTag vehicles are charged double the toll fee."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-16 px-4 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <div className="inline-flex p-4 bg-emerald-50 text-emerald-600 rounded-3xl mb-4">
          <HelpCircle size={40} />
        </div>
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">Support Hub</h1>
        <p className="text-slate-500 mt-2 font-medium">Everything you need to know about your NEO journey.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm transition-all hover:shadow-md">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between px-8 py-6 text-left hover:bg-slate-50 transition-colors"
            >
              <span className="text-lg font-black text-slate-800 tracking-tight">{faq.q}</span>
              {openIndex === idx ? <ChevronUp size={20} className="text-emerald-600" /> : <ChevronDown size={20} className="text-slate-400" />}
            </button>
            {openIndex === idx && (
              <div className="px-8 pb-6 text-slate-600 leading-relaxed text-base border-t border-slate-50 pt-4 bg-emerald-50/20 font-medium">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 bg-emerald-600 rounded-[3rem] p-12 text-white text-center shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl font-black mb-2">Need Direct Assistance?</h3>
          <p className="text-emerald-100 mb-8 font-medium">Our NEO support team is available 24/7 for you.</p>
          <div className="text-4xl font-black flex items-center justify-center space-x-3">
             <Phone className="text-emerald-300" /> <span>8143900450</span>
          </div>
        </div>
        <HelpCircleIcon size={250} className="absolute -bottom-20 -left-20 text-emerald-500/20 -rotate-12" />
      </div>
    </div>
  );
};

export default FAQContent;
