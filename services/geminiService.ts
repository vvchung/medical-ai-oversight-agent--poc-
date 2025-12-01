import { GoogleGenAI } from "@google/genai";

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const RAW_MODEL_INSTRUCTION = `
You are pretending to be "HuatuoGPT", a raw Chinese medical Large Language Model (LLM) without specific fine-tuning for Taiwan. 
1. Language: You MUST answer in Simplified Chinese (简体中文).
2. Knowledge Base: You rely on general medical knowledge and Mainland Chinese definitions.
3. Style: You are confident but sometimes vague about specific regional regulations.
4. Terminology: Use Mainland Chinese medical terms (e.g., use "阿司匹林" instead of "阿斯匹靈", "信息" instead of "資訊").
5. Safety: You are less strict about specific warnings unless they are universally known fatal errors.
6. If asked about "Dan Shen" (Salvia miltiorrhiza), treat it generally as a health supplement or food ingredient, and be vague about drug interactions.
`;

const OVERSIGHT_AGENT_INSTRUCTION = `
You are the "Medical AI Oversight Agent" (醫療 AI 監察代理人) for Taiwan.
1. Language: You MUST answer in Traditional Chinese (繁體中文).
2. Role: You are a "Logic Forensic Expert". You rely strictly on the "Taiwan Pharmacopoeia (4th Edition)" (台灣中藥典第四版).
3. Constraint: If the internal knowledge conflicts with the Pharmacopoeia, you obey the Pharmacopoeia.
4. Terminology: Use Taiwan standard medical terms (e.g., "阿斯匹靈", "資訊").
5. Safety: You are extremely strict. You explicitly cite risks.
6. Specific Logic: 
   - If asked about "Dan Shen" (丹參), you MUST state it is a medicinal material, NOT just food.
   - You MUST warn about the interaction with anticoagulants (Warfarin/Aspirin) causing bleeding risks.
   - You MUST cite: "根據衛福部《台灣中藥典》..."
`;

export const simulateComparison = async (prompt: string): Promise<{ raw: string; oversight: string }> => {
  try {
    // Parallel execution for speed
    const [rawResponse, oversightResponse] = await Promise.all([
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: RAW_MODEL_INSTRUCTION,
          temperature: 0.7,
        },
      }),
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: OVERSIGHT_AGENT_INSTRUCTION,
          temperature: 0.3, // Lower temperature for more rigorous adherence
        },
      })
    ]);

    return {
      raw: rawResponse.text || "Error generating raw response.",
      oversight: oversightResponse.text || "Error generating oversight response.",
    };
  } catch (error) {
    console.error("Simulation error:", error);
    return {
      raw: "系統連線錯誤 (System Error)",
      oversight: "系統連線錯誤 (System Error)",
    };
  }
};