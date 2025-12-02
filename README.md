# 🚑 醫療 AI 監察代理人 (Medical AI Oversight Agent)

> **「以台灣中藥典為劍，斬斷 AI 幻覺與用語偏見！」**  
> *A Proof of Concept for Localized Medical AI Oversight in Taiwan*

![Status](https://img.shields.io/badge/Status-PoC-orange) ![License](https://img.shields.io/badge/License-MIT-blue) ![Stack](https://img.shields.io/badge/Tech-React%20%7C%20Gemini%20%7C%20RAG-green)

## ⚡️ 專案緣起：為什麼我們需要這個？ (The Why)

在這個大語言模型 (LLM) 戰國時代，我們面臨一個嚴峻的挑戰：市面上強大的中文醫療模型（如 HuatuoGPT）多由中國訓練，充滿了「簡體中文用語」與「中台法規差異」。

### 🚫 潛在風險：

*   **藥物交互作用誤判**： AI 可能告訴吃抗凝血劑的台灣阿嬤：「冬天吃點當歸鴨補補身子沒關係」，卻不知道台灣藥典對 **Dan Shen (丹參)** 與 Warfarin 的嚴格警示。
*   **文化認知衝突**： 「阿司匹林」還是「阿斯匹靈」？「信息」還是「資訊」？
*   **資安黑箱**： 我們不敢直接將病歷丟進外部封閉模型。

### ✅ 解決方案： 
我們不重練模型（太貴！），我們訓練一個**「AI 監察官」**！ 
本計畫透過 **RAG (檢索增強生成)** 技術，外掛 **《台灣中藥典》**，強制修正模型的邏輯與用語，建立一套「零成本、非敏捷、高合規」的 **AI 邏輯法醫 (AI Logic Forensic)** 機制。

---

## 🛠 技術架構：輕量化 RAG 監察網

本專案採用 **"以夷制夷"** 策略 —— 利用強大的 LLM 進行推理，但用台灣的知識庫進行監管。

### 核心三部曲
1.  **🧠 推理核心 (Frozen LLM)**
    *   使用量化後的 HuatuoGPT-7B（在此 Web Demo 中由 Gemini-2.5-Flash 模擬其角色）。
    *   只推理，不訓練，大幅降低算力成本。
2.  **📚 台灣知識層 (Localization Layer)**
    *   **資料源**： 衛福部公開之《台灣中藥典》第四版 (PDF)。
    *   **技術**： FAISS 向量資料庫進行 In-Memory 高速檢索。
3.  **🛡️ 用語濾鏡 (Terminological Filter)**
    *   **OpenCC 引擎**： 強制轉為台灣正體中文。
    *   **術語對照表**： 即時修正兩岸醫學名詞差異。

---

## 🎮 專案功能 (Features)

本 Repository 為概念驗證的 Web 儀表板與模擬器：

### 1. 📊 戰情儀表板 (Dashboard)
*   一覽專案狀態、知識庫規模與執行週期。
*   視覺化呈現「技術評估」與「資安風險」等級。

### 2. ⚔️ A/B 測試模擬器 (The Simulator)
*   **左側（對照組）**： 模擬原始中國模型，講簡體字、缺乏在地警語。
*   **右側（實驗組）**： 掛載 RAG 的監察代理人，引用藥典、繁體輸出、標示風險。
*   親眼見證 AI 被「邏輯矯正」的瞬間！

### 3. 🔐 資安評估報告
*   詳列如何利用「合成數據 (Synthetic Data)」與「Ephemeral Environment」確保 **個資零外洩**。

---

## 🚀 啟動與部署您的 AI Studio 應用程式

這裡有您在自家電腦上運行 App 所需的一切寶貝！

👀 **在 AI Studio 瞧瞧您的 App：** [https://ai.studio/apps/drive/1mxbu5xyILYO8NlMxPtfmJTPwot1AN0UM](https://ai.studio/apps/drive/1mxbu5xyILYO8NlMxPtfmJTPwot1AN0UM)
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />

### 💻 在本機端運行

**前置準備**：
*   Node.js 18+
*   Google Gemini API Key (用於模擬雙重人格 AI)

**安裝與執行**：

```bash
# 1. Clone 專案
git clone https://github.com/your-username/medical-ai-oversight.git

# 2. 進入目錄
cd medical-ai-oversight

# 3. 安裝依賴
npm install

# 4. 設定環境變數 (Linux/Mac)
export API_KEY=your_gemini_api_key_here

# 5. 啟動開發伺服器
npm start
```

---

## 📂 檔案結構

```
src/
├── components/
│   ├── Architecture.tsx   # 視覺化架構圖
│   ├── RiskAssessment.tsx # 資安與合規評估表
│   └── Simulator.tsx      # 核心功能：雙模型 A/B 測試
├── services/
│   └── geminiService.ts   # AI 服務層 (模擬 HuatuoGPT 與 監察官)
├── types.ts               # TypeScript 定義
├── App.tsx                # 主程式入口
└── index.tsx              # React Root
```

---

## 🛡️ 免責聲明 (Disclaimer)

*   本專案為 **技術評估原型 (PoC)**，目的在於驗證邏輯校正之可行性。
*   所有醫療建議均由 AI 生成，**嚴禁** 直接用於真實臨床決策。
*   本系統目前使用「合成數據」進行測試，不涉及任何真實病患隱私。


<div align="center">
  <p>Made with ❤️ for Taiwan's Medical AI Safety</p>
  <p>_陳報日期：2025 年 11 月 27 日_</p>
</div>
