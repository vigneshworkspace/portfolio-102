"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // This is a dummy handler. In a real app, you'd send this data.
        toast({
            title: "Message Sent!",
            description: "Thanks for reaching out. I'll get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
    };

    return (
        <Card className="p-8 bg-card/50 backdrop-blur-sm border border-dashed border-border/50 group-hover:border-primary transition-all duration-300">
            <h3 className="text-2xl font-bold font-headline mb-6 text-center uppercase tracking-wider">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <Input type="text" placeholder="Your Name" required className="h-12 bg-muted/50 font-mono"/>
                </div>
                <div className="space-y-2">
                    <Input type="email" placeholder="Your Email" required className="h-12 bg-muted/50 font-mono"/>
                </div>
                <div className="space-y-2">
                    <Textarea placeholder="Your Message" rows={5} required className="bg-muted/50 font-mono"/>
                </div>
                <Button type="submit" className="w-full h-12 font-headline uppercase text-base tracking-widest group/btn">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform"/>
                </Button>
            </form>
        </Card>
    );
}
