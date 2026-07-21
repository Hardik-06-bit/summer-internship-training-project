import React from 'react';

const Dashboard = ({ user, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      {/* Top Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white text-xl">
            🎓
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">EduManage ERP</h1>
            <p className="text-xs text-slate-500">College Management Portal</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-800">{user.name}</p>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full capitalize font-semibold">
              Role: {user.role}
            </span>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content Dashboard */}
      <div className="max-w-6xl mx-auto p-6">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-6 shadow-md mb-6">
          <h2 className="text-2xl font-bold mb-1">Welcome back, {user.name}! 👋</h2>
          <p className="text-blue-100 text-sm">
            Department: <span className="font-semibold">{user.department || 'Computer Science'}</span>
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xs font-semibold text-slate-400 uppercase">Overall Attendance</p>
            <h3 className="text-3xl font-extrabold text-slate-800 mt-2">85.4%</h3>
            <p className="text-xs text-green-600 font-medium mt-1">↑ Safe Zone (&gt;75%)</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xs font-semibold text-slate-400 uppercase">Active Courses</p>
            <h3 className="text-3xl font-extrabold text-slate-800 mt-2">6 Modules</h3>
            <p className="text-xs text-slate-500 mt-1">Current Semester</p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xs font-semibold text-slate-400 uppercase">Pending Assignments</p>
            <h3 className="text-3xl font-extrabold text-amber-600 mt-2">2 Due Soon</h3>
            <p className="text-xs text-amber-600 font-medium mt-1">Submit before Friday</p>
          </div>
        </div>

        {/* Status Message */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center py-10">
          <div className="text-4xl mb-3">🚀</div>
          <h3 className="text-lg font-bold text-slate-800 mb-1">System Connected & Active</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Aapka account <strong>{user.email}</strong> successfully logged in hai. Ab aage Attendance System aur Assignment Uploaders connect kar sakte hain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;