// Centralna SEO/biznis konfiguracija.
export const SITE_URL = "https://www.alu-line-systems.com";

export const BUSINESS = {
  name: "ALU LINE Systems",
  legalName: "ALU LINE Systems",
  description:
    "Ugrađujemo aluminijske ograde, roletne, nadstrešnice, rolo i sekcijska vrata po vašoj mjeri. Sve izrađujemo i montiramo sami. Srebrenik, BiH.",
  phone: "+38762543464",
  phoneDisplay: "062 543 464",
  email: "", // dodaj ako postoji (npr. info@aluline.ba)
  street: "", // dodaj tačnu ulicu i broj kad budeš imao
  city: "Srebrenik",
  region: "Tuzlanski kanton",
  postalCode: "75350",
  country: "BA",
  // Koordinate Srebrenika (zamijeni tačnom lokacijom radnje ako je znaš)
  latitude: 44.7089,
  longitude: 18.4908,
  facebook: "https://www.facebook.com/profile.php?id=61584092785799",
  // Google Business Profile javni link (Maps). Zalijepi kad dobiješ, ide u sameAs.
  googleBusiness: "https://share.google/FH6hWrhYEPuYnlt9u",
  // Područja koja opslužujete (za JSON-LD areaServed)
  areaServed: [
    "Srebrenik",
    "Tuzla",
    "Gračanica",
    "Gradačac",
    "Lukavac",
    "Bosna i Hercegovina",
    "Hrvatska",
    "Slovenija",
    "Austrija",
  ],
  openingHours: {
    days: "Mo-Sa",
    opens: "08:00",
    closes: "17:00",
  },
} as const;

export const SERVICES = [
  "Aluminijske ograde",
  "Balkonske ograde",
  "Dvorišne ograde",
  "Ulazne i pješačke kapije",
  "Rolo garažna vrata",
  "Sekcijska vrata",
  "Industrijska vrata",
  "Nadgradne i podgradne roletne",
  "Nadstrešnice",
] as const;
