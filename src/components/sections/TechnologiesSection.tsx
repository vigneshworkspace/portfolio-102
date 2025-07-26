import { TECHNOLOGIES } from '@/lib/tech';
import TechIcon from '../icons/TechIcons';

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24 md:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <p className="section-title mb-4">02 // My Toolbox</p>
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase tracking-wider">
            Technologies I Work With
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mt-4 font-mono">
            A collection of modern tools I use to build robust and efficient solutions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8">
            {TECHNOLOGIES.map((tech) => (
                <div
                key={tech.name}
                className="group flex flex-col items-center justify-center gap-3 text-center"
                >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-card/50 backdrop-blur-sm border border-dashed border-border/50 p-4 transition-all duration-300 group-hover:border-primary group-hover:-translate-y-1 group-hover:shadow-lg">
                    <TechIcon tech={tech.name} className="h-full w-full text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="text-sm font-mono text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {tech.name}
                </p>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
