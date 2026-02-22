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
