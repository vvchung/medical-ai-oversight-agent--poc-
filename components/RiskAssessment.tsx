import React from 'react';
import { ShieldAlert, ShieldCheck, Lock, FileText, Server } from 'lucide-react';
import { RiskItem } from '../types';

const risks: RiskItem[] = [
  {
    id: 'R1',
    category: '機密病歷外洩',
    level: 'Low',
    mitigation: '絕對禁止使用真實病歷。使用 ChatGPT 生成之「合成虛擬數據」進行測試。',
    icon: 'Lock',
  },
  {
    id: 'R2',
    category: '內部資料外流',
    level: 'Low',
    mitigation: '僅使用公開資料 (衛福部藥典、維基百科)。不上傳院內獨家配方。',
    icon: 'FileText',
  },
  {
    id: 'R3',
    category: '中國模型回傳',
    level: 'Medium',
    mitigation: '僅作短暫推理。模型下載後驗證 Hash。Colab 環境測試後完全銷毀 (Ephemeral)。',
    icon: 'Server',
  },
];

const RiskAssessment: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">資安與合規風險評估</h2>
        <p className="text-slate-500">Security & Compliance Assessment (Google Colab Environment)</p>
      </div>

      <div className="grid gap-6">
        {risks.map((risk) => (
          <div key={risk.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 flex flex-col md:flex-row gap-6 items-start">
            <div className={`p-4 rounded-full flex-shrink-0 ${
              risk.level === 'High' ? 'bg-red-100 text-red-600' :
              risk.level === 'Medium' ? 'bg-amber-100 text-amber-600' :
              'bg-emerald-100 text-emerald-600'
            }`}>
              {risk.icon === 'Lock' && <Lock size={24} />}
              {risk.icon === 'FileText' && <FileText size={24} />}
              {risk.icon === 'Server' && <Server size={24} />}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-slate-800">{risk.category}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                  risk.level === 'High' ? 'bg-red-50 border-red-200 text-red-700' :
                  risk.level === 'Medium' ? 'bg-amber-50 border-amber-200 text-amber-700' :
                  'bg-emerald-50 border-emerald-200 text-emerald-700'
                }`}>
                  風險等級: {risk.level === 'Low' ? '低' : risk.level === 'Medium' ? '中' : '高'}
                </span>
              </div>
              <div className="text-sm text-slate-500 font-semibold mb-1">管控措施 (Mitigation Strategy):</div>
              <p className="text-slate-700 leading-relaxed">{risk.mitigation}</p>
            </div>
          </div>
        ))}

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4 flex gap-4 items-center">
          <ShieldCheck className="text-blue-600 flex-shrink-0" size={32} />
          <div>
            <h4 className="font-bold text-blue-900">影子 IT 疑慮評估：低</h4>
            <p className="text-sm text-blue-700">
              本計畫定位為 **「個人技術研究與可行性評估」**，不串接院內任何 API 或內網，完全獨立運作 (Standalone)。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;