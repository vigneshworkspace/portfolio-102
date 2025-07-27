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
                    <div className="relative z-10">
                        <FadeInSection>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-headline tracking-widest uppercase">
                                Vigneshwaran
                            </h1>
                        </FadeInSection>
                        <FadeInSection>
                            <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground font-headline tracking-wider">
                                Full Stack & AI Developer crafting intelligent, end-to-end solutions.
                            </p>
                        </FadeInSection>
                        <FadeInSection>
                            <div className="mt-12 flex justify-start gap-4">
                                <Button asChild size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7">
                                    <Link href="#projects">View Projects</Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7">
                                    <Link href="#contact">Get In Touch</Link>
                                </Button>
                            </div>
                        </FadeInSection>
                    </div>
                    <FadeInSection className="hidden md:flex justify-center items-center">
                        <div className="relative h-[70vh] w-full">
                             <Image
                                src="/mainimage.png"
                                alt="Vigneshwaran"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}
