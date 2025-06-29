import { Mic, Paperclip, Send } from "lucide-react";
import { useEffect, useState } from "react";



const ChatInterface = () => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [chatId, setChatId] = useState(null);

    // STEP 1: Create a new chat session
    const createChat = async () => {
    try {
        const response = await fetch('https://alibackend.duckdns.org/chat/create_chat/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            // Add any required fields for chat creation
            // title: 'New Chat', // if needed
        })
        });

        if (!response.ok) {
        throw new Error(`Failed to create chat: ${response.status}`);
        }

        const data = await response.json();
        const newChatId = data.id || data.chat_id || data.chatId; // Adjust based on your API response
        
        console.log('Chat created with ID:', newChatId);
        setChatId(newChatId);
        return newChatId;
        
    } catch (error) {
        console.error('Error creating chat:', error);
        return null;
    }
    };

    // STEP 2: Send message to existing chat
    const sendMessageToChat = async (userMessage, currentChatId) => {
    try {
        const response = await fetch('https://alibackend.duckdns.org/chat/add_message_to_chat/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            message: userMessage,
            chat_id: currentChatId, // This is crucial!
            // Add other parameters your API might need
        })
        });

        if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API Error: ${response.status} - ${errorData.message || 'Unknown error'}`);
        }

        const data = await response.json();
        
        // Return the bot's response - adjust based on your API structure
        return data.response || data.message || data.reply || 'No response received';
        
    } catch (error) {
        console.error('API Error:', error);
        return 'Sorry, I encountered an error while processing your request. Please try again.';
    }
    };

    // Initialize chat when component mounts
    useEffect(() => {
    if (accessToken && !chatId) {
        createChat();
    }
    }, [accessToken]);

    const handleSendMessage = async () => {
    if (!message.trim()) return;

    // If no chat exists, create one first
    let currentChatId = chatId;
    if (!currentChatId) {
        console.log('No chat ID, creating new chat...');
        currentChatId = await createChat();
        if (!currentChatId) {
        alert('Failed to create chat session. Please try again.');
        return;
        }
    }

    const userMessage = message.trim();
    
    // Add user message to chat UI
    const userMsg = {
        id: Date.now(),
        text: userMessage,
        sender: 'user',
        timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setMessage('');
    setIsLoading(true);

    try {
        // Send message to API
        const botResponse = await sendMessageToChat(userMessage, currentChatId);
        
        // Add bot response to chat UI
        const botMsg = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botMsg]);
        
    } catch (error) {
        console.error('Error:', error);
        const errorMsg = {
        id: Date.now() + 1,
        text: 'Sorry, something went wrong. Please try again.',
        sender: 'bot',
        timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMsg]);
    } finally {
        setIsLoading(false);
    }
    };

    const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
    }
    };

    // Clear current messages
    // const startNewChat = async () => {
    // setMessages([]);
    
    // // Create a new chat session
    // const newChatId = await createChat();
    // if (newChatId) {
    //     console.log('Started new chat with ID:', newChatId);
    // }
    // };

    return (
        // Wrap your entire chat component in a flex container
<div className="h-screen flex flex-col">
  {/* Tool Buttons */}
  <div className="flex justify-center gap-2 mb-4 flex-shrink-0">
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

  {/* Chat Area - This will expand to fill available space */}
  <div className="flex-1 flex flex-col min-h-0">
    {messages.length === 0 ? (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">Hello,</h1>
          <p className="text-slate-400 text-lg">How Can I Help You Today</p>
        </div>
      </div>
    ) : (
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'bot' && (
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Bot size={16} />
              </div>
            )}
            <div className={`max-w-2xl p-3 rounded-lg ${
              msg.sender === 'user' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-700 text-white'
            }`}>
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <div className="text-xs opacity-70 mt-1">
                {msg.timestamp.toLocaleTimeString()}
              </div>
            </div>
            {msg.sender === 'user' && (
              <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                <User size={16} />
              </div>
            )}
          </div>
        ))}
        
        {/* Loading indicator */}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot size={16} />
            </div>
            <div className="bg-slate-700 text-white p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <span className="text-sm text-slate-400">Thinking...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    )}
  </div>

  {/* Message Input - This will stick to the bottom */}
  <div className="p-4 border-t border-slate-700 flex-shrink-0">
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
          disabled={isLoading}
        />
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>{messages.length}</span>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          
          <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors">
            <Mic size={20} className="text-slate-400" />
          </button>
          
          <button 
            onClick={handleSendMessage}
            disabled={isLoading || !message.trim()}
            className="p-2 bg-blue-600 rounded-lg transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default ChatInterface;