"use client";

// Simple Aurora using Tailwind classes and arbitrary values for animations
// Ideally keyframes should be in globals.css for performance, but inline works for this demo.

export default function Aurora() {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-background pointer-events-none">
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-50 blur-[60px] animate-[spin_60s_linear_infinite]"
                style={{ background: 'radial-gradient(circle at center, transparent 0%, var(--background) 70%)' }}
            >
                <div className="absolute top-[20%] left-[30%] w-[60vw] h-[60vw] rounded-full bg-primary opacity-40 blur-[80px] animate-[float_25s_infinite_alternate]" />
                <div className="absolute top-[40%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-accent opacity-40 blur-[80px] animate-[float_30s_infinite_alternate] delay-[-5s]" />
                <div className="absolute bottom-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-indigo-600 opacity-40 blur-[80px] animate-[float_22s_infinite_alternate] delay-[-10s]" />
            </div>
        </div>
    );
}
