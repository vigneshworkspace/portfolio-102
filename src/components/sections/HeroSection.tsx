"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import FadeInSection from '../animations/FadeInSection';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center relative">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeInSection>
                        <div className="text-center md:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline tracking-widest uppercase">
                                Vigneshwaran
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground font-headline tracking-wider mx-auto md:mx-0">
                                Full Stack & AI Developer crafting intelligent, end-to-end solutions.
                            </p>
                            <div className="mt-12 flex justify-center md:justify-start gap-4">
                                <Button asChild size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7">
                                    <Link href="#projects">View Projects</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7">
                                    <Link href="#contact">Get In Touch</Link>
                                </Button>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection className="row-start-1 md:row-auto">
                        <div className="relative h-full w-full flex items-center justify-center">
                             <Image
                                src="/mainimage.png"
                                alt="Vigneshwaran"
                                width={800}
                                height={800}
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
