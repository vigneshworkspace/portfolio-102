
"use client";
import { EXPERIENCE } from '@/lib/data';
import { useEffect, useRef } from 'react';

export default function ExperienceSection() {
    const companiesToHighlight = ["Novitech R&D pvt ltd", "EK technolegies"];
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

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
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        itemsRef.current.forEach((item) => {
            if (item) {
                observer.observe(item);
            }
        });

        return () => {
            itemsRef.current.forEach((item) => {
                if (item) {
                    observer.unobserve(item);
                }
            });
        };
    }, []);

    return (
        <section id="experience" className="py-24 md:py-40">
            <div className="max-w-4xl mx-auto">
                <p className="section-title mb-16 justify-center">01 // Experience</p>
                <div className="relative">
                    {/* Vertical line - hidden on mobile, shown on md and up */}
                    <div className="absolute left-4 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:left-1/2"></div>

                    <div className="space-y-12 md:space-y-16">
                        {EXPERIENCE.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    ref={(el) => (itemsRef.current[index] = el)}
                                    className={`fade-in-up flex items-center group md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Card Content */}
                                    <div className="w-full md:w-1/2 relative pl-10 md:pl-0">
                                        <div className={`text-center md:text-left md:${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                                            <div className="absolute inset-0 bg-primary/10 rounded-lg blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                                            <div className="relative p-6 bg-card/50 backdrop-blur-sm border border-dashed border-border/50 rounded-lg transition-all duration-300 group-hover:border-primary group-hover:shadow-2xl group-hover:-translate-y-1">
                                                <p className="font-headline text-base text-muted-foreground">{exp.date}</p>
                                                <h3 className="font-bold font-headline text-xl md:text-2xl mt-1 uppercase tracking-wider">
                                                    {companiesToHighlight.includes(exp.company) ? (
                                                        <span className="text-primary">{exp.company}</span>
                                                    ) : (
                                                        exp.company
                                                    )}
                                                </h3>
                                                <h4 className="font-headline text-lg md:text-xl uppercase tracking-wider text-muted-foreground/80">{exp.title}</h4>
                                                <p className="text-muted-foreground mt-3 text-sm leading-relaxed font-mono">{exp.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Dot */}
                                    <div className="absolute left-4 -translate-x-1/2 z-10 md:relative md:left-0 md:translate-x-0">
                                        <div className="h-4 w-4 bg-primary rounded-full border-4 border-background ring-4 ring-primary/20 shadow-lg transition-transform duration-300 group-hover:scale-125"></div>
                                    </div>

                                    {/* Spacer for desktop */}
                                    <div className="w-1/2 hidden md:block"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
