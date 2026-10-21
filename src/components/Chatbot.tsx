
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Bot, SendHorizontal, X } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm your virtual migration assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };
  
  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    
    // Simulate bot thinking
    setTimeout(() => {
      const botResponse = getBotResponse(inputMessage.toLowerCase());
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  const getBotResponse = (message: string): string => {
    // Simple response logic based on keywords
    if (message.includes('canada') || message.includes('express entry')) {
      return "Canada's Express Entry is a point-based immigration system for skilled workers. The main factors include age, education, work experience, and language proficiency. Would you like to know more about specific visa categories?";
    } else if (message.includes('australia') || message.includes('points')) {
      return "Australia's skilled migration program requires you to score points based on factors like age, English language ability, skilled employment, and educational qualifications. You typically need at least 65 points to be eligible.";
    } else if (message.includes('student') || message.includes('study')) {
      return "For student visas, you'll typically need an acceptance letter from a recognized institution, proof of funds to cover tuition and living expenses, and language proficiency test results. Each country has specific requirements.";
    } else if (message.includes('family') || message.includes('sponsor')) {
      return "Family sponsorship typically requires the sponsor to be a citizen or permanent resident of the destination country. The exact requirements vary by country and the relationship between the sponsor and the applicant.";
    } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help with your migration questions. Feel free to ask about visa types, country requirements, or the application process.";
    } else if (message.includes('thanks') || message.includes('thank you')) {
      return "You're welcome! If you have any more questions, feel free to ask. You can also schedule a free consultation with our migration experts for personalized advice.";
    } else {
      return "That's an interesting question about migration. For more specific and personalized advice, I recommend scheduling a free consultation with one of our expert migration consultants.";
    }
  };
  
  // Scroll to bottom of messages when new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  return (
    <div>
      {/* Chatbot toggle button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-globalmigrate-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all z-50"
        aria-label="Open chat assistant"
      >
        <Bot size={24} />
      </button>
      
      {/* Chatbot interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl z-50 border border-gray-200 flex flex-col h-[500px]">
          {/* Chat header */}
          <div className="bg-globalmigrate-blue text-white py-4 px-6 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">Migration Assistant</h3>
              <p className="text-xs text-white/80">Ask me anything about migration</p>
            </div>
            <button 
              onClick={toggleChatbot}
              className="text-white/80 hover:text-white"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-globalmigrate-blue text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p>{message.text}</p>
                  <div 
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center">
              <input
                type="text"
                value={inputMessage}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-globalmigrate-blue"
              />
              <Button 
                onClick={sendMessage} 
                className="rounded-r-md bg-globalmigrate-blue text-white px-4 py-2 hover:bg-blue-800"
              >
                <SendHorizontal size={20} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
