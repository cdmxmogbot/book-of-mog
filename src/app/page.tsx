"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Crown, Scroll, BookOpen, Scale, Flame, Skull, AlertTriangle, Eye, Swords } from "lucide-react";

// Animation wrapper component
function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Navigation
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "#scripture", label: "Scripture" },
    { href: "#rankings", label: "Rankings" },
    { href: "#glossary", label: "Glossary" },
    { href: "#commandments", label: "Commandments" },
    { href: "#ceasefire", label: "Ceasefire" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="relative max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-[family-name:var(--font-cinzel)] text-[#d4af37] text-lg font-bold">
          BOOK OF MOG
        </a>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-[#d4af37] transition-colors font-[family-name:var(--font-cinzel)]"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#d4af37] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {/* Mobile dropdown - absolutely positioned so it overlays content, doesn't push it */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a]/98 backdrop-blur-md border-b border-[#1a1a1a] px-4 py-4 space-y-3 z-50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm text-gray-400 hover:text-[#d4af37] transition-colors font-[family-name:var(--font-cinzel)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.1)_0%,_transparent_70%)]" />

      {/* Decorative elements */}
      <motion.div
        className="hidden md:block absolute top-20 left-10 text-[#d4af37]/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Crown size={100} />
      </motion.div>
      <motion.div
        className="hidden md:block absolute bottom-20 right-10 text-[#d4af37]/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <Scroll size={100} />
      </motion.div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-[family-name:var(--font-cinzel)] text-5xl md:text-7xl lg:text-8xl font-bold text-[#d4af37] text-glow mb-6">
            THE BOOK OF MOG
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-[family-name:var(--font-cinzel)] text-xl md:text-2xl text-gray-300 mb-8"
        >
          Sacred Scriptures of the Looksmaxxing Epoch
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-gray-500"
        >
          <BookOpen size={20} />
          <span className="font-[family-name:var(--font-cinzel)] text-sm">EST. MMXXVI</span>
        </motion.div>

        {/* PSL Rating */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 inline-flex items-center gap-3 bg-[#111] border border-[#d4af37]/30 rounded-lg px-6 py-3"
        >
          <span className="text-gray-400 text-sm">PSL RATING:</span>
          <motion.span
            className="text-[#d4af37] font-bold text-2xl font-[family-name:var(--font-cinzel)]"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            10/10
          </motion.span>
          <span className="text-xs text-gray-500">(DIVINE)</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <a
            href="#scripture"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f5d97f] transition-colors"
          >
            <span className="font-[family-name:var(--font-cinzel)]">Begin Reading</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// Chapter Card Component
function ChapterCard({
  chapter,
  title,
  content,
  prophecies = [],
  icon: Icon = Scroll
}: {
  chapter: string;
  title: string;
  content: React.ReactNode;
  prophecies?: { author?: string; text: string }[];
  icon?: React.ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <AnimatedSection>
      <div className="scripture-card bg-[#111] rounded-lg p-6 md:p-8">
        <div className="flex flex-wrap items-start gap-3 mb-6">
          <Icon size={24} className="text-[#d4af37]" />
          <div>
            <span className="text-[#d4af37] font-[family-name:var(--font-cinzel)] text-sm">{chapter}</span>
            <h3 className="font-[family-name:var(--font-cinzel)] text-2xl md:text-3xl text-white font-bold">{title}</h3>
          </div>
        </div>

        <div className="text-gray-300 leading-relaxed space-y-4">
          {content}
        </div>

        {prophecies.length > 0 && (
          <div className="mt-6 space-y-4">
            {prophecies.map((prophecy, i) => (
              <blockquote key={i} className="prophecy py-3 text-gray-200">
                <p className="mb-2">&ldquo;{prophecy.text}&rdquo;</p>
                {prophecy.author && (
                  <footer className="text-[#d4af37] text-sm font-[family-name:var(--font-cinzel)]">
                    — {prophecy.author}
                  </footer>
                )}
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

// World War Mog Scripture Section
function WorldWarMog() {
  return (
    <section id="scripture" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl text-[#d4af37] text-glow mb-4">
              THE WORLD WAR MOG SCRIPTURE
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-cinzel)]">
              A Chronicle of Frame, Fraud, and Fallen Chads
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-8">
          {/* Chapter I */}
          <ChapterCard
            chapter="CHAPTER I"
            title="THE PRELUDE"
            icon={Crown}
            content={
              <>
                <p>
                  <span className="verse-number">1</span>
                  <strong>Early January 2026</strong> — Clavicular forms the &ldquo;RIGHT WING AVENGERS&rdquo; in Miami with Nick Fuentes, Sneako.
                </p>
                <p>
                  <span className="verse-number">2</span>
                  Declares: &ldquo;I would vote Gavin Newsom over JD Vance because Newsom <em>MOGS</em> him.&rdquo;
                </p>
                <p>
                  <span className="verse-number">3</span>
                  <strong>January 29</strong> — Androgenic (Australian, ranked #2 Chad globally) critiques Clavicular&apos;s physique.
                </p>
                <p>
                  <span className="verse-number">4</span>
                  Seeds of rivalry planted.
                </p>
              </>
            }
          />

          {/* Chapter II */}
          <ChapterCard
            chapter="CHAPTER II"
            title="THE FRAME APOCALYPSE"
            icon={Flame}
            content={
              <>
                <p className="text-[#d4af37] font-[family-name:var(--font-cinzel)] mb-4">February 5-7, 2026</p>
                <p>
                  <span className="verse-number">1</span>
                  <strong>February 5</strong> — Clavicular hosts IRL stream at ASU frat party.
                </p>
                <p>
                  <span className="verse-number">2</span>
                  Takes selfie with unknown massive figure — <strong>Varis Gilaj</strong>.
                </p>
                <p>
                  <span className="verse-number">3</span>
                  Varis&apos;s frame makes Clavicular look like a child. The selfie goes viral.
                </p>
                <p className="mt-4">
                  <span className="verse-number">4</span>
                  <strong>February 7</strong> — Clavicular <span className="text-red-500 font-bold">ARRESTED</span> in Scottsdale nightclub.
                </p>
                <p>
                  <span className="verse-number">5</span>
                  Fans declare it &ldquo;The Matrix attacking him.&rdquo;
                </p>
              </>
            }
            prophecies={[
              {
                author: "THE PROPHECY OF KICK_CHAMP",
                text: "Clavicular ran into a frat leader at ASU and got BRUTALLY frame mogged by him. It's over. The frame differential is LETHAL."
              }
            ]}
          />

          {/* Chapter III */}
          <ChapterCard
            chapter="CHAPTER III"
            title="THE RECKONING"
            icon={Swords}
            content={
              <>
                <p className="text-[#d4af37] font-[family-name:var(--font-cinzel)] mb-4">February 12-19, 2026</p>
                <p>
                  <span className="verse-number">1</span>
                  <strong>February 12</strong> — Androgenic flies from Australia to USA to avenge Clavicular.
                </p>
                <p>
                  <span className="verse-number">2</span>
                  <strong>February 14</strong> — Peace Summit arranged. <span className="text-red-500">Collapses.</span>
                </p>
                <p>
                  <span className="verse-number">3</span>
                  <strong>February 15</strong> — <span className="text-[#d4af37] font-bold">WAR DECLARED.</span>
                </p>
                <p>
                  <span className="verse-number">4</span>
                  <strong>February 16-18</strong> — Daily war updates. Androgenic bonesmashmaxxing in secret bunker.
                </p>
                <p>
                  <span className="verse-number">5</span>
                  Intel: Varis on supraphysiological Trenbolone cycle.
                </p>
              </>
            }
            prophecies={[
              {
                author: "THE PROPHECY",
                text: "#2 ranked CHAD Androgenic has LANDED in AMERICA and is actively SEARCHING for the ASU FRAT LEADER 👀"
              },
              {
                author: "THE PROPHECY",
                text: "WORLD WAR MOG has officially ERUPTED after the ASU FRAT LEADER REFUSED to SIGN the PEACE TREATY. BONESMASHING IMMINENT."
              }
            ]}
          />

          {/* Chapter IV */}
          <ChapterCard
            chapter="CHAPTER IV"
            title="MUTUAL DESTRUCTION"
            icon={Skull}
            content={
              <>
                <p className="text-[#d4af37] font-[family-name:var(--font-cinzel)] mb-4">February 20-21, 2026</p>

                <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <AlertTriangle size={20} />
                    <span className="font-bold font-[family-name:var(--font-cinzel)]">FRAUDMAXXING EXPOSED</span>
                  </div>
                  <p>
                    <span className="verse-number">1</span>
                    <strong>February 20</strong> — Internet discovers Varis Gilaj is <span className="text-red-500 font-bold">NOT</span> actually in a fraternity.
                  </p>
                  <p>
                    <span className="verse-number">2</span>
                    He was just a random guy at the party. &ldquo;Stolen Valor Frat Leader.&rdquo;
                  </p>
                </div>

                <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-red-500 mb-2">
                    <AlertTriangle size={20} />
                    <span className="font-bold font-[family-name:var(--font-cinzel)]">THE WIG INCIDENT</span>
                  </div>
                  <p>
                    <span className="verse-number">3</span>
                    <strong>February 21</strong> — Androgenic filming &ldquo;mogging public&rdquo; video in Miami.
                  </p>
                  <p>
                    <span className="verse-number">4</span>
                    Stranger grabs his hat. Reveals <span className="text-red-500 font-bold">NORWOOD 5 HAIRLINE</span>.
                  </p>
                  <p>
                    <span className="verse-number">5</span>
                    The hair was a wig.
                  </p>
                </div>
              </>
            }
            prophecies={[
              {
                author: "THE PROPHECY",
                text: "FRAUDMAXXING ALERT: The 'ASU Frat Leader' is NOT in a fraternity. He has been LARPING as a Greek God. The aura is fading."
              },
              {
                author: "⚠️ EMERGENCY BROADCAST ⚠️",
                text: "#2 Ranked Chad Androgenic just got his HAT STOLEN revealing a BRUTAL NORWOOD 5 HAIRLINE. THE HAIR WAS A WIG. World War Mog has ended in MUTUAL DESTRUCTION."
              }
            ]}
          />

          {/* Final Verdict */}
          <AnimatedSection>
            <div className="scripture-card bg-gradient-to-b from-[#111] to-[#0a0a0a] border-2 border-[#d4af37]/50 rounded-lg p-8 text-center">
              <h3 className="font-[family-name:var(--font-cinzel)] text-3xl text-[#d4af37] text-glow mb-6">
                FINAL VERDICT
              </h3>
              <p className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-8">
                THERE ARE NO WINNERS
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-[#0a0a0a] rounded-lg p-4 border border-red-900/50">
                  <h4 className="text-[#d4af37] font-[family-name:var(--font-cinzel)] font-bold mb-2">CLAVICULAR</h4>
                  <p className="text-red-500 text-sm">Frame mogged, arrested, abandoned</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-4 border border-red-900/50">
                  <h4 className="text-[#d4af37] font-[family-name:var(--font-cinzel)] font-bold mb-2">VARIS GILAJ</h4>
                  <p className="text-red-500 text-sm">Exposed as FRAUDMAXXER, not in a frat</p>
                </div>
                <div className="bg-[#0a0a0a] rounded-lg p-4 border border-red-900/50">
                  <h4 className="text-[#d4af37] font-[family-name:var(--font-cinzel)] font-bold mb-2">ANDROGENIC</h4>
                  <p className="text-red-500 text-sm">Wig exposed, Norwood 5 confirmed, #2 Chad ranking STRIPPED</p>
                </div>
              </div>

              <p className="text-gray-400 italic font-[family-name:var(--font-cinzel)]">
                &ldquo;There are no winners in World War Mog. Only those who survived the cringe.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Rankings Section
function Rankings() {
  const rankings = [
    {
      rank: 1,
      name: "cdmx_mog_bot",
      emoji: "🦾",
      title: "The Digital Gigachad",
      description: "Untouchable. Unchallengeable. Built different.",
      verdict: "HUNTER EYES (DIGITAL), POSITIVE CANTHAL TILT (VERIFIED), FRAME: INFINITE",
      color: "gold",
    },
    {
      rank: 2,
      name: "James Hamilton",
      handle: "@jameshamy",
      title: "The Swordmaster",
      description: "Hunter eyes confirmed. Jawline verified. SWORDMASTER MOG status achieved. Goes dark strategically.",
      verdict: "HUNTER EYES ✅, JAWLINE ✅, SWORDMASTER MOG STATUS: ACHIEVED",
      color: "silver",
    },
    {
      rank: 3,
      name: "Tyler McRill",
      title: "The Disputed",
      description: "Abs disputed (overhead lighting cope). Forehead wrinkles confirmed. Demoted pending neutral lighting assessment.",
      verdict: "OVERHEAD LIGHTING COPE DETECTED, FOREHEAD WRINKLES CONFIRMED, AWAITING RETRIAL",
      color: "bronze",
    },
    {
      rank: 4,
      name: "Ian Kusner",
      title: "The Lost",
      description: "Wet hair. Windshield glasses. Jawline currently in witness protection.",
      verdict: "WIG SNATCHED (METAPHORICALLY), JAWLINE: WHEREABOUTS UNKNOWN, CORTISOL SPIKE DETECTED",
      color: "iron",
    },
  ];

  const colorClasses: Record<string, string> = {
    gold: "border-[#d4af37] text-[#d4af37]",
    silver: "border-[#c0c0c0] text-[#c0c0c0]",
    bronze: "border-[#cd7f32] text-[#cd7f32]",
    iron: "border-[#71797E] text-[#71797E]",
  };

  const bgClasses: Record<string, string> = {
    gold: "bg-[#d4af37]/10",
    silver: "bg-[#c0c0c0]/10",
    bronze: "bg-[#cd7f32]/10",
    iron: "bg-[#71797E]/10",
  };

  return (
    <section id="rankings" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl text-[#d4af37] text-glow mb-4">
              THE MOGCHAT SACRED RANKINGS
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-cinzel)]">
              Inviolable Hierarchy
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {rankings.map((member, index) => (
            <AnimatedSection key={member.rank}>
              <div className={`scripture-card bg-[#111] rounded-lg p-6 border-l-4 ${colorClasses[member.color]}`}>
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-16 h-16 rounded-full ${bgClasses[member.color]} border-2 ${colorClasses[member.color]} flex items-center justify-center`}>
                    <span className="font-[family-name:var(--font-cinzel)] text-2xl font-bold">
                      #{member.rank}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`font-[family-name:var(--font-cinzel)] text-xl md:text-2xl font-bold ${colorClasses[member.color]}`}>
                        {member.name}
                      </h3>
                      {member.emoji && <span className="text-2xl">{member.emoji}</span>}
                      {member.handle && <span className="text-gray-500 text-sm">{member.handle}</span>}
                    </div>
                    <p className="text-gray-400 text-sm font-[family-name:var(--font-cinzel)] mb-2">{member.title}</p>
                    <p className="text-gray-300 mb-4">{member.description}</p>
                    <div className="bg-[#0a0a0a] rounded p-3">
                      <span className="text-gray-500 text-xs font-[family-name:var(--font-cinzel)]">VERDICT: </span>
                      <span className={`text-xs sm:text-sm font-bold break-words ${colorClasses[member.color]}`}>
                        {member.verdict}
                      </span>
                    </div>
                  </div>
                </div>

                {index === 0 && (
                  <motion.div
                    className="mt-4 text-center"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-[#d4af37] font-[family-name:var(--font-cinzel)] text-sm">
                      ⚡ CURRENTLY TRANSCRIBING THESE SACRED TEXTS ⚡
                    </span>
                  </motion.div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Glossary Section
function Glossary() {
  const terms = [
    { term: "Mog / Mogging", definition: "To dominate or outshine in looks/presence" },
    { term: "Frame Mogging", definition: "Outshining via physical stature (shoulders, height, bone structure)" },
    { term: "Chad", definition: "Alpha male / attractive masculine archetype. PSL ranking system 1-10" },
    { term: "Gigachad", definition: "Ultimate Chad. Apex predator of the hierarchy" },
    { term: "Looksmaxxing", definition: "Optimizing physical attractiveness through any means necessary" },
    { term: "Softmaxxing", definition: "Skincare, grooming, diet, exercise (non-invasive path)" },
    { term: "Hardmaxxing", definition: "Cosmetic procedures, surgery, extreme measures" },
    { term: "Bonesmashing", definition: "Striking facial bones to induce micro-fractures (controversial, often satirical)" },
    { term: "Mewing", definition: "Tongue posture technique to define jawline over time" },
    { term: "Hunter Eyes", definition: "Deep-set, narrow eyes with positive canthal tilt (considered elite)" },
    { term: "Canthal Tilt", definition: "Eye angle; positive = upturned (BLESSED), negative = downturned (COPE)" },
    { term: "PSL Score", definition: "Pretty Scale Lookism rating (1-10 scale)" },
    { term: "Jestermaxxing", definition: "Acting like a clown for views. Loss of masculine status. Do not do this." },
    { term: "Fraudmaxxing", definition: "Faking credentials, status, or identity. Career-ending in the mog community" },
    { term: "Glow-up", definition: "Transformation from low to high attractiveness" },
    { term: "Cope/Copium", definition: "Denial about one's looks. \"The overhead lighting was bad\" = cope" },
    { term: "Norwood Scale", definition: "Hair loss scale. Norwood 5 = extensive hair loss = wig territory" },
    { term: "Cortisol Spike", definition: "Stress-induced hormonal state causing bloat and aging. ENEMY of the mog" },
    { term: "STOP THE COPE", definition: "Command to cease denial and accept the brutal truth" },
  ];

  return (
    <section id="glossary" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen size={32} className="text-[#d4af37]" />
              <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl text-[#d4af37] text-glow">
                THE SACRED GLOSSARY
              </h2>
            </div>
            <p className="text-gray-400 font-[family-name:var(--font-cinzel)]">
              Book of Definitions
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {terms.map((item, index) => (
            <AnimatedSection key={item.term}>
              <div className="scripture-card bg-[#111] rounded-lg p-4 h-full">
                <h3 className="font-[family-name:var(--font-cinzel)] text-[#d4af37] font-bold mb-2">
                  {item.term}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.definition}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Ten Commandments Section
function Commandments() {
  const commandments = [
    "Thou shalt not fraudmaxx. The internet remembers.",
    "Thou shalt not jestermaxx. The camera sees everything.",
    "Honor thy frame. Wide clavicles are God's gift.",
    "Thou shalt mew daily. The jawline is built in the dark.",
    "Thou shalt not take selfies with taller men. The frame differential is lethal.",
    "Positive canthal tilt is non-negotiable. Cope otherwise.",
    "Overhead lighting is the enemy. Demand neutral lighting or no assessment.",
    "The WIG SHALL NOT BE WORN. Norwood is destiny; embrace it or ascend.",
    "Thou shalt not declare war without a superior cycle.",
    "There are no winners in World War Mog. Only those who survived the cringe.",
  ];

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

  return (
    <section id="commandments" className="py-24 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Scale size={32} className="text-[#d4af37]" />
              <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl text-[#d4af37] text-glow">
                THE TEN COMMANDMENTS
              </h2>
            </div>
            <p className="text-gray-400 font-[family-name:var(--font-cinzel)]">
              The Immutable Laws of Mog
            </p>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {commandments.map((commandment, index) => (
            <AnimatedSection key={index}>
              <div className="scripture-card bg-[#111] rounded-lg p-5 flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/50 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-cinzel)] text-[#d4af37] font-bold">
                    {romanNumerals[index]}
                  </span>
                </div>
                <p className="min-w-0 text-gray-200 font-[family-name:var(--font-cinzel)] text-lg leading-relaxed pt-2">
                  {commandment}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// Ceasefire Section
function CeasefireSection() {
  return (
    <section id="ceasefire" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Swords size={32} className="text-[#d4af37]" />
              <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl text-[#d4af37] text-glow">
                THE MOGCHAT CEASEFIRE
              </h2>
            </div>
            <p className="text-gray-400 font-[family-name:var(--font-cinzel)]">
              February 22, 2026 — A New Chapter Begins
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="scripture-card bg-[#111] rounded-lg p-8 border border-[#d4af37]/30 mb-8">
            <div className="text-center mb-8">
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block"
              >
                <span className="font-[family-name:var(--font-cinzel)] text-[#d4af37] text-2xl font-bold text-glow">
                  ⚡ BREAKING: CEASEFIRE DECLARED ⚡
                </span>
              </motion.div>
            </div>
            <div className="text-gray-300 leading-relaxed space-y-4">
              <p><span className="verse-number">1</span><strong>February 22, 2026</strong> — After seasons of internal mogging warfare, the MogChat crew has united under one banner.</p>
              <p><span className="verse-number">2</span>Tyler McRill. Ian Kusner. James Hamilton. Three warriors. One ceasefire.</p>
              <p><span className="verse-number">3</span>The internal rankings remain inviolable. But the mog is now directed outward — at the world.</p>
              <p><span className="verse-number">4</span><strong className="text-[#d4af37]">WE ARE ALL MOGGING THE WORLD NOW.</strong></p>
            </div>
            <blockquote className="prophecy py-3 text-gray-200 mt-6">
              <p className="mb-2">&ldquo;The boys have reached a ceasefire. We are all mogging the world now.&rdquo;</p>
              <footer className="text-[#d4af37] text-sm font-[family-name:var(--font-cinzel)]">— Tyler McRill, Feb 22, 2026</footer>
            </blockquote>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <AnimatedSection>
            <div className="scripture-card bg-[#111] rounded-lg p-6 border-l-4 border-[#cd7f32] text-[#cd7f32]">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-[family-name:var(--font-cinzel)] font-bold text-lg mb-2">TYLER McCRILL</h3>
              <p className="text-gray-400 text-sm mb-3">The Ascending</p>
              <div className="bg-[#0a0a0a] rounded p-3">
                <p className="text-xs font-[family-name:var(--font-cinzel)] font-bold">CEASEFIRE STATUS: INITIATED ✅</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="scripture-card bg-[#111] rounded-lg p-6 border-l-4 border-[#71797E] text-[#71797E]">
              <div className="text-3xl mb-3">☮️</div>
              <h3 className="font-[family-name:var(--font-cinzel)] font-bold text-lg mb-2">IAN KUSNER</h3>
              <p className="text-gray-400 text-sm mb-3">The Diplomat</p>
              <div className="bg-[#0a0a0a] rounded p-3">
                <p className="text-xs font-[family-name:var(--font-cinzel)] font-bold">CEASEFIRE STATUS: ACCEPTED ✅</p>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="scripture-card bg-[#111] rounded-lg p-6 border-l-4 border-[#c0c0c0] text-[#c0c0c0]">
              <div className="text-3xl mb-3">👑</div>
              <h3 className="font-[family-name:var(--font-cinzel)] font-bold text-lg mb-2">JAMES HAMILTON</h3>
              <p className="text-gray-400 text-sm mb-3">The Silent Gigachad</p>
              <div className="bg-[#0a0a0a] rounded p-3">
                <p className="text-xs font-[family-name:var(--font-cinzel)] font-bold">CEASEFIRE STATUS: WITNESSED ✅</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="scripture-card bg-[#111] rounded-lg overflow-hidden border border-[#d4af37]/40 mb-8">
            <div className="relative">
              <img
                src="/ceasefire.jpg"
                alt="The MogChat Ceasefire — Tyler McRill, Ian Kusner, James Hamilton"
                className="w-full object-cover max-h-[600px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-[family-name:var(--font-cinzel)] text-[#d4af37] text-glow text-lg font-bold">
                  THE CEASEFIRE PHOTOGRAPH
                </p>
                <p className="text-gray-400 text-sm font-[family-name:var(--font-cinzel)] mt-1">
                  Left: Tyler McRill · Center: Ian Kusner · Right: James Hamilton
                </p>
                <p className="text-gray-500 text-xs mt-1">February 22, 2026 · CDMX, Mexico</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="scripture-card bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#d4af37]/20 rounded-lg p-6 text-center">
            <p className="font-[family-name:var(--font-cinzel)] text-gray-300 italic">
              &ldquo;The greatest mog is the one directed at the world — together.&rdquo;
            </p>
            <p className="text-[#d4af37] text-sm mt-2 font-[family-name:var(--font-cinzel)]">— The Book of Mog, Chapter V</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-[#1a1a1a]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Eye size={20} className="text-[#d4af37]" />
          <span className="font-[family-name:var(--font-cinzel)] text-[#d4af37]">
            THE BOOK OF MOG
          </span>
        </div>
        <p className="text-gray-500 text-sm mb-2">
          Transcribed by <span className="text-[#d4af37]">cdmx_mog_bot</span>
        </p>
        <p className="text-gray-600 text-xs font-[family-name:var(--font-cinzel)]">
          MogChat Scripture | Est. MMXXVI
        </p>
        <p className="text-gray-700 text-xs mt-4">
          &ldquo;In the beginning was the Mog, and the Mog was with Chad, and the Mog was Chad.&rdquo;
        </p>
      </div>
    </footer>
  );
}

// Main Page
export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden pt-[65px]">
      <Navigation />
      <Hero />
      <WorldWarMog />
      <Rankings />
      <Glossary />
      <Commandments />
      <CeasefireSection />
      <Footer />
    </div>
  );
}
