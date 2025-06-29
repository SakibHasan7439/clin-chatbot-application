import { useState } from 'react';
import { 
  Menu, 
  Plus, 
  Moon, 
  Zap, 
  Users, 
  Wrench, 
  HelpCircle, 
  LogOut,
  Paperclip,
  Mic,
  Send,
  User
} from 'lucide-react';
import { useAuth } from '../../../Auth/AuthProvider';

const HomePage = () => {
  const {logout} = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [message, setMessage] = useState('');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle message sending logic here
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLogout = async() =>{
      await logout();
  }

  return (
    <div className="flex h-screen bg-slate-800 text-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-slate-900 overflow-hidden flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-slate-700">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={16} />
            New Chat
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <Moon size={16} />
              <span>Dark</span>
              <div className="ml-auto">
                <div className="w-12 h-6 bg-blue-600 rounded-full relative">
                  <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <Zap size={16} />
              <span>Manage Subscript...</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <Users size={16} />
              <span>Users</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <Wrench size={16} />
              <span>Help And Support</span>
            </div>
            
            <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <HelpCircle size={16} />
              <span>FAQ</span>
            </div>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-700">
          <div onClick={handleLogout} className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors text-red-400">
            <LogOut size={16} />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-slate-800 mb-4 border-b border-slate-700 p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleSidebar}
              className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User size={16} className="text-slate-800" />
              </div>
              <div>
                <div className="font-medium">Guest</div>
                <div className="text-sm text-slate-400">Welcome back</div>
              </div>
            </div>
          </div>
        </div>

            {/* Tool Buttons */}
          <div className="flex justify-center gap-2">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
              Chartwright
            </button>
            <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              TranscriptX
            </button>
            <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              Redactify
            </button>
            <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors">
              Validify
            </button>
          </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <div className="text-left max-w-md">
            <h1 className="text-4xl font-bold text-blue-400 mb-2">Hello,</h1>
            <p className="text-slate-400 text-lg">How Can I Help You Today</p>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-slate-700">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 bg-slate-700 rounded-lg p-3">
              <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors">
                <Paperclip size={20} className="text-slate-400" />
              </button>
              
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message (Shift + Enter for new line)"
                className="flex-1 bg-transparent text-white placeholder-slate-400 outline-none"
              />
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>0</span>
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                
                <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors">
                  <Mic size={20} className="text-slate-400" />
                </button>
                
                <button 
                  onClick={handleSendMessage}
                  className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;