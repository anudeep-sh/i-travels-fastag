
import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAssistance = async (query: string) => {
  try {
    // const response = await ai.models.generateContent({
    //   model: 'gemini-3-flash-preview',
    //   contents: query,
    //   config: {
    //     systemInstruction: `You are 'On road Go Concierge AI'. You provide professional support for travelers using the On road Go platform.
    //     On road Go is an official brand of 'MTST SEVA Technologies Pvt. Ltd.'. 
    //     You are an expert in the Indian National Electronic Toll Collection (NETC) program. 
    //     Provide information on:
    //     1. FASTag registration, top-ups, and vehicle linking via On road Go.
    //     2. Minimum balance thresholds for various vehicle classes in India.
    //     3. Toll rates and locations across India.
    //     4. Troubleshooting blacklisted tags or double deductions.
    //     5. Road safety protocols and highway etiquette.
        
    //     Always address the user with respect and professional courtesy. 
    //     Mention 'MTST SEVA Technologies Pvt. Ltd.' as the official parent company.
    //     The official support number is +91 9490053646 and support email is support@mtstsevakendra.in. 
    //     The office is located at 11-9-15, A J MILLS, OCITY, Shivnagar, Warangal – 506002, Telangana.
    //     Keep responses concise, informative, and professional.`,
    //   },
    // });
    // return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently experiencing connectivity issues. Please contact our 24/7 On road Go support line at +91 9490053646 or email support@mtstsevakendra.in for immediate assistance.";
  }
};
