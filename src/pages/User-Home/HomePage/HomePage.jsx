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
  User,

} from 'lucide-react';
import { Link, Outlet } from 'react-router';
import { useAuth } from '../../../Auth/AuthProvider';

const HomePage = () => {
const {logout} = useAuth();
const [sidebarOpen, setSidebarOpen] = useState(true);
// const [messages, setMessages] = useState([]);
// const [chatId, setChatId] = useState(null);

const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};

const handleLogout = async() => {
  console.log('Logout clicked');
  await logout();
};

// const startNewChat = async () => {
//   // Clear current messages
//   setMessages([]);
  
//   // Create a new chat session
//   const newChatId = await createChat();
//   if (newChatId) {
//     console.log('Started new chat with ID:', newChatId);
//   }
// };

  return (
    <div className=" flex h-screen bg-slate-800 text-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 bg-[#374151] overflow-hidden flex flex-col`}>
        {/* Sidebar Header */}
        <div className='py-6 border-b border-slate-600 px-4'>
            <img src="/ai.png" alt="ai webpage logo" className='w-10 h-13' />
        </div>
        <div className="p-4 border-b border-slate-700">
          <Link to={"/homePage/chatInterface"}>
            <button

            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={16} />
           
            New Chat
          </button>
          </Link>
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
            
            <Link to={"/homePage/manageSubscription"}>
              <div className="flex items-center gap-3 mb-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
                <Zap size={16} />
                <span>Manage Subscript...</span>
              </div>
            </Link>
            
            <Link to={"/homePage/users"}>
              <div className="flex items-center gap-3 p-2 mb-3 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <Users size={16} />
              <span>Users</span>
            </div>
            </Link>
            
            <Link to={"/homePage/helpSupport"}>
              <div className="flex items-center gap-3 p-2 mb-3 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <Wrench size={16} />
              <span>Help And Support</span>
            </div>
            </Link>
            
            <Link to={"/homePage/faq"}>
              <div className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
              <HelpCircle size={16} />
              <span>FAQ</span>
            </div>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-700">
          <button onClick={handleLogout}  className="flex items-center gap-3 p-2 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors text-red-400">
            <LogOut size={16} />
            
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-[#374151] mb-4 border-b border-slate-700 p-4 flex items-center justify-between">
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
          <Outlet />
      </div>
    </div>
  );
};

export default HomePage;