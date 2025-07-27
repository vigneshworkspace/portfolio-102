
import { CERTIFICATIONS } from '@/lib/data';
import { Card } from '@/components/ui/card';
import CertificationIcon from '@/components/icons/CertificationIcon';
import { ArrowRight } from 'lucide-react';

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 md:py-40 relative">
            <div className="max-w-5xl mx-auto">
                <p className="section-title mb-12 justify-center">05 // Certifications</p>
                <div className="grid md:grid-cols-2 gap-6">
                    {CERTIFICATIONS.map((cert) => (
                        <a 
                            key={cert.title} 
                            href={cert.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="group relative block"
                        >
                            <Card className="h-full bg-card/50 backdrop-blur-sm border-dashed border border-border/50 transition-all duration-300 group-hover:bg-muted/50">
                                <div className="p-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
                                    <div className="flex-shrink-0">
                                        <CertificationIcon title={cert.title} />
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-headline text-lg sm:text-xl uppercase tracking-wider text-foreground group-hover:text-primary transition-colors duration-300">{cert.title}</h4>
                                        <p className="font-headline text-sm sm:text-base text-muted-foreground">{cert.issuer}</p>
                                    </div>
                                    <div className="items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors duration-300 sm:ml-auto hidden sm:flex">
                                       <span className="text-sm font-mono hidden sm:inline">View</span>
                                       <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Card>
                             {/* Animated borders */}
                            <span className="absolute bottom-0 left-0 h-0 w-1 bg-primary transition-all duration-300 group-hover:h-full"></span>
                            <span className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
