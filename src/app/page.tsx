"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Crown, Scroll, BookOpen, Scale, Flame, Skull, AlertTriangle, Eye, Swords, Handshake } from "lucide-react";
import { chronicles, ChronicleEntry } from '../data/chronicles';

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

// Tab Switcher Navigation
function TabNavigation({
  activeTab,
  setActiveTab
}: {
  activeTab: 'scripture' | 'chronicles';
  setActiveTab: (tab: 'scripture' | 'chronicles') => void;
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-[family-name:var(--font-cinzel)] text-[#d4af37] text-lg font-bold">
            THE BOOK OF MOG
          </a>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('scripture')}
              className={`px-4 py-2 rounded-lg font-[family-name:var(--font-cinzel)] text-sm transition-all ${
                activeTab === 'scripture'
                  ? 'bg-[#d4af37] text-[#0a0a0a] font-bold'
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-[#d4af37]'
              }`}
            >
              📜 SCRIPTURE
            </button>
            <button
              onClick={() => setActiveTab('chronicles')}
              className={`px-4 py-2 rounded-lg font-[family-name:var(--font-cinzel)] text-sm transition-all ${
                activeTab === 'chronicles'
                  ? 'bg-[#d4af37] text-[#0a0a0a] font-bold'
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-[#d4af37]'
              }`}
            >
              ⚔️ CHRONICLES
            </button>
          </div>
        </div>
      </div>
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
            href="#content"
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

// Chronicle Entry Component (for special cases like Rankings)
function ChronicleEntryComponent({
  icon,
  title,
  date,
  location,
  children,
  borderColor = "border-[#d4af37]"
}: {
  icon: string;
  title: string;
  date: string;
  location?: string;
  children: React.ReactNode;
  borderColor?: string;
}) {
  return (
    <AnimatedSection>
      <div className={`scripture-card bg-[#111] rounded-lg p-6 md:p-8 border-l-4 ${borderColor}`}>
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{icon}</span>
          <div>
            <h3 className="font-[family-name:var(--font-cinzel)] text-2xl md:text-3xl text-[#d4af37] font-bold">
              {title}
            </h3>
            <p className="text-gray-500 text-sm font-[family-name:var(--font-cinzel)]">
              {date}{location && ` · ${location}`}
            </p>
          </div>
        </div>
        <div className="text-gray-300 leading-relaxed">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
}

// World War Mog Scripture Section (for THE SCRIPTURE tab)
function WorldWarMog() {
  return (
    <div className="space-y-8">
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

      {/* Chapter V */}
      <ChapterCard
        chapter="CHAPTER V — CONFIRMED"
        title="THE PROPHECY FULFILLED"
        icon={Eye}
        content={
          <>
            <p className="text-[#d4af37] font-[family-name:var(--font-cinzel)] mb-4">February 21–22, 2026 · Real Events</p>
            <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2 text-red-500 mb-2">
                <AlertTriangle size={20} />
                <span className="font-bold font-[family-name:var(--font-cinzel)]">THE WIG SNATCH — CONFIRMED</span>
              </div>
              <p>
                <span className="verse-number">1</span>
                <strong>February 21</strong> — A stranger approached Androgenic from behind and snatched his signature cap, revealing a <strong>Norwood Level 3 baldline</strong> concealed for weeks via wig and camera angles.
              </p>
              <p>
                <span className="verse-number">2</span>
                Androgenic&apos;s own response: &ldquo;Unfortunately I&apos;ve been publicly bald for 6 weeks on TikTok though.&rdquo; Full admission. No cope.
              </p>
              <p>
                <span className="verse-number">3</span>
                Chadscan ranking: <strong>#2 → #30 → #38</strong> and falling. Millions of views. Called &ldquo;9/11 for looksmaxxers.&rdquo;
              </p>
            </div>
            <div className="bg-yellow-950/30 border border-yellow-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-500 mb-2">
                <Scale size={20} />
                <span className="font-bold font-[family-name:var(--font-cinzel)]">THE ASU FRAT LEADER DELIVERS VERDICT — Feb 22</span>
              </div>
              <p>
                <span className="verse-number">4</span>
                Varis Gilaj — from a position of total dominance — labeled Androgenic a <strong>FULL FRAUDMAXXER</strong>: the wig AND missing abs revealed a CHUD beneath the content.
              </p>
              <p>
                <span className="verse-number">5</span>
                Not one deception. <strong>Two.</strong> The double fraudmaxx is confirmed.
              </p>
              <p>
                <span className="verse-number">6</span>
                Androgenic had flown from Australia to America to confront Varis. He was wig-snatched before the confrontation could occur. The hubris was punished before the battle was joined.
              </p>
            </div>
          </>
        }
        prophecies={[
          {
            author: "KICK_CHAMP, February 21, 2026",
            text: "#2 ranked CHAD Androgenic suffered a MASSIVE CORTISOL SPIKE after a fan SNATCHED his WIG exposing his TRUE HAIRLINE 😳"
          },
          {
            author: "KICK_CHAMP, February 22, 2026",
            text: "THE ASU FRAT LEADER LABELS Androgenic as a FULL FRAUDMAXXER, saying the WIG and missing ABS reveal the CHUD underneath 😳"
          }
        ]}
      />

      {/* Chapter VI */}
      <AnimatedSection>
        <div className="scripture-card">
          <div className="flex items-center gap-3 mb-6">
            <Skull className="text-red-500 w-6 h-6" />
            <h3 className="font-[family-name:var(--font-cinzel)] text-xl text-[#d4af37]">
              CHAPTER VI: THE FALL OF THE HEIR
            </h3>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>February 22, 2026. The rankings have been recalibrated.</p>
            <p>
              <strong className="text-red-400">@Clav0Updates</strong> delivered the report:{" "}
              <em>&ldquo;Fans are incredibly CONCERNED after seeing Clavicular drop three spots down to No. 4 in the Chad rankings since November, with Clav now being ranked below the ASU frat leader, Androgenic, and Nocturnal Kent.&rdquo;</em>
            </p>
            <p>
              The same day Androgenic&apos;s wig was snatched — the same day Varis delivered the verdict — Clavicular, the self-proclaimed face of looksmaxxing, was confirmed to have FALLEN. Not risen. The chaos of the war consumed his own standing.
            </p>
            <p>
              The irony is total: Androgenic flew from Australia to avenge Clavicular, got wig-snatched, and still ranks above him. <strong className="text-red-400">The protector outranks the protected. The soldier outranks the general.</strong>
            </p>
          </div>
          <div className="mt-6 p-4 bg-[#0a0a0a] rounded-lg border border-red-900/40">
            <p className="text-xs text-gray-500 mb-2 font-[family-name:var(--font-cinzel)] tracking-widest">SOURCE TRANSMISSION — @CLAV0UPDATES — FEB 22 2026</p>
            <p className="text-sm text-gray-300 italic">
              &ldquo;Fans are incredibly CONCERNED after seeing Clavicular drop three spots down to No. 4 in the Chad rankings since November, with Clav now being ranked below the ASU frat leader, Androgenic, and Nocturnal Kent 😳💔&rdquo;
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Current Standings */}
      <AnimatedSection>
        <div className="scripture-card bg-gradient-to-b from-[#111] to-[#0a0a0a] border-2 border-[#d4af37]/50 rounded-lg p-8 text-center">
          <h3 className="font-[family-name:var(--font-cinzel)] text-3xl text-[#d4af37] text-glow mb-6">
            CURRENT STANDINGS
          </h3>
          <p className="text-2xl font-[family-name:var(--font-cinzel)] text-white mb-8">
            THE WAR IS NOT OVER
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-[#0a0a0a] rounded-lg p-4 border border-[#d4af37]/50">
              <p className="text-[#d4af37] text-xs font-bold mb-1 tracking-widest">#1</p>
              <h4 className="text-[#d4af37] font-[family-name:var(--font-cinzel)] font-bold mb-2">VARIS GILAJ</h4>
              <p className="text-[#d4af37] text-sm font-bold mb-1">👑 THE JUDGE</p>
              <p className="text-gray-400 text-sm">The natural. Delivered the verdict. Untouched by the war.</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-700/50">
              <p className="text-gray-400 text-xs font-bold mb-1 tracking-widest">#2</p>
              <h4 className="text-[#d4af37] font-[family-name:var(--font-cinzel)] font-bold mb-2">ANDROGENIC</h4>
              <p className="text-yellow-500 text-sm font-bold mb-1">⚔️ THE SOLDIER</p>
              <p className="text-gray-400 text-sm">Wig-snatched but ranked. Flew from AU. Gave everything. Still #2.</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-lg p-4 border border-gray-700/50">
              <p className="text-gray-400 text-xs font-bold mb-1 tracking-widest">#3</p>
              <h4 className="text-[#d4af37] font-[family-name:var(--font-cinzel)] font-bold mb-2">NOCTURNAL KENT</h4>
              <p className="text-gray-400 text-sm font-bold mb-1">🌑 THE SILENT RISER</p>
              <p className="text-gray-400 text-sm">Ascended while others burned. Identity largely unknown. Lore pending.</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-lg p-4 border border-red-900/50">
              <p className="text-red-400 text-xs font-bold mb-1 tracking-widest">#4 ⬇ FALLEN</p>
              <h4 className="text-[#d4af37] font-[family-name:var(--font-cinzel)] font-bold mb-2">CLAVICULAR</h4>
              <p className="text-red-500 text-sm font-bold mb-1">📉 THE DETHRONED</p>
              <p className="text-gray-400 text-sm">GQ-endorsed yet ranking collapsed. The general outlasted by his own soldiers.</p>
            </div>
          </div>

          <p className="text-gray-400 italic font-[family-name:var(--font-cinzel)]">
            &ldquo;The scripture is a living document. Check back daily.&rdquo;
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}

// Glossary Section
function Glossary() {
  const terms = [
    { term: "Mogstery", definition: "The recorded history of mog events. The chronicles of significant moments in looksmaxxing culture and MogChat lore. That which must not be lost." },
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
    <div className="py-16">
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
    <div className="py-16">
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
  );
}

// Rankings (for Chronicles tab)
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
  );
}

// THE SCRIPTURE Tab Content
function ScriptureTab() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Framing paragraph */}
        <AnimatedSection>
          <div className="scripture-card bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#d4af37]/30 rounded-lg p-8 text-center mb-16">
            <p className="text-gray-300 font-[family-name:var(--font-cinzel)] text-lg italic leading-relaxed">
              &ldquo;We are mere stewards of the teachings that Clavicular and the ASU Frat Leader blessed us with. Study them. Revere them. Do not repeat their mistakes.&rdquo;
            </p>
          </div>
        </AnimatedSection>

        {/* World War Mog */}
        <WorldWarMog />

        {/* Glossary */}
        <div className="max-w-6xl mx-auto -mx-4 px-4">
          <Glossary />
        </div>

        {/* Commandments */}
        <Commandments />
      </div>
    </div>
  );
}

// Category border colors
const categoryBorderColors: Record<ChronicleEntry['category'], string> = {
  accord: 'border-[#d4af37]',
  historic: 'border-[#d4af37]',
  ranking: 'border-[#c0c0c0]',
  incident: 'border-red-500',
  revelation: 'border-purple-500',
};

// Category badge colors
const categoryBadgeColors: Record<ChronicleEntry['category'], string> = {
  accord: 'bg-[#d4af37]/20 text-[#d4af37]',
  historic: 'bg-[#d4af37]/20 text-[#d4af37]',
  ranking: 'bg-[#c0c0c0]/20 text-[#c0c0c0]',
  incident: 'bg-red-500/20 text-red-500',
  revelation: 'bg-purple-500/20 text-purple-500',
};

// Chronicle Card Component (data-driven)
function ChronicleCard({ entry }: { entry: ChronicleEntry }) {
  return (
    <AnimatedSection>
      <div className={`scripture-card bg-[#111] rounded-lg p-6 md:p-8 border-l-4 ${categoryBorderColors[entry.category]}`}>
        <div className="flex items-start gap-4 mb-4">
          <span className="text-4xl">{entry.icon}</span>
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="font-[family-name:var(--font-cinzel)] text-2xl md:text-3xl text-[#d4af37] font-bold">
                {entry.title}
              </h3>
              <span className={`text-xs px-2 py-1 rounded font-[family-name:var(--font-cinzel)] uppercase ${categoryBadgeColors[entry.category]}`}>
                {entry.category}
              </span>
            </div>
            <p className="text-gray-500 text-sm font-[family-name:var(--font-cinzel)]">
              {entry.displayDate}
            </p>
          </div>
        </div>

        {entry.verdict && (
          <div className="bg-[#0a0a0a] rounded-lg p-3 border border-green-900/50 mb-4">
            <p className="text-green-500 font-[family-name:var(--font-cinzel)] font-bold text-center text-sm">
              ✅ {entry.verdict}
            </p>
          </div>
        )}

        <div className="text-gray-300 leading-relaxed space-y-4">
          {entry.content.map((paragraph, i) => (
            <p key={i}>
              <span className="verse-number">{i + 1}</span>
              {paragraph}
            </p>
          ))}
        </div>

        {entry.quote && (
          <blockquote className="prophecy py-3 text-gray-200 mt-4">
            <p className="mb-2">&ldquo;{entry.quote.text}&rdquo;</p>
            <footer className="text-[#d4af37] text-sm font-[family-name:var(--font-cinzel)]">
              — {entry.quote.author}
            </footer>
          </blockquote>
        )}

        {entry.photoPath && (
          <div className="mt-6">
            <div className="scripture-card bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#d4af37]/40">
              <div className="relative">
                <img
                  src={entry.photoPath}
                  alt={entry.title}
                  className="w-full object-cover max-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-[family-name:var(--font-cinzel)] text-[#d4af37] text-glow font-bold">
                    {entry.title}
                  </p>
                  <p className="text-gray-400 text-xs font-[family-name:var(--font-cinzel)] mt-1">
                    {entry.displayDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

// THE CHRONICLES Tab Content
function ChroniclesTab() {
  return (
    <div className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Framing paragraph */}
        <AnimatedSection>
          <div className="text-center mb-8">
            <h2 className="font-[family-name:var(--font-cinzel)] text-4xl md:text-5xl text-[#d4af37] text-glow mb-4">
              THE MOGCHAT CHRONICLES
            </h2>
            <p className="text-gray-400 font-[family-name:var(--font-cinzel)]">
              CDMX, February 2026
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="scripture-card bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#d4af37]/30 rounded-lg p-8 text-center mb-16">
            <p className="text-gray-300 font-[family-name:var(--font-cinzel)] text-lg italic leading-relaxed">
              &ldquo;The MogChat Chronicles — CDMX, February 2026. Inspired by the teachings. Writing their own scripture.&rdquo;
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline - Data-driven chronicle entries */}
        <div className="space-y-8">
          {chronicles.map((entry) => (
            <ChronicleCard key={entry.id} entry={entry} />
          ))}

          {/* THE MOGCHAT SACRED RANKINGS (special styling, kept hardcoded) */}
          <ChronicleEntryComponent
            icon="👑"
            title="THE MOGCHAT SACRED RANKINGS"
            date="Ongoing"
            location="Inviolable Hierarchy"
            borderColor="border-[#d4af37]"
          >
            <div className="mb-6">
              <p className="text-gray-400 mb-6">The official power rankings of the MogChat crew. Updated as events unfold.</p>
            </div>
            <Rankings />
          </ChronicleEntryComponent>
        </div>

        {/* Closing quote */}
        <AnimatedSection>
          <div className="scripture-card bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-[#d4af37]/20 rounded-lg p-6 text-center mt-12">
            <p className="font-[family-name:var(--font-cinzel)] text-gray-300 italic">
              &ldquo;The greatest mog is the one directed at the world — together.&rdquo;
            </p>
            <p className="text-[#d4af37] text-sm mt-2 font-[family-name:var(--font-cinzel)]">— The MogChat Chronicles, Chapter I</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
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
  const [activeTab, setActiveTab] = useState<'scripture' | 'chronicles'>('scripture');

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden pt-[65px]">
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero />
      <div id="content">
        {activeTab === 'scripture' ? <ScriptureTab /> : <ChroniclesTab />}
      </div>
      <Footer />
    </div>
  );
}
