'use client';

import { motion } from 'framer-motion';
import { GlowReveal, GradientBorderCard, TiltCard } from '@/components/InteractiveEffects';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedComponents';

import Image from 'next/image';

interface EventCardProps {
    image: string;
    title: string;
    description: string;
    location: string;
    date: string;
    type: 'competition' | 'outreach' | 'workshop';
}

function EventCard({ image, title, description, location, date, type }: EventCardProps) {
    const typeColors = {
        competition: 'from-[#db3d7a] to-[#ff6b9d]',
        outreach: 'from-[#ff6b9d] to-[#b79fa8]',
        workshop: 'from-[#b79fa8] to-[#db3d7a]',
    };

    const typeLabels = {
        competition: 'COMPETITION',
        outreach: 'OUTREACH',
        workshop: 'WORKSHOP',
    };

    return (
        <StaggerItem>
            <TiltCard className="h-full">
                <motion.div
                    className="flex flex-col md:flex-row gap-4 p-4 md:p-6 rounded-2xl bg-[#1a1417]/80 backdrop-blur-sm border border-[#372a2f] h-full"
                    whileHover={{ borderColor: '#db3d7a' }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="w-full md:w-24 h-48 md:h-24 rounded-xl overflow-hidden shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url("${image}")` }}
                        />
                    </motion.div>
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${typeColors[type]}`}>
                                {typeLabels[type]}
                            </span>
                            <span className="text-[#b79fa8] text-sm">{date}</span>
                        </div>
                        <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
                        <p className="text-[#b79fa8] text-sm leading-relaxed mb-2">{description}</p>
                        <p className="text-[#db3d7a] text-sm font-medium">{location}</p>
                    </div>
                </motion.div>
            </TiltCard>
        </StaggerItem>
    );
}

export default function EventsPage() {
    const events = [
        {
            image: '/images/ascendqual.jpg',
            title: 'Ascend Leadership Academy Qualifier',
            description: 'Our second qualifier went much better than our first. We are proud and motivated for the upcoming season.',
            location: 'Ascend Leadership Academy, Sanford, NC',
            date: 'February 8, 2025',
            type: 'competition' as const,
        },
        {
            image: '/images/salemqual.jpg',
            title: 'Salem Academy Qualifier',
            description: 'Our first qualifier of the season where we earned first place Think Award! We learned a lot from this experience.',
            location: 'Salem Academy, Winston-Salem, NC',
            date: 'January 26, 2025',
            type: 'competition' as const,
        },
        {
            image: '/images/outreach.jpg',
            title: 'Common Roots Festival Outreach',
            description: 'Robotics demonstration showcasing our robots and interacting with the community at this cultural celebration.',
            location: 'Historic Durham Athletic Park, Durham, NC',
            date: 'May 17, 2025',
            type: 'outreach' as const,
        },
        {
            image: '/images/outreach1.jpg',
            title: 'Engineering Day Outreach',
            description: 'Engineering Day 2025! Hands-on STEM activities including 3D printing, STEAM exploration, and inspiring talks!',
            location: 'Apex Community Center, Apex, NC',
            date: 'February 22, 2025',
            type: 'outreach' as const,
        },
        {
            image: '/images/workshop.jpg',
            title: 'Introduction to CAD Workshop',
            description: 'Learn the basics of Computer Aided Design including digital tools used for robot design.',
            location: 'A&T University, Greensboro, NC',
            date: 'September 6, 2025',
            type: 'workshop' as const,
        },
    ];

    const competitions = events.filter(e => e.type === 'competition');
    const outreach = events.filter(e => e.type === 'outreach');
    const workshops = events.filter(e => e.type === 'workshop');

    return (
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center py-16 mb-8">
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <Image
                            src="/images/eventsbanner.jpg"
                            alt="Our Events"
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1200px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a0b]/95 via-[#0d0a0b]/70 to-[#0d0a0b]/95" />
                    </div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-[#db3d7a]/20 text-[#db3d7a] text-sm font-medium mb-6 border border-[#db3d7a]/30"
                        >
                            Competitions • Outreach • Workshops
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-black mb-6"
                        >
                            <span className="text-white">Our </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d]">
                                Events
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#b79fa8] text-lg"
                        >
                            Stay updated with our team&apos;s activities and achievements
                        </motion.p>
                    </div>
                </section>

                {/* Competitions */}
                <GlowReveal>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#db3d7a] to-[#ff6b9d] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                                <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v32a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,208.62V232H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V208.62A80.13,80.13,0,0,0,204.35,152H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,136a24,24,0,0,1-24-24V80H48v32a79.52,79.52,0,0,0,1.07,13A24,24,0,0,1,48,136Zm184-24a24,24,0,0,1-25.07,24A79.52,79.52,0,0,0,208,112V80h24Z" />
                            </svg>
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                            Competitions
                        </span>
                    </h2>
                </GlowReveal>
                <StaggerContainer className="space-y-4 mb-12">
                    {competitions.map((event) => (
                        <EventCard key={event.title} {...event} />
                    ))}
                </StaggerContainer>

                {/* Outreach */}
                <GlowReveal>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff6b9d] to-[#b79fa8] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                                <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,35.74-29.55,48,48,0,1,1,54.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM64,144a8,8,0,0,0-7.37,4.89,8,8,0,0,0,0,6.22A8,8,0,0,0,64,160a51.6,51.6,0,0,1,41.6,20.8,8,8,0,0,0,12.8-9.6,67.94,67.94,0,0,0-27.43-21.68A40,40,0,1,0,37,78a8,8,0,1,0,15.52,4A24,24,0,1,1,64,144Z" />
                            </svg>
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                            Outreach
                        </span>
                    </h2>
                </GlowReveal>
                <StaggerContainer className="space-y-4 mb-12">
                    {outreach.map((event) => (
                        <EventCard key={event.title} {...event} />
                    ))}
                </StaggerContainer>

                {/* Workshops */}
                <GlowReveal>
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#b79fa8] to-[#db3d7a] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM40,56H216V96H40ZM216,200H40V112H216v88Zm-16-68a12,12,0,1,1-12-12A12,12,0,0,1,200,132Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,156,132Z" />
                            </svg>
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                            Workshops
                        </span>
                    </h2>
                </GlowReveal>
                <StaggerContainer className="space-y-4">
                    {workshops.map((event) => (
                        <EventCard key={event.title} {...event} />
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
