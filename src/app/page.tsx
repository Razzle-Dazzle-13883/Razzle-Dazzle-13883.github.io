'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MagneticButton, TiltCard, GlowText, GlowReveal, GradientBorderCard, StatItem } from '@/components/InteractiveEffects';
import { StaggerContainer, StaggerItem, HoverImage } from '@/components/AnimatedComponents';

export default function Home() {
  return (
    <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
        {/* Hero Section - Completely Redesigned */}
        <section className="relative min-h-[80vh] flex items-center justify-center py-20">
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <Image
              src="/images/homebanner.jpg"
              alt="Razzle Dazzle Team"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              quality={75}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0d0a0b]/95 via-[#0d0a0b]/70 to-[#0d0a0b]/95" />

            {/* Animated gradient overlay */}
            {/* Animated gradient overlay */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(ellipse at 50% 50%, #db3d7a 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-[#db3d7a]/20 text-[#db3d7a] text-sm font-medium mb-6 border border-[#db3d7a]/30">
                FTC Team 13883 • Est. 2017
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-7xl font-black leading-tight mb-6"
            >
              <span className="text-white">Inspiring </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] via-[#ff6b9d] to-[#db3d7a] animate-gradient">
                Innovation
              </span>
              <br />
              <span className="text-white">Through </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b9d] to-[#db3d7a]">
                Robotics
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#b79fa8] text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              Help us ignite passion for STEM with Razzle Dazzle as we train the next wave of innovators through hands-on robotics competition.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <MagneticButton
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d] text-white font-bold text-lg shadow-[0_0_30px_rgba(219,61,122,0.5)]"
              >
                Get In Touch
              </MagneticButton>
              <MagneticButton
                href="/robots"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-[#db3d7a] text-white font-bold text-lg hover:bg-[#db3d7a]/10"
              >
                View Our Robots
              </MagneticButton>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatItem value={8} label="Seasons Competed" />
            <StatItem value={9} label="Team Members" />
            <StatItem value={2017} label="Founded" />
            <StatItem value={15} suffix="+" label="Outreach Events" />
          </div>
        </section>

        {/* About Us - Redesigned */}
        <GlowReveal>
          <GradientBorderCard className="my-8">
            <div className="p-6 md:p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <GlowText className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                  About Us
                </GlowText>
              </h2>
              <p className="text-[#b79fa8] text-lg leading-relaxed">
                We are <span className="text-white font-semibold">Razzle Dazzle</span>, a robotics team based in Apex, North Carolina. Our rookie year was 2017. Our team is known for our contagious spirit, can-do attitude, and ability to take on new challenges! We are always looking to meet other FIRST teams, and spread our knowledge as well as learn more so contact us if you are interested!
              </p>
            </div>
          </GradientBorderCard>
        </GlowReveal>

        {/* Recent News - Redesigned */}
        <GlowReveal>
          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                Recent News
              </span>
            </h2>
            <TiltCard className="bg-[#1a1417]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#372a2f]">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <span className="text-[#db3d7a] text-sm font-medium mb-2">OUTREACH EVENT</span>
                  <h3 className="text-white text-2xl font-bold mb-4">Common Roots Festival Outreach</h3>
                  <p className="text-[#b79fa8] leading-relaxed">
                    Common Roots calls to mind the unique journeys and contributions of the many diverse communities across Asian and Pacific Islander diasporas. We are the only robotics team invited to spread the idea of STEM and FIRST to all visitors of all ages.
                  </p>
                </div>
                <div className="md:w-1/2 relative overflow-hidden min-h-[300px]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="h-full w-full relative"
                  >
                    <Image
                      src="/images/commonroots1.jpg"
                      alt="Common Roots Festival Outreach"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>
              </div>
            </TiltCard>
          </section>
        </GlowReveal>

        {/* Upcoming Events - Redesigned */}
        <GlowReveal>
          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                Upcoming Events
              </span>
            </h2>
            <StaggerContainer className="space-y-4">
              {[
                { date: 'Sept 6, 2025', title: 'Decode FTC Kickoff', type: 'COMPETITION' },
                { date: 'May 17, 2025', title: 'Common Roots Festival Outreach', type: 'OUTREACH' },
              ].map((event, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ x: 10, backgroundColor: 'rgba(219, 61, 122, 0.1)' }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-6 p-6 rounded-2xl border border-[#372a2f] bg-[#1a1417]/50 backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#db3d7a] to-[#ff6b9d] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="white" viewBox="0 0 256 256">
                        <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-[#db3d7a] text-xs font-semibold">{event.type}</span>
                      <h3 className="text-white text-xl font-bold">{event.title}</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-[#b79fa8] font-medium">{event.date}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        </GlowReveal>

        {/* Robot Gallery - Redesigned */}
        <GlowReveal>
          <section className="py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 px-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#b79fa8]">
                Our Robot
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['robotcup.jpg', 'robotaward.jpg', 'robotdrive.jpg', 'robotextend.jpg'].map((img, index) => (
                <motion.div
                  key={img}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative aspect-square rounded-2xl overflow-hidden border border-[#372a2f] group"
                >
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src={`/images/${img}`}
                      alt="Robot Gallery Image"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-[#db3d7a] rounded-2xl opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </GlowReveal>

        {/* CTA Section */}
        <GlowReveal>
          <section className="py-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <span className="text-white">Ready to </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d]">
                  Join Us?
                </span>
              </h2>
              <p className="text-[#b79fa8] text-lg mb-8">
                Whether you&apos;re interested in sponsoring, partnering, or just want to say hello, we&apos;d love to connect!
              </p>
              <MagneticButton
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d] text-white font-bold text-xl shadow-[0_0_40px_rgba(219,61,122,0.4)]"
              >
                Contact Us Today
              </MagneticButton>
            </div>
          </section>
        </GlowReveal>
      </div>
    </div>
  );
}
