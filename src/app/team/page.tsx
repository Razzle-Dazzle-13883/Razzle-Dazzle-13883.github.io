'use client';

import { motion } from 'framer-motion';
import { TiltCard, GlowReveal, GradientBorderCard } from '@/components/InteractiveEffects';
import { StaggerContainer, StaggerItem } from '@/components/AnimatedComponents';

import Image from 'next/image';

interface TeamMemberProps {
    image: string;
    name: string;
    role: string;
    index: number;
}

function TeamMember({ image, name, role, index }: TeamMemberProps) {
    return (
        <StaggerItem>
            <TiltCard className="h-full">
                <motion.div
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#1a1417]/80 backdrop-blur-sm border border-[#372a2f] h-full group"
                    whileHover={{ borderColor: '#db3d7a' }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="relative w-24 h-24 md:w-32 md:h-32 mb-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-full border-2 border-[#372a2f] group-hover:border-[#db3d7a] transition-colors duration-300"
                            style={{ backgroundImage: `url("${image}")` }}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, transparent 30%, rgba(219, 61, 122, 0.3) 100%)',
                            }}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <h3 className="text-white text-lg font-bold mb-1 group-hover:text-[#ff6b9d] transition-colors">{name}</h3>
                    <p className="text-[#b79fa8] text-sm">{role}</p>
                </motion.div>
            </TiltCard>
        </StaggerItem>
    );
}

export default function TeamPage() {
    const teamMembers = [
        {
            image: 'https://media.discordapp.net/attachments/1284589753521410080/1330972424564506717/IMG_4178.jpg?ex=687d3a2a&is=687be8aa&hm=f87d917d1da50e93fa94ebdfa4f969142b11d3195f908c551d0fd0cf6a09bcd4&=&format=webp&width=680&height=992',
            name: 'Anish',
            role: 'Builder, Programmer',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/1284589753521410080/1331002983026262178/image.jpg?ex=687caddf&is=687b5c5f&hm=bff57b18f83d019218397d42b8e88c09d92aaa07052bc9e3d58e36a6e029d7fe&',
            name: 'Dash',
            role: 'Builder, Programmer',
        },
        {
            image: 'https://media.discordapp.net/attachments/1284589753521410080/1330973403833696316/E2EDEBDF-9036-468D-BF22-4CB41DF53F91.jpg?ex=687d3b13&is=687be993&hm=2df2510098caef532f9cd5560f82697e5ac7b1d29b29eb0c0e6a74a90e30661b&=&format=webp&width=888&height=992',
            name: 'Dinesh',
            role: 'Builder',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/1284589753521410080/1330972469279854645/IMG_4184.jpg?ex=687d3a34&is=687be8b4&hm=90ae7944054a1e66c1b2c28fdbe891973876f73cccfcd24df99fc4ab2492c9c5&',
            name: 'Iniya',
            role: 'Builder, Marketer',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/1284589753521410080/1330972468873138286/IMG_4188.jpg?ex=687d3a34&is=687be8b4&hm=21015727e9e7e7408183b12af7479010d3225f22767ff1438e710c0335420dee&',
            name: 'Rishi',
            role: 'Builder, Marketer',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/1284589753521410080/1330972470576021645/IMG_4180.jpg?ex=687d3a35&is=687be8b5&hm=d803fd225ca8b6852ff788111baf09791c18835e2f2c19faa92181d2ff3942a5&',
            name: 'Sahas',
            role: 'Builder, Programming',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/1284589753521410080/1330972469707804792/IMG_4183.jpg?ex=687d3a35&is=687be8b5&hm=b1999a1664d7625a297ce07196013610309ba3c0f1bc1f36ca8ebc57e3bc920f&',
            name: 'Sathvika',
            role: 'Builder, Marketer',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/1284589753521410080/1330972470098002075/IMG_4182.jpg?ex=687d3a35&is=687be8b5&hm=849b7996faa828464af4b91b21b9168e103cd3ee564db865053262389f156e2e&',
            name: 'Siddu',
            role: 'Builder',
        },
        {
            image: 'https://cdn.discordapp.com/attachments/1284589753521410080/1330972471813210212/IMG_4174.jpg?ex=687d3a35&is=687be8b5&hm=ce6f93923c9bee72a50a95ffeb5fc562c62eb81c657bb87c8dc6b8c929c6080a&',
            name: 'Silas',
            role: 'Builder, Marketer',
        },
    ];

    return (
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center py-16 mb-8">
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <Image
                            src="/images/teambanner.jpg"
                            alt="Team Razzle Dazzle"
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
                            9 Members Strong
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-black mb-6"
                        >
                            <span className="text-white">Meet </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d]">
                                The Team
                            </span>
                        </motion.h1>
                    </div>
                </section>

                {/* Team Story */}
                <GlowReveal>
                    <GradientBorderCard className="mb-12">
                        <div className="p-6 md:p-10">
                            <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
                            <p className="text-[#b79fa8] leading-relaxed">
                                When our team was first made, we had a difficult time coming up with a name. Stuck between two options, we randomly drew from a list of names put together. The words &quot;razzle dazzle&quot; were found and the rest is history! Our logo was crafted in 2020 to emphasize our second generation of members. We chose <span className="text-[#db3d7a] font-semibold">pink</span> because it&apos;s our signature. Our mascot? A unicorn with a lightning horn, ready to bedazzle the crowd! ⚡🦄
                            </p>
                        </div>
                    </GradientBorderCard>
                </GlowReveal>

                {/* Team Grid */}
                <GlowReveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                            Team Members
                        </span>
                    </h2>
                </GlowReveal>

                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={member.name} {...member} index={index} />
                    ))}
                </StaggerContainer>
            </div>
        </div>
    );
}
