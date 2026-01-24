'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
}

export function StaggerContainer({ children, className = '' }: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface StaggerItemProps {
    children: ReactNode;
    className?: string;
}

export function StaggerItem({ children, className = '' }: StaggerItemProps) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface HoverCardProps {
    children: ReactNode;
    className?: string;
}

export function HoverCard({ children, className = '' }: HoverCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

interface HoverImageProps {
    children: ReactNode;
    className?: string;
}

export function HoverImage({ children, className = '' }: HoverImageProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden ${className}`}
        >
            {children}
        </motion.div>
    );
}

interface PageTransitionProps {
    children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

interface HeroBannerProps {
    backgroundImage: string;
    title?: string;
    subtitle?: string;
    showCTA?: boolean;
    ctaText?: string;
    ctaLink?: string;
    minHeight?: string;
}

export function HeroBanner({
    backgroundImage,
    title,
    subtitle,
    showCTA = false,
    ctaText = 'Learn More',
    ctaLink = '/contact',
    minHeight = '350px',
}: HeroBannerProps) {
    return (
        <div className="p-4">
            <motion.div
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4`}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${backgroundImage}")`,
                    minHeight,
                }}
            >
                {(title || subtitle) && (
                    <div className="flex flex-col gap-2 text-center">
                        {title && (
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]"
                            >
                                {title}
                            </motion.h1>
                        )}
                        {subtitle && (
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="text-white text-sm md:text-base font-normal leading-normal max-w-2xl"
                            >
                                {subtitle}
                            </motion.h2>
                        )}
                    </div>
                )}
                {showCTA && (
                    <motion.a
                        href={ctaLink}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 md:h-12 md:px-5 bg-[#db3d7a] text-white text-sm md:text-base font-bold leading-normal tracking-[0.015em]"
                    >
                        <span className="truncate">{ctaText}</span>
                    </motion.a>
                )}
            </motion.div>
        </div>
    );
}
