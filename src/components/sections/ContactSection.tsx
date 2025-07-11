import { Button } from "@/components/ui/button";

export default function ContactSection() {
    const email = "vignesh.aidev@gmail.com";
    return (
        <section id="contact" className="py-24 md:py-40 text-center">
            <p className="section-title mb-4">07 // Get In Touch</p>
            <h3 className="text-4xl md:text-6xl font-bold font-headline uppercase tracking-wider mb-4">Have a project in mind?</h3>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8 font-mono">
                I am actively seeking new roles where I can build meaningful technology. Let's connect and create something amazing.
            </p>
            <Button asChild size="lg" className="font-headline uppercase text-base tracking-widest px-8 py-6">
                <a href={`mailto:${email}`}>{email}</a>
            </Button>
        </section>
    );
}
