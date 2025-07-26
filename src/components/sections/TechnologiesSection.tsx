import { TECHNOLOGIES } from '@/lib/tech';
import TechIcon from '../icons/TechIcons';

export default function TechnologiesSection() {
  return (
    <section id="technologies" className="py-24 md:py-32 bg-gray-900 text-white rounded-2xl my-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase tracking-wider">
            Technologies I Work With
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4 font-mono">
            Modern tools for modern solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {TECHNOLOGIES.map((tech, index) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 animate-float-rotate"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-800/50 p-5 transition-all duration-300 group-hover:bg-gray-700/60 group-hover:scale-110">
                <TechIcon tech={tech.name} className="h-full w-full" />
              </div>
              <p className="text-sm font-mono text-gray-400 transition-colors duration-300 group-hover:text-white">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
