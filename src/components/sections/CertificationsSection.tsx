import { CERTIFICATIONS } from '@/lib/data';
import { Card } from '@/components/ui/card';
import CertificationIcon from '@/components/icons/CertificationIcon';
import { ArrowRight } from 'lucide-react';

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 md:py-40 relative">
             <div className="dot-matrix-bg absolute inset-0 -z-10 opacity-30" />
            <div className="max-w-5xl mx-auto">
                <p className="section-title mb-12 text-center">06 // Certifications</p>
                <div className="grid md:grid-cols-2 gap-6">
                    {CERTIFICATIONS.map((cert) => (
                        <a 
                            key={cert.title} 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group block"
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-dashed border border-border/50 transition-all duration-300 hover:bg-muted/50 hover:border-l-4 hover:border-l-primary">
                                <div className="p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-shrink-0">
                                            <CertificationIcon title={cert.title} />
                                        </div>
                                        <div>
                                            <h4 className="font-headline text-xl uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                                            <p className="font-headline text-base text-muted-foreground">{cert.issuer}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                                       <span className="text-sm font-mono hidden sm:inline">View</span>
                                       <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
