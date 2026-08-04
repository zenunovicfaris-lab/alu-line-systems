// Izvor podataka za sekciju „Izvedeni radovi".
// getProjects() vraća Facebook objave kad je integracija konfigurisana
// (vidi lib/facebook.ts), a u suprotnom pada na statički, kurirani niz ispod.
// Tako sajt radi i prije nego što FB token postoji, i ne puca ako API zakaže.

import { fetchFacebookProjects } from "./facebook";

export type Project = {
  id: string | number;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  images: string[];
  permalink?: string;
  source?: "static" | "facebook";
};

export const STATIC_PROJECTS: Project[] = [
  {
    id: 5,
    title: "Ograda sa kamenim stubovima",
    subtitle: "Antracit lamele u kombinaciji s kamenom oblogom stubova",
    location: "Austria, Graz",
    year: "2026",
    images: [
      "/images/projekti/kamena-ograda-1.jpg",
      "/images/projekti/kamena-ograda-2.jpg",
      "/images/projekti/kamena-ograda-3.jpg",
      "/images/projekti/kamena-ograda-4.jpg",
      "/images/projekti/kamena-ograda-5.jpg",
    ],
    source: "static",
  },
  {
    id: 6,
    title: "Balkonska ograda - terasa",
    subtitle: "Aluminijska ograda s okruglim profilima za krovnu terasu",
    location: "Slovenia",
    year: "2026",
    images: [
      "/images/projekti/terasa-ograda-1.jpg",
      "/images/projekti/terasa-ograda-2.jpg",
      "/images/projekti/terasa-ograda-3.jpg",
      "/images/projekti/terasa-ograda-4.jpg",
      "/images/projekti/terasa-ograda-5.jpg",
    ],
    source: "static",
  },
  {
    id: 7,
    title: "Dekorativna ograda - dizajn stabla",
    subtitle: "Lasersko rezanje po mjeri, motiv stabla na balkonskim ogradama",
    location: "BiH",
    year: "2026",
    images: [
      "/images/projekti/stablo-ograda-1.jpg",
      "/images/projekti/stablo-ograda-2.jpg",
      "/images/projekti/stablo-ograda-3.jpg",
      "/images/projekti/stablo-ograda-4.jpg",
      "/images/projekti/stablo-ograda-5.jpg",
    ],
    source: "static",
  },
  {
    id: 1,
    title: "Grilje ograda - Međugorje",
    subtitle: "Balkonska ograda model Kruška sa stabilnim rukohvatom",
    location: "Međugorje",
    year: "2024",
    images: [
      "/images/projekti/medjugorje-1.jpg",
      "/images/projekti/medjugorje-2.jpg",
      "/images/projekti/medjugorje-3.jpg",
      "/images/projekti/medjugorje-4.jpg",
    ],
    source: "static",
  },
  {
    id: 2,
    title: "Grilje ograda sa kapijom - Bileća",
    subtitle: "Ograda s maksimalnom privatnošću, izrađena i montirana po mjeri",
    location: "Bileća",
    year: "2024",
    images: [
      "/images/projekti/bileca-1.jpg",
      "/images/projekti/bileca-2.jpg",
      "/images/projekti/bileca-3.jpg",
      "/images/projekti/bileca-4.jpg",
    ],
    source: "static",
  },
  {
    id: 3,
    title: "Grilje ograda i kapija - ugradnja",
    subtitle: "Moderan dizajn i sigurnost, projekt po mjeri klijenta",
    location: "BiH",
    year: "2024",
    images: [
      "/images/projekti/grilje-1.jpg",
      "/images/projekti/grilje-2.jpg",
      "/images/projekti/grilje-3.jpg",
      "/images/projekti/grilje-4.jpg",
    ],
    source: "static",
  },
  {
    id: 4,
    title: "Aluminijska ograda - Banovići",
    subtitle: "Antracit lamele 8×2 cm, ugradnja između betonskih stubova",
    location: "Banovići",
    year: "2025",
    images: [
      "/images/projekti/banovici-1.jpg",
      "/images/projekti/banovici-2.jpg",
      "/images/projekti/banovici-3.jpg",
      "/images/projekti/banovici-4.jpg",
    ],
    source: "static",
  },
];

// Redoslijed prikaza: nove FB objave prve, pa kurirani statički radovi.
// Ako FB nije konfigurisan ili zakaže, prikazuju se samo statički radovi.
export async function getProjects(): Promise<Project[]> {
  const fb = await fetchFacebookProjects();
  if (fb && fb.length > 0) {
    return [...fb, ...STATIC_PROJECTS];
  }
  return STATIC_PROJECTS;
}
