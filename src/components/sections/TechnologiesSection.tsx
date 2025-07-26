import { TECHNOLOGIES } from '@/lib/tech';
import TechIcon from '../icons/TechIcons';

export default function TechnologiesSection() {
  const allTech = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section id="technologies" className="py-24 md:py-32 bg-gray-900 text-white rounded-2xl my-20 overflow-hidden group">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline uppercase tracking-wider">
            Technologies I Work With
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-4 font-mono">
            A continuous scroll of modern tools for modern solutions.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {allTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center gap-2 mx-6"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gray-800/50 p-5 transition-all duration-300 hover:bg-gray-700/60 hover:scale-110">
                <TechIcon tech={tech.name} className="h-full w-full" />
              </div>
              <p className="text-sm font-mono text-gray-400 transition-colors duration-300">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
