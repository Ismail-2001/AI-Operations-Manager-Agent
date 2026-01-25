import React, { useState } from 'react';
import {
    FileSearch,
    CheckCircle,
    AlertTriangle,
    ArrowRight,
    ShieldCheck,
    Zap,
    Clock,
    MessageSquare,
    RefreshCw
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SOP {
    id: number;
    title: string;
    lastAnalyzed: string;
    health: string;
    inefficiencies: number;
    score: number;
}

const SOPAnalysis = () => {
    const [analyzing, setAnalyzing] = useState(false);
    const [selectedSOP, setSelectedSOP] = useState<SOP | null>(null);

    const sopList: SOP[] = [
        { id: 1, title: 'Customer Support Onboarding', lastAnalyzed: '2 days ago', health: 'Good', inefficiencies: 2, score: 84 },
        { id: 2, title: 'Monthly Financial Closing', lastAnalyzed: '1 week ago', health: 'Critical', inefficiencies: 5, score: 42 },
        { id: 3, title: 'Release Management Process', lastAnalyzed: 'Today', health: 'Excellent', inefficiencies: 0, score: 98 },
    ];

    const handleAnalyze = () => {
        setAnalyzing(true);
        setTimeout(() => setAnalyzing(false), 2000);
    };

    return (
        <div className="space-y-10 max-w-7xl mx-auto">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-4xl font-bold text-white font-outfit mb-3 tracking-tight">SOP Intelligence</h2>
                    <p className="text-slate-400 font-medium">AI-powered engine for procedure optimization and hygiene.</p>
                </div>
                <button
                    onClick={handleAnalyze}
                    disabled={analyzing}
                    className="px-8 py-4 bg-primary-600 hover:bg-primary-500 disabled:bg-slate-800 text-white rounded-[1.25rem] font-bold flex items-center gap-3 transition-all transform hover:scale-[1.02] active:scale-95 glow-primary shadow-xl shadow-primary-900/20"
                >
                    {analyzing ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                            <RefreshCw size={20} />
                        </motion.div>
                    ) : <Zap size={20} fill="white" />}
                    <span className="tracking-wide uppercase text-xs">{analyzing ? 'Processing...' : 'Global Audit'}</span>
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* SOP List */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="flex items-center justify-between px-2">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">Repository</h3>
                        <span className="text-[10px] font-bold text-primary-500 bg-primary-500/10 px-2 py-0.5 rounded-full">3 Active</span>
                    </div>
                    <div className="space-y-3">
                        {sopList.map((sop) => (
                            <motion.button
                                key={sop.id}
                                onClick={() => setSelectedSOP(sop)}
                                whileHover={{ x: 5 }}
                                className={`w-full text-left p-5 rounded-[2rem] border transition-all relative overflow-hidden group ${selectedSOP?.id === sop.id
                                    ? 'bg-primary-600/10 border-primary-500/40 shadow-xl shadow-primary-900/10'
                                    : 'bg-slate-900/30 border-white/[0.03] hover:border-white/10'
                                    }`}
                            >
                                {selectedSOP?.id === sop.id && (
                                    <motion.div layoutId="sopGlow" className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 to-transparent pointer-events-none" />
                                )}
                                <div className="font-bold text-white mb-2 leading-snug group-hover:text-primary-400 transition-colors">{sop.title}</div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                        <Clock size={12} className="text-slate-600" /> {sop.lastAnalyzed}
                                    </div>
                                    <div className={`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${sop.health === 'Critical' ? 'text-rose-400' :
                                        sop.health === 'Excellent' ? 'text-emerald-400' : 'text-primary-400'
                                        }`}>
                                        <div className={`w-1 h-1 rounded-full ${sop.health === 'Critical' ? 'bg-rose-500' :
                                            sop.health === 'Excellent' ? 'bg-emerald-500' : 'bg-primary-500'
                                            }`} />
                                        {sop.health} Health
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                    <button className="w-full py-4 border-2 border-dashed border-slate-800/50 rounded-[2rem] text-slate-500 hover:text-slate-300 hover:border-slate-600 transition-all text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 bg-slate-900/10 hover:bg-slate-900/30">
                        <span className="text-lg">+</span> Import SOP
                    </button>
                </div>

                {/* Analysis Detail */}
                <div className="lg:col-span-3">
                    {selectedSOP ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-panel rounded-[3rem] border border-white/[0.03] overflow-hidden shadow-2xl relative"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/5 blur-[100px] pointer-events-none"></div>

                            <div className="p-10 border-b border-white/[0.03] bg-gradient-to-b from-white/[0.01] to-transparent">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-500/10 rounded-full border border-primary-500/20 mb-3">
                                            <Zap size={10} className="text-primary-400" fill="currentColor" />
                                            <span className="text-[10px] font-bold text-primary-400 uppercase tracking-widest">Advanced Inspection</span>
                                        </div>
                                        <h3 className="text-3xl font-bold text-white font-outfit tracking-tight">{selectedSOP.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 bg-slate-900/80 rounded-[1.5rem] border border-white/5 backdrop-blur-md">
                                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Efficiency Index</span>
                                            <div className="flex items-end gap-1">
                                                <span className="text-2xl font-bold text-white font-outfit leading-none">{selectedSOP.score}%</span>
                                                <div className={`text-[10px] font-bold ${selectedSOP.score > 80 ? 'text-emerald-400' : 'text-rose-400'}`}>
                                                    {selectedSOP.score > 80 ? 'Optimal' : 'Gap Detected'}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="px-5 py-2.5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center gap-3">
                                        <div className="p-1 bg-emerald-500/10 rounded-md">
                                            <CheckCircle className="text-emerald-400" size={14} />
                                        </div>
                                        <span className="text-xs font-bold text-slate-300">12 Hybrid Steps Verified</span>
                                    </div>
                                    <div className={`px-5 py-2.5 rounded-2xl flex items-center gap-3 border transition-colors ${selectedSOP.inefficiencies > 0
                                        ? 'bg-rose-500/5 border-rose-500/10'
                                        : 'bg-slate-800/5 border-slate-800/50 opacity-50'
                                        }`}>
                                        <div className={`p-1 rounded-md ${selectedSOP.inefficiencies > 0 ? 'bg-rose-500/10' : 'bg-slate-800'}`}>
                                            <AlertTriangle className={selectedSOP.inefficiencies > 0 ? 'text-rose-400' : 'text-slate-600'} size={14} />
                                        </div>
                                        <span className="text-xs font-bold text-slate-300">{selectedSOP.inefficiencies} Structural Bottlenecks</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-10 space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">Tactical Observations</h4>
                                        <div className="space-y-4">
                                            <div className="p-6 bg-slate-900/40 rounded-[2rem] border border-white/[0.02] flex gap-5 group hover:border-primary-500/20 transition-all">
                                                <div className="p-3 bg-primary-600/10 rounded-2xl text-primary-400 h-fit shadow-lg shadow-primary-900/5">
                                                    <MessageSquare size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-[15px] font-bold text-white mb-1.5 group-hover:text-primary-400 transition-colors">Fragmented Comms Loop</div>
                                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Steps 4-7 involve manual handoffs. Recommend integration with Slack API to reduce 15m latency per cycle.</p>
                                                </div>
                                            </div>
                                            <div className="p-6 bg-slate-900/40 rounded-[2rem] border border-white/[0.02] flex gap-5 group hover:border-amber-500/20 transition-all">
                                                <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-500 h-fit shadow-lg shadow-amber-900/5">
                                                    <ShieldCheck size={20} />
                                                </div>
                                                <div>
                                                    <div className="text-[15px] font-bold text-white mb-1.5 group-hover:text-amber-400 transition-colors">Access Logic Leak</div>
                                                    <p className="text-sm text-slate-500 leading-relaxed font-medium">Credentials verification is static. AI suggests moving to a dynamic OAuth2 flow integrated with Okta.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4">ROI Projection</h4>
                                        <div className="p-8 bg-gradient-to-br from-primary-600/[0.08] to-transparent border border-primary-500/20 rounded-[2.5rem] relative group">
                                            <div className="absolute top-4 right-4 text-primary-500 opacity-20 group-hover:opacity-100 transition-opacity">
                                                <Zap size={32} />
                                            </div>
                                            <div className="text-3xl font-bold text-white font-outfit mb-2">4.2 Hrs</div>
                                            <p className="text-slate-400 text-sm font-medium leading-relaxed mb-6">Estimated weekly time saved by implementing AI-driven triage for this procedure.</p>
                                            <button className="w-full py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                                Apply Fix Routine <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="h-full min-h-[500px] flex flex-col items-center justify-center p-20 glass-panel rounded-[3rem] border border-dashed border-white/5 text-center group">
                            <div className="w-24 h-24 bg-slate-900/50 rounded-[2.5rem] flex items-center justify-center mb-8 border border-white/[0.03] group-hover:scale-110 transition-transform duration-500">
                                <FileSearch size={40} className="text-slate-700 opacity-40" />
                            </div>
                            <p className="text-2xl font-bold text-white font-outfit mb-3">Intelligence Hub Ready</p>
                            <p className="text-slate-500 max-w-sm font-medium leading-relaxed">Select a procedure from the repository or upload a new one to begin structural AI analysis.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SOPAnalysis;
