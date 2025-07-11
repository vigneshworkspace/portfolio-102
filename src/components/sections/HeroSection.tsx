import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center">
            <div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-headline tracking-tighter leading-tight md:leading-tight">
                    Full Stack & AI Developer
                </h1>
                <p className="mt-4 max-w-2xl mx-auto font-headline text-sm text-muted-foreground">
                    Crafting intelligent, end-to-end solutions with a focus on clean code, robust architecture, and seamless user experience.
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Button asChild size="lg" className="font-headline uppercase text-xs tracking-widest px-8 py-6">
                        <Link href="#projects">View Projects</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
