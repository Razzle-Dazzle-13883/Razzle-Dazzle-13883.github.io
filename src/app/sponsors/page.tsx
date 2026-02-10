'use client';

import { motion } from 'framer-motion';
import { GlowReveal, GradientBorderCard, TiltCard, MagneticButton } from '@/components/InteractiveEffects';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedComponents';

import Image from 'next/image';

interface SponsorCardProps {
    image: string;
    name: string;
    description: string;
}

function SponsorCard({ image, name, description }: SponsorCardProps) {
    return (
        <StaggerItem>
            <TiltCard className="h-full">
                <motion.div
                    className="flex flex-col rounded-2xl bg-[#1a1417]/80 backdrop-blur-sm border border-[#372a2f] overflow-hidden h-full group"
                    whileHover={{ borderColor: '#db3d7a' }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="aspect-square w-full overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url("${image}")` }}
                        />
                    </motion.div>
                    <div className="p-4">
                        <h3 className="text-white font-bold mb-1 group-hover:text-[#ff6b9d] transition-colors">{name}</h3>
                        <p className="text-[#b79fa8] text-sm">{description}</p>
                    </div>
                </motion.div>
            </TiltCard>
        </StaggerItem>
    );
}

export default function SponsorsPage() {
    const sponsors = [
        {
            image: '/images/engineeringday.jpg',
            name: 'Your Company Name',
            description: 'Your Company Description',
        },
        {
            image: '/images/soccerrobot.jpg',
            name: 'Your Company Name',
            description: 'Your Company Description',
        },
    ];

    const sponsorshipTiers = [
        { name: 'Silver', amount: '$250+', color: 'from-gray-400 to-gray-300', benefits: ['Logo on website', 'Logo on team shirts', 'Social media feature'] },
        { name: 'Gold', amount: '$500+', color: 'from-yellow-500 to-yellow-400', benefits: ['All Silver benefits', 'Banner at events', 'Special recognition'] },
        { name: 'Platinum', amount: '$1000+', color: 'from-[#db3d7a] to-[#ff6b9d]', benefits: ['All Gold benefits', 'Featured sponsor status', 'Custom partnership'] },
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
                                src="/images/sponsorsbanner.jpg"
                                alt="Our Sponsors"
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
                            Partner With Us
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-black mb-6"
                        >
                            <span className="text-white">Our </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d]">
                                Sponsors
                            </span>
                        </motion.h1>
                    </div>
                </section>

                {/* Why Sponsor Us */}
                <GlowReveal>
                    <GradientBorderCard className="mb-12">
                        <div className="p-6 md:p-10">
                            <h2 className="text-2xl font-bold text-white mb-4">Why Sponsor Razzle Dazzle?</h2>
                            <p className="text-[#b79fa8] leading-relaxed mb-6">
                                We are incredibly grateful for sponsor support, which makes our participation in robotics competitions possible. Their commitment to STEM education helps us inspire the next generation of innovators.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { icon: '🎯', title: 'STEM Education', desc: 'Support hands-on learning' },
                                    { icon: '🌟', title: 'Community Impact', desc: 'Inspire young engineers' },
                                    { icon: '📣', title: 'Brand Visibility', desc: 'Logo on gear & website' },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="text-center p-4"
                                    >
                                        <div className="text-4xl mb-2">{item.icon}</div>
                                        <h3 className="text-white font-bold">{item.title}</h3>
                                        <p className="text-[#b79fa8] text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </GradientBorderCard>
                </GlowReveal>

                {/* Sponsorship Tiers */}
                <GlowReveal>
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                            Sponsorship Tiers
                        </span>
                    </h2>
                </GlowReveal>
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    {sponsorshipTiers.map((tier) => (
                        <StaggerItem key={tier.name}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <div className="h-full rounded-2xl bg-[#1a1417] border border-[#372a2f] p-6 flex flex-col">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4 text-white font-bold`}>
                                        {tier.name[0]}
                                    </div>
                                    <h3 className="text-white text-xl font-bold mb-1">{tier.name}</h3>
                                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${tier.color} font-bold text-lg mb-4`}>
                                        {tier.amount}
                                    </p>
                                    <ul className="space-y-2 flex-1">
                                        {tier.benefits.map((benefit) => (
                                            <li key={benefit} className="text-[#b79fa8] text-sm flex items-start gap-2">
                                                <svg className="w-4 h-4 text-[#db3d7a] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>

                {/* Current Sponsors */}
                <GlowReveal>
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                            Thank You Sponsors!
                        </span>
                    </h2>
                </GlowReveal>
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
                    {sponsors.map((sponsor, index) => (
                        <SponsorCard key={index} {...sponsor} />
                    ))}
                </StaggerContainer>

                {/* CTA */}
                <GlowReveal>
                    <GradientBorderCard>
                        <div className="p-8 md:p-12 text-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Become a Sponsor Today
                            </h2>
                            <p className="text-[#b79fa8] mb-6 max-w-xl mx-auto">
                                Your support helps us compete, learn, and inspire. Join our family of sponsors and make a difference in STEM education.
                            </p>
                            <MagneticButton
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d] text-white font-bold text-lg shadow-[0_0_30px_rgba(219,61,122,0.4)]"
                            >
                                Contact Us to Sponsor
                            </MagneticButton>
                        </div>
                    </GradientBorderCard>
                </GlowReveal>
            </div>
        </div>
    );
}
