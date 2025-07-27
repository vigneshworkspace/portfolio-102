
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data";

const email = "vignesh.aidev@gmail.com";

const contactLinks = [
    {
        icon: Mail,
        title: "Email",
        subtitle: "Let's create something that actually works.",
        link: `mailto:${email}`,
        handle: "vignesh.aidev@gmail.com"
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        subtitle: "See how my skills meet business - connect with me.",
        link: LINKEDIN_URL,
        handle: "vignesh-sist"
    },
    {
        icon: Github,
        title: "GitHub",
        subtitle: "Tap in for a universe of code and collaboration.",
        link: GITHUB_URL,
        handle: "vigneshworkspace"
    }
]

export default function LetsMeetSection() {
    return (
        <section id="contact" className="py-24 md:py-40">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider">
                    Let's Start a Conversation
                </h2>
                <p className="font-mono text-base md:text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                    Drop me a message, let's make something users will love.
                </p>

                <div className="mt-16 space-y-12">
                    {contactLinks.map((item, index) => (
                        <a 
                            href={item.link} 
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block text-foreground hover:text-primary transition-colors duration-300"
                        >
                            <item.icon className="h-8 w-8 mx-auto text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            <h3 className="mt-4 font-headline text-lg md:text-2xl uppercase tracking-widest font-bold break-words">
                                {item.handle}
                            </h3>
                            <p className="font-mono text-muted-foreground mt-1 text-sm md:text-base">
                                {item.subtitle}
                            </p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
