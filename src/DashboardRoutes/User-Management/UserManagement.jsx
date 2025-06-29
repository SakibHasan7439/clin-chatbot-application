import { UserPlus, Mail, Users, MoreVertical, Trash2, Shield, Crown } from 'lucide-react';

const UserManagement = () => {

  return (
    <div className="text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">User Management</h1>
        </div>

        {/* Invite Section */}
        <div className="bg-slate-800 rounded-2xl mb-8 ">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Invite others by email"
                className="w-full bg-[#4b5563] border border-slate-500 rounded-xl py-3 pl-12 pr-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <button
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 min-w-[140px] justify-center"
            >
              Invite
            </button>
          </div>
        </div>

        {/* Users List */}
        <div className="rounded-xl h-[110px] flex flex-col items-center justify-center border bg-[#374151] border-slate-700">
            <p>No users have been invited yet.</p>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;