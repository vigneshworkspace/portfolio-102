import { CERTIFICATIONS } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CertificationIcon from '@/components/icons/CertificationIcon';

export default function CertificationsSection() {
    return (
        <section id="certifications" className="py-24 md:py-40 relative">
             <div className="dot-matrix-bg absolute inset-0 -z-10 opacity-30" />
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
                            <Card className="h-full transition-all duration-300 hover:border-foreground hover:shadow-2xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-dashed">
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <CardTitle className="font-headline text-2xl uppercase tracking-wider">{cert.title}</CardTitle>
                                        <CertificationIcon title={cert.title} />
                                    </div>
                                    <CardDescription className="font-headline text-lg text-muted-foreground">{cert.issuer}</CardDescription>
                                    <div className="pt-4">
                                        <Badge variant="secondary" className="font-headline text-base">{cert.date}</Badge>
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
