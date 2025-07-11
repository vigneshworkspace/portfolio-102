"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { handleChat } from '@/app/actions';
import { Bot, Loader2, Send, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Message } from '@genkit-ai/googleai';

type ChatMessage = {
  role: 'user' | 'model';
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'model',
          content: "Hello! I'm V-AI, your personal guide to Vigneshwaran's portfolio. Ask me anything about his skills, projects, or experience.",
        },
      ]);
    }
  }, [isOpen, messages.length]);
  
  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Convert local chat history to Genkit Message format
    const historyForApi: Message[] = messages.map(msg => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    const result = await handleChat(input, historyForApi);
    setIsLoading(false);

    if (result.error || !result.response) {
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: "Sorry, I'm having trouble connecting right now. Please try again later." },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { role: 'model', content: result.response },
      ]);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="h-16 w-16 rounded-full shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8 animate-pulse" />}
        </Button>
      </div>

      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] max-w-md overflow-hidden rounded-lg border border-dashed border-border bg-background/80 backdrop-blur-sm shadow-2xl transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        <div className="flex h-[60vh] flex-col">
          <div className="p-4 border-b border-dashed">
            <h3 className="font-headline text-xl text-center">Chat with V-AI</h3>
          </div>
          <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
            <div className="space-y-6">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-start gap-3",
                    message.role === 'user' ? "justify-end" : "justify-start"
                  )}
                >
                    {message.role === 'model' && (
                        <div className="p-2 bg-primary text-primary-foreground rounded-full">
                            <Bot className="h-5 w-5"/>
                        </div>
                    )}
                  <div
                    className={cn(
                      "max-w-xs rounded-lg p-3 text-sm font-mono",
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card border border-dashed'
                    )}
                  >
                    {message.content}
                  </div>
                   {message.role === 'user' && (
                        <div className="p-2 bg-card border border-dashed rounded-full">
                            <User className="h-5 w-5"/>
                        </div>
                    )}
                </div>
              ))}
               {isLoading && (
                <div className="flex justify-start gap-3">
                    <div className="p-2 bg-primary text-primary-foreground rounded-full">
                        <Bot className="h-5 w-5"/>
                    </div>
                    <div className="bg-card border border-dashed rounded-lg p-3 flex items-center space-x-2">
                        <Loader2 className="h-4 w-4 animate-spin"/>
                        <span className="text-sm text-muted-foreground font-mono">V-AI is typing...</span>
                    </div>
                </div>
            )}
            </div>
          </ScrollArea>
          <form onSubmit={handleSubmit} className="p-4 border-t border-dashed">
            <div className="relative">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about projects, skills..."
                className="pr-12 h-12 font-mono"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9"
                disabled={isLoading || !input.trim()}
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
