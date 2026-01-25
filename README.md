# 🤖 AI Operations Manager Agent

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Tool: Vite](https://img.shields.io/badge/Build%20Tool-Vite-646CFF?logo=vite)](https://vitejs.dev/)

**AI Operations Manager Agent** is a premium, high-performance dashboard designed to bridge the gap between human operations and agentic AI. It provides organizational leaders with real-time insights into workflow health, structural SOP gaps, and autonomous automation opportunities.

[**Project Live Demo**](https://ai-ops-manager.netlify.app)

---

## ✨ Core Features

- **📊 Executive Overview**: High-level telemetry for organizational "Ops Health," tracking analyzed tasks, bottleneck trends, and efficiency gains.
- **🧠 SOP Intelligence**: A structural audit engine that analyzes Standard Operating Procedures for redundancies and communication gaps.
- **🛰️ Stream Monitor**: Real-time surveillance of operational flows with built-in anomaly detection and "Live Engine" simulation.
- **⚡ Automation Lab**: Proactive AI suggestions for self-healing workflows with integrated ROI projections.
- **🔔 AI Sentinel Notifications**: Dynamic toast notification system for real-time background intelligence findings.

## 🛠️ Tech Stack

- **Frontend**: [React 18](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom Design Tokens)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Typography**: Outfit (Brand) & Inter (UI)

## 📂 Folder Structure

```text
├── src/
│   ├── components/       # Functional logic blocks (SOP, Monitor, Settings)
│   ├── assets/           # Static media assets
│   ├── App.tsx           # Main application shell & routing
│   ├── index.css         # Global styles & design system tokens
│   └── main.tsx          # React DOM mounting
├── public/               # Static assets exposed to root
└── tailwind.config.js    # Design system configuration
```

## 🚀 Local Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ismail-2001/ai-operations-manager-agent.git
   cd ai-operations-manager-agent
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🌐 Netlify Deployment

This project is optimized for deployment on **Netlify**.

1. Connect your GitHub repository to Netlify.
2. Use the following build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`

## 🗺️ Roadmap

- [x] **Phase 1**: Initial high-fidelity UI and simulations.
- [ ] **Phase 2**: Transition from mock simulation to real-time Persistence (Supabase/Firebase).
- [ ] **Phase 3**: Integration with actual LLM (OpenAI/Claude) via backend edge functions.
- [ ] **Phase 4**: Multi-agent support for cross-departmental monitoring.

## 📄 License

This project is licensed under the MIT License.

---
Developed with ❤️ by [Ismail](https://github.com/Ismail-2001)
