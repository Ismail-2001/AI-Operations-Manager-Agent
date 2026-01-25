import React from 'react';
import {
    Settings as SettingsIcon,
    User,
    Shield,
    Bell,
    Cpu,
    Globe,
    Database,
    Key,
    ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const Settings = () => {
    const sections = [
        {
            id: 'account',
            title: 'Account Settings',
            icon: User,
            items: [
                { label: 'Profile Information', desc: 'Update your personal details and role.' },
                { label: 'Security & Password', desc: 'Manage your authentication methods.' }
            ]
        },
        {
            id: 'ai',
            title: 'AI Configuration',
            icon: Cpu,
            items: [
                { label: 'Model Selection', desc: 'Using Claude 3.5 Sonnet / OpenAI GPT-4o hybrid.' },
                { label: 'Analysis Sensitivity', desc: 'Adjust how aggressively the AI flags inefficiencies.' },
                { label: 'Automation Autonomy', desc: 'Set thresholds for self-healing workflows.' }
            ]
        },
        {
            id: 'system',
            title: 'System Integration',
            icon: Database,
            items: [
                { label: 'Connected Tools', desc: 'Zapier, Slack, Jira, and 12 other connected APIs.' },
                { label: 'Data Sources', desc: 'Configure which repositories the AI should scan.' }
            ]
        }
    ];

    return (
        <div className="space-y-10 max-w-5xl mx-auto">
            <div>
                <h2 className="text-4xl font-bold text-white font-outfit mb-3 tracking-tight">System Config</h2>
                <p className="text-slate-400 font-medium">Manage your AI agent parameters and organizational preferences.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {sections.map((section, idx) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="glass-panel p-8 rounded-[2.5rem] border border-white/[0.03] shadow-xl relative overflow-hidden"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 bg-slate-800/50 rounded-2xl text-primary-400 border border-white/5">
                                <section.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-white font-outfit tracking-tight">{section.title}</h3>
                        </div>

                        <div className="space-y-3">
                            {section.items.map((item) => (
                                <div key={item.label} className="group flex items-center justify-between p-5 bg-slate-900/20 rounded-2xl border border-white/[0.02] hover:bg-slate-900/40 hover:border-white/10 transition-all cursor-pointer">
                                    <div className="flex flex-col">
                                        <span className="text-[15px] font-bold text-slate-200 group-hover:text-white transition-colors">{item.label}</span>
                                        <span className="text-xs text-slate-500 mt-1">{item.desc}</span>
                                    </div>
                                    <ChevronRight size={18} className="text-slate-700 group-hover:text-primary-400 transition-all transform group-hover:translate-x-1" />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="flex gap-4 pt-10 border-t border-white/[0.03]">
                    <div className="flex-1 p-6 bg-rose-500/5 border border-rose-500/10 rounded-2xl">
                        <h4 className="text-xs font-bold text-rose-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Shield size={14} /> Danger Zone
                        </h4>
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-slate-500">Reset all AI learning models and clear behavioral cache.</p>
                            <button className="px-5 py-2.5 bg-rose-600/10 hover:bg-rose-600 hover:text-white text-rose-400 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all">
                                Reset Agent
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
