import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

const writings = [
    {
        title: "The Intersection of AI and Art",
        description: "Exploring how artificial intelligence is pushing the boundaries of creativity.",
        image: "https://placehold.co/600x400.png",
        imageHint: "AI art",
        link: "#"
    },
    {
        title: "A Developer's Guide to Clean Code",
        description: "Practical tips and principles for writing more readable and maintainable code.",
        image: "https://placehold.co/600x400.png",
        imageHint: "clean code",
        link: "#"
    },
    {
        title: "My Journey into Quantum Computing",
        description: "A personal reflection on the exciting and mind-bending world of quantum.",
        image: "https://placehold.co/600x400.png",
        imageHint: "quantum computing",
        link: "#"
    }
]

export default function CreativeWritingsSection() {
    return (
        <section id="writings" className="py-24 md:py-40">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="section-title mb-4">06 // My Musings</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider">Creative Writings</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-4 font-mono">
                        Beyond the code, I enjoy exploring ideas and sharing my thoughts on technology, creativity, and more.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {writings.map((writing, index) => (
                        <Link href={writing.link} key={index} className="group block">
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-dashed border border-border/50 transition-all duration-300 group-hover:border-primary overflow-hidden">
                                <div className="relative overflow-hidden">
                                    <Image
                                        src={writing.image}
                                        alt={writing.title}
                                        width={600}
                                        height={400}
                                        data-ai-hint={writing.imageHint}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-headline text-xl uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300 mb-2">{writing.title}</h3>
                                    <p className="font-mono text-sm text-muted-foreground mb-4">{writing.description}</p>
                                    <div className="flex items-center text-primary font-headline text-sm uppercase tracking-widest">
                                        Read More
                                        <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}