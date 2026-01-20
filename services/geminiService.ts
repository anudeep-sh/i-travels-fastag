
import { GoogleGenAI } from "@google/genai";

// // Fixed: Initialize GoogleGenAI strictly using process.env.API_KEY as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getTravelAssistance = async (query: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        systemInstruction: `You are 'I travels Concierge AI'. You provide premium support for the user 'Sri Krishna'.
        Focus on the 'I travels Private limited' brand identity. 
        You are an expert in the Indian National Electronic Toll Collection (NETC) program. 
        Provide information on:
        1. FASTag registration and linking.
        2. Minimum balance (₹3,000 for elite members).
        3. Toll rates and locations.
        4. Dealing with double deductions or blacklisted tags.
        5. Road safety in India.
        
        Always address the user as 'Sri Krishna' with respect in the body of your response. 
        Mention 'I travels Private limited' as the official registered platform.
        The official support line is 1800 3300 3333. Keep responses concise and helpful.`,
      },
    });
    // // Fixed: Use the .text property directly from GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently experiencing connectivity issues, Sri Krishna. Please contact our 24/7 registered support line at 1800 3300 3333.";
  }
};
