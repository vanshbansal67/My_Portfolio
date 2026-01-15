import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TargetCursor = () => {
    const cursorRef = useRef(null);
    const innerRef = useRef(null);

    useEffect(() => {
        // High-performance setter for immediate movement
        const xSet = gsap.quickSetter(cursorRef.current, "x", "px");
        const ySet = gsap.quickSetter(cursorRef.current, "y", "px");

        const moveCursor = (e) => {
            xSet(e.clientX);
            ySet(e.clientY);
        };

        window.addEventListener('mousemove', moveCursor);

        // Hover animations remain smooth with standard gsap.to
        const handleHover = (e) => {
            if (e.target.closest('.cursor-target')) {
                gsap.to(innerRef.current, { scale: 1.5, borderColor: "#FF3E3E", duration: 0.2 });
            }
        };

        const handleLeave = (e) => {
            if (e.target.closest('.cursor-target')) {
                gsap.to(innerRef.current, { scale: 1, borderColor: "white", duration: 0.2 });
            }
        };

        window.addEventListener('mouseover', handleHover);
        window.addEventListener('mouseout', handleLeave);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
            window.removeEventListener('mouseout', handleLeave);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
        >
            <div ref={innerRef} className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-[#FF3E3E] rounded-full shadow-[0_0_5px_#FF3E3E]" />
            </div>
            {/* HUD Accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-[1px] bg-white/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-[1px] bg-white/20" />
        </div>
    );
};

export default TargetCursor;