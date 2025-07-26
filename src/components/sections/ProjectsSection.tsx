
import { PROJECTS } from '@/lib/data';
import { FileText, Stethoscope, Bot, Shield, Cpu, ExternalLink } from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
    "DocMind AI": FileText,
    "X-Ray Xpert AI": Stethoscope,
    "Resume Genesis AI": FileText,
    "Offline RAG Chatbot": Bot,
    "Gas Leakage Detection System": Shield,
    "Edge AI Anomaly Detector": Cpu,
};


export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-40">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-16 items-start">
                    <div className="md:col-span-1 sticky top-24">
                        <div>
                            <p className="section-title mb-4">03 // Featured Creations</p>
                            <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider">My Works</h2>
                            <p className="text-muted-foreground mt-4 font-mono max-w-xs">
                                A selection of projects that showcase my passion for building intelligent and practical solutions.
                            </p>
                             <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-6" />
                        </div>
                    </div>
                    <div className="md:col-span-2 space-y-16">
                        {PROJECTS.map((project) => {
                             const IconComponent = iconMap[project.title] || ExternalLink;
                             return (
                                <a 
                                    key={project.id} 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <div className="flex gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-lg bg-card border border-dashed border-border/50 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                                                 <IconComponent className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-4">
                                                <h3 className="font-headline text-2xl font-bold uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                                                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </div>
                                            <p className="font-mono text-muted-foreground/80 mt-1">{project.category}</p>
                                            <p className="font-mono text-muted-foreground mt-4 leading-relaxed">{project.description}</p>
                                             <div className="flex flex-wrap gap-2 mt-4">
                                                {project.tags.map((tag) => (
                                                    <div
                                                        key={tag}
                                                        className="text-xs font-mono text-primary/80 bg-primary/10 border border-primary/20 rounded-full px-3 py-1"
                                                    >
                                                        {tag}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                             )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
