'use client';

import { motion } from 'framer-motion';
import { TiltCard, GlowReveal, GradientBorderCard, MagneticButton } from '@/components/InteractiveEffects';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedComponents';

import Image from 'next/image';

interface RobotCardProps {
    image: string;
    title: string;
    season: string;
    description: string;
    cadLink?: string;
    isLatest?: boolean;
}

function RobotCard({ image, title, season, description, cadLink, isLatest }: RobotCardProps) {
    return (
        <StaggerItem>
            <TiltCard className="h-full">
                <motion.div
                    className={`relative overflow-hidden rounded-2xl ${isLatest ? 'bg-gradient-to-br from-[#1a1417] to-[#261d20]' : 'bg-[#1a1417]/80'} backdrop-blur-sm border ${isLatest ? 'border-[#db3d7a]/50' : 'border-[#372a2f]'} h-full`}
                    whileHover={{ borderColor: '#db3d7a' }}
                    transition={{ duration: 0.3 }}
                >
                    {isLatest && (
                        <div className="absolute top-4 right-4 z-10">
                            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d] text-white text-xs font-bold">
                                CURRENT SEASON
                            </span>
                        </div>
                    )}
                    <div className="flex flex-col lg:flex-row">
                        <motion.div
                            className="lg:w-1/2 h-64 lg:h-auto min-h-[280px] relative overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url("${image}")` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a1417] lg:block hidden" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1417] via-transparent to-transparent lg:hidden" />
                        </motion.div>
                        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
                            <span className="text-[#db3d7a] text-sm font-semibold mb-2">{season}</span>
                            <h3 className="text-white text-2xl lg:text-3xl font-black mb-4">{title}</h3>
                            <p className="text-[#b79fa8] leading-relaxed mb-6">{description}</p>
                            {cadLink && (
                                <MagneticButton
                                    href={cadLink}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#db3d7a] text-[#db3d7a] font-semibold hover:bg-[#db3d7a]/10 w-fit"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                        <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
                                    </svg>
                                    View CAD Design
                                </MagneticButton>
                            )}
                        </div>
                    </div>
                </motion.div>
            </TiltCard>
        </StaggerItem>
    );
}

export default function RobotsPage() {
    const robots = [
        {
            image: '/images/robotcup.jpg',
            title: 'INTO THE DEEP',
            season: '2024-2025 Season',
            description: 'Built for the 2024-2025 season, this is the final iteration of our robot. It uses a mecanum chassis and a side plate system for maximum optimization. We used a passthrough system to effectively place the samples.',
            cadLink: 'https://cad.onshape.com/documents/3f7562c004cb2239ae7f3195/w/4d93188c7adadf20e6dc909a/e/6c2e2a2537f5deb3c17a4bbd?renderMode=0&uiState=684b4ee41024971369319735',
            isLatest: true,
        },
        {
            image: '/images/centerstage.webp',
            title: 'CENTERSTAGE',
            season: '2023-2024 Season',
            description: 'Built for the 2023-2024 season, this robot uses a mecanum chassis and a side plate system for maximum optimization. We used a passthrough system to effectively place the pixels.',
            cadLink: 'https://cad.onshape.com/documents/542c593e0e48fc085a68c7a4/w/d6c34042ef63e972c9423c55/e/0ac609a8e15e5de4511a8c0a?renderMode=0&uiState=684b4a1a4810d10f82355237',
        },
        {
            image: '/images/powerplay.png',
            title: 'POWERPLAY',
            season: '2022-2023 Season',
            description: 'This robot uses a mecanum chassis and linear slides for vertical movement. A claw is used to grab the cones and score points during matches.',
        },
    ];

    return (
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center py-16 mb-8">
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <motion.div
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src="/images/robotsbanner.jpg"
                                alt="Our Robots"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a0b]/95 via-[#0d0a0b]/70 to-[#0d0a0b]/95" />
                        </motion.div>
                    </div>
                    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 rounded-full bg-[#db3d7a]/20 text-[#db3d7a] text-sm font-medium mb-6 border border-[#db3d7a]/30"
                        >
                            Engineering Excellence
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-black mb-6"
                        >
                            <span className="text-white">Our </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d]">
                                Robots
                            </span>
                        </motion.h1>
                    </div>
                </section>

                {/* CAD Resources */}
                <GlowReveal>
                    <GradientBorderCard className="mb-12">
                        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#db3d7a] to-[#ff6b9d] flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" viewBox="0 0 256 256">
                                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192ZM48,136a8,8,0,0,1,8-8H200a8,8,0,0,1,0,16H56A8,8,0,0,1,48,136Zm0-32a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56A8,8,0,0,1,48,104Zm0,64a8,8,0,0,1,8-8H200a8,8,0,0,1,0,16H56A8,8,0,0,1,48,168Z" />
                                </svg>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-white text-xl font-bold mb-2">CAD Resources</h3>
                                <p className="text-[#b79fa8]">
                                    We CAD our designs with Onshape using the Purple Gears Parts Library.{' '}
                                    <a
                                        href="https://www.reddit.com/r/FTC/comments/g3qaaf/ptcapproved_ftc_onshape_parts_library/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="body-link"
                                    >
                                        Get the library →
                                    </a>
                                </p>
                            </div>
                        </div>
                    </GradientBorderCard>
                </GlowReveal>

                {/* Robot Cards */}
                <StaggerContainer className="space-y-8">
                    {robots.map((robot) => (
                        <RobotCard key={robot.title} {...robot} />
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
