"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="font-headline uppercase text-xs tracking-widest transition-colors duration-300 hover:text-primary">
        {children}
    </Link>
);

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 transition-all duration-300",
            isScrolled ? "border-b border-border shadow-md" : "border-b border-transparent"
        )}>
            <div className="container mx-auto px-6">
                <nav className="flex justify-between items-center h-20">
                    <Link href="#home" className="font-headline text-sm font-bold tracking-tighter">
                        VIGNESHWARAN<span className="text-primary">.</span>
                    </Link>
                    <div className="hidden md:flex items-center space-x-10">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}
