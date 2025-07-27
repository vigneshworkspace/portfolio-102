
import { PROJECTS } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { FileText, Stethoscope, Bot, Shield, Cpu, ExternalLink, Eye } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
    "DocMind AI": FileText,
    "ScoutDX": Stethoscope,
    "CVCraft AI": FileText,
    "Offline RAG Chatbot": Bot,
    "Gas Leakage Detection System": Shield,
    "Edge AI Anomaly Detector": Cpu,
};


export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-40">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-16 items-start">
                    <div className="md:col-span-1 md:sticky top-24 text-center md:text-left">
                        <div>
                            <p className="section-title mb-4 justify-center md:justify-start">03 // Featured Creations</p>
                            <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider">My Works</h2>
                            <p className="text-muted-foreground mt-4 font-mono max-w-xs mx-auto md:mx-0">
                                A selection of projects that showcase my passion for building intelligent and practical solutions.
                            </p>
                             <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6 mx-auto md:mx-0" />
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-8">
                        {PROJECTS.map((project) => {
                             const IconComponent = iconMap[project.title] || ExternalLink;
                             const projectData = project as (typeof PROJECTS)[0] & { demoUrl?: string; status?: string };
                             return (
                                <div 
                                    key={project.id} 
                                    className="group border border-dashed border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:-translate-y-1"
                                >
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                                            <div className="w-16 h-16 rounded-lg bg-card border border-dashed border-border/50 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                                                <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                        </div>
                                        <div className="text-center sm:text-left flex-grow">
                                             <div className="flex items-center justify-center sm:justify-start gap-4 flex-wrap">
                                                <a 
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2"
                                                >
                                                    <h3 className="font-headline text-xl md:text-2xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </a>
                                                 {projectData.status && (
                                                    <div className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
                                                        {projectData.status}
                                                    </div>
                                                )}
                                            </div>
                                            <p className="font-mono text-muted-foreground/80 mt-1">{project.category}</p>
                                            <p className="font-mono text-muted-foreground mt-4 leading-relaxed text-sm">{project.description}</p>
                                            <div className="flex flex-wrap items-center gap-2 mt-4 justify-center sm:justify-start">
                                                {project.tags.map((tag) => (
                                                    <div
                                                        key={tag}
                                                        className="text-xs font-mono text-primary/80 bg-primary/10 border border-primary/20 rounded-full px-3 py-1"
                                                    >
                                                        {tag}
                                                    </div>
                                                ))}
                                                {projectData.demoUrl && (
                                                     <Button asChild variant="outline" size="sm" className="font-mono text-xs rounded-full px-4 py-2">
                                                        <a href={projectData.demoUrl} target="_blank" rel="noopener noreferrer">
                                                            <Eye className="mr-2 h-3 w-3" />
                                                            Demo Video
                                                        </a>
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
