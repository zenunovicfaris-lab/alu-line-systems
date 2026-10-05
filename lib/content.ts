// Sadržaj za uslužne i lokacijske stranice (SEO).
// Svaka stranica ima jedinstven title/description i tekst.

export type FaqItem = { q: string; a: string };
export type Feature = { title: string; desc: string };

export type ProseTable = { caption?: string; head: string[]; rows: string[][] };

export type ProseSection = {
  heading: string;
  paragraphs: string[];
  /** Opciona tabela ispod pasusa (cilja table featured snippet). */
  table?: ProseTable;
};

export type ServicePage = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  /** Pun <title> (zaobilazi brend template). Koristi kad treba precizna duzina <= 60. */
  metaTitleFull?: string;
  metaDescription: string;
  keywords: string[];
  heroImage: string;
  intro: string[];
  body: ProseSection[];
  features: Feature[];
  gallery: { src: string; alt: string }[];
  faq: FaqItem[];
  relatedPostSlugs?: string[];
  /** Kurirani linkovi na srodne usluge. Ako je prazno, linkuje se na sve ostale. */
  relatedServiceSlugs?: string[];
  /** Keyword-rich anchor tekst kad na ovu stranicu linkuje neka druga. */
  linkLabel?: string;
};

export type LocationPage = {
  slug: string;
  city: string;
  cityLocative: string; // "u Tuzli"
  h1: string;
  metaTitle: string;
  /** Pun <title> (zaobilazi brend template). */
  metaTitleFull?: string;
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
    linkLabel: "Aluminijske ograde po mjeri",
    h1: "Aluminijske ograde po mjeri",
    metaTitle: "Aluminijske Ograde po Mjeri",
    metaDescription:
      "Izrađujemo i montiramo aluminijske ograde po mjeri: dvorišne, balkonske i grilje ograde te ulazne kapije. Sve radimo sami, uz garanciju. Srebrenik, BiH.",
    keywords: [
      "aluminijske ograde",
      "dvorišne ograde",
      "balkonske ograde",
      "grilje ograde",
      "ograde po mjeri",
      "ograde aluminijske",
      "antracit ograda",
      "aluminijska ograda",
    ],
    heroImage: "/images/projekti/terasa-ograda-1.jpg",
    relatedPostSlugs: [
      "panelna-ili-aluminijska-ograda",
      "aluminijska-ili-kovana-ograda",
    ],
    relatedServiceSlugs: [
      "ograde-za-dvoriste",
      "balkonske-ograde",
      "aluminijske-kapije",
      "aluminijske-ograde-cijena",
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
        heading: "Vrste aluminijskih ograda koje radimo",
        paragraphs: [
          "Radimo dvorišne ograde za okućnice, balkonske ograde za stanove i kuće te grilje ograde klasičnog izgleda. Uz ogradu izrađujemo i ulazne kapije, klizne ili krilne, u istom modelu i boji.",
          "Sve se radi po mjeri vašeg otvora i placa. Visinu, gustinu ispune i model biramo zajedno, prema tome koliko želite privatnosti i kakav izgled tražite.",
          "Ispuna je najveća razlika u izgledu. Vertikalne šipke daju klasičan izgled i propuštaju pogled, horizontalne lamele izgledaju moderno i zaklanjaju više, a puni paneli daju potpunu privatnost prema ulici.",
        ],
      },
      {
        heading: "Gdje se ograda postavlja",
        paragraphs: [
          "Mjesto ugradnje mijenja i izbor ispune i način montaže, pa za svaku namjenu imamo zasebnu stranicu s detaljima.",
          "Za okućnicu radimo ograde za dvorište, gdje se bira koliko zaklona treba prema ulici i kako se izvodi na nagibu. Za stanove i kuće radimo balkonske ograde i ograde za terasu, gdje su visina i sidrenje propisani zbog sigurnosti na visini.",
          "Uz svaku ogradu radimo i ulaznu kapiju, kliznu ili krilnu, u istom modelu i boji. Linkovi na sve tri stranice su na dnu.",
        ],
      },
      {
        heading: "Boje: antracit i RAL karta",
        paragraphs: [
          "Antracit ograda je danas najtraženija, i to s razlogom. Tamno siva se slaže sa sivom stolarijom, tamnim olucima i antracit krovnim limom koji su postali standard na novogradnji, pa fasada dobije jedinstvenu liniju bez šarenila.",
          "Osim antracita, boju birate po RAL kartici. Standardni tonovi su povoljniji od posebnih narudžbi i od dekora koji imitiraju drvo. Bijela i smeđa ostaju česte na starijim kućama gdje se ograda usklađuje s postojećom stolarijom.",
          "Površina se plastificira, pa boja drži godinama bez ličenja. Aluminij ispod ne sadrži željezo i ne može zarđati, tako da se ni ogrebotina ne pretvara u žarište rđe kao kod željezne ograde.",
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
      { src: "/images/elegantna-bocna-montaza/montaza-aluminijske-ograde-terasa.jpg", alt: "Montaža aluminijske ograde na krovnoj terasi, ekipa ALU LINE Systems" },
      { src: "/images/elegantna-bocna-montaza/balkonska-ograda-aluminij-antracit.jpg", alt: "Balkonska aluminijska ograda u antracit boji s horizontalnim lamelama" },
      { src: "/images/elegantna-bocna-montaza/aluminijska-ograda-terasa-horizontalne-lamele.jpg", alt: "Aluminijska ograda za terasu s horizontalnim lamelama 100x20 mm" },
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
        q: "Radite li balkonske ograde?",
        a: "Da. Balkonske ograde radimo po mjeri, s vertikalnim ili horizontalnim šipkama, punim panelima ili staklenom ispunom. Aluminij je lagan pa ne opterećuje balkonsku ploču, a ne rđa ni pri stalnoj izloženosti kiši i suncu.",
      },
      {
        q: "Koja ispuna daje najviše privatnosti?",
        a: "Puni paneli daju potpunu privatnost prema ulici. Horizontalne lamele zaklanjaju pogled pod uglom, a propuštaju svjetlo i zrak. Vertikalne šipke daju klasičan izgled, ali najmanje zaklona. Izbor dogovaramo pri mjerenju.",
      },
      {
        q: "Dajete li garanciju?",
        a: "Da, na svaki rad dajemo pisanu garanciju i držimo se dogovorenog roka i cijene.",
      },
    ],
  },
  {
    slug: "aluminijske-kapije",
    name: "Klizne i ulazne kapije",
    linkLabel: "Klizne i ulazne kapije po mjeri",
    h1: "Klizne i ulazne aluminijske kapije po mjeri",
    metaTitle: "Klizne i Ulazne Kapije po Mjeri",
    metaTitleFull: "Klizne Kapije i Ulazne Kapije po Mjeri | ALU LINE",
    metaDescription:
      "Izrađujemo klizne, krilne i pješačke aluminijske kapije po mjeri, s motorom i daljinskim. Ne rđaju i uklapaju se uz ogradu. Mjerenje: 062 543 464.",
    keywords: [
      "klizna kapija",
      "kapija klizna",
      "alu kapije",
      "ulazna kapija za dvorište",
      "klizna kapija sa motorom",
      "kapija na daljinski",
      "samonosiva kapija",
      "aluminijska kapija",
      "pješačka kapija",
    ],
    heroImage: "/images/Wels-Austrija/Kapija.jpg",
    relatedPostSlugs: ["ograda-za-dvoriste-vrste-i-kako-izabrati"],
    relatedServiceSlugs: [
      "ograde-za-dvoriste",
      "aluminijske-ograde",
      "aluminijske-ograde-cijena",
    ],
    intro: [
      "Aluminijska kapija je prvo što se vidi na ulazu u dvorište i jedini dio ograde koji se pomjera svaki dan. Zato mora biti lagana za rukovanje, čvrsta i otporna na vrijeme.",
      "Izrađujemo klizne, krilne i pješačke kapije po mjeri otvora, s ručnim ili daljinskim upravljanjem. Kapiju usklađujemo s ogradom, tako da ulaz izgleda kao jedna cjelina.",
      "Izađemo na teren, izmjerimo otvor i provjerimo prostor za otvaranje, pa dobijete cijenu bez obaveze. Nazovite 062 543 464.",
    ],
    body: [
      {
        heading: "Klizne kapije",
        paragraphs: [
          "Klizna kapija se otvara bočno, uz ogradu, pa ne traži prostor ispred sebe. To je velika prednost kada prilaz ima nagib ili kada auto stoji blizu ulaza, jer krilo ne mora imati mjesta da se raširi.",
          "Radimo samonoseće klizne kapije, gdje krilo nosi donja greda i kolica, tako da nema šine preko prilaza koja se puni snijegom i šljunkom. Za pomjeranje treba slobodan prostor uz ogradu, otprilike u dužini samog krila.",
          "Klizne kapije se najčešće rade s motorom, jer je krilo šire i teže. Motor s daljinskim tada radi cijeli posao, a kapija ostaje zaključana dok je ne otvorite.",
        ],
      },
      {
        heading: "Krilne i pješačke kapije",
        paragraphs: [
          "Krilna kapija otvara se prema unutra ili prema vani, u jednom ili dva krila. Jeftinija je od klizne i jednostavnija za montažu, ali traži ravan prilaz i slobodan prostor u luku otvaranja.",
          "Pješačku kapiju radimo uz ulaznu, u istom modelu i boji, s bravom i kvakom ili s elektronskom bravom na interfon. Za dvorišta s više ulaza radimo i zasebne pješačke kapije na bočnim stranama.",
        ],
      },
      {
        heading: "Kapija na daljinski: motor, interfon i sigurnost",
        paragraphs: [
          "Motor s daljinskim je najčešći dodatak. Kapiju otvarate iz auta, bez izlaska po kiši, a mogu se dodati i tipkovnica sa šifrom te interfon s pozivom u kuću.",
          "Uz motor ide i sigurnosna oprema. Fotoćelije zaustave kapiju ako nešto uđe u putanju, a signalna lampa upozorava dok se kapija kreće. Kod kliznih kapija to je posebno važno jer krilo ide brzo i tiho.",
          "Za motor treba dovod struje do stuba kapije. Ako ga nema, dogovorimo trasu prije montaže, tako da se kabl ne provlači naknadno kroz gotov prilaz.",
        ],
      },
      {
        heading: "Kapija i ograda kao cjelina",
        paragraphs: [
          "Kapiju najčešće radimo zajedno s ogradom, u istom modelu ispune i istoj boji po RAL kartici. Tako se linije poklapaju i ulaz ne izgleda kao naknadno dodan dio.",
          "Ako već imate ogradu, kapiju prilagođavamo postojećem izgledu. Donesite fotografiju ili je pogledamo pri izlasku na teren, pa uskladimo visinu, razmak šipki i ton boje koliko je moguće.",
          "Više o modelima ispune i izboru ograde pročitajte na stranici aluminijskih ograda, gdje su opisane dvorišne, balkonske i grilje ograde.",
        ],
      },
      {
        heading: "Zašto aluminijska kapija, a ne željezna",
        paragraphs: [
          "Aluminij ne sadrži željezo, pa kapija ne može zarđati. Kod željezne kapije rđa se prvo javlja na donjem dijelu krila i oko šarki, tamo gdje stoji voda, pa je nakon nekoliko sezona potrebno brušenje i ličenje.",
          "Aluminijsko krilo je i znatno lakše pri istoj veličini. Manja masa znači manje opterećenje na šarke i motor, pa oprema duže traje, a ručno otvaranje je lakše.",
          "Konstrukciju plastificiramo u boji po izboru, tako da površina drži izgled godinama uz obično pranje vodom.",
        ],
      },
      {
        heading: "Mjerenje, izrada i montaža",
        paragraphs: [
          "Pri izlasku izmjerimo otvor, provjerimo nagib prilaza, prostor za otvaranje i mjesto za stubove. Na osnovu toga predlažemo kliznu ili krilnu kapiju i dogovorimo model, boju i automatiku.",
          "Kapiju izrađujemo u vlastitoj radionici i montiramo sami, zajedno sa stubovima i motorom. Sve radimo bez podizvođača, uz pisanu garanciju na rad.",
          "Radimo po cijeloj BiH, a po dogovoru i u Hrvatskoj, Sloveniji i Austriji. Javite se na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Klizne kapije", desc: "Otvaraju se bočno, ne traže prostor ispred prilaza." },
      { title: "Krilne kapije", desc: "Jedno ili dva krila, povoljnije rješenje za ravan prilaz." },
      { title: "Pješačke kapije", desc: "U istom modelu i boji kao ulazna kapija." },
      { title: "Motor i daljinski", desc: "Automatika s fotoćelijama, tipkovnicom i interfonom." },
      { title: "Usklađeno s ogradom", desc: "Isti model ispune i boja po RAL kartici." },
      { title: "Bez rđe", desc: "Aluminij ne sadrži željezo, pa krilo ne rđa." },
    ],
    gallery: [
      { src: "/images/Wels-Austrija/Kapija.jpg", alt: "Aluminijska ulazna kapija, ALU LINE Systems" },
      { src: "/images/klizna-ograda-na-daljinski/klizna1.jpg", alt: "Klizna aluminijska kapija na daljinski, ALU LINE Systems" },
      { src: "/images/klizna-ograda-na-daljinski/motor za kliznu ogradu bft.jpg", alt: "Motor BFT za kliznu kapiju, ALU LINE Systems" },
      { src: "/images/projekti/medjugorje-1.jpg", alt: "Aluminijska ograda i kapija, ALU LINE Systems" },
    ],
    faq: [
      {
        q: "Klizna ili krilna kapija, šta izabrati?",
        a: "Kliznu birajte kada nema prostora ispred kapije ili kada prilaz ima nagib, jer se krilo pomjera bočno uz ogradu. Krilnu birajte kada je prilaz ravan i ima slobodnog mjesta u luku otvaranja, jer je povoljnija i jednostavnija za montažu.",
      },
      {
        q: "Koliko košta aluminijska kapija?",
        a: "Cijena zavisi od širine otvora, tipa kapije, modela ispune i toga da li ide motor s daljinskim. Klizna kapija košta više od krilne jer traži jaču konstrukciju i kolica. Izađemo, izmjerimo i damo tačnu cijenu bez obaveze.",
      },
      {
        q: "Može li se kapija otvarati daljinskim?",
        a: "Da. Ugrađujemo motor s daljinskim, a po želji i tipkovnicu sa šifrom ili interfon s pozivom u kuću. Uz motor idu fotoćelije koje zaustave kapiju ako nešto uđe u putanju. Za automatiku treba dovod struje do stuba kapije.",
      },
      {
        q: "Koliko prostora traži klizna kapija?",
        a: "Za pomjeranje treba slobodan prostor uz ogradu, otprilike u dužini samog krila. Ako tog prostora nema, bolje rješenje je krilna kapija ili kapija u dva krila. To provjeravamo pri izlasku na teren, prije nego što se išta izrađuje.",
      },
      {
        q: "Radite li kapiju uz postojeću ogradu?",
        a: "Da. Kapiju prilagođavamo izgledu ograde koju već imate, po visini, razmaku šipki i tonu boje. Pošaljite fotografiju ili je pogledamo pri mjerenju, pa dogovorimo model koji se najbolje uklapa.",
      },
      {
        q: "Da li aluminijska kapija rđa?",
        a: "Ne. Aluminij ne sadrži željezo, pa krilo ne može zarđati ni na donjem dijelu ni oko šarki, gdje se rđa prvo javlja kod željeznih kapija. Površinu plastificiramo u boji po izboru, pa je dovoljno povremeno pranje vodom.",
      },
    ],
  },
  {
    slug: "ograde-za-dvoriste",
    name: "Ograde za dvorište",
    linkLabel: "Ograde za dvorište po mjeri",
    h1: "Ograde za dvorište po mjeri",
    metaTitle: "Ograde za Dvorište po Mjeri",
    metaTitleFull: "Ograde za Dvorište po Mjeri, BiH | ALU LINE",
    metaDescription:
      "Izrađujemo i montiramo ograde za dvorište po mjeri u cijeloj BiH. Moderne aluminijske ograde koje ne rđaju, s kapijom u istom modelu. Mjerenje: 062 543 464.",
    keywords: [
      "ograde za dvoriste",
      "ograde za dvorište",
      "ograde za dvorište bih",
      "moderne ograde za dvorište",
      "dvorišne ograde",
      "ograda za dvorište po mjeri",
      "najjeftinije ograde za dvorišta",
    ],
    heroImage: "/images/projekti/stablo-ograda-1.jpg",
    relatedPostSlugs: [
      "ograda-za-dvoriste-vrste-i-kako-izabrati",
      "panelna-ili-aluminijska-ograda",
      "aluminijska-ili-kovana-ograda",
    ],
    relatedServiceSlugs: [
      "aluminijske-kapije",
      "aluminijske-ograde-cijena",
      "aluminijske-ograde",
      "balkonske-ograde",
    ],
    intro: [
      "Ograde za dvorište rade tri posla odjednom: odvajaju posjed, čuvaju privatnost od ulice i daju kući dovršen izgled. Izrađujemo ih po mjeri vašeg placa, od aluminija koji ne rđa i ne traži održavanje.",
      "Svaku ogradu za dvorište mjerimo na terenu, izrađujemo u vlastitoj radionici i montiramo sami, bez podizvođača. Uz ogradu radimo i ulaznu kapiju u istom modelu i boji.",
      "Radimo po cijeloj BiH, a po dogovoru i u Hrvatskoj, Sloveniji i Austriji. Mjerenje i ponuda su besplatni: 062 543 464.",
    ],
    body: [
      {
        heading: "Koliko privatnosti vam zapravo treba",
        paragraphs: [
          "Ovo je prvo pitanje koje postavljamo na terenu, jer od njega zavisi i izgled i cijena. Dvorište prema prometnoj ulici traži drugačiju ogradu od onog prema susjedovoj livadi.",
          "Gustina ispune određuje koliko se vidi unutra. Što je ispuna gušća, to je više materijala, pa raste i cijena. Zato ne preporučujemo punu ispunu po cijelom obimu ako vam treba zaklon samo na jednoj strani. Često je najbolje rješenje mješovito: puni paneli prema ulici, rjeđa ispuna prema vrtu.",
        ],
        table: {
          caption: "Vrste ispune za ogradu za dvorište",
          head: ["Ispuna", "Privatnost", "Relativna cijena", "Kada je birati"],
          rows: [
            [
              "Vertikalne šipke",
              "Niska",
              "Najpovoljnija",
              "Dvorište prema vrtu ili polju",
            ],
            [
              "Horizontalne lamele",
              "Srednja do visoka",
              "Srednja",
              "Moderan izgled, zaklon uz strujanje zraka",
            ],
            [
              "Puni paneli",
              "Potpuna",
              "Viša",
              "Dvorište uz prometnu ulicu",
            ],
            [
              "Grilje",
              "Srednja",
              "Srednja",
              "Klasičan izgled uz stariju kuću",
            ],
          ],
        },
      },
      {
        heading: "Moderne ograde za dvorište: horizontalne lamele",
        paragraphs: [
          "Posljednjih godina najviše se traže moderne ograde za dvorište s horizontalnim lamelama. Razlog je praktičan koliko i estetski: lamele zaklanjaju pogled pod uglom, a propuštaju zrak i dio svjetla, pa dvorište ne postaje zatvorena kutija.",
          "Lamele radimo u više dimenzija, najčešće 100x20 mm, na stubovima 80x50 mm. Razmak između lamela biramo zajedno, jer on direktno određuje koliko se vidi kroz ogradu. Manji razmak znači više zaklona i više materijala.",
          "Antracit je daleko najtraženija boja za ovakve ograde, jer se slaže sa sivom stolarijom i tamnim olucima koji su danas standard na novogradnji.",
        ],
      },
      {
        heading: "Ograda i kapija kao jedna cjelina",
        paragraphs: [
          "Ogradu i ulaznu kapiju radimo zajedno, u istom modelu ispune i istoj boji. Kada se rade odvojeno i kod različitih izvođača, linije se rijetko poklope, pa ulaz izgleda kao naknadno dodan dio.",
          "Kapiju biramo prema prilazu. Klizna se otvara bočno i ne traži prostor ispred sebe, krilna je povoljnija ali traži ravan prilaz i slobodan luk otvaranja. Uz ulaznu obično ide i pješačka kapija u istom modelu.",
        ],
      },
      {
        heading: "Teren, nagib i temelji",
        paragraphs: [
          "Rijetko koje dvorište je potpuno ravno. Kod nagiba se ograda radi stepenasto, tako da svako polje ostane vodoravno, ili se prati pad terena ako je blag. O tome se odlučuje na licu mjesta, jer se na papiru ne vidi.",
          "Stubovi se sidre u temeljne stope ili u postojeći betonski zidić. Ako dvorište ima potporni zid od kamena ili betona, ograda se montira na njega i tada je kraća, pa je i cijena niža. To je čest slučaj kod kuća na kosini.",
          "Na terenu provjeravamo i gdje prolaze instalacije, da bušenje za stope ne pogodi vod.",
        ],
      },
      {
        heading: "Zašto aluminij, a ne panel ili kovano željezo",
        paragraphs: [
          "Panelna ograda je najjeftinija, ali je i najjednostavnija: pocinčana žičana mreža u okviru, bez mogućnosti prilagodbe izgleda. Dobro služi za ogradu parcele, slabije za reprezentativan ulaz.",
          "Kovano željezo izgleda bogato, ali rđa. Prva rđa javlja se pri tlu, gdje stoji voda, pa nakon nekoliko sezona slijedi brušenje i ličenje. Aluminij ne sadrži željezo, pa taj problem ne postoji.",
          "Aluminijska ograda stoji između po cijeni, a iznad oba po trajnosti. Plastificirana je u boji po izboru i godinama drži izgled uz obično pranje vodom.",
        ],
      },
      {
        heading: "Kako dolazimo do cijene",
        paragraphs: [
          "Cijena ograde za dvorište računa se po dužnom metru i zavisi od visine, gustine ispune, broja kapija i stanja terena. Dvorište iste površine zna imati vrlo različitu cijenu ako jedno ima ravan betonski zidić, a drugo kosinu bez temelja.",
          "Zato ne dajemo cifru preko telefona. Izađemo, izmjerimo, provjerimo podlogu i dogovorimo model, pa dobijete tačnu ponudu koje se držimo. Detaljan pregled svih stavki koje ulaze u cijenu nalazi se na stranici o cijeni aluminijske ograde.",
          "Mjerenje i ponuda su bez obaveze. Nazovite, pošaljite poruku na WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Po mjeri placa", desc: "Visina, dužina i razmak ispune prema vašem dvorištu." },
      { title: "Moderne lamele", desc: "Horizontalne lamele 100x20 mm na stubovima 80x50 mm." },
      { title: "Kapija u kompletu", desc: "Klizna, krilna i pješačka u istom modelu i boji." },
      { title: "Za kosi teren", desc: "Stepenasta izvedba ili praćenje pada terena." },
      { title: "Bez rđe", desc: "Aluminij ne sadrži željezo, plastifikacija drži boju." },
      { title: "Besplatno mjerenje", desc: "Izlazak na teren i ponuda bez obaveze." },
    ],
    gallery: [
      { src: "/images/projekti/stablo-ograda-1.jpg", alt: "Ograda za dvorište od aluminija, ALU LINE Systems" },
      { src: "/images/projekti/kamena-ograda-2.jpg", alt: "Aluminijska ograda za dvorište na kamenom potpornom zidu" },
      { src: "/images/projekti/siegendorf-1.jpg", alt: "Dvorišna aluminijska ograda po mjeri, Siegendorf" },
      { src: "/images/projekti/wels-1.jpg", alt: "Dvorišna ograda model Grilja s dvokrilnom kapijom, Wels" },
      { src: "/images/projekti/krk-1.jpg", alt: "Moderna aluminijska ograda za dvorište, otok Krk" },
      { src: "/images/projekti/banovici-2.jpg", alt: "Ugrađena ograda za dvorište, Banovići" },
    ],
    faq: [
      {
        q: "Koliko košta ograda za dvorište?",
        a: "Cijena se računa po dužnom metru i zavisi od visine, gustine ispune, broja kapija i stanja terena. Gušća ispuna i viša ograda troše više materijala. Izađemo, izmjerimo i damo tačnu cijenu besplatno, bez obaveze.",
      },
      {
        q: "Koja je najjeftinija ograda za dvorište?",
        a: "Po cijeni je najpovoljnija panelna ograda, pa aluminijska s rijetkim vertikalnim šipkama. Ako tražite najnižu cijenu u aluminiju, birajte manju visinu i rjeđu ispunu, a puni paneli samo na strani prema ulici gdje vam zaista treba zaklon.",
      },
      {
        q: "Koja ograda daje najviše privatnosti?",
        a: "Puni paneli potpuno zatvaraju pogled prema ulici. Horizontalne lamele su srednje rješenje jer zaklanjaju pod uglom, a propuštaju zrak i svjetlo. Vertikalne šipke daju najmanje zaklona i biraju se kada privatnost nije cilj.",
      },
      {
        q: "Može li se ograda postaviti na kosom terenu?",
        a: "Da. Na nagibu ogradu radimo stepenasto, tako da svako polje ostane vodoravno, ili pratimo pad terena ako je blag. Kako ćemo izvesti odlučuje se na licu mjesta, jer se nagib ne vidi iz dimenzija na papiru.",
      },
      {
        q: "Radite li ogradu i kapiju zajedno?",
        a: "Da, i to preporučujemo. Ogradu i kapiju radimo u istom modelu ispune i istoj boji, pa se linije poklapaju i ulaz izgleda kao jedna cjelina. Kapija može biti klizna, krilna ili pješačka, s ručnim ili daljinskim upravljanjem.",
      },
      {
        q: "Koliko traje izrada i montaža ograde za dvorište?",
        a: "Rok dogovaramo pri mjerenju i zavisi od dužine ograde i broja kapija. Konstrukciju izrađujemo u vlastitoj radionici, pa montaža na terenu ide brzo. Ako treba izliti temeljne stope, računa se i vrijeme da beton očvrsne.",
      },
    ],
  },
  {
    slug: "balkonske-ograde",
    name: "Balkonske ograde",
    linkLabel: "Balkonske ograde i ograde za terasu",
    h1: "Balkonske ograde i ograde za terasu",
    metaTitle: "Balkonske Ograde po Mjeri",
    metaTitleFull: "Balkonske Ograde i Ograde za Terasu | ALU LINE",
    metaDescription:
      "Aluminijske ograde za balkone i terase po mjeri. Lagane, sigurne na visini i ne rđaju. Šipke, lamele, puni paneli ili staklo. Mjerenje: 062 543 464.",
    keywords: [
      "ograde za balkone",
      "balkonske ograde",
      "aluminijske ograde za balkone",
      "moderne ograde za balkone",
      "ograde za terase",
      "ograde za terasu",
      "balkonska ograda po mjeri",
    ],
    heroImage: "/images/elegantna-bocna-montaza/balkonska-ograda-aluminij-antracit.jpg",
    relatedPostSlugs: ["ograda-za-balkon-aluminijske-balkonske-ograde"],
    relatedServiceSlugs: [
      "aluminijske-ograde",
      "ograde-za-dvoriste",
      "aluminijske-ograde-cijena",
    ],
    intro: [
      "Balkonske ograde moraju biti sigurne jer stoje na visini, a lagane da ne opterećuju ploču. Aluminij zadovoljava oba uslova, pa je najčešći izbor i na novogradnji i pri zamjeni stare željezne ograde.",
      "Radimo ograde za balkone, lođe i terase, po mjeri svakog otvora. Ispunu birate vi: vertikalne ili horizontalne šipke, puni paneli za zaklon ili staklo kada želite otvoren pogled.",
      "Izlazimo na teren, provjerimo podlogu za sidrenje i damo cijenu bez obaveze: 062 543 464.",
    ],
    body: [
      {
        heading: "Ispuna određuje izgled i privatnost",
        paragraphs: [
          "Konstrukcija je kod svih varijanti slična, a razliku pravi ispuna. Na balkonu je odluka drugačija nego u dvorištu, jer ovdje gubitak pogleda osjetite svaki dan dok sjedite.",
          "Balkoni okrenuti prema ulici ili prema susjednoj zgradi najčešće dobiju horizontalne lamele ili pune panele. Balkoni s pogledom dobiju staklo ili rijetke vertikalne šipke, da se pogled ne kvari.",
        ],
        table: {
          caption: "Ispune za balkonsku ogradu",
          head: ["Ispuna", "Privatnost", "Pogled", "Napomena"],
          rows: [
            ["Vertikalne šipke", "Niska", "Otvoren", "Klasičan izgled, najpovoljnije"],
            ["Horizontalne lamele", "Srednja do visoka", "Zaklonjen pod uglom", "Moderan izgled, propušta zrak"],
            ["Puni paneli", "Potpuna", "Zatvoren", "Najviše zaklona od susjeda"],
            ["Kaljeno staklo", "Niska", "Potpuno otvoren", "Najčistiji izgled, traži pranje"],
          ],
        },
      },
      {
        heading: "Moderne ograde za balkone: antracit i lamele",
        paragraphs: [
          "Najtraženija kombinacija danas je horizontalna lamela u antracit boji. Razlog je uklapanje: siva stolarija, tamni oluci i antracit ograda daju jedinstvenu liniju na fasadi, bez šarenila.",
          "Lamele najčešće radimo u dimenziji 100x20 mm, na stubovima 80x50 mm. Razmak biramo prema tome koliko zaklona tražite. Manji razmak znači više privatnosti i više materijala.",
          "Ako zgrada traži da sve ograde na fasadi budu istog izgleda, uskladimo se s postojećim tonom i visinom. To je dobro provjeriti s upraviteljem prije izrade, a ne nakon montaže.",
        ],
      },
      {
        heading: "Visina i sigurnost na balkonu",
        paragraphs: [
          "Balkonska ograda je sigurnosni element, ne samo ukras. Visina i razmak ispune propisani su građevinskim propisima, a zahtjev raste sa visinom balkona iznad terena.",
          "Kod stanova na višim spratovima i tamo gdje na balkon izlaze djeca, razmak između ispuna drži se malim, tako da se kroz njega ne može proći ni provući. Horizontalne lamele treba izvesti tako da se po njima ne može penjati, što rješavamo razmakom i unutrašnjim rasporedom.",
        ],
      },
      {
        heading: "Montaža: ploča, parapet ili bočno",
        paragraphs: [
          "Način sidrenja bira se prema onome što se zatekne. Ograda se najčešće sidri odozgo u parapetni zid, bočno u čelo balkonske ploče ili odozgo u samu ploču.",
          "Bočna montaža ostavlja punu širinu balkona i daje najčišću liniju, ali traži zdrav beton na čelu ploče. Kod starijih zgrada rub ploče zna biti oštećen ili prekriven slojevima estriha, pa se mjesta sidrenja biraju prema stvarnom stanju.",
          "Zato balkonske ograde uvijek mjerimo i pregledamo na licu mjesta. Dimenzije date preko telefona nisu dovoljne da bi se znalo kako se ograda može pričvrstiti.",
        ],
      },
      {
        heading: "Ograde za terase i krovne terase",
        paragraphs: [
          "Terasa u prizemlju i krovna terasa traže isto rješenje kao balkon, samo na većoj dužini. Kod krovnih terasa posebno pazimo da sidrenje ne naruši hidroizolaciju, pa se vezujemo za parapet ili za ojačanje koje već postoji.",
          "Na terasi se ograda često kombinuje s nadstrešnicom, tako da se dobije natkriven i zaklonjen prostor. Kada se oboje radi odjednom, profili i boja se usklade pa sve izgleda kao jedan sistem.",
        ],
      },
      {
        heading: "Zamjena stare željezne ograde",
        paragraphs: [
          "Zamjena zarđale željezne ograde je čest posao. Staru ogradu skinemo, pregledamo stanje ploče ili parapeta i prilagodimo sidrenje onome što zateknemo. Ako je beton oštećen oko starih sidara, mjesta se pomjeraju ili saniraju prije montaže.",
          "Aluminijska ograda je znatno lakša od željezne pri istoj veličini, pa manje opterećuje konstrukciju, a rđa se više ne vraća.",
          "Za mjerenje i ponudu javite se na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Za balkone i lođe", desc: "Po mjeri otvora, sa sidrenjem prilagođenim podlozi." },
      { title: "Za terase", desc: "Prizemne i krovne terase, bez narušavanja hidroizolacije." },
      { title: "Ispuna po izboru", desc: "Šipke, lamele, puni paneli ili kaljeno staklo." },
      { title: "Antracit i RAL", desc: "Boja usklađena sa stolarijom i fasadom." },
      { title: "Lagano na ploči", desc: "Aluminij ne opterećuje balkonsku konstrukciju." },
      { title: "Zamjena željezne", desc: "Skidamo staru ogradu i saniramo mjesta sidrenja." },
    ],
    gallery: [
      { src: "/images/elegantna-bocna-montaza/balkonska-ograda-aluminij-antracit.jpg", alt: "Balkonska aluminijska ograda u antracit boji s horizontalnim lamelama" },
      { src: "/images/elegantna-bocna-montaza/aluminijska-ograda-terasa-horizontalne-lamele.jpg", alt: "Ograda za terasu s horizontalnim lamelama 100x20 mm" },
      { src: "/images/elegantna-bocna-montaza/ograda-za-terasu-pogled-s-terase.jpg", alt: "Aluminijska ograda za krovnu terasu, pogled s terase" },
      { src: "/images/elegantna-bocna-montaza/bocna-montaza-aluminijske-ograde.jpg", alt: "Bočna montaža balkonske ograde na parapetni zid" },
      { src: "/images/projekti/terasa-ograda-1.jpg", alt: "Aluminijska ograda za terasu, ALU LINE Systems" },
      { src: "/images/projekti/terasa-ograda-3.jpg", alt: "Balkonska ograda po mjeri, ALU LINE Systems" },
    ],
    faq: [
      {
        q: "Koliko košta balkonska ograda?",
        a: "Cijena zavisi od dužine, visine, vrste ispune i načina sidrenja. Vertikalne šipke su najpovoljnije, a puni paneli i staklo koštaju više. Broj uglova također utiče, jer svaki ugao traži dodatnu obradu. Mjerenje i ponuda su besplatni.",
      },
      {
        q: "Je li aluminijska ograda za balkon sigurna?",
        a: "Da. Profili su čvrsti, a sidrenje se prilagođava podlozi i visini balkona. Visina ograde i razmak ispune izvode se prema građevinskim propisima, koji su stroži što je balkon viši iznad terena.",
      },
      {
        q: "Može li se stara željezna ograda zamijeniti aluminijskom?",
        a: "Da, to je čest posao. Staru ogradu skinemo, pregledamo stanje ploče ili parapeta i prilagodimo sidrenje. Aluminijska ograda je lakša od željezne, pa manje opterećuje konstrukciju i ne rđa.",
      },
      {
        q: "Koja ispuna daje najviše privatnosti na balkonu?",
        a: "Puni paneli potpuno zatvaraju pogled prema ulici i susjedima. Horizontalne lamele su srednje rješenje jer zaklanjaju pod uglom, a propuštaju zrak i svjetlo. Staklo i vertikalne šipke ostavljaju pogled otvorenim.",
      },
      {
        q: "Radite li ograde za krovne terase?",
        a: "Da. Kod krovnih terasa pazimo da sidrenje ne naruši hidroizolaciju, pa se vezujemo za parapet ili postojeće ojačanje. Ogradu po želji kombinujemo s nadstrešnicom, u istoj boji i profilu.",
      },
      {
        q: "Može li se ograda uklopiti uz boju fasade?",
        a: "Da, boju birate po RAL kartici, a antracit je najtraženiji jer se slaže sa sivom stolarijom i tamnim olucima. Ako zgrada traži jedinstven izgled svih ograda na fasadi, uskladimo se s tim tonom.",
      },
    ],
  },
  {
    slug: "aluminijske-ograde-cijena",
    name: "Cijena aluminijske ograde",
    linkLabel: "Cijena aluminijske ograde po metru",
    h1: "Aluminijske ograde: cijena po metru",
    metaTitle: "Aluminijske Ograde Cijena po Metru",
    metaTitleFull: "Aluminijske Ograde Cijena po Metru BiH | ALU LINE",
    metaDescription:
      "Kako se formira cijena aluminijske ograde po dužnom metru u BiH. Sve stavke koje ulaze u ponudu, šta poskupljuje posao i kako do tačne cijene bez obaveze.",
    keywords: [
      "aluminijske ograde cijena po metru bih",
      "aluminijske ograde cijena",
      "cijena ograde po metru",
      "cijena aluminijske ograde",
      "aluminijska ograda cijena po metru",
      "balkonske ograde cijene u bih",
    ],
    heroImage: "/images/projekti/kamena-ograda-1.jpg",
    relatedPostSlugs: ["koliko-kosta-aluminijska-ograda"],
    relatedServiceSlugs: [
      "aluminijske-ograde",
      "ograde-za-dvoriste",
      "balkonske-ograde",
      "aluminijske-kapije",
    ],
    intro: [
      "Cijena aluminijske ograde računa se po dužnom metru, ali taj metar nije isti za svaku ogradu. Ista dužina zna imati bitno različitu cijenu zavisno od visine, gustine ispune i stanja terena.",
      "Na ovoj stranici je razloženo šta tačno ulazi u ponudu, da znate na čemu se cijena zasniva i da možete uporediti dvije ponude po istim stavkama.",
      "Mjerenje i ponuda su besplatni i bez obaveze. Nazovite 062 543 464 i dogovorite izlazak.",
    ],
    body: [
      {
        heading: "Šest stavki koje određuju cijenu po metru",
        paragraphs: [
          "Ponuda za aluminijsku ogradu gotovo uvijek stoji na istih šest stavki. Kad ih znate, lako vidite zašto se dvije ponude razlikuju i gdje se može uštedjeti bez gubitka kvaliteta.",
        ],
        table: {
          caption: "Šta pomjera cijenu aluminijske ograde",
          head: ["Stavka", "Utjecaj na cijenu", "Zašto"],
          rows: [
            ["Dužina", "Direktan", "Više metara, više profila i rada"],
            ["Visina", "Značajan", "Viša ograda troši više ispune po metru"],
            ["Gustina ispune", "Najveći poslije visine", "Puni paneli troše višestruko više od rijetkih šipki"],
            ["Kapije", "Stavka za sebe", "Klizna traži jaču konstrukciju i kolica, motor se računa posebno"],
            ["Teren i temelji", "Varira", "Nagib, tvrda podloga ili nepostojeće stope dodaju rad"],
            ["Boja i obrada", "Mali do srednji", "Standardni RAL tonovi su povoljniji od posebnih i dekora"],
          ],
        },
      },
      {
        heading: "Zašto visina poskupljuje više nego što se očekuje",
        paragraphs: [
          "Mnogi računaju da je ograda od 180 cm za petinu skuplja od one od 150 cm, jer je petinu viša. U praksi razlika zna biti veća, jer uz dodatnu ispunu po svakom metru često treba i jači profil stuba i dublja stopa, da ograda podnese vjetar na većoj površini.",
          "Zato se isplati biti precizan oko toga koliko vam visine zaista treba. Ako zaklon tražite samo prema ulici, viša ograda na toj strani i niža prema vrtu je jeftinija od visoke ograde po cijelom obimu.",
        ],
      },
      {
        heading: "Gdje se realno može uštedjeti",
        paragraphs: [
          "Prva ušteda je u ispuni. Rjeđe vertikalne šipke troše znatno manje materijala od punih panela, a na stranama gdje privatnost nije bitna razlika u izgledu je mala. Mješovito rješenje, puni paneli prema ulici i rjeđa ispuna prema vrtu, obično daje najbolji odnos.",
          "Druga je u podlozi. Ako već imate betonski zidić ili potporni zid, ograda se montira na njega pa je kraća i nema izlijevanja stopa. To je dvostruka ušteda, i na materijalu i na radu.",
          "Treća je u boji. Standardni RAL tonovi, uključujući antracit, povoljniji su od posebnih narudžbi i dekora koji imitiraju drvo.",
          "Ono na čemu ne treba štedjeti je debljina profila i kvalitet okova na kapiji, jer se tu ušteda vrati kroz par godina kao problem.",
        ],
      },
      {
        heading: "Šta se često previdi u računici",
        paragraphs: [
          "Dvije stavke najčešće iznenade. Prva su temeljne stope: ako se ograda postavlja na zemlju ili šljunak, stope treba izliti i sačekati da beton očvrsne, što produžava i rok. Druga je automatika kapije, jer uz motor idu i fotoćelije, signalna lampa i dovod struje do stuba.",
          "Obje se lako previde kad se cijena procjenjuje preko telefona, a vide se odmah na terenu. Zato izlazak i mjerenje daju tačniju cifru od bilo kakvog opisa.",
        ],
      },
      {
        heading: "Zašto ne objavljujemo fiksnu cijenu po metru",
        paragraphs: [
          "Cifra po metru na internetu gotovo uvijek pripada najjednostavnijoj mogućoj ogradi: najniža visina, najrjeđa ispuna, ravan teren, bez kapije. Čim dodate bilo šta od toga, broj više ne važi, a vi ste već računali s njim.",
          "Umjesto toga dajemo ponudu po mjeri, s razloženim stavkama. Nakon ponude cijena je fiksna i držimo je se, kao i dogovorenog roka. To je poštenije i prema vama i prema nama.",
        ],
      },
      {
        heading: "Kako do tačne cijene",
        paragraphs: [
          "Pozovite 062 543 464 i dogovorite izlazak. Izmjerimo dužinu i visinu, provjerimo podlogu i nagib, dogovorimo model ispune, boju i tip kapije, pa dobijete razloženu ponudu.",
          "Mjerenje i ponuda su besplatni i bez obaveze. Sve izrađujemo i montiramo sami, bez podizvođača, uz pisanu garanciju na rad. Radimo po cijeloj BiH, a po dogovoru i u Hrvatskoj, Sloveniji i Austriji.",
        ],
      },
    ],
    features: [
      { title: "Ponuda po mjeri", desc: "Razložene stavke, bez skrivenih troškova." },
      { title: "Fiksna nakon dogovora", desc: "Držimo se dogovorene cijene i roka." },
      { title: "Besplatan izlazak", desc: "Mjerenje i ponuda bez obaveze." },
      { title: "Bez podizvođača", desc: "Izrada i montaža u vlastitoj režiji." },
    ],
    gallery: [
      { src: "/images/projekti/kamena-ograda-1.jpg", alt: "Aluminijska ograda na kamenom zidu, ALU LINE Systems" },
      { src: "/images/projekti/stablo-ograda-2.jpg", alt: "Dvorišna aluminijska ograda po mjeri, ALU LINE Systems" },
      { src: "/images/elegantna-bocna-montaza/aluminijska-ograda-lamela-100x20.jpg", alt: "Aluminijska ograda s lamelama 100x20 mm u antracit boji" },
    ],
    faq: [
      {
        q: "Koliko košta aluminijska ograda po metru u BiH?",
        a: "Cijena po dužnom metru zavisi od visine, gustine ispune, kapija i stanja terena. Ista dužina košta bitno različito za nisku ogradu s rijetkim šipkama i za visoku s punim panelima. Tačnu cijenu dajemo nakon mjerenja, besplatno i bez obaveze.",
      },
      {
        q: "Zašto ne objavljujete fiksnu cijenu po metru?",
        a: "Jer bi bila netačna. Cifra po metru pripada najjednostavnijoj ogradi bez kapije, na ravnom terenu. Čim se doda visina, gušća ispuna ili kapija, broj više ne važi. Ponuda po mjeri je tačnija i poštenija.",
      },
      {
        q: "Gdje se može uštedjeti na cijeni ograde?",
        a: "Najviše na ispuni: rjeđe šipke troše znatno manje materijala od punih panela. Zatim na podlozi, jer montaža na postojeći betonski zidić izbjegava izlijevanje stopa. I na boji, jer su standardni RAL tonovi povoljniji od posebnih narudžbi.",
      },
      {
        q: "Je li mjerenje i ponuda besplatno?",
        a: "Da, izlazak na teren, mjerenje i ponuda su bez obaveze. Tek kad se dogovorimo oko modela i cijene, krećemo u izradu. Nakon ponude cijena je fiksna i držimo se dogovorenog roka.",
      },
      {
        q: "Ulazi li montaža u cijenu?",
        a: "Da, ponuda obuhvata izradu i montažu, jer sve radimo sami bez podizvođača. Posebno se iskazuju samo pripremni radovi poput izlijevanja temeljnih stopa i automatika kapije s motorom i fotoćelijama.",
      },
    ],
  },
  {
    slug: "roletne",
    name: "Roletne",
    linkLabel: "Roletne po mjeri, ALU i PVC",
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
    relatedServiceSlugs: [
      "garazna-i-sekcijska-vrata",
      "nadstresnice",
      "drvena-vrata",
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
    linkLabel: "Garažna rolo i sekcijska vrata",
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
    relatedServiceSlugs: [
      "roletne",
      "aluminijske-kapije",
      "drvena-vrata",
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
    linkLabel: "Aluminijske nadstrešnice za auto i terasu",
    h1: "Aluminijske nadstrešnice po mjeri",
    metaTitle: "Aluminijske Nadstrešnice po Mjeri",
    metaTitleFull: "Aluminijske Nadstrešnice za Auto i Terasu | ALU LINE",
    metaDescription:
      "Aluminijske nadstrešnice po mjeri za auto, terasu i ulaz. Ne rđaju i nose snijeg. Besplatno mjerenje i cijena na licu mjesta, cijela BiH: 062 543 464.",
    keywords: [
      "aluminijske nadstrešnice",
      "alu nadstrešnice",
      "nadstrešnica za auto",
      "nadstrešnica za auto uz kuću",
      "aluminijske nadstrešnice za terase",
      "nadstrešnica za terasu",
      "nadstrešnice po mjeri",
      "aluminijske nadstrešnice cijena",
      "carport",
    ],
    heroImage: "/images/hero-img.jpg",
    intro: [
      "Aluminijske nadstrešnice štite automobil, terasu i ulaz od kiše, snijega i sunca, a kući daju dovršen izgled. Nosiva konstrukcija je od aluminija, pa je lagana, čvrsta i ne traži održavanje.",
      "Svaku nadstrešnicu izrađujemo po mjeri prostora i montiramo sami, u boji i s pokrovom po vašem izboru. Radimo po cijeloj BiH, a po dogovoru i u Hrvatskoj, Sloveniji i Austriji.",
      "Izlazimo na teren, izmjerimo i damo cijenu na licu mjesta, bez obaveze. Za dogovor nazovite 062 543 464.",
    ],
    body: [
      {
        heading: "Nadstrešnica za auto (carport)",
        paragraphs: [
          "Nadstrešnica za auto čuva vozilo na otvorenom, bez zidanja garaže. Ljeti spušta temperaturu u kabini, zimi štedi vrijeme jer nema struganja leda sa stakala, a lak trpi manje od grada, smole i ptica.",
          "Radimo samostojeće carporte na sredini dvorišta i nadstrešnice uz kuću, gdje se jedna strana veže za fasadu pa je konstrukcija diskretnija i jeftinija. Standardno pravimo mjesto za jedan ili dva automobila, ali dužinu i širinu prilagođavamo dvorištu i prilazu.",
          "Prije izrade provjerimo dubinu prilaza, pad terena i mjesto za stope, tako da nadstrešnica ne smeta otvaranju kapije ni ulaznih vrata.",
        ],
      },
      {
        heading: "Aluminijske nadstrešnice za terase",
        paragraphs: [
          "Nadstrešnica nad terasom produžava sezonu boravka vani. Sto i garnitura ostaju suhi, a prostor uz kuću postaje upotrebljiv i po kiši i po jakom suncu.",
          "Za terase najčešće radimo nadstrešnicu vezanu za fasadu, s padom prema dvorištu i olukom koji vodu odvodi dalje od zida. Ako terasa ima ogradu, konstrukciju uskladimo s njom da sve izgleda kao jedna cjelina.",
          "Kada želite zatvoreniji prostor, nadstrešnicu kombinujemo s bočnim staklenim ispunama ili roletnama, pa terasu možete koristiti i po vjetru.",
        ],
      },
      {
        heading: "Nadstrešnica nad ulaznim vratima",
        paragraphs: [
          "Manja nadstrešnica nad ulazom štiti vrata i stepenice od kiše i leda. Vrata duže traju jer voda ne stoji na krilu i pragu, a stepenice su zimi sigurnije.",
          "Ove nadstrešnice radimo po mjeri otvora, tako da prate širinu vrata i ne štrče preko fasade. Ista logika vrijedi i za ulaze u poslovne prostore, gdje nadstrešnica pokriva prilaz i natpis.",
        ],
      },
      {
        heading: "Koji pokrov izabrati: polikarbonat, staklo ili lim",
        paragraphs: [
          "Konstrukcija je uvijek aluminijska, a razlika u izgledu i cijeni dolazi od pokrova. Tri rješenja pokrivaju gotovo sve situacije, pa se izbor svodi na to koliko svjetla želite propustiti ispod nadstrešnice.",
          "Za carport ispred kuće najčešće se bira komorni polikarbonat, za terasu kaljeno staklo, a za dvorišne i ekonomske objekte trapezni lim.",
        ],
        table: {
          caption: "Poređenje pokrova za aluminijsku nadstrešnicu",
          head: ["Pokrov", "Svjetlo ispod", "Prednost", "Najbolje za"],
          rows: [
            [
              "Komorni polikarbonat",
              "Propušta, difuzno",
              "Lagan, otporan na udar i grad, povoljniji od stakla",
              "Carport, prilaz, ulaz",
            ],
            [
              "Kaljeno staklo",
              "Propušta, bistro",
              "Najčistiji izgled, lako se pere, ne žuti",
              "Terasa uz kuću",
            ],
            [
              "Trapezni lim",
              "Ne propušta",
              "Puna sjena i najniža cijena, dobro nosi snijeg",
              "Dvorište, ekonomski objekti",
            ],
          ],
        },
      },
      {
        heading: "Koliko košta aluminijska nadstrešnica",
        paragraphs: [
          "Cijena aluminijske nadstrešnice računa se po kvadratu natkrivene površine i zavisi od nekoliko stavki koje se razlikuju od dvorišta do dvorišta. Zato cijenu dajemo tek nakon mjerenja, ali evo šta na nju utiče.",
          "Prvo, površina i raspon. Veći raspon bez srednjeg stuba traži jači profil, pa nosiva konstrukcija poskupi. Drugo, pokrov: trapezni lim je najpovoljniji, komorni polikarbonat je u sredini, a kaljeno staklo je najskuplje. Treće, tip montaže, jer je samostojeći carport skuplji od nadstrešnice vezane za fasadu, koja ima manje stubova i stopa.",
          "Na cijenu utiču i podloga i pripremni radovi. Ako nema betonske ploče, treba izliti temeljne stope. Boja po RAL kartici, oluk, rasvjeta i bočne ispune dodaju se posebno.",
          "Mjerenje i ponuda su besplatni i bez obaveze. Nazovite 062 543 464, dogovorimo izlazak i dobijete tačnu cijenu za svoj prostor, a ne procjenu preko telefona.",
        ],
      },
      {
        heading: "Zašto aluminij, a ne čelik ili drvo",
        paragraphs: [
          "Aluminij ne sadrži željezo, pa ne može zarđati. Na površini se stvara tanak sloj oksida koji sam štiti metal, a mi konstrukciju dodatno plastificiramo, tako da boja drži godinama bez ličenja.",
          "U poređenju s čelikom, aluminijska konstrukcija je znatno lakša pri istoj nosivosti, pa manje opterećuje fasadu i traži manje temelje. U poređenju s drvetom, ne radi na vlagu, ne puca i ne treba je svake sezone premazivati.",
          "Profile dimenzionišemo prema rasponu i očekivanom snijegu za naše podneblje, tako da nadstrešnica nosi zimsko opterećenje bez ugibanja.",
        ],
      },
      {
        heading: "Mjerenje, izrada i montaža",
        paragraphs: [
          "Posao ide u četiri koraka. Izađemo na teren i izmjerimo prostor, dogovorimo model, pokrov i boju, izradimo konstrukciju u vlastitoj radionici, pa je montiramo u dogovorenom roku.",
          "Sve radimo sami, bez podizvođača, pa za mjeru, izradu i montažu odgovara jedna ekipa. Na svaki rad dajemo pisanu garanciju i držimo se dogovorene cijene.",
          "Radimo po cijeloj BiH, a po dogovoru izlazimo i u Hrvatsku, Sloveniju i Austriju. Javite se na telefon, WhatsApp ili Viber: 062 543 464.",
        ],
      },
    ],
    features: [
      { title: "Carport za auto", desc: "Samostojeći ili uz kuću, za jedno ili dva vozila." },
      { title: "Za terasu", desc: "Vezana za fasadu, s olukom i padom prema dvorištu." },
      { title: "Za ulaz", desc: "Natkrivanje ulaznih vrata i stepeništa, po mjeri otvora." },
      { title: "Pokrov po izboru", desc: "Polikarbonat, kaljeno staklo ili trapezni lim." },
      { title: "Bez rđe", desc: "Aluminij ne sadrži željezo, plastifikacija drži boju." },
      { title: "Besplatno mjerenje", desc: "Izlazak na teren i cijena bez obaveze." },
    ],
    gallery: [],
    faq: [
      {
        q: "Koliko košta aluminijska nadstrešnica?",
        a: "Cijena se računa po kvadratu natkrivene površine i zavisi od raspona, pokrova i načina montaže. Trapezni lim je najpovoljniji, polikarbonat u sredini, kaljeno staklo najskuplje. Samostojeći carport košta više od nadstrešnice vezane za fasadu. Izađemo, izmjerimo i damo tačnu cijenu besplatno.",
      },
      {
        q: "Koji pokrov je najbolji za nadstrešnicu?",
        a: "Za carport se najčešće bira komorni polikarbonat jer je lagan, propušta difuzno svjetlo i dobro podnosi grad. Za terasu uz kuću bira se kaljeno staklo zbog čistog izgleda. Trapezni lim daje punu sjenu i najnižu cijenu, pa je čest u dvorištu.",
      },
      {
        q: "Da li aluminijska nadstrešnica rđa?",
        a: "Ne. Aluminij ne sadrži željezo, pa ne može zarđati. Na površini se stvara zaštitni sloj oksida, a konstrukciju dodatno plastificiramo u boji po izboru. Zato nadstrešnica godinama drži izgled bez ličenja i posebnog održavanja.",
      },
      {
        q: "Može li nadstrešnica zamijeniti garažu?",
        a: "Za svakodnevnu zaštitu vozila od sunca, kiše, snijega i grada, da. Carport je jeftiniji i brži od zidanja garaže, a vozilo ostaje natkriveno. Garaža ostaje bolji izbor kada vam treba zaključan prostor za alat i opremu.",
      },
      {
        q: "Izdrži li nadstrešnica snijeg?",
        a: "Da. Profile i razmak stubova dimenzionišemo prema rasponu i zimskom opterećenju za naše podneblje, pa konstrukcija nosi snijeg bez ugibanja. Kod velikih raspona bez srednjeg stuba koristimo jače profile, što uzimamo u obzir već pri mjerenju.",
      },
      {
        q: "Radite li nadstrešnice po mjeri?",
        a: "Da, svaku nadstrešnicu radimo po mjeri prostora, u dužini, širini i visini koja odgovara vašem prilazu ili terasi. Model, pokrov i boju birate vi. Sve izrađujemo i montiramo sami, uz pisanu garanciju. Pozovite 062 543 464 za mjerenje.",
      },
      {
        q: "Koliko traje izrada i montaža nadstrešnice?",
        a: "Rok dogovaramo pri mjerenju i zavisi od veličine i tipa pokrova. Konstrukciju izrađujemo u vlastitoj radionici, pa montaža na terenu obično traje kratko. Ako treba izliti temeljne stope, računa se i vrijeme da beton očvrsne.",
      },
    ],
    relatedPostSlugs: ["koliko-kosta-aluminijska-nadstresnica"],
    relatedServiceSlugs: [
      "aluminijske-ograde",
      "roletne",
      "garazna-i-sekcijska-vrata",
    ],
  },
  {
    slug: "drvena-vrata",
    name: "Drvena vrata",
    linkLabel: "Drvena vrata po mjeri",
    h1: "Drvena sobna i ulazna vrata po mjeri",
    metaTitle: "Drvena Sobna i Ulazna Vrata",
    metaTitleFull: "Drvena Vrata po Mjeri, Katalog Modela | ALU LINE",
    metaDescription:
      "Drvena sobna i ulazna vrata po mjeri, zajedno s dovratnikom. Pogledajte katalog modela, birajte dekor i boju. Izrada, montaža i garancija: 062 543 464.",
    keywords: [
      "drvena vrata",
      "sobna vrata",
      "unutrašnja vrata",
      "drvena vrata po mjeri",
      "ulazna drvena vrata",
      "drvena vrata po narudžbi",
      "sobna vrata cijena",
    ],
    relatedServiceSlugs: [
      "roletne",
      "garazna-i-sekcijska-vrata",
      "aluminijske-ograde",
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
      "ALU LINE Systems iz Srebrenika izrađuje i montira alu ograde i kapije, roletne, nadstrešnice te garažna vrata. Sve radimo sami, uz garanciju: 062 543 464.",
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
