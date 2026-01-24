'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Events' },
  { href: '/robots', label: 'Robots' },
  { href: '/team', label: 'Team' },
  { href: '/sponsors', label: 'Sponsors' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#372a2f] px-6 md:px-10 py-3 sticky top-0 z-50 bg-[#171214]/95 backdrop-blur-sm"
    >
      <Link href="/" className="flex items-center gap-4 text-white group">
        <motion.div 
          className="size-10"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/razzledazzlelogo.png"
            alt="Razzle Dazzle Logo"
            width={48}
            height={48}
            className="w-full h-full object-contain"
          />
        </motion.div>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-[#db3d7a] transition-colors">
          Razzle Dazzle 13883
        </h2>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-white text-sm font-medium leading-normal"
            >
              <motion.span
                className={`${pathname === link.href ? 'text-[#db3d7a]' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.span>
              {pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#db3d7a]"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <motion.div
          animate={mobileMenuOpen ? 'open' : 'closed'}
          className="w-6 h-5 flex flex-col justify-between"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            className="w-full h-0.5 bg-white block origin-left"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="w-full h-0.5 bg-white block"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 },
            }}
            className="w-full h-0.5 bg-white block origin-left"
          />
        </motion.div>
      </button>

      {/* Mobile Menu */}
      <motion.nav
        initial={false}
        animate={mobileMenuOpen ? 'open' : 'closed'}
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: '100%', opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden fixed top-[57px] right-0 bottom-0 w-64 bg-[#171214] border-l border-[#372a2f] p-6 z-50"
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ x: 50, opacity: 0 }}
              animate={mobileMenuOpen ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-medium ${
                  pathname === link.href ? 'text-[#db3d7a]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
}
