
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import FadeInSection from '../animations/FadeInSection';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center relative py-16 md:py-0">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <FadeInSection className="text-center md:text-left row-start-2 md:row-start-1">
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-headline tracking-widest uppercase">
                            Vigneshwaran
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground font-headline tracking-wider mx-auto md:mx-0">
                            Full Stack & AI Developer crafting intelligent, end-to-end solutions.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                            <Button asChild size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7">
                                <Link href="#projects">View Projects</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7">
                                <Link href="#contact">Get In Touch</Link>
                            </Button>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="row-start-1 md:row-start-1 flex justify-center">
                         <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
                             <Image
                                src="/mainimage.png"
                                alt="Vigneshwaran"
                                layout="fill"
                                className="object-contain"
                                priority
                            />
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}
