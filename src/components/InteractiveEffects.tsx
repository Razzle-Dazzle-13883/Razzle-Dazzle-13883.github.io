'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Lightweight Particle System - optimized for performance
export function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const particlesRef = useRef<Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        size: number;
        alpha: number;
    }>>([]);
    const animationRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        const resizeCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio, 1.5); // Cap DPR for performance
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;
            ctx.scale(dpr, dpr);
        };

        resizeCanvas();

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 200);
        };
        window.addEventListener('resize', handleResize);

        // Much fewer particles - only 25 for subtle effect
        const particleCount = 25;
        for (let i = 0; i < particleCount; i++) {
            particlesRef.current.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 1,
                alpha: Math.random() * 0.3 + 0.1,
            });
        }

        // Throttled mouse tracking
        let lastMouseUpdate = 0;
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastMouseUpdate > 50) { // Only update every 50ms
                mouseRef.current = { x: e.clientX, y: e.clientY };
                lastMouseUpdate = now;
            }
        };
        window.addEventListener('mousemove', handleMouseMove, { passive: true });

        const animate = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            ctx.clearRect(0, 0, width, height);

            particlesRef.current.forEach((particle) => {
                // Simple attraction to mouse - no complex calculations
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distSq = dx * dx + dy * dy;

                if (distSq < 40000 && distSq > 0) { // 200px radius squared
                    const dist = Math.sqrt(distSq);
                    particle.vx += (dx / dist) * 0.015;
                    particle.vy += (dy / dist) * 0.015;
                }

                // Apply velocity with strong damping
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vx *= 0.96;
                particle.vy *= 0.96;

                // Wrap around screen
                if (particle.x < 0) particle.x = width;
                if (particle.x > width) particle.x = 0;
                if (particle.y < 0) particle.y = height;
                if (particle.y > height) particle.y = 0;

                // Draw particle - simple circle, no glow
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(219, 61, 122, ${particle.alpha})`;
                ctx.fill();
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
            clearTimeout(resizeTimeout);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                background: 'transparent',
                willChange: 'auto',
            }}
        />
    );
}

// Magnetic Button - simplified, CSS-based
interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    href?: string;
}

export function MagneticButton({ children, className = '', onClick, href }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.2);
        y.set((e.clientY - centerY) * 0.2);
    }, [x, y]);

    const handleMouseLeave = useCallback(() => {
        x.set(0);
        y.set(0);
    }, [x, y]);

    const content = (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative cursor-pointer transition-transform ${className}`}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return <a href={href}>{content}</a>;
    }

    return content;
}

// Simplified Floating Orbs - pure CSS animations
export function FloatingOrbs() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div
                className="absolute w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] animate-float-slow"
                style={{
                    background: 'radial-gradient(circle, #db3d7a 0%, transparent 70%)',
                    top: '10%',
                    right: '-10%',
                }}
            />
            <div
                className="absolute w-[300px] h-[300px] rounded-full opacity-15 blur-[80px] animate-float-medium"
                style={{
                    background: 'radial-gradient(circle, #513d45 0%, transparent 70%)',
                    bottom: '20%',
                    left: '-5%',
                }}
            />
        </div>
    );
}

// Simple 3D Tilt Card - CSS-based hover
interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
}

export function TiltCard({ children, className = '' }: TiltCardProps) {
    return (
        <div className={`group ${className}`}>
            <div className="transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                {children}
            </div>
        </div>
    );
}

// Glowing Text - pure CSS
interface GlowTextProps {
    children: React.ReactNode;
    className?: string;
}

export function GlowText({ children, className = '' }: GlowTextProps) {
    return (
        <span className={`hover:text-glow transition-all duration-300 ${className}`}>
            {children}
        </span>
    );
}

// Animated Counter - intersection observer based
interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

export function AnimatedCounter({ value, suffix = '', duration = 1.5 }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const steps = Math.min(value, 40); // Max 40 steps for performance
                    const increment = value / steps;
                    const stepDuration = (duration * 1000) / steps;
                    let current = 0;

                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, stepDuration);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}{suffix}
        </span>
    );
}

// Reveal on Scroll - simple fade in
interface GlowRevealProps {
    children: React.ReactNode;
    className?: string;
}

export function GlowReveal({ children, className = '' }: GlowRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                } ${className}`}
        >
            {children}
        </div>
    );
}

// Gradient Border Card - CSS only
interface GradientBorderCardProps {
    children: React.ReactNode;
    className?: string;
}

export function GradientBorderCard({ children, className = '' }: GradientBorderCardProps) {
    return (
        <div className={`relative p-[2px] rounded-2xl overflow-hidden group ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#db3d7a] via-[#ff6b9d] to-[#db3d7a] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-[#1a1417] rounded-2xl p-4 h-full">
                {children}
            </div>
        </div>
    );
}

// Stats Item
interface StatItemProps {
    value: number;
    label: string;
    suffix?: string;
}

export function StatItem({ value, label, suffix = '' }: StatItemProps) {
    return (
        <GlowReveal className="text-center">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d]">
                <AnimatedCounter value={value} suffix={suffix} />
            </div>
            <div className="text-[#b79fa8] mt-2">{label}</div>
        </GlowReveal>
    );
}
