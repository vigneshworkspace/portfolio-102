import { BADGES } from '@/lib/badges';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function BadgesSection() {
    return (
        <section id="badges" className="py-24 md:py-40 relative">
            <div className="dot-matrix-bg absolute inset-0 -z-10" />
            <div className="max-w-5xl mx-auto">
                <p className="section-title mb-12 text-center">05 // Skills & Achievements</p>
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-8 md:p-12">
                        <div className="flex flex-wrap justify-center gap-3">
                            {BADGES.map((badgeText, index) => (
                                <Badge 
                                    key={index}
                                    variant="secondary"
                                    className="text-base md:text-lg font-headline px-4 py-2 border-2 border-transparent transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:shadow-lg hover:-translate-y-1"
                                >
                                    {badgeText}
                                </Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
