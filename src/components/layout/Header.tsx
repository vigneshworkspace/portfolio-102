import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="font-headline uppercase text-xs tracking-widest transition-colors duration-300 hover:text-primary">
        {children}
    </Link>
);

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-background/70 backdrop-blur-md border-b border-border z-50">
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
