import React from 'react';
import { Database, Cpu, Filter, ArrowDown, FileText } from 'lucide-react';

const Architecture: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800">技術架構：輕量化 RAG 監察網</h2>
        <p className="text-slate-500 mt-2">Technical Architecture: Lightweight RAG Oversight Network</p>
      </div>

      <div className="relative flex flex-col items-center gap-8">
        
        {/* Layer 3: Filter */}
        <div className="w-full max-w-2xl bg-white border-l-4 border-emerald-500 shadow-lg rounded-r-lg p-6 relative">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full">
            <Filter size={24} />
          </div>
          <div className="pl-8">
            <h3 className="text-xl font-bold text-slate-800">3. 用語濾鏡層 (Terminological Filter)</h3>
            <p className="text-sm text-slate-500 mb-3">Output Standardization</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-50 p-3 rounded text-sm text-emerald-800">
                <strong>OpenCC 轉換引擎</strong>
                <p className="text-xs mt-1">強制簡體轉繁體 (Simplified to Traditional)</p>
              </div>
              <div className="bg-emerald-50 p-3 rounded text-sm text-emerald-800">
                <strong>術語對照表</strong>
                <p className="text-xs mt-1">e.g., 阿司匹林 → 阿斯匹靈</p>
              </div>
            </div>
          </div>
        </div>

        <ArrowDown className="text-slate-300" size={32} />

        {/* Layer 2: Localization */}
        <div className="w-full max-w-2xl bg-white border-l-4 border-blue-500 shadow-lg rounded-r-lg p-6 relative">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full">
            <Database size={24} />
          </div>
          <div className="pl-8">
            <h3 className="text-xl font-bold text-slate-800">2. 台灣知識層 (Localization Layer)</h3>
            <p className="text-sm text-slate-500 mb-3">RAG Knowledge Injection</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded">
                <FileText className="text-blue-600" size={20} />
                <div>
                  <div className="text-sm font-semibold text-blue-900">資料源：台灣中藥典 (第四版)</div>
                  <div className="text-xs text-blue-700">衛福部公開 PDF 轉向量索引 (.index)</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-blue-50 p-3 rounded">
                <Cpu className="text-blue-600" size={20} />
                <div>
                  <div className="text-sm font-semibold text-blue-900">檢索器：FAISS In-Memory</div>
                  <div className="text-xs text-blue-700">高速向量檢索，無需外部資料庫</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ArrowDown className="text-slate-300" size={32} />

        {/* Layer 1: Core */}
        <div className="w-full max-w-2xl bg-slate-100 border-l-4 border-slate-500 shadow-inner rounded-r-lg p-6 relative opacity-80">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-slate-500 text-white p-2 rounded-full">
            <Cpu size={24} />
          </div>
          <div className="pl-8">
            <h3 className="text-xl font-bold text-slate-800">1. 推理核心 (Frozen LLM)</h3>
            <p className="text-sm text-slate-500 mb-3">Base Model - HuatuoGPT-7B (4-bit Quantized)</p>
            <p className="text-sm text-slate-600">
              *此層參數凍結，不進行微調 (Frozen Parameters, No Fine-tuning)。
              僅負責基礎語言生成與醫學推理能力。
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Architecture;