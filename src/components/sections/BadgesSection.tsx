import { BADGES } from '@/lib/badges';
import { Badge } from '@/components/ui/badge';

export default function BadgesSection() {
    return (
        <section id="badges" className="py-24 md:py-40 relative">
            <div className="dot-matrix-bg absolute inset-0 -z-10 opacity-30" />
            <div className="max-w-5xl mx-auto">
                <p className="section-title mb-12 text-center">05 // Skills & Achievements</p>
                <div className="border border-dashed border-border/50 p-4 rounded-lg">
                    <div className="flex flex-wrap justify-center gap-3">
                        {BADGES.map((badgeText, index) => (
                            <Badge 
                                key={index}
                                variant="secondary"
                                className="text-base md:text-lg font-headline px-4 py-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                            >
                                {badgeText}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
