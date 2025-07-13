"use client";

import { useEffect, useRef } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, FileText, Shield, Cpu, Bot, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
    id: number;
    category: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    gradient: string;
    status?: string;
};

type ProjectCardProps = {
    project: Project;
    index: number;
};

const iconMap: { [key: string]: React.ElementType } = {
    "DocMind AI": FileText,
    "X-Ray Xpert AI": Stethoscope,
    "Resume Genesis AI": FileText,
    "Offline RAG Chatbot": Bot,
    "Gas Leakage Detection System": Shield,
    "Edge AI Anomaly Detector": Cpu,
};

export function ProjectCard({ project, index }: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const IconComponent = iconMap[project.title] || ExternalLink;

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

        const currentRef = cardRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={cardRef} className="fade-in-up group" style={{ animationDelay: `${index * 0.1}s` }}>
            <Card className="group/card h-full overflow-hidden bg-card/50 backdrop-blur-xl border border-dashed border-border/50 hover:border-primary/80 transition-all duration-700 hover:scale-105 cursor-pointer flex flex-col">
                <div className="relative overflow-hidden h-48">
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-60 group-hover/card:opacity-80 transition-opacity duration-500", project.gradient)} />
                    <div className="absolute inset-0 bg-black/30" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                            <IconComponent
                                className="text-white/90 group-hover/card:scale-110 transition-transform duration-500 w-16 h-16"
                            />
                            <div className="absolute inset-0 animate-ping">
                                <IconComponent className="text-white/30 w-16 h-16" />
                            </div>
                        </div>
                    </div>

                    {project.status && (
                        <div className="absolute top-4 right-4">
                            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 backdrop-blur-sm">
                                {project.status}
                            </Badge>
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-bold text-xl text-foreground mb-3 group-hover/card:text-primary transition-colors duration-300 uppercase tracking-wider">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-grow font-mono">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="outline"
                                className="bg-muted/50 text-muted-foreground border-border/50 group-hover/card:border-primary/30 transition-colors text-xs"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex gap-3 mt-auto">
                        <Button
                            asChild
                            size="sm"
                            variant="outline"
                            className="flex-1 group/btn"
                        >
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-2 group-hover/btn:animate-spin" />
                                Code
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="sm"
                            className="flex-1 group/btn bg-primary/90 hover:bg-primary"
                        >
                             <a href="#" target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                                Demo
                             </a>
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
