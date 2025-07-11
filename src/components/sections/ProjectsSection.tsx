"use client";

import { useState, useMemo } from 'react';
import { PROJECTS } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

export default function ProjectsSection() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProjects = useMemo(() => {
        if (!searchTerm) return PROJECTS;
        return PROJECTS.filter(project =>
            project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm]);

    return (
        <section id="projects" className="py-24 md:py-40">
            <p className="section-title mb-4 text-center">04 // Selected Works</p>
            <div className="max-w-lg mx-auto mb-12">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search projects..."
                        className="pl-9"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="space-y-20">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}

                {filteredProjects.length === 0 && (
                    <p className="text-center text-muted-foreground">No projects found.</p>
                )}
            </div>
        </section>
    );
}
