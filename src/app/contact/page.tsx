'use client';

import { motion } from 'framer-motion';
import { GlowReveal, GradientBorderCard, MagneticButton } from '@/components/InteractiveEffects';
import { useState } from 'react';

import Image from 'next/image';

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true);
        setTimeout(() => {
            setSubmitted(true);
            setIsSubmitting(false);
        }, 2000);
    };

    return (
        <div className="px-4 md:px-20 lg:px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[1200px] flex-1">
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center justify-center py-16 mb-8">
                    <div className="absolute inset-0 overflow-hidden rounded-3xl">
                        <Image
                            src="/images/contactbanner.jpg"
                            alt="Contact Us"
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
                            Let&apos;s Connect
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-5xl md:text-6xl font-black mb-6"
                        >
                            <span className="text-white">Get In </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d]">
                                Touch
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#b79fa8] text-lg max-w-2xl mx-auto"
                        >
                            We&apos;d love to hear from you! Whether you have questions, feedback, or are interested in sponsoring our team.
                        </motion.p>
                    </div>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Info */}
                    <GlowReveal>
                        <div className="space-y-6">
                            <GradientBorderCard>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#db3d7a] to-[#ff6b9d] flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                                                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">General Inquiries</h3>
                                            <p className="text-[#b79fa8] text-sm">Questions about our team & events</p>
                                        </div>
                                    </div>
                                    <motion.a
                                        href="mailto:razzledazzle13883@gmail.com"
                                        className="block text-[#db3d7a] font-medium hover:text-[#ff6b9d] transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        razzledazzle13883@gmail.com →
                                    </motion.a>
                                </div>
                            </GradientBorderCard>

                            <GradientBorderCard>
                                <div className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff6b9d] to-[#db3d7a] flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 256 256">
                                                <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg">Sponsorship</h3>
                                            <p className="text-[#b79fa8] text-sm">Partner with our team</p>
                                        </div>
                                    </div>
                                    <motion.a
                                        href="mailto:razzledazzle13883@gmail.com"
                                        className="block text-[#db3d7a] font-medium hover:text-[#ff6b9d] transition-colors"
                                        whileHover={{ x: 5 }}
                                    >
                                        razzledazzle13883@gmail.com →
                                    </motion.a>
                                </div>
                            </GradientBorderCard>

                            <GradientBorderCard>
                                <div className="p-6">
                                    <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                                    <div className="flex gap-4">
                                        <MagneticButton
                                            href="https://www.instagram.com/ftc13883/"
                                            className="w-12 h-12 rounded-xl bg-[#372a2f] flex items-center justify-center text-[#b79fa8] hover:text-[#db3d7a] hover:bg-[#db3d7a]/10 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                                                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                                            </svg>
                                        </MagneticButton>
                                        <MagneticButton
                                            href="https://x.com/ftc13883"
                                            className="w-12 h-12 rounded-xl bg-[#372a2f] flex items-center justify-center text-[#b79fa8] hover:text-[#db3d7a] hover:bg-[#db3d7a]/10 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 1024 1200">
                                                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                                            </svg>
                                        </MagneticButton>
                                    </div>
                                </div>
                            </GradientBorderCard>
                        </div>
                    </GlowReveal>

                    {/* Contact Form */}
                    <GlowReveal>
                        <GradientBorderCard className="h-fit">
                            <div className="p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                                <form action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
                                    <input type="hidden" name="access_key" value="c7091423-e915-4e49-a7e2-afe830e4b1b6" />
                                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                    <div className="space-y-5">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label className="block text-white font-medium mb-2">Name</label>
                                            <input
                                                name="name"
                                                required
                                                placeholder="Your name"
                                                className="w-full px-4 py-3 rounded-xl bg-[#0d0a0b] border border-[#372a2f] text-white placeholder-[#b79fa8] focus:border-[#db3d7a] focus:ring-2 focus:ring-[#db3d7a]/20 transition-all outline-none"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <label className="block text-white font-medium mb-2">Email</label>
                                            <input
                                                name="email"
                                                type="email"
                                                required
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 rounded-xl bg-[#0d0a0b] border border-[#372a2f] text-white placeholder-[#b79fa8] focus:border-[#db3d7a] focus:ring-2 focus:ring-[#db3d7a]/20 transition-all outline-none"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label className="block text-white font-medium mb-2">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows={5}
                                                placeholder="Tell us what's on your mind..."
                                                className="w-full px-4 py-3 rounded-xl bg-[#0d0a0b] border border-[#372a2f] text-white placeholder-[#b79fa8] focus:border-[#db3d7a] focus:ring-2 focus:ring-[#db3d7a]/20 transition-all outline-none resize-none"
                                            />
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <MagneticButton
                                                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#db3d7a] to-[#ff6b9d] text-white font-bold text-lg shadow-[0_0_30px_rgba(219,61,122,0.3)] flex items-center justify-center gap-2"
                                            >
                                                <button type="submit" disabled={isSubmitting} className="w-full h-full flex items-center justify-center gap-2">
                                                    {isSubmitting ? (
                                                        <>
                                                            <motion.div
                                                                animate={{ rotate: 360 }}
                                                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                            />
                                                            Sending...
                                                        </>
                                                    ) : submitted ? (
                                                        <>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                                                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                                                            </svg>
                                                            Message Sent!
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                                                                <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.32-11.32L107.1,137.58,24,98.22l.14,0L216,40Z" />
                                                            </svg>
                                                        </>
                                                    )}
                                                </button>
                                            </MagneticButton>
                                        </motion.div>
                                    </div>
                                </form>
                            </div>
                        </GradientBorderCard>
                    </GlowReveal>
                </div>
            </div>
        </div>
    );
}
