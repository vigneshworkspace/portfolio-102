import Link from 'next/link';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/data';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="font-headline text-xs text-muted-foreground hover:text-primary transition-colors">
    {children}
  </a>
);

export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="container mx-auto px-6 h-24 flex justify-between items-center">
                <p className="font-headline text-xs text-muted-foreground">&copy; {new Date().getFullYear()} VIGNESHWARAN</p>
                <div className="flex space-x-6">
                    <FooterLink href={GITHUB_URL}>GitHub</FooterLink>
                    <FooterLink href={LINKEDIN_URL}>LinkedIn</FooterLink>
                    <FooterLink href={RESUME_URL}>Resume</FooterLink>
                </div>
            </div>
        </footer>
    );
}
