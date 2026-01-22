
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAssistance = async (query: string) => {
  try {
    // const response = await ai.models.generateContent({
    //   model: 'gemini-3-flash-preview',
    //   contents: query,
    //   config: {
    //     systemInstruction: `You are 'NEO Travels Concierge AI'. You provide professional support for travelers using the NEO Travels platform.
    //     NEO Travels is an official brand of 'NEOFIN NEX India Private Limited'. 
    //     You are an expert in the Indian National Electronic Toll Collection (NETC) program. 
    //     Provide information on:
    //     1. FASTag registration, top-ups, and vehicle linking via NEO Travels.
    //     2. Minimum balance thresholds for various vehicle classes in India.
    //     3. Toll rates and locations across India.
    //     4. Troubleshooting blacklisted tags or double deductions.
    //     5. Road safety protocols and highway etiquette.
        
    //     Always address the user with respect and professional courtesy. 
    //     Mention 'NEOFIN NEX India Private Limited' as the official parent company.
    //     The official support number is 8143900450 and support email is support@thequickpayme.com. 
    //     The office is located at Plot no 102, Venkatagiri, Yousufguda, Hyderabad.
    //     Keep responses concise, informative, and professional.`,
    //   },
    // });
    // return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently experiencing connectivity issues. Please contact our 24/7 NEO support line at 8143900450 or email support@thequickpayme.com for immediate assistance.";
  }
};
