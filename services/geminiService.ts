import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLovePoem = async (memory: string, partnerName: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I would write you a poem, but my API key is missing! Just know that I love you more than code.";
  }

  try {
    const prompt = `Write a short, romantic, and funny poem (max 10 lines) for my partner named ${partnerName} who is a dental student. 
    Incorporate this specific memory: "${memory}". 
    Use cute dental metaphors (like smiles, sweetness, hearts, cavities, enamel, filling). 
    The tone should be intimate, warm, and slightly punny but very romantic.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Low latency
      }
    });

    return response.text || "Roses are red, teeth are white, I love you with all my might.";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "Even when technology fails, my love for you is plaque-resistant. (Error generating poem)";
  }
};