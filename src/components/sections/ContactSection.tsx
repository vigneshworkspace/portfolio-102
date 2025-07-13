import { Button } from "@/components/ui/button";
import { GITHUB_URL, LINKEDIN_URL } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "./ContactForm";

export default function ContactSection() {
    const email = "vignesh.aidev@gmail.com";
    return (
        <section id="contact" className="py-24 md:py-40">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <p className="section-title mb-4">07 // Get In Touch</p>
                    <h2 className="text-4xl md:text-5xl font-bold font-headline uppercase tracking-wider">Let's Connect</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground mt-4 font-mono">
                        Have a question or want to work together? I’d love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <Card className="p-8 bg-card/50 backdrop-blur-sm border border-dashed border-border/50 hover:border-primary transition-all duration-300">
                        <h3 className="text-2xl font-bold font-headline mb-6 text-center uppercase tracking-wider">Contact Info</h3>
                        <div className="space-y-6">
                            <a href={`mailto:${email}`} className="flex items-center gap-4 group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                <Button variant="outline" size="icon" className="h-14 w-14 flex-shrink-0">
                                    <Mail className="h-6 w-6"/>
                                </Button>
                                <div>
                                    <p className="font-headline text-muted-foreground text-sm">Email</p>
                                    <p className="font-mono text-base group-hover:text-primary transition-colors">{email}</p>
                                </div>
                            </a>
                             <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                <Button variant="outline" size="icon" className="h-14 w-14 flex-shrink-0">
                                   <Github className="h-6 w-6"/>
                                </Button>
                                <div>
                                    <p className="font-headline text-muted-foreground text-sm">GitHub</p>
                                    <p className="font-mono text-base group-hover:text-primary transition-colors">{GITHUB_URL.replace('https://', '')}</p>
                                </div>
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-3 rounded-lg hover:bg-muted/50 transition-colors">
                                <Button variant="outline" size="icon" className="h-14 w-14 flex-shrink-0">
                                    <Linkedin className="h-6 w-6"/>
                                </Button>
                                <div>
                                    <p className="font-headline text-muted-foreground text-sm">LinkedIn</p>
                                    <p className="font-mono text-base group-hover:text-primary transition-colors">{LINKEDIN_URL.replace('https://www.', '')}</p>
                                </div>
                            </a>
                        </div>
                    </Card>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
