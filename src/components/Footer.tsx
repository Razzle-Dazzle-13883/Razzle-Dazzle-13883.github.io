'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <motion.footer
            ref={ref}
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex max-w-[960px] flex-1 flex-col">
                <div className="flex flex-col gap-6 px-5 py-10 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <motion.a
                            href="https://www.instagram.com/ftc13883/?hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-[#b79fa8] hover:text-[#db3d7a] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="https://x.com/ftc13883"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter (X)"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-[#b79fa8] hover:text-[#db3d7a] transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 1024 1200">
                                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
                            </svg>
                        </motion.a>
                    </div>
                    <p className="text-[#b79fa8] text-base font-normal leading-normal">
                        © 2026 Razzle Dazzle. All rights reserved.
                    </p>
                    <p className="text-[#b79fa8] text-sm mt-2">
                        Website by <a href="https://arushw.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#db3d7a] hover:text-[#ff6b9d] transition-colors font-medium">Arush Wadhawan</a>
                    </p>
                    <p className="text-[#b79fa8]/20 text-[10px] mt-1">
                        Images and Text by Dash Duan
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
