"use client";

import { useState, useRef, useEffect } from 'react';
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { handleSuggestTags } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Bot, Loader2 } from 'lucide-react';

type ProjectCardProps = {
    project: {
        id: number;
        category: string;
        title: string;
        description: string;
        tags: string[];
        imageUrl: string;
        imageHint: string;
        link: string;
    };
    index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
    const { toast } = useToast();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(cardRef.current);
            }
        };
    }, []);
    
    const onSuggestTags = async () => {
        setIsModalOpen(true);
        setIsLoading(true);
        setSuggestedTags([]);
        
        const result = await handleSuggestTags(project.description);

        setIsLoading(false);
        if (result.error) {
            toast({
                title: "AI Error",
                description: result.error,
                variant: "destructive",
            });
            setIsModalOpen(false);
        } else {
            setSuggestedTags(result.tags);
        }
    };
    
    const isOdd = index % 2 !== 0;

    return (
        <div ref={cardRef} className="project-card-container group fade-in-up">
            <div className="grid md:grid-cols-2 items-center bg-card/50 backdrop-blur-sm border border-dashed border-border/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-accent hover:scale-[1.02] hover:-translate-y-2">
                <div className={cn("p-8 md:p-12 order-2", isOdd && "md:order-1")}>
                    <p className="font-headline text-lg text-primary mb-2">{project.category}</p>
                    <h3 className="text-4xl font-bold font-headline mb-4 uppercase tracking-wider">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 text-base leading-relaxed font-mono">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="font-headline uppercase text-sm tracking-wider transition-colors duration-300 group-hover:border-primary/50">{tag}</Badge>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Button variant="secondary" asChild className="font-headline uppercase text-xs tracking-widest px-8 py-6 hover:bg-primary hover:text-primary-foreground">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
                        </Button>
                         <Button onClick={onSuggestTags} variant="outline" className="font-headline uppercase text-xs tracking-widest px-8 py-6 group/btn hover:bg-accent hover:text-accent-foreground">
                            <Bot className="mr-2 h-4 w-4 transition-all group-hover/btn:text-accent-foreground group-hover/btn:animate-pulse"/>
                            Suggest Tags
                        </Button>
                    </div>
                </div>
                <div className={cn("order-1 dot-matrix-bg h-64 md:h-full flex items-center justify-center", isOdd && "md:order-2")}>
                    <Image 
                        src={project.imageUrl}
                        alt={`${project.title} visual`}
                        width={600}
                        height={400}
                        data-ai-hint={project.imageHint}
                        className="w-full h-full object-contain p-8 transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                </div>
            </div>

            <AlertDialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle className="font-headline">AI Suggested Tags for "{project.title}"</AlertDialogTitle>
                        <AlertDialogDescription>
                            {isLoading ? "Thinking..." : "Based on the project description, here are some suggested tags to improve searchability."}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    {isLoading ? (
                        <div className="flex justify-center items-center h-32">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : (
                        <div className="flex flex-wrap gap-2 pt-4">
                            {suggestedTags.map((tag, i) => (
                                <Badge key={`${tag}-${i}`} variant="secondary" className="font-headline text-sm">{tag}</Badge>
                            ))}
                        </div>
                    )}
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setSuggestedTags([])}>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
