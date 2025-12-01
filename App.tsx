import React, { useState } from 'react';
import { ViewState } from './types';
import Architecture from './components/Architecture';
import Simulation from './components/Simulation';
import RiskAssessment from './components/RiskAssessment';
import { Activity, Shield, Layers, LayoutDashboard, FileText, CheckCircle2 } from 'lucide-react';

// Hero Section Component
const Dashboard: React.FC = () => (
  <div className="p-6 md:p-12 max-w-5xl mx-auto">
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-8 md:p-12 text-white">
        <div className="flex items-center gap-2 mb-4">
           <span className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border border-blue-400/30">
              PoC Project
           </span>
           <span className="text-slate-400 text-xs font-mono">2025-11-27</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          醫療 AI 監察代理人
          <br/>
          <span className="text-xl md:text-3xl text-blue-300 font-normal">Medical AI Oversight Agent</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
          台灣在地化知識庫掛載與邏輯校正之可行性評估。
          <br/>
          建立「AI 邏輯法醫」機制，利用 RAG 技術強制修正大型語言模型之認知偏差。
        </p>
      </div>
      
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-2">
            <Activity size={24} />
          </div>
          <h3 className="font-bold text-slate-800">問題緣起</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            鑒於 AI 誤判藥物交互作用風險（如當歸鴨事件），需建立監察機制，避免直接使用未經在地化調優的模型。
          </p>
        </div>
        <div className="space-y-3">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-2">
            <Layers size={24} />
          </div>
          <h3 className="font-bold text-slate-800">核心假設</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            透過 RAG 技術掛載《台灣中藥典》，能否有效「強制」中國製 LLM (HuatuoGPT) 遵循台灣法規？
          </p>
        </div>
        <div className="space-y-3">
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-2">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="font-bold text-slate-800">預期產出</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            建立具備「引用證據」能力的 Python 函數原型，與一份矯正前後的 A/B 測試對比報告。
          </p>
        </div>
      </div>
    </div>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-700 mb-2">階段一：建立索引</h4>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-full"></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">衛福部藥典清洗與向量化 (.index)</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-700 mb-2">階段二：提示工程</h4>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 w-2/3"></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">設計「抗偏見 System Prompt」</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-700 mb-2">階段三：A/B 驗證</h4>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-slate-300 w-1/3"></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">對比原始模型與 RAG Agent 表現</p>
        </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.DASHBOARD);

  const renderContent = () => {
    switch (currentView) {
      case ViewState.DASHBOARD:
        return <Dashboard />;
      case ViewState.ARCHITECTURE:
        return <Architecture />;
      case ViewState.SIMULATION:
        return <Simulation />;
      case ViewState.RISK_ASSESSMENT:
        return <RiskAssessment />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col sticky top-0 md:h-screen z-10">
        <div className="p-6 border-b border-slate-100 flex items-center gap-2">
            <div className="bg-blue-600 text-white p-1.5 rounded">
                <Shield size={20} />
            </div>
          <span className="font-bold text-slate-800 text-lg">AI Oversight</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setCurrentView(ViewState.DASHBOARD)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === ViewState.DASHBOARD
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard size={18} />
            計畫總覽 (Summary)
          </button>
          <button
            onClick={() => setCurrentView(ViewState.ARCHITECTURE)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === ViewState.ARCHITECTURE
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Layers size={18} />
            技術架構 (Architecture)
          </button>
          <button
            onClick={() => setCurrentView(ViewState.SIMULATION)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === ViewState.SIMULATION
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Activity size={18} />
            實作模擬 (Simulation)
          </button>
          <button
            onClick={() => setCurrentView(ViewState.RISK_ASSESSMENT)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              currentView === ViewState.RISK_ASSESSMENT
                ? 'bg-blue-50 text-blue-700'
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            <FileText size={18} />
            資安評估 (Risk)
          </button>
        </nav>
        <div className="p-6 border-t border-slate-100">
            <div className="text-xs text-slate-400">
                PoC Leader: <br/>
                Digital Medicine Lab
            </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center md:hidden">
            <span className="font-bold text-slate-700">Menu</span>
            {/* Mobile menu toggle would go here */}
        </header>
        {renderContent()}
      </main>
    </div>
  );
};

export default App;