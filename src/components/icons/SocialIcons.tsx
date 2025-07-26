import { cn } from "@/lib/utils";
import React from "react";

export const BehanceIcon = ({ className }: { className?: string }) => (
    <svg
        className={cn("h-6 w-6", className)}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M14 6h7v7h-7z" />
        <path d="M14 11h7" />
        <path d="M3 11v-1a2 2 0 0 1 2-2h2" />
        <path d="M3 17v-1a2 2 0 0 1 2-2h2" />
        <path d="M7 11a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" />
        <path d="M7 17a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z" />
    </svg>
);
