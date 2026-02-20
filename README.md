<div align="center">

# 🤖 AI Operations Manager Agent
### **OpsManager** — 24/7 Autonomous Workflow Intelligence Platform

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://framer.com/motion)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://ai-ops-manager.netlify.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](./LICENSE)

<br/>

> *"Stop watching dashboards. Start running a living, autonomous operations brain."*

**OpsManager** replaces static, passive dashboards with a **real-time perception-action loop** that continuously monitors workflow health, audits SOPs for structural gaps, and surfaces autonomous remediation opportunities — 24 hours a day.

[**🌐 Live Demo**](https://ai-ops-manager.netlify.app) · [**✨ Features**](#-core-features) · [**🏗️ Architecture**](#-application-architecture) · [**🚀 Get Started**](#-local-installation)

---

</div>

## 📌 The Problem

Modern operations teams face a paradox: **more dashboards, less clarity.**

- **Static monitoring tools** show you the past — not what's about to break
- **SOP documentation** drifts out of sync with actual workflows, creating invisible gaps
- **Automation ROI** is never calculated, so inefficiencies persist indefinitely
- **Alert fatigue** means the real signals get buried under the noise

**OpsManager solves this by acting like a tireless AI Chief of Operations.**

---

## ✨ Core Features

### 📊 Executive Overview — Ops Health Intelligence
The command center for organizational health. Provides a real-time snapshot of:
- **Ops Health Score**: A composite metric tracking task throughput, bottleneck frequency, and automation coverage
- **Analyzed Tasks**: Live counter of workflows processed by the AI engine
- **Bottleneck Trends**: Trend lines exposing recurring friction points across teams
- **Efficiency Delta**: Calculated efficiency gain vs. baseline, updated continuously

### 🧠 SOP Intelligence Engine
A structural audit system that goes beyond document review:
- **Redundancy Detection**: Identifies duplicated steps across Standard Operating Procedures
- **Communication Gap Analysis**: Flags handoff points with no clear owner or escalation path
- **Structural Scoring**: Every SOP gets a clarity and efficiency score, prioritizing which to fix first
- **Auto-Suggestions**: Proposes specific rewrites and consolidations to improve process quality

### 🛰️ Stream Monitor — Real-Time Workflow Surveillance
A live operational feed that acts like radar for your workflows:
- **Live Event Stream**: Continuous feed of workflow state transitions, updated in real time
- **Anomaly Detection**: Flags deviations from expected flow patterns before they become incidents
- **"Live Engine" Simulation**: A built-in simulation mode for testing the system without live data
- **Flow Health Indicators**: Per-stream status badges (Healthy / Degraded / Critical)

### ⚡ Automation Lab — Self-Healing Workflow Generator
The proactive intelligence layer that identifies automation opportunities:
- **AI-Generated Suggestions**: Context-aware automation recommendations ranked by impact
- **ROI Projections**: Each suggestion includes estimated time saved per week and implementation cost
- **Priority Matrix**: Suggestions sorted by effort-to-impact ratio for fast decision-making
- **One-Click Playbooks**: Pre-built automation templates ready to deploy

### 🔔 AI Sentinel — Background Intelligence Notifications
A dynamic notification system that keeps operators informed without interrupting flow:
- **Toast Notifications**: Non-blocking alerts for low-priority background findings
- **Severity Tiers**: Findings are classified (Info / Warning / Critical) with appropriate urgency
- **Contextual Actions**: Notifications link directly to the relevant dashboard panel

---

## 🛠️ Tech Stack

| Category | Technology | Version | Purpose |
|---|---|---|---|
| **UI Framework** | React | `18.2` | Component-based UI with concurrent rendering |
| **Language** | TypeScript | `5.2` | Type-safe development and better DX |
| **Styling** | Tailwind CSS | `3.4` | Utility-first design with custom design tokens |
| **Animation** | Framer Motion | `11.0` | Declarative physics-based animations & transitions |
| **Icons** | Lucide React | `0.344` | Consistent, accessible SVG icon system |
| **Build Tool** | Vite | `5.1` | Lightning-fast dev server and optimized builds |
| **Typography** | Outfit + Inter | Google Fonts | Brand (Outfit) and UI (Inter) font pairing |
| **Utils** | clsx + tailwind-merge | `2.x` | Conditional class management |
| **Deployment** | Netlify | — | Zero-config static site deployment |

---

## 🏗️ Application Architecture

OpsManager is structured as a **modular single-page application** with three core functional domains, each represented by a dedicated component:

```
OpsManager Application
│
├── 🧩 App.tsx                   # Root shell — navigation state, layout, notification engine
│   │
│   ├── 📊 Executive Overview    # Inline in App.tsx — telemetry metrics & ops health score
│   │
│   ├── 🧠 SOPAnalysis.tsx       # SOP audit engine — redundancy detection & gap analysis
│   │
│   ├── 🛰️ WorkflowMonitor.tsx   # Live stream surveillance — anomaly detection & flow health
│   │
│   └── ⚙️ Settings.tsx          # Platform configuration — thresholds, notification prefs
│
├── 🎨 index.css                 # Global design tokens, glassmorphism utilities, animations
├── 🔧 tailwind.config.js        # Extended Tailwind theme with custom colors & spacing
└── ⚡ vite.config.ts            # Build configuration with React plugin
```

### Component Responsibility Map

| Component | Lines | Responsibility |
|---|---|---|
| `App.tsx` | ~650 | Root shell, navigation state machine, notification toast engine, Executive Overview |
| `SOPAnalysis.tsx` | ~400 | SOP document ingestion, structural scoring, redundancy & gap detection |
| `WorkflowMonitor.tsx` | ~390 | Live event streaming, anomaly flagging, flow health indicators |
| `Settings.tsx` | ~130 | Platform preferences, alert thresholds, integration configuration |

---

## 🚀 Local Installation

### Prerequisites
- **Node.js** `18+` and **npm** `9+`

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/Ismail-2001/AI-Operations-Manager-Agent.git
cd AI-Operations-Manager-Agent

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at **`http://localhost:5173`**

### Available Scripts

| Script | Command | Description |
|---|---|---|
| **Dev Server** | `npm run dev` | Starts Vite HMR dev server on port 5173 |
| **Production Build** | `npm run build` | Compiles TypeScript & bundles for production |
| **Preview Build** | `npm run preview` | Locally serves the production build |
| **Lint** | `npm run lint` | Runs ESLint with TypeScript rules |

---

## 🌐 Deployment

### Deploy to Netlify (Recommended)

This project ships with a pre-configured [`netlify.toml`](./netlify.toml) — deployment is zero-config.

**Option A — Deploy via Netlify UI:**
1. Push your fork to GitHub
2. Go to [Netlify](https://netlify.com) → **"Add new site"** → **"Import an existing project"**
3. Connect your GitHub repository
4. Netlify will auto-detect the build settings from `netlify.toml`:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Click **Deploy Site** ✅

**Option B — Deploy via Netlify CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from project root
vercel --prod
```

Vercel will auto-detect the Vite framework and configure the build correctly.

---

## 🗺️ Roadmap

### ✅ Phase 1 — Foundation (Complete)
- [x] Full high-fidelity UI with glassmorphism design system
- [x] Simulated real-time workflow monitoring with Live Engine
- [x] SOP analysis with structural scoring
- [x] Automation Lab with ROI projections
- [x] AI Sentinel notification system
- [x] Framer Motion micro-interactions throughout

### 🔨 Phase 2 — Real-Time Persistence (Next)
- [ ] Supabase or Firebase backend for live data persistence
- [ ] Real workflow events via WebSocket connections
- [ ] User authentication & multi-tenant workspaces
- [ ] Persistent SOP document storage and versioning

### 📋 Phase 3 — LLM Integration (Planned)
- [ ] OpenAI / Claude integration via serverless edge functions
- [ ] Natural language SOP analysis (upload a doc, get scored instantly)
- [ ] LLM-generated automation playbooks from workflow patterns
- [ ] Conversational ops assistant sidebar

### 🔭 Phase 4 — Multi-Agent Expansion (Vision)
- [ ] Dedicated agents per department (Engineering, HR, Finance, Support)
- [ ] Cross-departmental bottleneck correlation
- [ ] Autonomous SOP rewriting with human approval workflow
- [ ] Integration connectors: Jira, Notion, Slack, Linear

---

## 📂 Full Folder Structure

```text
AI-Operations-Manager-Agent/
│
├── src/
│   ├── components/
│   │   ├── SOPAnalysis.tsx       # SOP audit engine component
│   │   ├── WorkflowMonitor.tsx   # Real-time stream surveillance component
│   │   └── Settings.tsx          # Platform settings component
│   ├── App.tsx                   # Root application shell & navigation
│   ├── index.css                 # Global styles & design system tokens
│   └── main.tsx                  # React DOM entry point
│
├── public/                       # Static assets served at root
├── index.html                    # HTML entry point
├── netlify.toml                  # Netlify deployment configuration
├── tailwind.config.js            # Tailwind theme extension
├── tsconfig.json                 # TypeScript compiler options
├── vite.config.ts                # Vite build configuration
└── package.json                  # Dependencies & npm scripts
```

---

## 🤝 Contributing

Contributions are welcome. To contribute:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit** your changes using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add natural language SOP parser"
   ```
4. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** with a clear description of the change and its impact

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](./LICENSE) for full details.

---

<div align="center">

**Built to turn passive dashboards into autonomous intelligence.**

*If OpsManager changed how you think about operations, consider starring ⭐ the repo.*

[![GitHub Stars](https://img.shields.io/github/stars/Ismail-2001/AI-Operations-Manager-Agent?style=social)](https://github.com/Ismail-2001/AI-Operations-Manager-Agent)

Developed with ❤️ by [Ismail](https://github.com/Ismail-2001)

</div>
