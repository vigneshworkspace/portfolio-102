"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '@/lib/data';

const NavLink = ({ href, children, isExternal = false }: { href: string; children: React.ReactNode, isExternal?: boolean }) => {
    const linkProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
        <a href={href} {...linkProps} className="font-headline uppercase text-lg tracking-widest transition-colors duration-300 hover:text-primary hover:bg-primary-foreground rounded-sm px-2">
            {children}
        </a>
    )
};


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
            "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm z-50 transition-all duration-300",
            isScrolled ? "border-b border-border shadow-lg" : "border-b border-transparent"
        )}>
            <div className="container mx-auto px-6">
                <nav className="flex justify-between items-center h-20">
                    <Link href="#home" className="font-headline text-2xl font-bold tracking-tighter">
                        V<span className="text-primary-foreground bg-primary rounded-sm p-1">AI</span>D
                    </Link>
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#experience">Experience</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                        <div className="w-[2px] h-6 bg-border/50"></div>
                        <NavLink href={GITHUB_URL} isExternal={true}>GitHub</NavLink>
                        <NavLink href={LINKEDIN_URL} isExternal={true}>LinkedIn</NavLink>
                        <NavLink href={RESUME_URL} isExternal={true}>Resume</NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
}
