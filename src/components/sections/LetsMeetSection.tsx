import { Button } from "@/components/ui/button";
import { ArrowRight, BrainCircuit, Handshake, Mail, Puzzle, Instagram, Github, Dribbble } from "lucide-react";
import Link from "next/link";
import { BehanceIcon } from "../icons/SocialIcons";
import { GITHUB_URL } from "@/lib/data";

const email = "vignesh.aidev@gmail.com";

export default function LetsMeetSection() {
    return (
        <section id="lets-meet" className="py-24 md:py-40 text-center">
            <div className="max-w-4xl mx-auto">
                <p className="font-mono text-muted-foreground">That's a wrap? Maybe not.</p>
                <h2 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-wider my-4">
                    Great things start with 'Meet'! <span role="img" aria-label="smiley face">😊</span>
                </h2>
                <p className="font-mono text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    Open to <Handshake className="inline h-5 w-5 text-primary" /> conversations, <BrainCircuit className="inline h-5 w-5 text-primary" /> creative challenges, <Puzzle className="inline h-5 w-5 text-primary" /> puzzles-or just a friendly game of Chess.
                </p>
                <div className="my-8">
                    <Button asChild size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7">
                        <Link href="#contact">Let's Meet <ArrowRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                </div>
                <div>
                    <p className="font-mono text-muted-foreground mb-4">or connect through..</p>
                    <div className="flex justify-center items-center gap-4">
                        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="h-7 w-7" />
                        </a>
                        <a href={`mailto:${email}`} className="text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="h-7 w-7" />
                        </a>
                         <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <Dribbble className="h-7 w-7" />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <BehanceIcon className="h-7 w-7" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
