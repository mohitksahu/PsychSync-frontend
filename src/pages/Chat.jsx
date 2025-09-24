import React, { useState, useRef, useEffect } from 'react';
// Gemini API integration
const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { ScrollArea } from '../components/ui/scroll-area';
import { Send, Bot, User, Brain, Heart, Loader2 } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hello! I'm your AI Mental Health Assistant. I'm here to provide support, guidance, and coping strategies. How are you feeling today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userProfile, setUserProfile] = useState(null); // Will be populated if user is logged in
  const messagesEndRef = useRef(null);

  // Mock user profile for demonstration
  const mockUserProfile = {
    mbtiType: 'INFP',
    assessmentResults: {
      phq9: { score: 8, level: 'Mild' },
      gad7: { score: 12, level: 'Moderate' },
      ghq: { score: 18, level: 'Mild Distress' }
    },
    preferences: ['anxiety management', 'stress reduction', 'self-care']
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Gemini API call for AI response
  const generatePersonalizedResponse = async (userMessage) => {
    if (!GEMINI_API_KEY) {
      return "[Gemini API key not set. Please configure REACT_APP_GEMINI_API_KEY in your .env file.]";
    }
    try {
      const systemPrompt = `You are an empathetic AI mental health assistant. You are speaking to someone with MBTI type ${mockUserProfile?.mbtiType || 'unknown'}, PHQ-9 score ${mockUserProfile?.assessmentResults?.phq9?.score || 'unknown'} (${mockUserProfile?.assessmentResults?.phq9?.level || 'unknown'}), GAD-7 score ${mockUserProfile?.assessmentResults?.gad7?.score || 'unknown'} (${mockUserProfile?.assessmentResults?.gad7?.level || 'unknown'}). Provide supportive, practical, and safe advice. Keep responses concise and empathetic. Avoid medical diagnosis.

User message: ${userMessage}

Please respond as a caring mental health assistant:`;

      const body = {
        contents: [
          {
            parts: [
              {
                text: systemPrompt
              }
            ]
          }
        ]
      };

      console.log('Sending request to Gemini API:', JSON.stringify(body, null, 2));
      console.log('API URL:', `${GEMINI_API_URL}?key=${GEMINI_API_KEY ? 'KEY_SET' : 'NO_KEY'}`);

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });

      console.log('Response status:', response.status, response.statusText);
      
      const data = await response.json();
      console.log('Gemini API response:', JSON.stringify(data, null, 2));

      if (!response.ok) {
        console.error('API Error:', data);
        return "I apologize, but I'm having trouble connecting to my AI service right now. Please try again in a moment.";
      }

      if (data && data.candidates && data.candidates.length > 0) {
        const candidate = data.candidates[0];
        if (candidate.content && candidate.content.parts && candidate.content.parts.length > 0) {
          return candidate.content.parts[0].text;
        }
      }
      
      // Check for safety ratings that might block the response
      if (data && data.candidates && data.candidates[0] && data.candidates[0].finishReason === 'SAFETY') {
        return "I understand you're looking for support. Let me try to help you in a different way. Could you tell me more about what you're experiencing?";
      }
      
      console.log('Unexpected response format:', data);
      return "I'm here to help, but I'm having trouble processing your message right now. Could you try rephrasing it?";
    } catch (err) {
      console.error('Error calling Gemini API:', err);
      return "I'm experiencing some technical difficulties. Please try again in a moment, and I'll do my best to help you.";
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const botResponse = await generatePersonalizedResponse(inputMessage);
      
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: messages.length + 2,
        type: 'bot',
        content: "I apologize, but I'm having trouble responding right now. Please try again in a moment.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="pt-24 pb-4 flex-1 flex flex-col">
        <div className="container mx-auto px-4 max-w-4xl flex-1 flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-blue-500" />
              <h1 className="text-3xl font-bold">AI Mental Health Assistant</h1>
            </div>
            <p className="text-muted-foreground">
              Get personalized support and guidance for your mental health journey
            </p>
          </div>

          {/* User Profile Info (if logged in) */}
          {mockUserProfile && (
            <Card className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5" />
                  Personalized Session Active
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">MBTI: {mockUserProfile.mbtiType}</Badge>
                  <Badge variant="outline">Depression: {mockUserProfile.assessmentResults.phq9.level}</Badge>
                  <Badge variant="outline">Anxiety: {mockUserProfile.assessmentResults.gad7.level}</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  I'll provide guidance tailored to your personality type and assessment results.
                </p>
              </CardContent>
            </Card>
          )}

          {/* Chat Area */}
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-red-500" />
                Mental Health Chat
              </CardTitle>
              <CardDescription>
                Share your thoughts and feelings in a safe, supportive environment
              </CardDescription>
            </CardHeader>
            
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.type === 'bot' && <Bot className="h-4 w-4 mt-1 flex-shrink-0" />}
                          {message.type === 'user' && <User className="h-4 w-4 mt-1 flex-shrink-0" />}
                          <div className="flex-1">
                            <p className="text-sm">{message.content}</p>
                            <p className={`text-xs mt-1 ${
                              message.type === 'user' ? 'text-blue-100' : 'text-gray-500'
                            }`}>
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4" />
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span className="text-sm text-gray-600">Thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              {/* Message Input */}
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1"
                    disabled={isLoading}
                  />
                  <Button type="submit" disabled={isLoading || !inputMessage.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  This AI assistant provides support but is not a replacement for professional therapy
                </p>
              </div>
            </CardContent>
          </Card>

          {/* API Status */}
          {!GEMINI_API_KEY && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                ⚠️ Gemini API key not configured. Please add REACT_APP_GEMINI_API_KEY to your .env file.
              </p>
            </div>
          )}

          {/* Quick Actions */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("I'm feeling anxious")}
            >
              I'm anxious
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("I'm feeling down")}
            >
              I'm sad
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("I'm stressed")}
            >
              I'm stressed
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setInputMessage("I need coping strategies")}
            >
              Need help
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Chat;