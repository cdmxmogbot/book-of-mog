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
