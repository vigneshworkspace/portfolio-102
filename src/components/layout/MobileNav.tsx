
"use client";

import { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { RESUME_URL } from '@/lib/data';
import { ThemeToggleButton } from '../ThemeToggleButton';

const NavLink = ({ 
    href, 
    children, 
    isActive,
    onClick
}: { 
    href: string; 
    children: React.ReactNode; 
    isActive: boolean;
    onClick: () => void;
}) => {
    return (
        <a 
            href={href} 
            onClick={onClick}
            className={cn(
                "text-3xl font-headline uppercase tracking-widest transition-colors duration-300",
                isActive ? "text-primary" : "text-foreground hover:text-primary",
            )}
        >
            {children}
        </a>
    )
};

export default function MobileNav({ navItems, activeSection }: { navItems: { href: string, label: string }[], activeSection: string }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Open menu">
                <Menu className="h-6 w-6" />
            </Button>
            <div
                className={cn(
                    "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-opacity duration-300 ease-in-out",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
            >
                <div className="container mx-auto px-6 h-full flex flex-col">
                    <div className="flex justify-between items-center h-20">
                         <Link href="#home" className="font-logo text-3xl font-bold tracking-tight group" onClick={toggleMenu}>
                            V<span className="text-primary group-hover:animate-pulse">AI</span>D
                        </Link>
                        <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Close menu">
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center gap-10">
                        {navItems.map(item => (
                            <NavLink 
                                key={item.href} 
                                href={item.href} 
                                isActive={activeSection === item.href.substring(1)}
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                         <Button asChild size="lg" className="font-headline uppercase text-base tracking-widest px-10 py-7 rounded-full mt-8">
                            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
                        </Button>
                         <div className="pt-8">
                           <ThemeToggleButton />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

