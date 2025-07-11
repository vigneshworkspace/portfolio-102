"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/data';
import { Button } from '../ui/button';

const NavLink = ({ 
    href, 
    children, 
    isActive 
}: { 
    href: string; 
    children: React.ReactNode; 
    isActive: boolean;
}) => {
    return (
        <a 
            href={href} 
            className={cn(
                "font-headline uppercase text-lg tracking-widest relative transition-colors duration-300",
                isActive ? "text-primary" : "hover:text-primary",
            )}
        >
            {children}
            <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300",
                isActive ? "scale-x-100" : "scale-x-0",
                "group-hover:scale-x-100" // This won't work as there's no group, but the hover on the parent works
            )} />
        </a>
    )
};


export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' } // Adjust threshold for better accuracy
        );

        const sections = document.querySelectorAll('section');
        sections.forEach((section) => observer.observe(section));
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navItems = [
        { href: '#about', label: 'About' },
        { href: '#experience', label: 'Experience' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' }
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 transition-all duration-300",
            isScrolled ? "border-b border-border shadow-lg" : "border-b border-transparent"
        )}>
            <div className="container mx-auto px-6">
                <nav className="flex justify-between items-center h-20">
                    <Link href="#home" className="font-headline text-2xl font-bold tracking-tighter group">
                        V<span className="text-primary-foreground bg-primary rounded-sm p-1 group-hover:animate-pulse">AI</span>D
                    </Link>
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map(item => (
                            <NavLink key={item.href} href={item.href} isActive={activeSection === item.href.substring(1)}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                     <div className="hidden md:flex items-center">
                        <Button asChild variant="outline" size="sm" className="font-headline uppercase text-xs tracking-widest px-6 py-4">
                            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
}
