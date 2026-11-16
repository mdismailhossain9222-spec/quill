"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Gem, Shield, Users, Zap, ChevronDown, Wallet } from "lucide-react";
import { useState } from "react";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="liquid-glass-light rounded-[24px] overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
      >
        <span className="font-[var(--font-anton)] text-lg sm:text-xl uppercase tracking-[0.05em] pr-10 text-[#010828]">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 text-[#6FFF00]"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 border-t border-black/10">
          <p className="font-[var(--font-mono)] text-sm sm:text-base leading-relaxed text-[#010828]/70">
            {answer}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <main className="w-full bg-[#020202] text-[#EFF4FF]">
      {/* Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-40 px-4">
        <Link
          href="/"
          className="liquid-glass rounded-[28px] px-[52px] py-[24px] flex items-center justify-between"
        >
          {/* Logo */}
          <span className="font-[var(--font-anton)] text-lg uppercase tracking-[0.1em] drop-shadow-[0_0_10px_rgba(111,255,0,0.4)]">
            Orbis<span className="text-[#6FFF00]">.</span>Nft
          </span>

          {/* Nav Links */}
          <div className="flex items-center gap-10">
            <Link
              href="#home"
              className="font-[var(--font-anton)] text-sm uppercase tracking-[0.2em] transition-colors hover:text-[#6FFF00]"
            >
              Homepage
            </Link>
            <Link
              href="#gallery"
              className="font-[var(--font-anton)] text-sm uppercase tracking-[0.2em] transition-colors hover:text-[#6FFF00]"
            >
              Gallery
            </Link>
            <Link
              href="#buy"
              className="font-[var(--font-anton)] text-sm uppercase tracking-[0.2em] transition-colors hover:text-[#6FFF00]"
            >
              Buy NFT
            </Link>
            <Link
              href="#faq"
              className="font-[var(--font-anton)] text-sm uppercase tracking-[0.2em] transition-colors hover:text-[#6FFF00]"
            >
              FAQ
            </Link>
            <Link
              href="#contact"
              className="font-[var(--font-anton)] text-sm uppercase tracking-[0.2em] transition-colors hover:text-[#6FFF00]"
            >
              Contact
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@orbis.nft"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12s1.5-4 7-5c0 0 5-1 7 1 0 0 4 2 6 5v2s3 3 1 5c-1 0-3-1-5-2l-2-2-2-2-2-2-3 1-1 1h-2l-1-2-1-1-2-1z" />
                <path d="M9 12h.01" />
                <path d="M13 12h.01" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex h-10 w-10 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 23c-6.6 0-12-5.4-12-12 0-5.3 3.4-9.8 8.3-11.4.6-.1.8.3.8.7v3.2c-3.3.6-4.6-1.6-4.6-1.6-.6-1.6-1.5-2-1.5-2-.6-.4.1-.4.1-.4.7.1 1 .7 1 .7.6 1 .3 1.5.3 1.5-2 .6-4.2 2.7-4.2 2.7-2 1.1.3 1.7.3 1.7 2.3 1.4.7 2.5.7 2.5.1.7.2 1.9-.2 2.5 1.5.5 3.3.5 5.1.5 1.8 0 3.6 0 5.1-.5.5-.6.4-1.8.2-2.5 0 0 .8-1.1-.3-2.5 0 0-2.1-2.1-4.2-2.7-.3-1.8-.1-3-.1-3-.5-.4-1.2-.1-.8-.1 5 .9 8.3 5.4 8.3 10.7 0 6.6-5.4 12-12 12z" />
              </svg>
            </a>
          </div>
        </Link>
      </nav>

      {/* Section 1: Hero */}
      <section id="home" className="relative min-h-screen rounded-b-[32px] overflow-hidden pt-32 w-full">
        {/* Background Video */}
        <video
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0' stop-color='%230a1440'/%3E%3Cstop offset='0.5' stop-color='%23050a2a'/%3E%3Cstop offset='1' stop-color='%23020202'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1920' height='1080' fill='url(%23g)'/%3E%3C/svg%3E"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent pointer-events-none" />

        {/* Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } } }}
          className="relative z-10 flex h-full flex-col items-start justify-center w-full px-10 sm:px-20"
        >
          {/* Main Heading */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-anton)] uppercase text-[34px] leading-[1.1] tracking-[-0.02em] sm:text-[52px] md:text-[72px] lg:text-[84px] max-w-[1200px]"
          >
            Beyond earth and{" "}
            <span className="text-[#6FFF00]">(</span>
            its{" "}
            <span className="text-[#6FFF00]">)</span>
            familiar boundaries
          </motion.h1>

          {/* Cursive Overlay */}
          <motion.div
            variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-20 right-10 sm:-top-28 sm:right-20 rotate-[-8deg] font-[var(--font-condiment)] text-[#6FFF00] text-[40px] sm:text-[60px] lg:text-[72px] mix-blend-exclusion select-none pointer-events-none"
            style={{ fontFamily: "var(--font-condiment)" }}
          >
            Nft collection
          </motion.div>

          {/* Social Icons (Top Right) */}
          <div className="absolute top-20 right-10 sm:top-28 sm:right-20 flex flex-col gap-3">
            <a
              href="mailto:hello@orbis.nft"
              className="liquid-glass flex h-12 w-12 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="Email"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex h-12 w-12 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12s1.5-4 7-5c0 0 5-1 7 1 0 0 4 2 6 5v2s3 3 1 5c-1 0-3-1-5-2l-2-2-2-2-2-2-3 1-1 1h-2l-1-2-1-1-2-1z" />
                <path d="M9 12h.01" />
                <path d="M13 12h.01" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex h-12 w-12 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 23c-6.6 0-12-5.4-12-12 0-5.3 3.4-9.8 8.3-11.4.6-.1.8.3.8.7v3.2c-3.3.6-4.6-1.6-4.6-1.6-.6-1.6-1.5-2-1.5-2-.6-.4.1-.4.1-.4.7.1 1 .7 1 .7.6 1 .3 1.5.3 1.5-2 .6-4.2 2.7-4.2 2.7-2 1.1.3 1.7.3 1.7 2.3 1.4.7 2.5.7 2.5.1.7.2 1.9-.2 2.5 1.5.5 3.3.5 5.1.5 1.8 0 3.6 0 5.1-.5.5-.6.4-1.8.2-2.5 0 0 .8-1.1-.3-2.5 0 0-2.1-2.1-4.2-2.7-.3-1.8-.1-3-.1-3-.5-.4-1.2-.1-.8-.1 5 .9 8.3 5.4 8.3 10.7 0 6.6-5.4 12-12 12z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Section 2: About */}
      <section id="about" className="relative min-h-screen overflow-hidden w-full">
        {/* Background Video - full opacity, cinematic */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability over video */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/60 to-transparent pointer-events-none" />

        <div className="relative z-10 h-full w-full px-10 sm:px-20 flex items-center justify-center">
          <div className="w-full max-w-[1831px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-[var(--font-anton)] uppercase text-[24px] sm:text-[32px] tracking-[0.1em] mb-4 text-white">
                Hello! I&apos;m
              </p>
              <h2 className="font-[var(--font-anton)] uppercase text-[48px] sm:text-[64px] md:text-[80px] leading-[1.05] tracking-[-0.02em] relative text-white">
                orbis
                <span
                  className="absolute -top-8 left-0 font-[var(--font-condiment)] text-[#6FFF00] text-[36px] sm:text-[48px] md:text-[64px] mix-blend-exclusion select-none pointer-events-none"
                  style={{ fontFamily: "var(--font-condiment)" }}
                >
                  Orbis
                </span>
              </h2>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-mono uppercase text-sm sm:text-base leading-relaxed tracking-[0.15em] text-white/80 max-w-[500px]"
            >
              A digital object fixed beyond time and place. An exploration of
              distance, form, and silence in space
            </motion.div>
          </div>

          {/* Decorative opacity-10 text blocks at bottom */}
          <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-8 text-center">
            <div className="font-mono uppercase text-xs tracking-[0.3em] text-white/10">
              ORBIT
            </div>
            <div className="font-mono uppercase text-xs tracking-[0.3em] text-white/10">
              FORM
            </div>
            <div className="font-mono uppercase text-xs tracking-[0.3em] text-white/10">
              SILENCE
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: WHY ORBIS? (Features) */}
      <section id="features" className="bg-[#EFF4FF] py-24 sm:py-32 w-full">
        <div className="w-full px-10 sm:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-anton)] uppercase text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] mb-16 text-[#010828]"
          >
            WHY <span className="text-[#6FFF00]">OR</span>BIS?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Rarity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass-light rounded-[28px] p-8 flex flex-col items-start gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6FFF00]/10 text-[#6FFF00]">
                <Gem className="h-6 w-6" />
              </div>
              <h3 className="font-[var(--font-anton)] uppercase text-xl tracking-[0.1em] text-[#010828]">
                Rarity
              </h3>
              <p className="font-[var(--font-mono)] text-sm leading-relaxed text-[#010828]/70">
                Each object is mathematically unique.
              </p>
            </motion.div>

            {/* Card 2: Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="liquid-glass-light rounded-[28px] p-8 flex flex-col items-start gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6FFF00]/10 text-[#6FFF00]">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-[var(--font-anton)] uppercase text-xl tracking-[0.1em] text-[#010828]">
                Security
              </h3>
              <p className="font-[var(--font-mono)] text-sm leading-relaxed text-[#010828]/70">
                Stored on the Ethereum blockchain.
              </p>
            </motion.div>

            {/* Card 3: Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="liquid-glass-light rounded-[28px] p-8 flex flex-col items-start gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6FFF00]/10 text-[#6FFF00]">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="font-[var(--font-anton)] uppercase text-xl tracking-[0.1em] text-[#010828]">
                Community
              </h3>
              <p className="font-[var(--font-mono)] text-sm leading-relaxed text-[#010828]/70">
                Join a network of space explorers.
              </p>
            </motion.div>

            {/* Card 4: Utility */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="liquid-glass-light rounded-[28px] p-8 flex flex-col items-start gap-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6FFF00]/10 text-[#6FFF00]">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-[var(--font-anton)] uppercase text-xl tracking-[0.1em] text-[#010828]">
                Utility
              </h3>
              <p className="font-[var(--font-mono)] text-sm leading-relaxed text-[#010828]/70">
                Access exclusive metaverse events.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: NFT Collection Grid */}
      <section id="gallery" className="bg-[#EFF4FF] py-24 sm:py-32 w-full">
        <div className="w-full px-10 sm:px-20">
          {/* Header */}
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-[var(--font-anton)] uppercase text-[32px] sm:text-[40px] md:text-[48px] leading-[1.05] tracking-[-0.02em] mb-2 text-[#010828]" style={{ textIndent: '2em' }}>
                Collection of{" "}
                <span className="font-[var(--font-condiment)] text-[#6FFF00]">
                  Space
                </span>{" "}
                objects
              </p>
            </div>
            <Link
              href="#all-creators"
              className="group inline-flex items-center gap-3 font-[var(--font-anton)] text-[18px] uppercase tracking-[0.15em] hover:text-[#6FFF00] transition-colors text-[#010828]"
            >
              SEE ALL CREATORS
              <div className="h-px w-24 bg-[#6FFF00] transition-all duration-300 group-hover:w-32" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="liquid-glass-light rounded-[32px] p-[18px]"
            >
              {/* Video Container */}
              <div className="relative mb-4 pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  src="/nft-1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay Bar */}
                <div className="absolute bottom-0 left-0 right-0 liquid-glass-light rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#010828]/60">
                      Rarity Score:
                    </span>
                    <span className="font-[var(--font-mono)] text-[20px] font-semibold text-[#010828]">
                      8.7
                    </span>
                  </div>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] transition-transform hover:scale-110"
                    aria-label="View NFT"
                  >
                    <ChevronRight className="h-5 w-5 text-[#EFF4FF]" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="liquid-glass-light rounded-[32px] p-[18px]"
            >
              {/* Video Container */}
              <div className="relative mb-4 pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  src="/nft-2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay Bar */}
                <div className="absolute bottom-0 left-0 right-0 liquid-glass-light rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#010828]/60">
                      Rarity Score:
                    </span>
                    <span className="font-[var(--font-mono)] text-[20px] font-semibold text-[#010828]">
                      9.0
                    </span>
                  </div>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] transition-transform hover:scale-110"
                    aria-label="View NFT"
                  >
                    <ChevronRight className="h-5 w-5 text-[#EFF4FF]" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="liquid-glass-light rounded-[32px] p-[18px]"
            >
              {/* Video Container */}
              <div className="relative mb-4 pb-[100%] rounded-[24px] overflow-hidden">
                <video
                  src="/nft-3.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay Bar */}
                <div className="absolute bottom-0 left-0 right-0 liquid-glass-light rounded-[20px] px-5 py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[#010828]/60">
                      Rarity Score:
                    </span>
                    <span className="font-[var(--font-mono)] text-[20px] font-semibold text-[#010828]">
                      8.2
                    </span>
                  </div>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] transition-transform hover:scale-110"
                    aria-label="View NFT"
                  >
                    <ChevronRight className="h-5 w-5 text-[#EFF4FF]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Roadmap - THE JOURNEY */}
      <section id="roadmap" className="bg-[#EFF4FF] py-24 sm:py-32 relative w-full">
        {/* Neon glow line background */}
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#6FFF00] to-transparent opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-1/4 h-[200px] w-[200px] -translate-x-1/2 rounded-full bg-[#6FFF00]/10 blur-[100px]" />

        <div className="relative z-10 w-full px-10 sm:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-anton)] uppercase text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-center mb-20 text-[#010828]"
          >
            THE <span className="text-[#6FFF00]">JOURNEY</span>
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            {/* Phase 1: Launch */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex gap-8 mb-16 last:mb-0"
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#6FFF00] bg-[#010828]">
                  <div className="h-5 w-5 rounded-full bg-[#6FFF00] shadow-[0_0_20px_#6FFF00]" />
                </div>
                <div className="mt-4 font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#6FFF00]">
                  2026 Q1
                </div>
              </div>

              {/* Phase Content */}
              <div className="flex-1 liquid-glass-light rounded-[28px] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-[var(--font-anton)] text-[14px] uppercase tracking-[0.2em] text-[#6FFF00]">
                    PHASE 01
                  </span>
                  <h3 className="font-[var(--font-anton)] text-2xl sm:text-3xl tracking-[-0.01em] text-[#010828]">
                    Genesis Launch
                  </h3>
                </div>
                <p className="font-[var(--font-mono)] text-sm leading-relaxed text-[#010828]/70">
                  The Orbis collection debuts. 5,000 unique 3D space artifacts minted on Ethereum.
                  Community foundation established. Initial rarity tiers revealed.
                </p>
              </div>
            </motion.div>

            {/* Phase 2: Metaverse Expansion */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative flex gap-8 mb-16"
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#6FFF00] bg-[#010828]">
                  <div className="h-5 w-5 rounded-full bg-[#6FFF00] shadow-[0_0_20px_#6FFF00]" />
                </div>
                <div className="mt-4 font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#6FFF00]">
                  2026 Q3
                </div>
              </div>

              {/* Phase Content */}
              <div className="flex-1 liquid-glass-light rounded-[28px] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-[var(--font-anton)] text-[14px] uppercase tracking-[0.2em] text-[#6FFF00]">
                    PHASE 02
                  </span>
                  <h3 className="font-[var(--font-anton)] text-2xl sm:text-3xl tracking-[-0.01em] text-[#010828]">
                    Metaverse Expansion
                  </h3>
                </div>
                <p className="font-[var(--font-mono)] text-sm leading-relaxed text-[#010828]/70">
                  Orbis artifacts become playable avatars across partner metaverses.
                  Exclusive virtual galleries open. Staking mechanism launches for passive rewards.
                </p>
              </div>
            </motion.div>

            {/* Phase 3: Global Domination */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative flex gap-8"
            >
              {/* Timeline Dot */}
              <div className="flex-shrink-0 flex flex-col items-center relative z-10">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#6FFF00] bg-[#010828]">
                  <div className="h-5 w-5 rounded-full bg-[#6FFF00] shadow-[0_0_20px_#6FFF00]" />
                </div>
                <div className="mt-4 font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#6FFF00]">
                  2027 Q1
                </div>
              </div>

              {/* Phase Content */}
              <div className="flex-1 liquid-glass-light rounded-[28px] p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-[var(--font-anton)] text-[14px] uppercase tracking-[0.2em] text-[#6FFF00]">
                    PHASE 03
                  </span>
                  <h3 className="font-[var(--font-anton)] text-2xl sm:text-3xl tracking-[-0.01em] text-[#010828]">
                    Global Domination
                  </h3>
                </div>
                <p className="font-[var(--font-mono)] text-sm leading-relaxed text-[#010828]/70">
                  Physical exhibitions in major cities. Cross-chain bridge to Solana & Polygon.
                  DAO governance activated. Orbis becomes the premier space artifact brand.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section id="faq" className="bg-[#EFF4FF] py-24 sm:py-32 relative w-full">
        <div className="pointer-events-none absolute right-0 top-1/2 h-[300px] w-[300px] rounded-full bg-[#6FFF00]/10 blur-[150px]" />

        <div className="relative z-10 w-full px-10 sm:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-[var(--font-anton)] uppercase text-4xl sm:text-5xl md:text-6xl tracking-[-0.02em] text-center mb-16 text-[#010828]"
          >
            FREQUENTLY <span className="text-[#6FFF00]">ASKED</span> QUESTIONS
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <FAQItem
              question="What is Orbis.Nft?"
              answer="A collection of 3D space artifacts living on the Ethereum blockchain. Each Orbis is a unique digital object representing a celestial body — planets, moons, asteroids, and cosmic phenomena — rendered with mathematical precision."
            />
            {/* FAQ Item 2 */}
            <FAQItem
              question="How do I mint?"
              answer="Connect your Web3 wallet (MetaMask, Rainbow, Coinbase Wallet) to the Orbis.Nft dApp. Ensure you have enough ETH for mint price + gas. Click the 'Mint' button and confirm the transaction. Your artifact appears in your wallet instantly."
            />
            {/* FAQ Item 3 */}
            <FAQItem
              question="What is the rarity score?"
              answer="A mathematical rating (0.0–10.0) calculated from trait combinations: celestial type, orbital position, material composition, atmospheric conditions, and anomaly presence. Higher scores indicate rarer trait combinations. Verified on-chain."
            />
            {/* FAQ Item 4 */}
            <FAQItem
              question="What utilities come with ownership?"
              answer="Holders gain access to: the Orbis Metaverse Gallery (exclusive virtual exhibition), staking rewards in $ORBIS token, priority access to future drops, physical artifact prints, and DAO voting rights for collection governance."
            />
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section id="cta" className="relative min-h-[60vh] flex items-center justify-center overflow-hidden rounded-t-[32px] w-full">
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/40 to-transparent pointer-events-none" />

        {/* Overlay */}
        <div className="relative z-10 w-full px-10 sm:px-20 text-right">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-[var(--font-condiment)] text-[#6FFF00] text-[24px] sm:text-[32px] mb-6">
              Go beyond
            </p>
            <h2 className="font-[var(--font-anton)] uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.02em] mb-12 text-[#EFF4FF]">
              JOIN US.<br />
              REVEAL WHAT&apos;S HIDDEN.<br />
              DEFINE WHAT&apos;S NEXT.<br />
              FOLLOW THE SIGNAL.
            </h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-4 rounded-[16px] bg-[#6FFF00] px-10 py-5 font-[var(--font-anton)] text-[16px] uppercase tracking-[0.15em] text-[#010828] transition-all hover:bg-[#5de000] shadow-[0_0_40px_#6FFF00]"
            >
              <Wallet className="h-5 w-5" />
              CONNECT WALLET
            </motion.button>
          </motion.div>

          {/* Social Icons Bottom Left */}
          <div className="absolute bottom-10 left-10 flex flex-col gap-3">
            <a
              href="mailto:hello@orbis.nft"
              className="liquid-glass flex h-12 w-12 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex h-12 w-12 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12s1.5-4 7-5c0 0 5-1 7 1 0 0 4 2 6 5v2s3 3 1 5c-1 0-3-1-5-2l-2-2-2-2-2-2-3 1-1 1h-2l-1-2-1-1-2-1z" />
                <path d="M9 12h.01" />
                <path d="M13 12h.01" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass flex h-12 w-12 items-center justify-center rounded-[12px] transition-transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 23c-6.6 0-12-5.4-12-12 0-5.3 3.4-9.8 8.3-11.4.6-.1.8.3.8.7v3.2c-3.3.6-4.6-1.6-4.6-1.6-.6-1.6-1.5-2-1.5-2-.6-.4.1-.4.1-.4.7.1 1 .7 1 .7.6 1 .3 1.5.3 1.5-2 .6-4.2 2.7-4.2 2.7-2 1.1.3 1.7.3 1.7 2.3 1.4.7 2.5.7 2.5.1.7.2 1.9-.2 2.5 1.5.5 3.3.5 5.1.5 1.8 0 3.6 0 5.1-.5.5-.6.4-1.8.2-2.5 0 0 .8-1.1-.3-2.5 0 0-2.1-2.1-4.2-2.7-.3-1.8-.1-3-.1-3-.5-.4-1.2-.1-.8-.1 5 .9 8.3 5.4 8.3 10.7 0 6.6-5.4 12-12 12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#EFF4FF] py-10 w-full px-10 sm:px-20 border-t border-black/10">
        <div className="w-full max-w-[1831px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[#010828]/50">
            © 2026 Orbis.Nft. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="mailto:hello@orbis.nft"
              className="liquid-glass-light flex h-10 w-10 items-center justify-center rounded-[12px] transition-transform hover:scale-110 hover:border-[#6FFF00]/50"
              aria-label="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-light flex h-10 w-10 items-center justify-center rounded-[12px] transition-transform hover:scale-110 hover:border-[#6FFF00]/50"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12s1.5-4 7-5c0 0 5-1 7 1 0 0 4 2 6 5v2s3 3 1 5c-1 0-3-1-5-2l-2-2-2-2-2-2-3 1-1 1h-2l-1-2-1-1-2-1z" />
                <path d="M9 12h.01" />
                <path d="M13 12h.01" />
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass-light flex h-10 w-10 items-center justify-center rounded-[12px] transition-transform hover:scale-110 hover:border-[#6FFF00]/50"
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 23c-6.6 0-12-5.4-12-12 0-5.3 3.4-9.8 8.3-11.4.6-.1.8.3.8.7v3.2c-3.3.6-4.6-1.6-4.6-1.6-.6-1.6-1.5-2-1.5-2-.6-.4.1-.4.1-.4.7.1 1 .7 1 .7.6 1 .3 1.5.3 1.5-2 .6-4.2 2.7-4.2 2.7-2 1.1.3 1.7.3 1.7 2.3 1.4.7 2.5.7 2.5.1.7.2 1.9-.2 2.5 1.5.5 3.3.5 5.1.5 1.8 0 3.6 0 5.1-.5.5-.6.4-1.8.2-2.5 0 0-2.1-2.1-4.2-2.7-.3-1.8-.1-3-.1-3-.5-.4-1.2-.1-.8-.1 5 .9 8.3 5.4 8.3 10.7 0 6.6-5.4 12-12 12z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      </main>
  );
}