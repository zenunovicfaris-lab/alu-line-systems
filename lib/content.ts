// Sadržaj za uslužne i lokacijske stranice (SEO).
// Svaka stranica ima jedinstven title/description i tekst.

export type FaqItem = { q: string; a: string };
export type Feature = { title: string; desc: string };

export type ProseSection = { heading: string; paragraphs: string[] };

export type ServicePage = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  intro: string[];
  body: ProseSection[];
  features: Feature[];
  gallery: { src: string; alt: string }[];
  faq: FaqItem[];
  relatedPostSlugs?: string[];
};

export type LocationPage = {
  slug: string;
  city: string;
  cityLocative: string; // "u Tuzli"
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  intro: string[];
  body: ProseSection[];
  faq: FaqItem[];
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "aluminijske-ograde",
    name: "Aluminijske ograde",
    h1: "Aluminijske ograde po mjeri",
    metaTitle: "Aluminijske Ograde po Mjeri",
    metaDescription:
      "Izrađujemo i montiramo aluminijske ograde po mjeri: dvorišne, balkonske i grilje ograde te ulazne kapije. Sve radimo sami, uz garanciju. Srebrenik, BiH.",
    keywords: [
      "aluminijske ograde",
      "dvorišne ograde",
      "balkonske ograde",
      "grilje ograde",
      "aluminijske kapije",
      "ograde po mjeri",
      "aluminijske ograde cijena",
    ],
    heroImage: "/images/projekti/terasa-ograda-1.jpg",
    relatedPostSlugs: [
      "ograda-za-dvoriste-vrste-i-kako-izabrati",
      "panelna-ili-aluminijska-ograda",
      "aluminijska-ili-kovana-ograda",
      "ograda-za-balkon-aluminijske-balkonske-ograde",
      "koliko-kosta-aluminijska-ograda",
    ],
    intro: [
      "Aluminijske ograde spajaju trajnost, čist izgled i minimalno održavanje. Za razliku od željeza, aluminij ne rđa, ne treba ga bojiti i podnosi našu klimu godinama bez propadanja.",
      "Svaku ogradu izrađujemo po vašim tačnim dimenzijama i montiramo je sami. Ne prepuštamo montažu podizvođačima, pa za kvalitet i rok odgovaramo mi. Na svaki rad dajete pisanu garanciju.",
    ],
    body: [
      {
        heading: "Prednosti aluminijskih ograda",
        paragraphs: [
          "Glavna prednost aluminijske ograde je što ne rđa. Aluminij ne sadrži željezo i prirodno stvara zaštitni sloj, a plastifikacija u boji dodatno štiti površinu, pa ograda godinama izgleda kao nova bez bojenja i brušenja rđe.",
          "Uz to je lagana, ali čvrsta, jednostavna za montažu i dostupna u mnogo boja i modela. Za dvorište, balkon ili terasu birate izgled koji se uklapa uz kuću i fasadu.",
        ],
      },
      {
        heading: "Vrste ograda i kapija koje radimo",
        paragraphs: [
          "Radimo dvorišne ograde za okućnice, balkonske ograde, grilje ograde klasičnog izgleda te ulazne kapije. Uz pješačke kapije izrađujemo i klizne kapije koje štede prostor jer se otvaraju bočno, s ručnim ili daljinskim upravljanjem.",
          "Sve se radi po mjeri vašeg otvora i placa. Visinu, gustinu ispune i model biramo zajedno, prema tome koliko želite privatnosti i kakav izgled tražite.",
        ],
      },
      {
        heading: "Kako radimo: od mjerenja do montaže",
        paragraphs: [
          "Nakon poziva izlazimo na teren, izmjerimo i damo ponudu po mjeri, bez obaveze. Kad se dogovorimo oko modela, boje i roka, ogradu izradimo i montiramo sami.",
          "Radimo po cijeloj Bosni i Hercegovini, a izlazimo i u Hrvatsku, Sloveniju i Austriju. Na svaki rad dajemo pisanu garanciju. Za ponudu nas dobijete na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Dvorišne ograde", desc: "Sigurne i čvrste ograde za okućnicu, u boji po izboru." },
      { title: "Balkonske ograde", desc: "Lagane aluminijske ograde za balkone i terase." },
      { title: "Grilje ograde", desc: "Klasičan izgled grilja u aluminiju bez održavanja." },
      { title: "Klizne i pješačke kapije", desc: "Klizne kapije štede prostor, pješačke po mjeri otvora." },
    ],
    gallery: [
      { src: "/images/projekti/terasa-ograda-2.jpg", alt: "Aluminijska ograda za terasu, ALU LINE Systems" },
      { src: "/images/projekti/stablo-ograda-1.jpg", alt: "Dvorišna aluminijska ograda, ALU LINE Systems" },
      { src: "/images/projekti/grilje-1.jpg", alt: "Grilje aluminijska ograda, ALU LINE Systems" },
      { src: "/images/projekti/kamena-ograda-1.jpg", alt: "Aluminijska ograda na kamenom zidu, ALU LINE Systems" },
      { src: "/images/projekti/banovici-1.jpg", alt: "Ugrađena aluminijska ograda, Banovići, ALU LINE Systems" },
      { src: "/images/projekti/medjugorje-1.jpg", alt: "Aluminijska ograda i kapija, ALU LINE Systems" },
    ],
    faq: [
      {
        q: "Koliko košta aluminijska ograda?",
        a: "Cijena zavisi od dužine, visine, modela i vrste kapije. Zato radimo besplatan izlazak i ponudu po mjeri. Pozovite 062 543 464 i dogovorite mjerenje.",
      },
      {
        q: "Treba li aluminijsku ogradu održavati?",
        a: "Gotovo ništa. Aluminij ne rđa i ne treba ga bojiti. Dovoljno je povremeno oprati vodom. To je glavna prednost u odnosu na željezne ograde.",
      },
      {
        q: "Radite li ograde po mjeri i u boji po izboru?",
        a: "Da. Svaku ogradu izrađujemo prema vašim dimenzijama, u boji i modelu koji odaberete. Sve izrađujemo i montiramo sami.",
      },
      {
        q: "Dajete li garanciju?",
        a: "Da, na svaki rad dajemo pisanu garanciju i držimo se dogovorenog roka i cijene.",
      },
    ],
  },
  {
    slug: "roletne",
    name: "Roletne",
    h1: "Roletne za ALU i PVC sisteme",
    metaTitle: "Roletne po Mjeri, ALU i PVC",
    metaDescription:
      "Ugrađujemo nadgradne i podgradne roletne za aluminijske i PVC sisteme. Bolja izolacija i zamračenje. Izrada po mjeri, montaža i garancija. Srebrenik, BiH.",
    keywords: [
      "roletne",
      "nadgradne roletne",
      "podgradne roletne",
      "aluminijske roletne",
      "roletne po mjeri",
      "roletne cijena",
    ],
    heroImage: "/images/roletne/roletna1.jpg",
    intro: [
      "Roletne štite od sunca i pogleda, poboljšavaju izolaciju i smanjuju troškove grijanja i hlađenja. Uz kvalitetnu roletnu prostor ljeti ostaje hladniji, a zimi topliji.",
      "Radimo nadgradne i podgradne roletne za aluminijske i PVC sisteme, u dimenzijama i boji po vašem izboru. Sve izrađujemo i montiramo sami, uz garanciju na rad.",
    ],
    body: [
      {
        heading: "Zašto ugraditi roletne",
        paragraphs: [
          "Roletne rade više poslova odjednom. Ljeti drže prostor hladnijim jer zaustavljaju sunce prije nego uđe kroz staklo, zimi smanjuju gubitak toplote, a u svako doba daju privatnost i zamračenje za miran san.",
          "Zatvorena roletna stvara i dodatni zračni sloj ispred prozora, što poboljšava izolaciju i pomaže da računi za grijanje i hlađenje budu manji.",
        ],
      },
      {
        heading: "Nadgradne i podgradne roletne",
        paragraphs: [
          "Nadgradne roletne montiraju se naknadno na postojeći prozor, bez većih radova na fasadi, pa su čest izbor kod zamjene ili dogradnje. Podgradne roletne ugrađuju se zajedno s prozorom i djeluju urednije jer je kutija skrivena u zidu.",
          "Radimo obje vrste za aluminijske i PVC sisteme, u boji i dimenzijama po mjeri prozora. Savjetujemo koja opcija odgovara vašem objektu.",
        ],
      },
      {
        heading: "Izrada, montaža i garancija",
        paragraphs: [
          "Roletne izrađujemo po mjeri i montiramo sami, pa je posao od mjerenja do ugradnje u našim rukama. Radimo po cijeloj BiH te u Hrvatskoj, Sloveniji i Austriji.",
          "Na svaki rad dajemo pisanu garanciju. Za mjerenje i ponudu javite se na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Nadgradne roletne", desc: "Montiraju se naknadno, bez većih radova na fasadi." },
      { title: "Podgradne roletne", desc: "Ugrađuju se u sklopu prozora za čist, uredan izgled." },
      { title: "Za ALU i PVC", desc: "Prilagođene i aluminijskim i PVC sistemima." },
      { title: "Energetska efikasnost", desc: "Bolja izolacija i zamračenje, manji računi." },
    ],
    gallery: [
      { src: "/images/roletne/roletna1.jpg", alt: "Aluminijske roletne na prozoru, ALU LINE Systems" },
      { src: "/images/roletne/Roletna2.jpg", alt: "Nadgradne aluminijske roletne, ALU LINE Systems" },
      { src: "/images/roletne/Roletna3.jpg", alt: "Roletne za aluminijske i PVC prozore, ALU LINE Systems" },
      { src: "/images/roletne/Roletna4.jpg", alt: "Podgradne roletne po mjeri, ALU LINE Systems" },
      { src: "/images/roletne/Roletna5.jpg", alt: "Roletne u boji po izboru, ALU LINE Systems" },
      { src: "/images/roletne/Roletna6.jpg", alt: "Aluminijske roletne, ALU LINE Systems" },
    ],
    faq: [
      {
        q: "Koja je razlika između nadgradnih i podgradnih roletni?",
        a: "Nadgradne se montiraju naknadno na postojeći prozor, bez većih radova. Podgradne se ugrađuju zajedno s prozorom i djeluju urednije jer je kutija skrivena. Savjetujemo vas koja opcija odgovara vašem objektu.",
      },
      {
        q: "Mogu li roletne smanjiti račune za grijanje?",
        a: "Da. Zatvorena roletna stvara zračni sloj koji smanjuje gubitak toplote zimi i pregrijavanje ljeti, pa se troškovi energije smanjuju.",
      },
      {
        q: "Radite li roletne i za PVC prozore?",
        a: "Da, radimo roletne i za aluminijske i za PVC sisteme, po mjeri prozora. Boju i tip roletne, nadgradnu ili podgradnu, biramo prema vašoj stolariji i objektu.",
      },
      {
        q: "Koliko košta ugradnja roletni?",
        a: "Cijena zavisi od dimenzija prozora, broja roletni i tipa, pa umjesto paušala radimo mjerenje i ponudu po mjeri. Pozovite 062 543 464 i dogovorite izlazak, bez obaveze.",
      },
    ],
  },
  {
    slug: "garazna-i-sekcijska-vrata",
    name: "Garažna i sekcijska vrata",
    h1: "Rolo i sekcijska garažna vrata",
    metaTitle: "Garažna Rolo i Sekcijska Vrata",
    metaDescription:
      "Ugrađujemo garažna rolo vrata, sekcijska i industrijska vrata s daljinskim upravljanjem. Izrada po mjeri otvora, sigurna montaža i garancija. Srebrenik, BiH.",
    keywords: [
      "garažna vrata",
      "rolo vrata",
      "sekcijska vrata",
      "industrijska vrata",
      "garažna vrata daljinsko",
      "garažna vrata cijena",
    ],
    heroImage: "/images/garazna i sekcijska vrata/Garazna vrata.jpg",
    intro: [
      "Garažna vrata su svakodnevna investicija u udobnost i sigurnost. Kvalitetna vrata rade tiho, dobro dihtaju i godinama funkcionišu bez problema.",
      "Nudimo rolo, sekcijska i industrijska vrata s mogućnošću daljinskog upravljanja. Sve izrađujemo po mjeri otvora i montiramo sami, uz garanciju na rad.",
    ],
    body: [
      {
        heading: "Rolo, sekcijska i industrijska vrata",
        paragraphs: [
          "Garažna rolo vrata namotavaju se u kutiju iznad otvora, pa štede prostor ispred i iznad garaže i dobar su izbor kad je mjesta malo. Sekcijska vrata podižu se uz strop, imaju bolju toplinsku izolaciju i rade vrlo tiho.",
          "Za hale, radionice i poslovne objekte radimo i industrijska vrata, dimenzionisana prema većim otvorima i češćoj upotrebi.",
        ],
      },
      {
        heading: "Daljinsko upravljanje i sigurnost",
        paragraphs: [
          "Uz vrata ugrađujemo motor i daljinsko upravljanje, pa ih otvarate bez izlaska iz vozila. Kvalitetna vrata dobro dihtaju, čuvaju garažu od kiše i propuha i godinama rade bez problema.",
          "Sve radimo po mjeri otvora. Model, način otvaranja i boju biramo prema vašoj garaži i objektu.",
        ],
      },
      {
        heading: "Kako do vrata po mjeri",
        paragraphs: [
          "Izmjerimo otvor na licu mjesta, damo ponudu bez obaveze, pa vrata izradimo i montiramo sami. Radimo po cijeloj BiH te u Hrvatskoj, Sloveniji i Austriji.",
          "Na svaki rad dajemo pisanu garanciju. Za termin i ponudu javite se na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Garažna rolo vrata", desc: "Namotavaju se prema gore i štede prostor ispred i iznad garaže." },
      { title: "Sekcijska vrata", desc: "Odlična toplinska izolacija i tih rad, podižu se uz strop." },
      { title: "Industrijska vrata", desc: "Robusna rješenja za hale, radionice i poslovne objekte." },
      { title: "Daljinsko upravljanje", desc: "Otvaranje daljinskim upravljačem, bez izlaska iz vozila." },
    ],
    gallery: [
      { src: "/images/garazna i sekcijska vrata/Garazna vrata.jpg", alt: "Garažna sekcijska vrata, ALU LINE Systems" },
      { src: "/images/garazna i sekcijska vrata/Garazna Vrata2.jpg", alt: "Garažna rolo vrata s daljinskim, ALU LINE Systems" },
      { src: "/images/garazna i sekcijska vrata/Garazna vrata3.jpg", alt: "Ugrađena garažna vrata po mjeri, ALU LINE Systems" },
    ],
    faq: [
      {
        q: "Koja vrata su bolja, rolo ili sekcijska?",
        a: "Rolo vrata štede prostor jer se namotavaju u kutiju iznad otvora. Sekcijska vrata imaju bolju izolaciju i vrlo tih rad. Izbor zavisi od garaže i budžeta, a savjetujemo vas na licu mjesta.",
      },
      {
        q: "Mogu li vrata imati daljinsko upravljanje?",
        a: "Da, ugrađujemo motor i daljinsko upravljanje, pa vrata otvarate bez izlaska iz vozila.",
      },
      {
        q: "Radite li vrata po mjeri otvora?",
        a: "Da. Vrata izrađujemo prema tačnim dimenzijama vašeg otvora i montiramo ih sami.",
      },
    ],
  },
  {
    slug: "nadstresnice",
    name: "Nadstrešnice",
    h1: "Aluminijske nadstrešnice",
    metaTitle: "Aluminijske Nadstrešnice po Mjeri",
    metaDescription:
      "Izrađujemo aluminijske nadstrešnice po mjeri za automobil, ulaz i terasu. Otporne na kišu, snijeg i sunce, bez rđe. Montaža i garancija. Srebrenik, BiH.",
    keywords: [
      "nadstrešnice",
      "aluminijske nadstrešnice",
      "nadstrešnica za auto",
      "nadstrešnica za terasu",
      "nadstrešnice po mjeri",
    ],
    heroImage: "/images/hero-img.jpg",
    intro: [
      "Nadstrešnica štiti automobil, ulaz ili terasu od kiše, snijega i sunca, a objektu daje dovršen izgled. Aluminijska konstrukcija je lagana, čvrsta i ne zahtijeva održavanje.",
      "Svaku nadstrešnicu izrađujemo po mjeri prostora i montiramo sami, u boji po izboru, uz garanciju na rad.",
    ],
    body: [
      {
        heading: "Nadstrešnice za auto, ulaz i terasu",
        paragraphs: [
          "Aluminijska nadstrešnica štiti od kiše, snijega i sunca, a objektu daje dovršen izgled. Za automobil radimo carport nadstrešnice koje čuvaju vozilo na otvorenom, bez zidanja garaže.",
          "Radimo i nadstrešnice nad ulaznim vratima i stepeništem te nad terasama, gdje daju više sjene i zaštićen prostor za boravak vani.",
        ],
      },
      {
        heading: "Zašto aluminij za nadstrešnicu",
        paragraphs: [
          "Aluminijska konstrukcija je lagana, ali dovoljno čvrsta da izdrži snijeg i vjetar. Aluminij ne rđa i ne treba ga bojiti, pa nadstrešnica dugo zadrži izgled uz malo održavanja.",
          "Pokrov i boju biramo po vašoj želji, tako da se nadstrešnica uklopi uz kuću i ostalu stolariju.",
        ],
      },
      {
        heading: "Mjerenje, izrada i montaža",
        paragraphs: [
          "Svaku nadstrešnicu prilagođavamo prostoru. Izmjerimo, dogovorimo model i pokrov, pa izradimo i montiramo sami. Radimo po cijeloj BiH te u Hrvatskoj, Sloveniji i Austriji.",
          "Na svaki rad dajemo pisanu garanciju. Za mjerenje i ponudu javite se na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Carport za automobil", desc: "Zaštita vozila na otvorenom, bez zidanja garaže." },
      { title: "Za ulaz", desc: "Natkrivanje ulaznih vrata i stepeništa." },
      { title: "Za terasu", desc: "Više sjene i zaštite za vanjski prostor." },
      { title: "Bez održavanja", desc: "Aluminij ne rđa i ne treba ga bojiti." },
    ],
    gallery: [],
    faq: [
      {
        q: "Od čega su nadstrešnice?",
        a: "Nosiva konstrukcija je od aluminija koji ne rđa, s pokrovom po izboru. Rješenje je lagano, ali dovoljno čvrsto da izdrži snijeg i vjetar.",
      },
      {
        q: "Radite li nadstrešnice po mjeri?",
        a: "Da, svaku nadstrešnicu prilagođavamo prostoru i montiramo sami. Pozovite 062 543 464 za mjerenje i ponudu.",
      },
      {
        q: "Koliko košta nadstrešnica?",
        a: "Cijena zavisi od veličine, tipa pokrova i mjesta montaže. Zato izađemo na teren, izmjerimo i damo ponudu po mjeri, bez obaveze. Pozovite 062 543 464.",
      },
      {
        q: "Može li carport zamijeniti garažu?",
        a: "Za svakodnevnu zaštitu vozila od sunca, kiše i snijega, da. Carport nadstrešnica je jeftinija i brža od zidanja garaže, a vozilo ostaje natkriveno.",
      },
    ],
  },
  {
    slug: "drvena-vrata",
    name: "Drvena vrata",
    h1: "Drvena sobna i ulazna vrata po mjeri",
    metaTitle: "Drvena Sobna i Ulazna Vrata",
    metaDescription:
      "Izrađujemo i ugrađujemo drvena sobna i ulazna vrata po mjeri i po narudžbi, u dekoru i boji po izboru. S dovratnikom, uz garanciju. Javite se: 062 543 464.",
    keywords: [
      "drvena vrata",
      "sobna vrata",
      "unutrašnja vrata",
      "drvena vrata po mjeri",
      "ulazna drvena vrata",
      "drvena vrata po narudžbi",
      "sobna vrata cijena",
    ],
    heroImage: "/images/vrata katalog/Model mo-1.jpeg",
    intro: [
      "Drvena vrata daju prostoru topao, dovršen izgled i uklapaju se u svaki enterijer. Izrađujemo i ugrađujemo sobna i ulazna drvena vrata po mjeri i po narudžbi, u dekoru i boji po vašem izboru.",
      "Uz krilo radimo i dovratnik, tako da dobijete kompletno rješenje, izmjereno i montirano kako treba, uz garanciju na rad.",
    ],
    body: [
      {
        heading: "Sobna i ulazna vrata po mjeri",
        paragraphs: [
          "Radimo sobna, unutrašnja vrata za sve prostorije doma, kao i ulazna drvena vrata. Svako krilo se pravi po mjeri otvora, pa vrata lijepo dihtaju i otvaraju se glatko, bez naknadnog dotjerivanja.",
          "Model, dekor i boju birate iz našeg kataloga, tako da se vrata uklope uz pod, namještaj i ostalu stolariju u prostoru.",
        ],
      },
      {
        heading: "Katalog modela",
        paragraphs: [
          "U ponudi imamo više modela drvenih vrata, od jednostavnih glatkih do vrata s dekorativnim linijama i ostakljenjem. U galeriji ispod možete pogledati kataloške modele i primjere već ugrađenih vrata.",
          "Ako imate model koji vam se sviđa, javite nam ga, pa zajedno dogovorimo dekor, boju okova i način otvaranja.",
        ],
      },
      {
        heading: "Izrada po narudžbi i montaža",
        paragraphs: [
          "Vrata izrađujemo po narudžbi i ugrađujemo sami, zajedno s dovratnikom. Prvo izmjerimo otvor, dogovorimo model i boju, pa vrata napravimo i montiramo u dogovorenom roku.",
          "Na svaki rad dajemo pisanu garanciju. Za ponudu i katalog javite se na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Sobna vrata", desc: "Unutrašnja vrata za sve prostorije, po mjeri otvora." },
      { title: "Ulazna vrata", desc: "Drvena ulazna vrata za stan i kuću." },
      { title: "Izrada po narudžbi", desc: "Model, dekor i boja po vašem izboru." },
      { title: "S dovratnikom", desc: "Kompletno rješenje sa štokom i montažom." },
    ],
    gallery: [
      { src: "/images/vrata postavljena/smedja vrata.jpeg", alt: "Ugrađena smeđa drvena sobna vrata, ALU LINE Systems" },
      { src: "/images/vrata postavljena/Bijela Vrata.jpeg", alt: "Ugrađena bijela drvena vrata, ALU LINE Systems" },
      { src: "/images/vrata katalog/Model mo-1.jpeg", alt: "Model drvenih vrata MO-1, ALU LINE Systems" },
      { src: "/images/vrata katalog/Model e-1.jpeg", alt: "Model drvenih vrata iz kataloga, ALU LINE Systems" },
      { src: "/images/vrata katalog/Model f-2.jpeg", alt: "Model drvenih vrata iz kataloga, ALU LINE Systems" },
      { src: "/images/vrata katalog/Model ml-7.jpeg", alt: "Model drvenih vrata iz kataloga, ALU LINE Systems" },
    ],
    faq: [
      {
        q: "Radite li drvena vrata po mjeri?",
        a: "Da. Sobna i ulazna drvena vrata izrađujemo po mjeri otvora i po narudžbi, u modelu, dekoru i boji po vašem izboru. Krilo i dovratnik radimo zajedno, pa dobijete kompletno rješenje.",
      },
      {
        q: "Ugrađujete li i dovratnik?",
        a: "Da, uz krilo vrata izrađujemo i montiramo dovratnik, tako da je posao kompletan. Sve mjerimo i ugrađujemo sami, pa vrata dobro dihtaju i rade glatko.",
      },
      {
        q: "Mogu li izabrati model iz kataloga?",
        a: "Da. U ponudi imamo više modela drvenih vrata, a u galeriji možete pogledati kataloške modele i ugrađene primjere. Javite koji model želite, pa dogovorimo dekor i boju.",
      },
      {
        q: "Dajete li garanciju na vrata?",
        a: "Da, na svaki rad dajemo pisanu garanciju i držimo se dogovorenog roka i cijene.",
      },
    ],
  },
];

// ── Lokacijske stranice ────────────────────────────────────────────
export const LOCATION_PAGES: LocationPage[] = [
  {
    slug: "srebrenik",
    city: "Srebrenik",
    cityLocative: "u Srebreniku",
    h1: "Aluminijske ograde, roletne i vrata u Srebreniku",
    metaTitle: "Aluminijske Ograde Srebrenik",
    metaDescription:
      "ALU LINE Systems iz Srebrenika izrađuje i montira aluminijske ograde, kapije, roletne te garažna vrata. Sve radimo sami, uz garanciju. Pozovite 062 543 464.",
    keywords: [
      "aluminijske ograde Srebrenik",
      "roletne Srebrenik",
      "garažna vrata Srebrenik",
      "kapije Srebrenik",
      "nadstrešnice Srebrenik",
    ],
    heroImage: "/images/projekti/terasa-ograda-1.jpg",
    intro: [
      "ALU LINE Systems je iz Srebrenika. Za mještane smo najbliža adresa za aluminijske ograde, kapije, roletne, nadstrešnice te garažna vrata, uz brz izlazak na teren.",
      "Sve izrađujemo i montiramo sami, po vašoj mjeri i u boji po izboru, uz pisanu garanciju na rad.",
    ],
    body: [
      {
        heading: "Aluminijske ograde i vrata u Srebreniku",
        paragraphs: [
          "Srebrenik nam je sjedište, pa smo tu najbrži. Kad nas pozovete, dogovor za mjerenje u Srebreniku i okolnim naseljima pravimo u kratkom roku, a izradu i montažu radi naša ekipa, bez podizvođača.",
          "Radimo aluminijske ograde za dvorišta i balkone, ulazne i pješačke kapije, roletne za aluminijske i PVC prozore, nadstrešnice te rolo i sekcijska garažna vrata. Sve po mjeri vašeg objekta.",
        ],
      },
      {
        heading: "Iskustvo i područje rada",
        paragraphs: [
          "Iza nas je više od deset godina rada i radovi širom Bosne i Hercegovine, od Banovića do Bileće i Međugorja. Iz Srebrenika izlazimo po cijeloj BiH, a radimo i u Hrvatskoj, Sloveniji i Austriji.",
          "Aluminij biramo jer ne rđa i ne treba ga bojiti, pa ograda ili nadstrešnica godinama zadrži izgled uz malo održavanja. Boju i model dogovaramo prema vašoj fasadi i želji.",
        ],
      },
    ],
    faq: [
      {
        q: "Radite li u Srebreniku i okolnim naseljima?",
        a: "Da, Srebrenik je naše sjedište pa smo tu najbrži. Izlazak na mjerenje u gradu i okolini dogovaramo u kratkom roku. Pozovite 062 543 464 i javite šta vam treba.",
      },
      {
        q: "Koliko brzo možete izaći na mjerenje?",
        a: "U Srebreniku i bližoj okolini obično vrlo brzo, jer smo odavde. Termin dogovorimo telefonom, a izlazak, mjerenje i ponuda su bez obaveze.",
      },
      {
        q: "Izrađujete li sve sami?",
        a: "Da. Ograde, kapije, roletne i vrata izrađujemo po mjeri i montiramo sami, pa za kvalitet i rok odgovaramo mi, bez podizvođača.",
      },
      {
        q: "Dajete li garanciju?",
        a: "Da, na svaki rad dajemo pisanu garanciju i držimo se dogovorene cijene i roka.",
      },
    ],
  },
  {
    slug: "tuzla",
    city: "Tuzla",
    cityLocative: "u Tuzli",
    h1: "Aluminijske ograde, roletne i vrata u Tuzli",
    metaTitle: "Aluminijske Ograde Tuzla",
    metaDescription:
      "Aluminijske ograde, kapije, roletne te rolo i sekcijska vrata za Tuzlu i okolinu. Izrada po mjeri, montaža i garancija. Pozovite ALU LINE: 062 543 464.",
    keywords: [
      "aluminijske ograde Tuzla",
      "roletne Tuzla",
      "garažna vrata Tuzla",
      "kapije Tuzla",
      "nadstrešnice Tuzla",
    ],
    heroImage: "/images/projekti/stablo-ograda-1.jpg",
    intro: [
      "Tuzlu i okolinu pokrivamo redovno. Za tuzlanske kupce radimo aluminijske ograde, kapije, roletne, nadstrešnice te rolo i sekcijska garažna vrata, sve po mjeri.",
      "Iz Srebrenika do Tuzle je kratak put, pa mjerenje i montažu u Tuzli organizujemo bez odugovlačenja, uz pisanu garanciju na rad.",
    ],
    body: [
      {
        heading: "Aluminijske ograde i vrata za Tuzlu",
        paragraphs: [
          "Tuzla je najveći grad i centar kantona, pa je i potražnja raznolika. Za kuće radimo dvorišne ograde i ulazne kapije, za stanove i zgrade balkonske ograde i roletne, a za garaže rolo i sekcijska vrata s daljinskim upravljanjem.",
          "Svaki posao počinje izlaskom na teren u Tuzli. Izmjerimo, dogovorimo model i boju, pa ogradu ili vrata izradimo po tačnoj mjeri i montiramo sami.",
        ],
      },
      {
        heading: "Radovi u tuzlanskom kraju",
        paragraphs: [
          "U tuzlanskom kraju imamo urađene radove, među njima i ograde u Banovićima nedaleko od Tuzle. Reference pokazuju da nam udaljenost nije prepreka i da montažu radimo uredno i na vrijeme.",
          "Iz Srebrenika izlazimo po cijeloj Bosni i Hercegovini, a radimo i u Hrvatskoj, Sloveniji i Austriji, pa je Tuzla za nas svakodnevno područje rada.",
        ],
      },
    ],
    faq: [
      {
        q: "Dolazite li iz Srebrenika raditi u Tuzlu?",
        a: "Da, Tuzla nam je blizu i redovno tamo radimo. Dogovaramo izlazak na mjerenje, izradu po mjeri i montažu, bez odugovlačenja.",
      },
      {
        q: "Radite li balkonske ograde za stanove u Tuzli?",
        a: "Da. Uz dvorišne ograde za kuće, u Tuzli često radimo i balkonske ograde te roletne za stanove i zgrade, sve po mjeri balkona ili prozora.",
      },
      {
        q: "Koliko traje izrada i montaža?",
        a: "Rok zavisi od posla, ali ga dogovorimo unaprijed i držimo se. Pozovite 062 543 464 da provjerimo termin za Tuzlu.",
      },
      {
        q: "Imate li reference u okolini Tuzle?",
        a: "Da, radili smo u tuzlanskom kraju, uključujući ograde u Banovićima. Rado pokažemo primjere ranijih radova prije nego se odlučite.",
      },
    ],
  },
  {
    slug: "gracanica",
    city: "Gračanica",
    cityLocative: "u Gračanici",
    h1: "Aluminijske ograde, roletne i vrata u Gračanici",
    metaTitle: "Aluminijske Ograde Gračanica",
    metaDescription:
      "Za Gračanicu i okolinu radimo aluminijske ograde, kapije, roletne te garažna vrata. Izrada po mjeri, montaža i garancija. Pozovite ALU LINE: 062 543 464.",
    keywords: [
      "aluminijske ograde Gračanica",
      "roletne Gračanica",
      "garažna vrata Gračanica",
      "kapije Gračanica",
    ],
    heroImage: "/images/projekti/kamena-ograda-1.jpg",
    intro: [
      "Gračanicu i okolinu redovno pokrivamo. Radimo aluminijske ograde, kapije, roletne, nadstrešnice te rolo i sekcijska garažna vrata, sve po mjeri i u boji po izboru.",
      "Gračanica je blizu Srebrenika, pa izlazak na mjerenje i montažu dogovaramo brzo, uz pisanu garanciju na rad.",
    ],
    body: [
      {
        heading: "Aluminijske ograde i kapije u Gračanici",
        paragraphs: [
          "Gračanica je kraj porodičnih kuća i dvorišta, pa su ovdje najtraženije dvorišne ograde i ulazne kapije. Uz njih radimo balkonske ograde, roletne, nadstrešnice i garažna vrata, sve prilagođeno vašem objektu.",
          "Aluminij je za dvorišne ograde praktičan izbor jer ne rđa i ne treba ga bojiti, pa ograda dugo izgleda kao nova uz malo održavanja.",
        ],
      },
      {
        heading: "Kako radimo za Gračanicu",
        paragraphs: [
          "Nakon poziva izlazimo na teren u Gračanici, izmjerimo i damo ponudu bez obaveze. Kad se dogovorimo, ogradu ili vrata izradimo u Srebreniku i montiramo sami, pa je posao od početka do kraja u našim rukama.",
          "Radimo po cijeloj BiH te u Hrvatskoj, Sloveniji i Austriji, ali nam je Gračanica zbog blizine redovno i lako dostupno područje.",
        ],
      },
    ],
    faq: [
      {
        q: "Radite li u Gračanici?",
        a: "Da, Gračanica nam je blizu i redovno tamo radimo. Izlazak na mjerenje dogovaramo brzo. Pozovite 062 543 464 i javite šta vam treba.",
      },
      {
        q: "Šta najčešće radite u Gračanici?",
        a: "Najčešće dvorišne ograde i ulazne kapije za porodične kuće, ali radimo i balkonske ograde, roletne, nadstrešnice i garažna vrata, sve po mjeri.",
      },
      {
        q: "Izrađujete li ogradu po mjeri i u boji po izboru?",
        a: "Da, svaku ogradu radimo prema dimenzijama vašeg dvorišta, u modelu i boji koje odaberete, pa se uklapa uz kuću i fasadu.",
      },
      {
        q: "Dajete li garanciju na rad?",
        a: "Da, na svaki rad dajemo pisanu garanciju i držimo se dogovorenog roka i cijene.",
      },
    ],
  },
  {
    slug: "gradacac",
    city: "Gradačac",
    cityLocative: "u Gradačcu",
    h1: "Aluminijske ograde, roletne i vrata u Gradačcu",
    metaTitle: "Aluminijske Ograde Gradačac",
    metaDescription:
      "Aluminijske ograde, kapije, roletne i garažna vrata za Gradačac i okolinu. Sve izrađujemo i montiramo sami, uz garanciju. Pozovite ALU LINE: 062 543 464.",
    keywords: [
      "aluminijske ograde Gradačac",
      "roletne Gradačac",
      "garažna vrata Gradačac",
      "kapije Gradačac",
    ],
    heroImage: "/images/projekti/medjugorje-1.jpg",
    intro: [
      "Gradačac i okolinu pokrivamo redovno. Radimo aluminijske ograde, kapije, roletne, nadstrešnice te rolo i sekcijska garažna vrata, sve po mjeri.",
      "Iz Srebrenika izlazimo na mjerenje i montažu u Gradačcu bez odugovlačenja, uz pisanu garanciju na rad.",
    ],
    body: [
      {
        heading: "Aluminijske ograde i vrata za Gradačac",
        paragraphs: [
          "Za Gradačac i okolna mjesta radimo aluminijske ograde za dvorišta i balkone, ulazne i pješačke kapije, roletne za aluminijske i PVC prozore, nadstrešnice te rolo i sekcijska garažna vrata s daljinskim upravljanjem.",
          "Svaki posao krene izlaskom na teren. Izmjerimo u Gradačcu, dogovorimo model i boju, pa izradimo po tačnoj mjeri i montiramo sami.",
        ],
      },
      {
        heading: "Područje rada i garancija",
        paragraphs: [
          "Gradačac je za nas blisko područje, a iz Srebrenika izlazimo po cijeloj Bosni i Hercegovini te radimo i u Hrvatskoj, Sloveniji i Austriji. Udaljenost nam nije prepreka za uredan i pravovremen rad.",
          "Na svaki rad dajemo pisanu garanciju. Aluminij ne rđa i ne traži bojenje, pa ograda, nadstrešnica ili vrata dugo zadrže izgled uz malo održavanja.",
        ],
      },
    ],
    faq: [
      {
        q: "Dolazite li u Gradačac na mjerenje?",
        a: "Da, dolazimo na adresu u Gradačcu, izmjerimo i damo ponudu po mjeri, bez obaveze. Pozovite 062 543 464.",
      },
      {
        q: "Pokrivate li i okolinu Gradačca?",
        a: "Da, radimo u Gradačcu i okolnim mjestima. Iz Srebrenika izlazimo po cijeloj BiH, pa nam okolina nije problem.",
      },
      {
        q: "Radite li garažna vrata s daljinskim?",
        a: "Da, ugrađujemo rolo i sekcijska garažna vrata s motorom i daljinskim upravljanjem, po mjeri otvora.",
      },
      {
        q: "Dajete li garanciju na rad?",
        a: "Da, na svaki rad dajemo pisanu garanciju i držimo se dogovorene cijene i roka.",
      },
    ],
  },
  {
    slug: "slovenija",
    city: "Slovenija",
    cityLocative: "u Sloveniji",
    h1: "Aluminijske ograde, roletne i vrata u Sloveniji",
    metaTitle: "Aluminijske Ograde Slovenija",
    metaDescription:
      "Radimo i u Sloveniji: aluminijske ograde, kapije, roletne, nadstrešnice i garažna vrata po mjeri. Majstor iz BiH, montaža po dogovoru. Javite se: 062 543 464.",
    keywords: [
      "aluminijske ograde Slovenija",
      "ograde Slovenija",
      "roletne Slovenija",
      "majstor za ograde Slovenija",
      "garažna vrata Slovenija",
    ],
    heroImage: "/images/projekti/terasa-ograda-3.jpg",
    intro: [
      "Radimo i u Sloveniji. Iz Srebrenika dolazimo na teren i izrađujemo aluminijske ograde, kapije, roletne, nadstrešnice te rolo i sekcijska garažna vrata, po mjeri.",
      "Za ljude iz našeg kraja koji žive i rade u Sloveniji često smo poznata adresa, jer dobiju majstora koji radi kvalitetno i po dogovoru, uz pisanu garanciju.",
    ],
    body: [
      {
        heading: "Aluminijske ograde i vrata u Sloveniji",
        paragraphs: [
          "U Sloveniju izlazimo na mjerenje i montažu prema dogovoru. Radimo dvorišne i balkonske ograde, klizne i pješačke kapije, roletne, nadstrešnice te garažna vrata, sve po mjeri objekta i u boji po izboru.",
          "Termine za mjerenje i montažu planiramo unaprijed, tako da posao u Sloveniji obavimo u jednom ili nekoliko dolazaka, bez nepotrebnog odugovlačenja.",
        ],
      },
      {
        heading: "Zašto majstor iz BiH",
        paragraphs: [
          "Mnogi naši klijenti u Sloveniji su ljudi porijeklom iz Bosne i Hercegovine koji žele pouzdanog majstora i jasan dogovor. Sve izrađujemo i montiramo sami, pa za kvalitet i rok odgovaramo mi.",
          "Na svaki rad dajemo pisanu garanciju. Za dogovor se javite na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    faq: [
      {
        q: "Dolazite li raditi u Sloveniju?",
        a: "Da, redovno radimo u Sloveniji. Dolazimo na mjerenje i montažu po dogovoru, a termine zbog udaljenosti planiramo unaprijed. Javite se na 062 543 464, WhatsApp ili Viber.",
      },
      {
        q: "Kako teče dogovor na daljinu?",
        a: "Prvo se čujemo telefonom, WhatsAppom ili Viberom, pošaljete dimenzije i slike prostora, pa dogovorimo izlazak na mjerenje. Tačnu ponudu dajemo nakon mjerenja.",
      },
      {
        q: "Dajete li garanciju i u Sloveniji?",
        a: "Da, na svaki rad dajemo pisanu garanciju, bez obzira na to gdje montiramo.",
      },
    ],
  },
  {
    slug: "hrvatska",
    city: "Hrvatska",
    cityLocative: "u Hrvatskoj",
    h1: "Aluminijske ograde, roletne i vrata u Hrvatskoj",
    metaTitle: "Aluminijske Ograde Hrvatska",
    metaDescription:
      "Radimo i u Hrvatskoj: aluminijske ograde, kapije, roletne, nadstrešnice i garažna vrata po mjeri. Izrada i montaža uz garanciju. Javite se: 062 543 464.",
    keywords: [
      "aluminijske ograde Hrvatska",
      "ograde Hrvatska",
      "roletne Hrvatska",
      "aluminijske kapije Hrvatska",
      "garažna vrata Hrvatska",
    ],
    heroImage: "/images/projekti/stablo-ograda-2.jpg",
    intro: [
      "Radimo i u Hrvatskoj. Iz Srebrenika dolazimo na teren i izrađujemo aluminijske ograde, kapije, roletne, nadstrešnice te rolo i sekcijska garažna vrata, po mjeri.",
      "Klijentima u Hrvatskoj nudimo kvalitetnu izradu i montažu uz jasan dogovor o cijeni i roku, s pisanom garancijom na rad.",
    ],
    body: [
      {
        heading: "Aluminijske ograde i vrata u Hrvatskoj",
        paragraphs: [
          "U Hrvatsku izlazimo na mjerenje i montažu prema dogovoru. Radimo dvorišne i balkonske ograde, klizne i pješačke kapije, roletne, nadstrešnice te garažna vrata, sve po mjeri i u boji po izboru.",
          "Radove planiramo tako da mjerenje i montažu obavimo organizovano, u dogovorenim terminima.",
        ],
      },
      {
        heading: "Dogovor, izrada i garancija",
        paragraphs: [
          "Sve izrađujemo i montiramo sami, bez podizvođača, pa za kvalitet i rok odgovaramo mi. Aluminij ne rđa i ne traži bojenje, pa ograda ili nadstrešnica dugo zadrži izgled.",
          "Na svaki rad dajemo pisanu garanciju. Za ponudu se javite na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    faq: [
      {
        q: "Radite li u Hrvatskoj?",
        a: "Da, redovno radimo u Hrvatskoj. Dolazimo na mjerenje i montažu po dogovoru. Javite se na 062 543 464, WhatsApp ili Viber, i dogovorite termin.",
      },
      {
        q: "Kako dobiti ponudu iz Hrvatske?",
        a: "Javite se telefonom, WhatsAppom ili Viberom, pošaljete dimenzije i slike prostora, pa dogovorimo mjerenje. Tačnu ponudu dajemo po mjeri.",
      },
      {
        q: "Dajete li garanciju na rad?",
        a: "Da, na svaki rad dajemo pisanu garanciju, jednako kao i za radove u BiH.",
      },
    ],
  },
  {
    slug: "austrija",
    city: "Austrija",
    cityLocative: "u Austriji",
    h1: "Aluminijske ograde, roletne i vrata u Austriji",
    metaTitle: "Aluminijske Ograde Austrija",
    metaDescription:
      "Radimo i u Austriji: aluminijske ograde, kapije, roletne, nadstrešnice i garažna vrata po mjeri. Majstor iz BiH, montaža po dogovoru. Javite se: 062 543 464.",
    keywords: [
      "aluminijske ograde Austrija",
      "ograde Austrija",
      "roletne Austrija",
      "majstor za ograde Austrija",
      "garažna vrata Austrija",
    ],
    heroImage: "/images/projekti/kamena-ograda-2.jpg",
    intro: [
      "Radimo i u Austriji. Iz Srebrenika dolazimo na teren i izrađujemo aluminijske ograde, kapije, roletne, nadstrešnice te rolo i sekcijska garažna vrata, po mjeri.",
      "Za naše ljude u Austriji često smo pouzdan izbor, jer dobiju majstora iz kraja, kvalitetnu izradu i jasan dogovor, uz pisanu garanciju.",
    ],
    body: [
      {
        heading: "Aluminijske ograde i vrata u Austriji",
        paragraphs: [
          "U Austriju izlazimo na mjerenje i montažu prema dogovoru. Radimo dvorišne i balkonske ograde, klizne i pješačke kapije, roletne, nadstrešnice te garažna vrata, po mjeri objekta.",
          "Zbog udaljenosti termine planiramo unaprijed, pa posao u Austriji obavimo organizovano, u dogovorenim dolascima.",
        ],
      },
      {
        heading: "Zašto nas biraju",
        paragraphs: [
          "Sve izrađujemo i montiramo sami. Klijentima u Austriji nudimo kvalitetan aluminij koji ne rđa i ne traži bojenje, uz izradu po mjeri i boju po izboru.",
          "Na svaki rad dajemo pisanu garanciju. Za dogovor se javite na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    faq: [
      {
        q: "Dolazite li raditi u Austriju?",
        a: "Da, radimo u Austriji. Dolazimo na mjerenje i montažu po dogovoru, a termine zbog udaljenosti planiramo unaprijed. Javite se na 062 543 464, WhatsApp ili Viber.",
      },
      {
        q: "Kako teče dogovor iz Austrije?",
        a: "Čujemo se telefonom, WhatsAppom ili Viberom, pošaljete dimenzije i slike prostora, pa dogovorimo izlazak na mjerenje i tačnu ponudu.",
      },
      {
        q: "Dajete li garanciju?",
        a: "Da, na svaki rad dajemo pisanu garanciju, bez obzira na to gdje montiramo.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICE_PAGES.find((s) => s.slug === slug);
}
export function getLocationBySlug(slug: string) {
  return LOCATION_PAGES.find((l) => l.slug === slug);
}
