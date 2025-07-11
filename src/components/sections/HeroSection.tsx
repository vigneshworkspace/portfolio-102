import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FadeInSection from '../animations/FadeInSection';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center">
            <div className="py-24 md:py-32">
              <FadeInSection>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter leading-tight md:leading-tight">
                      Full Stack & AI Developer<span className="text-primary">.</span>
                  </h1>
              </FadeInSection>
               <FadeInSection>
                <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                    I craft intelligent, end-to-end solutions with a focus on clean code, robust architecture, and seamless user experiences.
                </p>
               </FadeInSection>
                <FadeInSection>
                  <div className="mt-10 flex justify-start gap-4">
                      <Button asChild size="lg" className="font-headline uppercase text-xs tracking-widest px-10 py-7">
                          <Link href="#projects">View Projects</Link>
                      </Button>
                       <Button asChild variant="outline" size="lg" className="font-headline uppercase text-xs tracking-widest px-10 py-7">
                          <Link href="#contact">Get In Touch</Link>
                      </Button>
                  </div>
                </FadeInSection>
            </div>
        </section>
    );
}
