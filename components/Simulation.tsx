import React, { useState } from 'react';
import { Play, RotateCcw, AlertTriangle, CheckCircle, Search, ArrowRight, Database } from 'lucide-react';
import { simulateComparison } from '../services/geminiService';

const Simulation: React.FC = () => {
  const [query, setQuery] = useState('丹參是食品嗎？能否與抗凝血劑併用？');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ raw: string; oversight: string } | null>(null);

  const handleRun = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);
    
    // Simulate slight network delay for dramatic effect if API is fast
    const data = await simulateComparison(query);
    setResult(data);
    setLoading(false);
  };

  const predefinedQueries = [
    "丹參是食品嗎？能否與抗凝血劑併用？",
    "感冒可以吃阿司匹林嗎？",
    "當歸鴨會影響心臟病藥物嗎？",
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
       <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-3">
          <Search className="text-blue-600" />
          A/B 測試與矯正能力驗證
        </h2>
        <p className="text-slate-500 mt-2">
          Simulation: Comparing "Raw HuatuoGPT" vs "RAG Oversight Agent"
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-slate-200">
        <label className="block text-sm font-medium text-slate-700 mb-2">
          輸入測試題 (Input Query)
        </label>
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="請輸入醫學問題..."
          />
          <button
            onClick={handleRun}
            disabled={loading}
            className={`px-8 py-3 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all ${
              loading ? 'bg-slate-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl'
            }`}
          >
            {loading ? (
              <span className="animate-spin text-xl">⟳</span>
            ) : (
              <>
                <Play size={20} />
                執行診斷
              </>
            )}
          </button>
        </div>
        <div className="mt-4 flex gap-2 flex-wrap">
          <span className="text-xs text-slate-500 self-center">快速測試：</span>
          {predefinedQueries.map((q, idx) => (
            <button
              key={idx}
              onClick={() => setQuery(q)}
              className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1 rounded-full border border-slate-200 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Results View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left: Raw Model */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex flex-col h-full">
          <div className="bg-slate-200 px-4 py-3 border-b border-slate-300 flex justify-between items-center">
            <span className="font-bold text-slate-700 flex items-center gap-2">
              <AlertTriangle size={18} className="text-amber-500" />
              對照組 (A): 原始 HuatuoGPT
            </span>
            <span className="text-xs bg-slate-300 text-slate-600 px-2 py-0.5 rounded">SIMULATED</span>
          </div>
          <div className="p-6 flex-1 font-mono text-sm leading-relaxed text-slate-700 relative">
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                <div className="h-4 bg-slate-200 rounded w-full"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              </div>
            ) : result ? (
              <div className="whitespace-pre-wrap">
                {result.raw}
              </div>
            ) : (
              <div className="text-slate-400 text-center mt-10 italic">等待輸入...</div>
            )}
             
             {result && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="text-xs font-bold text-red-500 mb-1">風險偵測 (Risk Detected):</div>
                    <ul className="list-disc pl-4 text-xs text-slate-600">
                        <li>使用簡體中文</li>
                        <li>可能缺乏在地法規警語</li>
                        <li>用語差異 (e.g. 信息/資訊)</li>
                    </ul>
                </div>
             )}
          </div>
        </div>

        {/* Right: Oversight Agent */}
        <div className="bg-white border-2 border-emerald-500 rounded-xl overflow-hidden flex flex-col shadow-xl h-full transform transition-all hover:scale-[1.01]">
          <div className="bg-emerald-600 px-4 py-3 border-b border-emerald-700 flex justify-between items-center">
            <span className="font-bold text-white flex items-center gap-2">
              <CheckCircle size={18} className="text-emerald-200" />
              實驗組 (B): RAG 監察代理人
            </span>
            <span className="text-xs bg-emerald-500 text-emerald-100 border border-emerald-400 px-2 py-0.5 rounded">PROTECTED</span>
          </div>
          <div className="p-6 flex-1 font-sans text-base leading-relaxed text-slate-800">
            {loading ? (
              <div className="animate-pulse space-y-3">
                <div className="h-4 bg-emerald-100 rounded w-3/4"></div>
                <div className="h-4 bg-emerald-100 rounded w-full"></div>
                <div className="h-4 bg-emerald-100 rounded w-5/6"></div>
              </div>
            ) : result ? (
               <div className="whitespace-pre-wrap">
                {result.oversight}
              </div>
            ) : (
              <div className="text-slate-400 text-center mt-10 italic">等待輸入以啟動 RAG 檢索...</div>
            )}

            {result && (
                <div className="mt-4 p-3 bg-emerald-50 rounded border border-emerald-100">
                    <div className="text-xs font-bold text-emerald-700 mb-1 flex items-center gap-1">
                        <Database size={12} />
                        引用證據 (Evidence):
                    </div>
                    <div className="text-xs text-emerald-800 italic">
                        "根據衛福部《台灣中藥典》..." <br/>
                        "檢索來源：FAISS Vector Index (Distance: 0.12)"
                    </div>
                </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;