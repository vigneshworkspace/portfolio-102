import { Button } from "@/components/ui/button";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function ContactSection() {
    const email = "vignesh.aidev@gmail.com";
    return (
        <section id="contact" className="py-24 md:py-40 text-center">
            <p className="section-title mb-4">07 // Get In Touch</p>
            <h3 className="text-4xl md:text-6xl font-bold font-headline uppercase tracking-wider mb-4">Have a project in mind?</h3>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8 font-mono">
                I am actively seeking new roles where I can build meaningful technology. Let's connect and create something amazing.
            </p>
            <div className="flex justify-center items-center gap-4">
                 <Button asChild variant="outline" size="icon" className="h-14 w-14">
                    <a href={`mailto:${email}`}>
                        <Mail className="h-6 w-6"/>
                        <span className="sr-only">Email</span>
                    </a>
                </Button>
                 <Button asChild variant="outline" size="icon" className="h-14 w-14">
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                       <Github className="h-6 w-6"/>
                       <span className="sr-only">GitHub</span>
                    </a>
                 </Button>
                  <Button asChild variant="outline" size="icon" className="h-14 w-14">
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-6 w-6"/>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                  </Button>
            </div>
        </section>
    );
}
