
import { SKILLS } from '@/lib/data';

export default function AboutSection() {
    return (
        <section id="about" className="py-24 md:py-40">
            <div className="max-w-4xl mx-auto text-center md:text-left">
                <p className="section-title mb-8 justify-center md:justify-start">01 // About</p>
                <div className="grid md:grid-cols-3 gap-10 items-baseline">
                    <div className="md:col-span-1">
                        <h3 className="font-bold font-headline text-2xl uppercase tracking-wider mb-4">My Philosophy</h3>
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                            I see technology as a bridge between data and human experience. My passion lies at the intersection of full-stack engineering and artificial intelligence—building robust backends, intuitive frontends, and integrating intelligent models that solve real-world problems. I believe in a holistic approach, where every line of code contributes to a product that is not only functional but also elegant and efficient.
                        </p>
                    </div>
                </div>
                 <div className="grid md:grid-cols-3 gap-10 mt-16 items-baseline">
                    <div className="md:col-span-1">
                        <h3 className="font-bold font-headline text-2xl uppercase tracking-wider mb-4">Competencies</h3>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        {SKILLS.map((skill) => (
                             <div key={skill.title}>
                                <h4 className="font-headline text-xl font-bold mb-3 uppercase tracking-wider">{skill.title}</h4>
                                <p className="text-muted-foreground leading-relaxed font-mono">{skill.technologies}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
