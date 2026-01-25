import React, { useState } from 'react';
import {
    LayoutDashboard,
    FileText,
    Activity,
    Settings as SettingsIcon,
    Bell,
    Search,
    Zap,
    TrendingDown,
    TrendingUp,
    AlertCircle,
    CheckCircle2,
    ChevronRight,
    MoreVertical
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SOPAnalysis from './components/SOPAnalysis';
import WorkflowMonitor from './components/WorkflowMonitor';
import Settings from './components/Settings';

// Mock Data
const stats = [
    { label: 'Tasks Analyzed', value: '1,284', change: '+12%', type: 'positive' },
    { label: 'Total Bottlenecks', value: '12', change: '-4', type: 'negative' },
    { label: 'Active SOPs', value: '45', change: '+3', type: 'neutral' },
    { label: 'Efficiency Gain', value: '24%', change: '+5%', type: 'positive' }
];

const bottlenecks = [
    { id: 1, title: 'Invoice Approval Delay', impact: 'High', department: 'Finance', status: 'Flagged' },
    { id: 2, title: 'Client Onboarding Sync', impact: 'Medium', department: 'Operations', status: 'Analyzing' },
    { id: 3, title: 'Code Review Latency', impact: 'Medium', department: 'Engineering', status: 'Flagged' }
];

const suggestions = [
    { id: 1, title: 'Automate Invoice Entry', tool: 'Zapier + OpenAI', saving: '15 hrs/week' },
    { id: 2, title: 'SOP Document Synthesizer', tool: 'Custom Script', saving: '8 hrs/week' },
    { id: 3, title: 'Slack Approval Workflow', tool: 'Slack Workflow Builder', saving: '10 hrs/week' }
];

function App() {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [notifications, setNotifications] = useState<{ id: number, text: string, type: 'info' | 'alert' }[]>([]);

    // Simulation of real-time AI findings
    React.useEffect(() => {
        const findings = [
            "AI detected a delay in Customer Support cycle.",
            "New automation opportunity found in Finance.",
            "Workflow drift detected in Engineering.",
            "SOP 'Monthly Closing' is reaching critical inefficiency."
        ];

        const interval = setInterval(() => {
            if (Math.random() > 0.7) {
                const id = Date.now();
                setNotifications(prev => [...prev, {
                    id,
                    text: findings[Math.floor(Math.random() * findings.length)],
                    type: Math.random() > 0.5 ? 'alert' : 'info'
                }]);
                setTimeout(() => {
                    setNotifications(prev => prev.filter(n => n.id !== id));
                }, 5000);
            }
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex h-screen bg-[#020617] text-slate-200 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-68 glass-panel border-r border-slate-800/50 flex flex-col z-20 relative overflow-hidden">
                {/* Decorative side glow */}
                <div className="absolute -left-20 top-20 w-40 h-80 bg-primary-600/10 blur-[100px] pointer-events-none"></div>

                <div className="p-8">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center glow-primary transform group-hover:rotate-12 transition-transform duration-500">
                            <Zap className="text-white" size={26} fill="white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold font-outfit text-white tracking-tight leading-none">OpsManager</span>
                            <span className="text-[10px] font-bold text-primary-500 tracking-[0.2em] uppercase mt-1">AI Sentinel</span>
                        </div>
                    </div>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-1.5">
                    {[
                        { id: 'dashboard', icon: LayoutDashboard, label: 'Executive Overview' },
                        { id: 'sops', icon: FileText, label: 'SOP Intelligence' },
                        { id: 'workflows', icon: Activity, label: 'Stream Monitor' },
                        { id: 'settings', icon: SettingsIcon, label: 'System Config' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 group ${activeTab === item.id
                                ? 'bg-primary-600/15 text-primary-400 border border-primary-500/30 shadow-[0_0_20px_rgba(14,165,233,0.1)]'
                                : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200 border border-transparent'
                                }`}
                        >
                            <item.icon size={20} className={`transition-colors ${activeTab === item.id ? 'text-primary-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                            <span className="font-semibold text-sm">{item.label}</span>
                            {activeTab === item.id && (
                                <motion.div layoutId="activeNav" className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(14,165,233,0.8)]" />
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-6">
                    <div className="p-5 bg-gradient-to-b from-slate-900/50 to-slate-950/50 border border-slate-800/50 rounded-[2rem] relative overflow-hidden group">
                        <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary-600/10 blur-2xl group-hover:bg-primary-600/20 transition-colors"></div>
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
                            Live Engine
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
                            OpsManager AI is currently scanning 4 active workflows.
                        </p>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden bg-[#020617] relative">
                {/* Background glow elements */}
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-600/5 blur-[120px] pointer-events-none rounded-full"></div>
                <div className="absolute bottom-[-5%] left-[10%] w-[30%] h-[30%] bg-blue-600/5 blur-[100px] pointer-events-none rounded-full"></div>

                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none"></div>

                {/* Header */}
                <header className="h-24 border-b border-white/[0.03] flex items-center justify-between px-10 bg-[#020617]/40 backdrop-blur-xl z-10">
                    <div className="relative w-[450px] group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary-400 transition-all duration-300" size={18} />
                        <input
                            type="text"
                            placeholder="Search everything: workflows, SOPs, bottlenecks..."
                            className="w-full bg-slate-900/40 border border-white/[0.05] rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-primary-500/30 focus:bg-slate-900/60 transition-all text-sm text-slate-200 placeholder:text-slate-600"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 px-2 py-1 bg-slate-800/50 rounded-md border border-white/5 text-[10px] text-slate-500 font-bold tracking-tighter">
                            ⌘ K
                        </div>
                    </div>


                    <div className="flex items-center gap-6">
                        <button className="p-2 text-slate-400 hover:text-white transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full border-2 border-[#020617] animate-pulse"></span>
                        </button>
                        <div className="flex items-center gap-3 p-1.5 pr-4 rounded-full bg-slate-900/60 border border-slate-800">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary-600 to-primary-400 flex items-center justify-center shadow-lg shadow-primary-900/20">
                                <span className="text-xs font-bold text-white uppercase">JD</span>
                            </div>
                            <span className="text-sm font-bold text-slate-300">Operations Lead</span>
                        </div>
                    </div>
                </header>

                {/* Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-10">
                    <AnimatePresence mode="wait">
                        {activeTab === 'dashboard' && (
                            <motion.div
                                key="dashboard"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="space-y-10"
                            >
                                {/* Hero section */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl font-bold text-white font-outfit tracking-tight">Executive Dashboard</h1>
                                    <p className="text-slate-400 font-medium">Synthetic overview of organizational operational health.</p>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {stats.map((stat, i) => (
                                        <motion.div
                                            key={stat.label}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1, duration: 0.5 }}
                                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                                            className="glass-card p-7 rounded-[2rem] relative overflow-hidden group"
                                        >
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600/5 blur-3xl -mr-10 -mt-10 group-hover:bg-primary-600/10 transition-colors"></div>
                                            <div className="flex justify-between items-start mb-4 relative z-10">
                                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.15em]">{stat.label}</span>
                                                <div className={`flex items-center gap-1 font-bold text-[10px] px-2.5 py-1 rounded-full border ${stat.type === 'positive' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' :
                                                    stat.type === 'negative' ? 'bg-rose-500/5 text-rose-400 border-rose-500/20' :
                                                        'bg-slate-500/5 text-slate-400 border-slate-500/20'
                                                    }`}>
                                                    {stat.type === 'positive' ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                                    {stat.change}
                                                </div>
                                            </div>
                                            <div className="text-4xl font-bold text-white font-outfit relative z-10 tabular-nums">{stat.value}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                    {/* Bottlenecks Section */}
                                    <div className="glass-panel p-10 rounded-[3rem] border border-white/[0.03] shadow-2xl relative overflow-hidden">
                                        <div className="absolute -left-10 -top-10 w-40 h-40 bg-rose-600/5 blur-[80px] pointer-events-none"></div>
                                        <div className="flex items-center justify-between mb-10 relative z-10">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-rose-500/10 rounded-2xl text-rose-400 ring-1 ring-rose-500/20 shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                                                    <AlertCircle size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white font-outfit tracking-tight">System Bottlenecks</h3>
                                                    <p className="text-xs text-slate-500 font-medium mt-0.5">3 critical points requiring attention</p>
                                                </div>
                                            </div>
                                            <button className="text-[10px] font-bold text-slate-500 hover:text-primary-400 bg-white/[0.03] px-4 py-2 rounded-xl border border-white/5 transition-all uppercase tracking-widest">Global Scan</button>
                                        </div>

                                        <div className="space-y-5 relative z-10">
                                            {bottlenecks.map((item) => (
                                                <motion.div
                                                    key={item.id}
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-center justify-between p-6 bg-slate-900/30 rounded-[1.5rem] border border-white/[0.02] hover:border-white/10 hover:bg-slate-900/50 transition-all cursor-pointer group shadow-lg"
                                                >
                                                    <div className="flex items-center gap-5">
                                                        <div className={`w-2 h-2 rounded-full ${item.impact === 'High' ? 'bg-rose-500 animate-pulse' : 'bg-amber-500'
                                                            }`}></div>
                                                        <div>
                                                            <div className="text-[15px] font-bold text-white group-hover:text-primary-400 transition-colors">{item.title}</div>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item.department}</span>
                                                                <span className="w-1 h-1 bg-slate-800 rounded-full"></span>
                                                                <span className="text-[10px] font-bold text-slate-400">Impact: {item.impact}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ChevronRight size={18} className="text-slate-700 group-hover:text-white transition-all transform group-hover:translate-x-1" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Automation Panel */}
                                    <div className="glass-panel p-10 rounded-[3rem] border border-white/[0.03] shadow-2xl relative overflow-hidden">
                                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-primary-600/5 blur-[80px] pointer-events-none"></div>
                                        <div className="flex items-center justify-between mb-10 relative z-10">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-primary-600/10 rounded-2xl text-primary-400 ring-1 ring-primary-500/20 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
                                                    <Zap size={24} />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white font-outfit tracking-tight">Automation Insights</h3>
                                                    <p className="text-xs text-slate-500 font-medium mt-0.5">AI suggested improvements found</p>
                                                </div>
                                            </div>
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center">
                                                        <Zap size={12} className="text-primary-500" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-5 relative z-10">
                                            {suggestions.map((item) => (
                                                <motion.div
                                                    key={item.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    className="group flex items-start gap-6 p-6 bg-gradient-to-r from-primary-600/[0.03] to-transparent hover:from-primary-600/[0.08] rounded-[1.5rem] border border-primary-500/5 hover:border-primary-500/20 transition-all cursor-pointer relative overflow-hidden"
                                                >
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    <div className="mt-1 p-3.5 bg-primary-600/10 rounded-xl text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-md">
                                                        <CheckCircle2 size={22} />
                                                    </div>
                                                    <div className="flex-1 relative z-10">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <div className="text-[15px] font-bold text-white leading-none pt-1">{item.title}</div>
                                                            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary-500 bg-primary-500/10 px-2.5 py-1 rounded-full border border-primary-500/20">Active Insight</span>
                                                        </div>
                                                        <div className="text-sm text-slate-500 mb-3 font-medium">Implementation: <span className="text-slate-300 font-bold">{item.tool}</span></div>
                                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                                                            <TrendingDown size={14} className="text-emerald-500" />
                                                            <span className="text-[11px] font-bold text-emerald-400">Time Saved: {item.saving}</span>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'sops' && <SOPAnalysis />}
                        {activeTab === 'workflows' && <WorkflowMonitor />}

                        {activeTab === 'settings' && <Settings />}

                        {/* Toast System */}
                        <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-3 w-80 pointer-events-none">
                            <AnimatePresence>
                                {notifications.map(note => (
                                    <motion.div
                                        key={note.id}
                                        initial={{ opacity: 0, x: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, x: 0, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                        className={`pointer-events-auto p-4 rounded-[1.25rem] border shadow-2xl flex items-start gap-3 backdrop-blur-xl ${note.type === 'alert'
                                            ? 'bg-rose-950/40 border-rose-500/30 text-rose-100'
                                            : 'bg-primary-950/40 border-primary-500/30 text-primary-100'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg ${note.type === 'alert' ? 'bg-rose-500/20' : 'bg-primary-500/20'}`}>
                                            {note.type === 'alert' ? <AlertCircle size={16} /> : <Zap size={16} />}
                                        </div>
                                        <div className="flex-1">
                                            <div className="text-[11px] font-bold uppercase tracking-widest opacity-60 mb-0.5">AI Sentinel Notice</div>
                                            <div className="text-xs font-semibold leading-relaxed">{note.text}</div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}

export default App;
