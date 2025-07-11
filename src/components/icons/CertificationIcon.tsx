import { Award } from 'lucide-react';

const CIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300">
        <path d="M14.53,16.85c-1.1,1.44-2.58,2.4-4.26,2.67c-1.68,0.27-3.32-0.12-4.6-1.03c-1.28-0.9-2.15-2.28-2.33-3.8 C3.16,13.2,3.53,11.6,4.3,10.32s1.9-2.3,3.13-2.92c1.23-0.62,2.58-0.85,3.87-0.63c1.29,0.22,2.49,0.9,3.41,1.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const CppIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-muted-foreground group-hover:text-primary transition-colors duration-300">
        <path d="M12.53,16.85c-1.1,1.44-2.58,2.4-4.26,2.67c-1.68,0.27-3.32-0.12-4.6-1.03c-1.28-0.9-2.15-2.28-2.33-3.8 C1.16,13.2,1.53,11.6,2.3,10.32s1.9-2.3,3.13-2.92c1.23-0.62,2.58-0.85,3.87-0.63c1.29,0.22,2.49,0.9,3.41,1.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 10h-2M17 9v2M21 10h-2M20 9v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const TensorFlowIcon = () => (
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300">
        <path d="M11.625 10.313V4.5L6 7.438V12.5L7.875 13.563L11.625 15.688V10.313Z" fill="currentColor"/>
        <path d="M12.375 10.313V4.5L18 7.438V12.5L16.125 13.563L12.375 15.688V10.313Z" fill="currentColor" fillOpacity="0.7"/>
        <path d="M11.625 16.688L7.875 14.563V19.5L12 21.688L16.125 19.5V14.563L12.375 16.688H11.625Z" fill="currentColor" fillOpacity="0.5"/>
    </svg>
);


type CertificationIconProps = {
    title: string;
};

export default function CertificationIcon({ title }: CertificationIconProps) {
    const lowerCaseTitle = title.toLowerCase();

    if (lowerCaseTitle.includes('c++')) {
        return <CppIcon />;
    }
    if (lowerCaseTitle.includes('c') && !lowerCaseTitle.includes('c++')) {
        return <CIcon />;
    }
    if (lowerCaseTitle.includes('tensorflow')) {
        return <TensorFlowIcon />;
    }
    
    // Default award icon for others like Python, Java, ML, Quantum Computing etc.
    return <Award className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />;
}
