export default function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="container mx-auto px-6 h-24 flex justify-center items-center">
                <p className="font-headline text-xs text-muted-foreground">&copy; {new Date().getFullYear()} VIGNESHWARAN. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
}
