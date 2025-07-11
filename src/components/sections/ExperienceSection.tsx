import { EXPERIENCE } from '@/lib/data';

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 md:py-40">
            <div className="max-w-4xl mx-auto">
                <p className="section-title mb-12 text-center">02 // Experience</p>
                <div className="border-l-2 border-dashed border-border pl-8 space-y-16">
                    {EXPERIENCE.map((exp, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -left-[37px] top-1.5 h-4 w-4 bg-primary rounded-full ring-8 ring-background transition-transform duration-300 group-hover:scale-125"></div>
                            <p className="font-headline text-lg text-muted-foreground">{exp.date}</p>
                            <h3 className="font-bold font-headline text-2xl mt-1 uppercase tracking-wider">{exp.company} // {exp.title}</h3>
                            <p className="text-muted-foreground mt-3 text-sm leading-relaxed font-mono">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
