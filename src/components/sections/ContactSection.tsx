import { Button } from "@/components/ui/button";

export default function ContactSection() {
    const email = "vigneshwaran.dev@example.com";
    return (
        <section id="contact" className="py-24 md:py-40 text-center">
            <p className="section-title mb-4">07 // Get In Touch</p>
            <h3 className="text-3xl md:text-5xl font-bold font-headline tracking-tighter mb-4">Have a project in mind?</h3>
            <p className="max-w-xl mx-auto text-muted-foreground mb-8">
                I am actively seeking new roles where I can build meaningful technology. Let's connect and create something amazing.
            </p>
            <Button asChild size="lg" className="font-headline uppercase text-xs tracking-widest px-8 py-6">
                <a href={`mailto:${email}`}>{email}</a>
            </Button>
        </section>
    );
}
