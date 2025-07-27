
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
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline tracking-widest uppercase">
                                Vigneshwaran
                            </h1>
                        </FadeInSection>
                        <FadeInSection>
                            <p className="mt-6 max-w-2xl text-xl text-muted-foreground font-headline tracking-wider">
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
                    <div className="hidden md:block">
                         <FadeInSection className="relative h-[70vh]">
                            <Image
                                src="/mainimage.png"
                                alt="Vigneshwaran"
                                layout="fill"
                                objectFit="contain"
                                priority
                            />
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
