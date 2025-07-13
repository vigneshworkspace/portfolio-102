"use client";

import { PROJECTS } from '@/lib/data';
import { ProjectCard } from './ProjectCard';

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 md:py-40">
            <div className="text-center mb-16">
                <p className="section-title mb-4">04 // Featured Creations</p>
                <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider">My Universe</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
