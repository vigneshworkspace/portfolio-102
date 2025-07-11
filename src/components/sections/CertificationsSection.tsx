import { CERTIFICATIONS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 md:py-40 relative">
            <div className="dot-matrix-bg absolute inset-0 -z-10" />
            <div className="max-w-5xl mx-auto">
                <p className="section-title mb-12 text-center">06 // Certifications</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CERTIFICATIONS.map((cert) => (
                        <a 
                            key={cert.title} 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group block"
                        >
                            <Card className="h-full transition-all duration-300 hover:border-foreground hover:shadow-xl hover:-translate-y-1 bg-card/80 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="font-headline text-lg mb-2">{cert.title}</CardTitle>
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:text-foreground group-hover:rotate-45" />
                                    </div>
                                    <CardDescription className="font-headline text-sm text-muted-foreground">{cert.issuer}</CardDescription>
                                    <div className="pt-4">
                                        <Badge variant="secondary" className="font-headline">{cert.date}</Badge>
                                    </div>
                                </CardHeader>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
