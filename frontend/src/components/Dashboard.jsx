import React from 'react';
import { 
  TrendingUp, BookOpen, Clock, AlertCircle, 
  ArrowUpRight, FileText, Calendar 
} from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { 
      label: 'Overall Attendance', 
      value: '85.4%', 
      status: 'Safe Zone (>75%)', 
      trend: '+2.1% this week',
      icon: TrendingUp,
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/30',
      textColor: 'text-emerald-400'
    },
    { 
      label: 'Active Modules', 
      value: '6 Courses', 
      status: 'Current Semester', 
      trend: '12 Lectures pending',
      icon: BookOpen,
      color: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/30',
      textColor: 'text-blue-400'
    },
    { 
      label: 'Pending Assignments', 
      value: '02 Due Soon', 
      status: 'Action Required', 
      trend: 'Submit before Friday',
      icon: Clock,
      color: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      textColor: 'text-amber-400'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10 space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/60 backdrop-blur-xl border border-slate-800 p-6 rounded-2xl shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">System Connected & Active</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Welcome back, Raghu Pandey
          </h1>
          <p className="text-slate-400 text-sm mt-1">Department: Computer Science & Engineering • Roll: 2026CS108</p>
        </div>
        
        <div className="flex gap-3">
          <button className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-xs font-medium transition-all flex items-center gap-2">
            <Calendar className="w-4 h-4 text-slate-400" /> Academic Calendar
          </button>
          <button className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium shadow-lg transition-all flex items-center gap-2">
            <FileText className="w-4 h-4" /> Quick Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className={`group relative overflow-hidden bg-slate-900/40 backdrop-blur-md border ${item.borderColor} p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl`}></div>
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{item.label}</p>
                  <h3 className="text-3xl font-black mt-2 text-white tracking-tight">{item.value}</h3>
                </div>
                <div className={`p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 ${item.textColor}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <div className="relative z-10 mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 ${item.textColor}`}>{item.status}</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">{item.trend} <ArrowUpRight className="w-3.5 h-3.5" /></span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-bold text-white">Subject-wise Performance</h2>
              <p className="text-xs text-slate-400">Current Semester Attendance Overview</p>
            </div>
          </div>
          <div className="space-y-4">
            {[
              { subject: 'Data Structures & Algorithms', percentage: 92 },
              { subject: 'Database Management Systems', percentage: 88 },
              { subject: 'Operating Systems', percentage: 76 },
              { subject: 'Computer Networks', percentage: 84 }
            ].map((sub, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-800/60 p-4 rounded-xl space-y-2">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-slate-200">{sub.subject}</span>
                  <span className={sub.percentage < 80 ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>{sub.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${sub.percentage < 80 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${sub.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 backdrop-blur-md space-y-4">
          <h2 className="text-lg font-bold text-white">Upcoming Deadlines</h2>
          <div className="space-y-3">
            {[
              { title: 'DBMS Lab Submission', time: 'Tomorrow, 11:59 PM', priority: 'High', type: 'Assignment' },
              { title: 'OS Mid-Term Evaluation', time: 'Aug 10, 2026', priority: 'Medium', type: 'Exam' },
              { title: 'Mini Project Synopsis', time: 'Aug 14, 2026', priority: 'Low', type: 'Project' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-xl border border-slate-800">
                <AlertCircle className={`w-4 h-4 mt-0.5 ${item.priority === 'High' ? 'text-rose-400' : 'text-amber-400'}`} />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-slate-200">{item.title}</p>
                  <p className="text-[11px] text-slate-400">{item.time}</p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">{item.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}