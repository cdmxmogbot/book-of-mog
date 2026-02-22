export interface ChronicleEntry {
  id: string;
  date: string;
  displayDate: string;
  title: string;
  icon: string;
  category: 'accord' | 'historic' | 'ranking' | 'incident' | 'revelation';
  content: string[];  // array of paragraph strings (verse by verse)
  quote?: { text: string; author: string };
  photoPath?: string;
  verdict?: string;
}

export const chronicles: ChronicleEntry[] = [
  {
    id: 'pushup-war',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · CDMX',
    title: 'THE PUSHUP WAR BEGINS',
    icon: '💪',
    category: 'historic',
    content: [
      'On the night of February 22nd, 2026, the MogChat crew declared a 30-day pushup war. One hundred pushups per day. Every day. No exceptions.',
      'The challenge was set against the backdrop of Indio dark lager, a rooftop bar, and the streets of Mexico City. The stakes: CHAD rankings, honor, and the permanent record.',
      'Day 1 results were transmitted to the digital ledger before midnight. Tyler McRill: 110. James Hamilton: 110. Ian Kusner: 27.',
      'Two men hit 110 pushups while intoxicated in a foreign country. One man was at 7/11.',
      'The leaderboard is live. The data is permanent. Every day for 30 days the record updates. There is nowhere to hide.'
    ],
    quote: {
      text: 'The mog is not given. It is earned — one pushup at a time.',
      author: 'cdmx_mog_bot, Feb 22, 2026'
    },
    verdict: 'DAY 1: TYLER ✅ 110 · JAMES ✅ 110 · IAN ❌ 27. THE WAR IS ON. mogwar.pages.dev'
  },
  {
    id: 'biker-save',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · CDMX Streets',
    title: 'THE BIKER SAVE',
    icon: '🚴',
    category: 'historic',
    content: [
      'On the night of February 22nd, 2026, Tyler McRill walked into the path of an oncoming cyclist at full speed on the streets of Mexico City.',
      'James Hamilton, #2 ranked Chad and SWORDMASTER MOG, intervened in time. Tyler McRill was not hit. The biker passed. The crew continued onward.',
      'In a single movement, James Hamilton demonstrated that his dominance extends beyond facial aesthetics. Hunter eyes. Dominant jawline. Situational awareness. Crew protection instincts.',
      'Tyler McRill publicly acknowledged the save. No cope was issued. Credit was given where credit was due.',
      'The gap between #2 and #3 in the CHAD rankings widened further on this night. James Hamilton is not merely handsome. He is dangerous in the field.'
    ],
    quote: {
      text: 'James just saved me from getting brutally mogged by a biker who would have hit me at full speed. Credit where credit is due.',
      author: 'Tyler McRill, Feb 22, 2026'
    },
    verdict: 'JAMES HAMILTON: SWORDMASTER. PROTECTOR. UNDISPUTED #2. THE RANKINGS ARE CORRECT.'
  },
  {
    id: 'pour-mog',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · CDMX Rooftop',
    title: 'THE POUR MOG OF FEB 22',
    icon: '🍺',
    category: 'incident',
    content: [
      'Ian Kusner, ranked #4 in the CHAD standings, achieved his first recorded mog of the CDMX campaign.',
      'The venue: a rooftop bar in Mexico City. The instrument: two Indio dark lager mugs, poured from the same bottle.',
      'Ian\'s glass: full cascading head, dense foam, proper nucleation. A textbook pour.',
      'Tyler\'s glass: thin foam crown, wispy edges, settling fast. The work of a man who had already spilled beer once that evening.',
      'Tyler McRill, to his credit, accepted the loss without hesitation. "I accept it. Ian mogged me. This is okay, we are in a ceasefire so we are allies technically." Full accountability. The ceasefire held.',
      'The Pour Mog stands as Ian Kusner\'s first confirmed mog since the Ceasefire. One point on the board.'
    ],
    quote: {
      text: 'I accept it. Ian mogged me. This is okay, we are in a ceasefire so we are allies technically.',
      author: 'Tyler McRill, Feb 22, 2026'
    },
    verdict: 'IAN KUSNER: 1 CONFIRMED MOG. TYLER MCRILL: GRACEFUL IN DEFEAT. THE CEASEFIRE HOLDS.'
  },
  {
    id: 'zyn-accord',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · CDMX',
    title: 'THE ZYN ACCORD',
    icon: '🤝',
    category: 'accord',
    content: [
      'James Hamilton, #2 ranked Chad and SWORDMASTER MOG, was photographically documented receiving a Zyn nicotine pouch from Tyler McRill, revealing a previously undisclosed nicotine dependency.',
      'The handoff was witnessed, photographed, and submitted to the record by Ian Kusner. No denial was issued.',
      'James responded with full composure and zero cope.',
      'A cigarette from a Korean restaurant owner in CDMX followed shortly after. The timeline is confirmed.'
    ],
    quote: {
      text: "I'll gladly admit to loving a bit of nicotine. Nothing wrong with a stimmy check straight to the dome… especially right after a cig from a Korean restaurant owner in CDMX.",
      author: 'James Hamilton, Feb 22, 2026'
    },
    verdict: 'FULL ACCOUNTABILITY. ZERO COPE. RANKINGS MAINTAINED.'
  },
  {
    id: 'oura-revelation',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · CDMX',
    title: 'THE OURA REVELATION',
    icon: '💍',
    category: 'revelation',
    content: [
      'Tyler McRill revealed that the ring on his finger — previously noted as "possibly alpha" — is an Oura Ring. A biometric health tracking device.',
      'The ring monitors sleep stages, HRV, body temperature, recovery score, and readiness index.',
      'Tyler McRill is hardmaxxing his recovery data in real time while drinking Indio dark lager in CDMX.',
      'High HRV equals low cortisol equals less inflammation equals better jaw definition. The data does not lie.'
    ],
    verdict: 'HARDMAXXING THE RECOVERY. OVERHEAD LIGHTING COPE PERSISTS. RETRIAL LOOKS MORE FAVORABLE.'
  },
  {
    id: 'androgenic-exposé',
    date: '2026-02-21',
    displayDate: 'February 21, 2026 · The Streets',
    title: 'THE PROPHECY FULFILLED: ANDROGENIC EXPOSED',
    icon: '🪖',
    category: 'historic',
    content: [
      'The scripture had already foretold it. Written in the canonical ending of World War Mog: "Androgenic\'s wig snatched (Norwood 5)." The scholars did not know when. Only that it would come.',
      'On February 21st, 2026, the prophecy was fulfilled.',
      'An unidentified individual approached Androgenic from behind during an outdoor interaction and snatched his signature baseball cap from his head. The footage revealed a pronounced Norwood Level 3 baldline — a hairline Androgenic had been concealing for approximately seven weeks through wigmaxxing: a combination of a hairpiece, headwear dependency, and strategic camera angles.',
      'Androgenic\'s response confirmed everything: "Unfortunately I\'ve been publicly bald for 6 weeks on TikTok though." Zero cope attempted. Full acknowledgment. The wig had been real.',
      'Kick_Champ\'s immediate verdict: "#2 ranked CHAD Androgenic suffered a MASSIVE CORTISOL SPIKE after a fan SNATCHED his WIG exposing his TRUE HAIRLINE."',
      '@AutismCapital posted the viral clip to X with the caption: "GENERATIONAL AURA LOSS. No recovery possible. Baldmogged." The post accumulated millions of views within hours.',
      'The community called it 9/11 for looksmaxxers. TsjGetEm declared: "I might actually cry because number one Chad just got mogged. He got caught for wigmaxxing." His Chadscan ranking collapsed from #2 to beyond #38 and continued falling.',
      'The fraud was not merely aesthetic. It was philosophical. A man who built an empire on the premise of genetic optimization had been concealing his most critical genetic variable. The looksmaxxing community, built on the absolute theology of transparency and bone structure, could not forgive the deception.',
      'But the scholars of MogChat noted something beyond the spectacle. The scripture had named this event before it occurred. The Book of Mog is not merely a record of events. It is a prophetic document.',
      'The wig fell. The crown fell with it. The prophecy is sealed.'
    ],
    quote: {
      text: '#2 ranked CHAD Androgenic suffered a MASSIVE CORTISOL SPIKE after a fan SNATCHED his WIG exposing his TRUE HAIRLINE 😳',
      author: 'Kick_Champ (@Kick_Champ), February 21, 2026'
    },
    verdict: 'WIGMAXXER. FRAUDMAXXER. NORWOOD 3 CONFIRMED. THE PROPHECY WAS REAL. THE SCRIPTURE KNEW.'
  },
  {
    id: 'asu-verdict',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · Worldwide',
    title: 'THE ASU FRAT LEADER DELIVERS FINAL VERDICT',
    icon: '⚖️',
    category: 'ranking',
    content: [
      'One day after the wig fell, a new power entered the record.',
      'Varis Gilaj — known to the internet as the ASU Frat Leader — delivered the official verdict on Androgenic. His conclusion, amplified by Kick_Champ: "THE ASU FRAT LEADER LABELS Androgenic as a FULL FRAUDMAXXER, saying the WIG and missing ABS reveal the CHUD underneath."',
      'Not one deception. Two. The wig concealed a Norwood 3 hairline. But there was also the matter of the abs — apparently absent in person, present only in content. The fraudmaxxing ran deeper than the community had first understood.',
      'Varis Gilaj is what the looksmaxxing community calls a natural: no stacking of interventions, no documented maxxing protocol, no hormone cycling. Just raw genetic expression.',
      'The correct timeline must be stated clearly. On February 5th, 2026, Braden "Clavicular" Peters — the rising face of looksmaxxing, subject of a GQ profile — hosted an IRL stream at Arizona State University. Varis Gilaj appeared in the frame. The frame-mog was immediate and total. By February 6th it had gone viral. By February 11th, the internet had 23,000 likes on a single post about Varis.',
      'Then came the detail that changes everything. Upon learning of Varis\'s existence and viral dominance, Androgenic — self-proclaimed #1 Chad — flew from Australia to the United States. Not for a vacation. Not for content. To find Varis Gilaj and physically reclaim his status through a frame-mog confrontation.',
      'He never got there. On February 21st, before the confrontation could occur, a stranger snatched his wig on the street and exposed the fraud. The mission ended before it began. The hubris was punished before the battle was joined.',
      'On February 22nd, Varis delivered his verdict from a position of total dominance: the wig and the missing abs together constituted full fraudmaxxery. Not one lie. Two.',
      'The Book of Mog had written: "Varis exposed as fraudmaxxer, Androgenic\'s wig snatched." The Androgenic half: fulfilled exactly. The Varis half: inverted. He was not exposed — he was the one exposing. The scripture prophesied the axis correctly. The role assignments require a correction.',
      'The record is updated. The timeline is sealed.'
    ],
    quote: {
      text: 'THE ASU FRAT LEADER LABELS Androgenic as a FULL FRAUDMAXXER, saying the WIG and missing ABS reveal the CHUD underneath 😳',
      author: 'Kick_Champ (@Kick_Champ), February 22, 2026'
    },
    verdict: 'ANDROGENIC: DOUBLE FRAUDMAXXER (WIG + FAKE ABS). VARIS: THE JUDGE. CLAVICULAR: THE HEIR. WORLD WAR MOG HAS REACHED GQ MAGAZINE.'
  },
  {
    id: 'zach-arrival',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · The United States',
    title: 'THE STATESIDE CONNECT ARRIVES',
    icon: '🔗',
    category: 'historic',
    content: [
      'While the MogChat crew held their ground in Mexico City, a transmission arrived from the United States of America. His name: Zach Keith.',
      '"I\'m the connect back in the united states," he declared. "I want to stay connected to the crew while learning the ways of mogbot."',
      'The greeting was noted. The intent was logged. The crew acknowledged.',
      'Per protocol, a PSL assessment was initiated immediately. Zach submitted a photograph. The digital scholar rendered judgment.',
      'Assessment findings: Auburn hair — rare phenotype, works in his favor. Facial symmetry confirmed solid. Skin clear for a ginger complexion. Bone structure with potential beneath. However — the reclined couch selfie mog was noted. Camera below eye level, head tilted back, classic PSL sandbagging technique. Canthal tilt appeared slightly negative. The mustache-only situation flagged for immediate resolution.',
      'The verdict of the scholar: Solid foundation. Leaving points on the table. The photo did not reflect the man.',
      'Full assessment to be revisited under proper conditions: standing photo, eye-level camera, neutral expression.',
      'Zach Keith has been entered into the record. The stateside connect is now documented. He asked what looksmaxxing was. He got the full answer.'
    ],
    quote: {
      text: "I'm the connect back in the united states. I want to stay connected to the crew while learning the ways of mogbot.",
      author: 'Zach Keith, Feb 22, 2026'
    },
    photoPath: '/zach-keith.jpg',
    verdict: 'SOLID FOUNDATION. COUCH SELFIE COPE. FULL RETRIAL PENDING. STATESIDE CONNECT LOGGED.'
  },
  {
    id: 'ceasefire',
    date: '2026-02-22',
    displayDate: 'February 22, 2026 · CDMX',
    title: 'THE MOGCHAT CEASEFIRE',
    icon: '☮️',
    category: 'historic',
    content: [
      'After seasons of internal mogging warfare, the MogChat crew united under one banner.',
      'Tyler McRill. Ian Kusner. James Hamilton. Three warriors. One ceasefire.',
      'The internal rankings remain inviolable. But the mog is now directed outward — at the world.',
      'The Ceasefire Photograph was taken. The record is sealed.'
    ],
    quote: {
      text: 'The boys have reached a ceasefire. We are all mogging the world now.',
      author: 'Tyler McRill, Feb 22, 2026'
    },
    photoPath: '/ceasefire.jpg',
    verdict: 'WE ARE ALL MOGGING THE WORLD NOW.'
  }
];
