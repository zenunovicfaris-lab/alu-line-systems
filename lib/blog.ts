// Blog / vodiči — cilja informativne pretrage (Ahrefs KW podaci).
import type { FaqItem } from "@/lib/content";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type BlogPost = {
  slug: string;
  title: string; // H1 na stranici
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  heroImage: string;
  date: string; // ISO
  readingMinutes: number;
  body: Block[];
  faq: FaqItem[];
  relatedService: { label: string; href: string };
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ograda-za-dvoriste-vrste-i-kako-izabrati",
    title: "Ograda za dvorište: vrste i kako izabrati pravu",
    metaTitle: "Ograda za Dvorište: Vodič za Izbor",
    metaDescription:
      "Koja ograda za dvorište je najbolja? Uporedite panelne, kovane i aluminijske ograde po cijeni, održavanju i trajnosti. Praktičan vodič za pravi izbor.",
    keywords: [
      "ograda za dvorište",
      "ograda za dvoriste",
      "ograda",
      "aluminijska ograda za dvorište",
      "vrste ograda",
    ],
    excerpt:
      "Panelna, kovana ili aluminijska? Vodič kroz vrste dvorišnih ograda i kako izabrati onu koja vam se dugoročno isplati.",
    heroImage: "/images/projekti/stablo-ograda-1.jpg",
    date: "2026-06-15",
    readingMinutes: 8,
    body: [
      { type: "p", text: "Ograda za dvorište radi više poslova odjednom: čuva privatnost, podiže sigurnost, drži djecu i kućne ljubimce unutar dvorišta i daje kući dovršen izgled. Zato izbor ograde nije samo pitanje estetike, nego odluka koja utiče na sigurnost i na troškove sljedećih desetak godina." },
      { type: "p", text: "Najveću razliku pravi materijal. On određuje koliko će ograda trajati, koliko ćete je održavati i kako će izgledati za pet ili deset godina. U nastavku prolazimo kroz tri najčešće vrste dvorišnih ograda u našim krajevima: panelnu, kovanu i aluminijsku." },
      { type: "h2", text: "Šta dobra ograda za dvorište treba da ispuni" },
      { type: "ul", items: [
        "Sigurnost: da je čvrsta i da je nije lako preskočiti ili oštetiti.",
        "Privatnost: onoliko koliko želite, od providne mreže do pune ispune.",
        "Trajnost: da izdrži kišu, snijeg i sunce bez propadanja.",
        "Nisko održavanje: da ne traži bojenje i popravke svake godine.",
        "Izgled: da se uklapa uz kuću, fasadu i okolinu.",
      ] },
      { type: "h2", text: "Panelna ograda" },
      { type: "p", text: "Panelne ograde su zavarene mreže od pocinčane žice, najčešće plastificirane. Brzo se montiraju na stubove i imaju najnižu cijenu po metru, pa su čest izbor kad treba ograditi veći plac, njivu ili gradilište." },
      { type: "ul", items: [
        "Prednosti: niska cijena, brza montaža, providne su pa ne zatvaraju pogled.",
        "Mane: industrijski izgled, slaba privatnost, na oštećenjima plastifikacije s vremenom se može pojaviti korozija.",
      ] },
      { type: "h2", text: "Kovana ograda" },
      { type: "p", text: "Kovane ograde od željeza imaju klasičan, dekorativan izgled i vrlo su čvrste. Glavni nedostatak je što željezo rđa, pa ogradu treba redovno čistiti i bojiti kako bi zadržala izgled i ne bi propala." },
      { type: "ul", items: [
        "Prednosti: robusnost, dekorativni detalji, dug vijek uz redovno održavanje.",
        "Mane: rđa, traži bojenje svakih nekoliko godina, teža je i skuplja za izradu.",
      ] },
      { type: "h2", text: "Aluminijska ograda" },
      { type: "p", text: "Aluminijske ograde spajaju čist izgled i minimalno održavanje. Aluminij ne sadrži željezo pa ne rđa, ne treba ga bojiti i lagan je, a plastifikacija u boji po izboru drži se godinama. Zbog toga se dugoročno često pokaže kao najisplativiji izbor za dvorište." },
      { type: "ul", items: [
        "Prednosti: ne rđa, bez bojenja, boja po izboru, dug vijek, lagana konstrukcija.",
        "Mane: početna cijena viša od panelne ograde, ali bez troškova održavanja kasnije.",
      ] },
      { type: "h2", text: "Poređenje: panelna, kovana i aluminijska ograda" },
      { type: "p", text: "Da lakše uporedite, evo pregleda po najvažnijim stavkama:" },
      { type: "table", headers: ["Stavka", "Panelna", "Kovana", "Aluminijska"], rows: [
        ["Početna cijena", "Najniža", "Srednja do visoka", "Srednja"],
        ["Rđa", "Moguća na oštećenjima", "Da, rđa", "Ne rđa"],
        ["Održavanje", "Nisko", "Visoko, traži bojenje", "Vrlo nisko"],
        ["Privatnost", "Slaba, providna", "Srednja", "Od srednje do pune"],
        ["Izgled", "Industrijski", "Klasičan, dekorativan", "Moderan, čist"],
        ["Vijek uz malo održavanja", "Srednji", "Dug uz bojenje", "Dug"],
      ] },
      { type: "h2", text: "Visina, privatnost i model" },
      { type: "p", text: "Koliko privatnosti dobijate zavisi od gustine ispune. Rijetke vertikalne šipke daju prozračan izgled i djelomičan pogled, dok gušća ili puna ispuna zatvara pogled s ulice. Visinu biramo prema tome koliko želite zaklona i kakav izgled tražite za dvorište." },
      { type: "h2", text: "Ograda na zidu ili na stubovima" },
      { type: "p", text: "Aluminijska ograda može se postaviti na betonske ili kamene stubove i podzid, ili na samostalne aluminijske stubove. Podzid podiže ogradu, daje dodatnu privatnost pri dnu i lijepo izgleda uz kamen ili beton. Na terenu procijenimo šta odgovara vašem dvorištu i nagibu placa." },
      { type: "h2", text: "Održavanje kroz godine" },
      { type: "p", text: "Ovdje se ograde najviše razlikuju. Panelnu ogradu uglavnom samo operete, ali oštećenja plastifikacije mogu s vremenom zarđati. Kovana ograda traži čišćenje i bojenje svakih nekoliko godina da ne bi propala od rđe. Aluminijska ograda ne rđa i ne treba je bojiti, pa je održavanje svedeno na povremeno pranje vodom." },
      { type: "h2", text: "Koliko košta ograda za dvorište" },
      { type: "p", text: "Tačna cijena zavisi od dužine, visine, modela i toga da li ide kapija. Zato se cijena daje po mjeri, nakon izlaska na teren. Panelna ograda je najjeftinija na startu, aluminijska je srednje pozicionirana, a kovana zna biti skuplja zbog ručne izrade i kasnijeg održavanja." },
      { type: "h2", text: "Kako izabrati pravu ogradu za dvorište" },
      { type: "p", text: "Ako vam je jedini cilj ograditi veliku površinu uz najniži trošak i ne smeta vam industrijski izgled, panelna ograda je logična. Ako želite dekorativan, klasičan štih i spremni ste na redovno bojenje, kovana ograda ima smisla." },
      { type: "p", text: "Ako želite ogradu koju postavite i praktično zaboravite, bez rđe i bojenja, uz moderan izgled i boju po izboru, aluminijska ograda daje najbolji balans izgleda, trajnosti i troška kroz godine. Nju izrađujemo po mjeri vašeg dvorišta i montiramo sami, uz pisanu garanciju." },
      { type: "p", text: "Za savjet i ponudu po mjeri javite se na telefon, WhatsApp ili Viber: 062 543 464. Izlazak i mjerenje su bez obaveze." },
    ],
    faq: [
      { q: "Koja ograda za dvorište traži najmanje održavanja?", a: "Aluminijska. Ne rđa i ne treba je bojiti, dovoljno je povremeno oprati vodom. Panelna i kovana ograda traže više pažnje da bi zadržale izgled." },
      { q: "Je li aluminijska ograda dovoljno čvrsta?", a: "Da. Aluminijski profili su dizajnirani za nosivost, a laganiji su od željeza što olakšava montažu. Za dvorišne ograde su više nego dovoljno čvrsti." },
      { q: "Možete li napraviti ogradu po mjeri?", a: "Da, svaku ogradu izrađujemo prema dimenzijama vašeg dvorišta, u boji i modelu po izboru. Pozovite 062 543 464 za mjerenje i ponudu." },
    ],
    relatedService: { label: "Aluminijske ograde", href: "/usluge/aluminijske-ograde" },
  },
  {
    slug: "panelna-ili-aluminijska-ograda",
    title: "Panelna ili aluminijska ograda: šta izabrati?",
    metaTitle: "Panelna ili Aluminijska Ograda?",
    metaDescription:
      "Panelna ograda je jeftinija, aluminijska traje duže bez održavanja. Uporedite cijenu, izgled i trajnost pa izaberite pravu ogradu za svoj plac i dvorište.",
    keywords: [
      "panelna ograda",
      "panel ograda",
      "panelna ograda cijena",
      "aluminijska ograda",
    ],
    excerpt:
      "Panelna ograda osvaja cijenom, aluminijska trajnošću i izgledom. Evo kada se koja isplati.",
    heroImage: "/images/projekti/terasa-ograda-2.jpg",
    date: "2026-06-25",
    readingMinutes: 4,
    body: [
      { type: "p", text: "Panelna i aluminijska ograda dvije su vrlo različite priče. Panelna cilja najnižu cijenu i brzu montažu, aluminijska dug vijek i uredan izgled. Izbor zavisi od toga šta vam je važnije." },
      { type: "h2", text: "Panelna ograda" },
      { type: "p", text: "Panelna ograda je zavarena mreža od pocinčane, obično plastificirane žice. Najčešće se koristi za ograđivanje većih površina gdje je bitno pokriti mnogo metara uz nizak trošak." },
      { type: "ul", items: [
        "Najniža početna cijena po metru.",
        "Brza montaža na stubove.",
        "Providna je, pa ne daje privatnost.",
        "Izgled je funkcionalan, industrijski.",
      ] },
      { type: "h2", text: "Aluminijska ograda" },
      { type: "p", text: "Aluminijska ograda je viša investicija na startu, ali kroz godine često ispadne jeftinija jer nema troškova održavanja. Ne rđa, ne treba je bojiti, a boju i model birate sami." },
      { type: "ul", items: [
        "Ne rđa i ne treba bojenje.",
        "Boja i model po izboru.",
        "Bolja privatnost i izgled.",
        "Dug vijek uz minimalno održavanje.",
      ] },
      { type: "h2", text: "Kada koja" },
      { type: "p", text: "Za ograđivanje velikog placa, njive ili gradilišta gdje je bitna samo funkcija, panelna ograda je razuman izbor. Za dvorište kuće, gdje se gleda izgled i gdje želite rješenje na dugi rok, aluminijska ograda se isplati više." },
      { type: "p", text: "Ako niste sigurni, izađemo na teren, izmjerimo i damo ponudu po mjeri za oba pristupa, pa lako uporedite." },
    ],
    faq: [
      { q: "Je li aluminijska ograda skuplja od panelne?", a: "Na startu jeste, ali panelna traži više održavanja i lošije izgleda na kući. Kroz godine aluminijska često ispadne isplativija jer nema bojenja ni zamjene." },
      { q: "Daje li panelna ograda privatnost?", a: "Ne mnogo, jer je providna mreža. Ako vam je privatnost bitna, bolji izbor je puna ili gušća aluminijska ograda." },
    ],
    relatedService: { label: "Aluminijske ograde", href: "/usluge/aluminijske-ograde" },
  },
  {
    slug: "aluminijska-ili-kovana-ograda",
    title: "Aluminijska ili kovana ograda: prednosti i razlike",
    metaTitle: "Aluminijska ili Kovana Ograda?",
    metaDescription:
      "Kovana ograda ima klasičan izgled ali rđa i traži bojenje. Aluminijska ne rđa i nema održavanja. Uporedite izgled, trajnost i trošak kroz godine prije izbora.",
    keywords: [
      "kovana ograda",
      "aluminijska ograda",
      "kovana vs aluminijska ograda",
    ],
    excerpt:
      "Kovano željezo izgleda klasično ali traži održavanje. Aluminij nudi sličan izgled bez rđe i bojenja.",
    heroImage: "/images/projekti/medjugorje-1.jpg",
    date: "2026-07-02",
    readingMinutes: 4,
    body: [
      { type: "p", text: "Kovana ograda dugo je bila standard za dekorativne dvorišne ograde. Aluminij je danas ozbiljna alternativa jer daje sličan izgled, a rješava glavni problem željeza: rđu i stalno održavanje." },
      { type: "h2", text: "Izgled" },
      { type: "p", text: "Kovano željezo nudi bogate, ručno oblikovane detalje i težinu koja djeluje robusno. Aluminij se izrađuje u modelima koji vjerno oponašaju taj klasičan izgled, uz čistije linije i boju po izboru." },
      { type: "h2", text: "Trajnost i održavanje" },
      { type: "p", text: "Ovdje je najveća razlika. Željezo rđa čim se zaštitni sloj ošteti, pa kovanu ogradu treba čistiti i bojiti svakih nekoliko godina. Aluminij ne rđa uopšte i praktično ne traži održavanje, dovoljno ga je oprati vodom." },
      { type: "ul", items: [
        "Kovana ograda: rđa, traži redovno bojenje, teža za montažu.",
        "Aluminijska ograda: ne rđa, bez bojenja, lagana, boja trajna godinama.",
      ] },
      { type: "h2", text: "Trošak kroz godine" },
      { type: "p", text: "Kovana ograda može biti slična po početnoj cijeni, ali dodajte trošak i vrijeme za redovno bojenje i popravke rđe. Aluminijska ograda taj trošak nema, pa je kroz godine najčešće povoljnija." },
      { type: "p", text: "Ako želite klasičan štih bez briga o rđi, aluminijska ograda je logičan izbor. Izradimo je po mjeri i u modelu koji vam se sviđa." },
    ],
    faq: [
      { q: "Može li aluminijska ograda izgledati kao kovana?", a: "Da. Postoje modeli aluminijskih ograda koji oponašaju klasičan kovani izgled, uz prednost da ne rđaju i ne treba ih bojiti." },
      { q: "Zašto aluminij ne rđa?", a: "Aluminij ne sadrži željezo i prirodno stvara zaštitni sloj, a dodatna plastifikacija štiti boju. Zato nema rđe ni ljuštenja kao kod željeza." },
    ],
    relatedService: { label: "Aluminijske ograde", href: "/usluge/aluminijske-ograde" },
  },
  {
    slug: "ograda-za-balkon-aluminijske-balkonske-ograde",
    title: "Ograda za balkon: aluminijske balkonske ograde",
    metaTitle: "Aluminijske Ograde za Balkone i Terase",
    metaDescription:
      "Aluminijska ograda za balkon je lagana, sigurna i ne rđa. Vrste ispune, visina po propisu, montaža na ploču i šta utiče na cijenu balkonske ograde.",
    keywords: [
      "ograda za balkon",
      "balkonska ograda",
      "balkonske ograde",
      "aluminijske ograde za balkone",
      "alu ograde za balkone",
      "aluminijska balkonska ograda",
      "ograda za terasu",
    ],
    excerpt:
      "Balkonska ograda mora biti sigurna, lagana i otporna na vremenske uslove. Evo vrsta ispune, na šta paziti kod visine i montaže, i šta pomjera cijenu.",
    heroImage: "/images/elegantna-bocna-montaza/balkonska-ograda-aluminij-antracit.jpg",
    date: "2026-07-10",
    readingMinutes: 6,
    body: [
      { type: "p", text: "Ograda za balkon ima poseban zadatak: mora biti sigurna jer je na visini, a istovremeno lagana da ne opterećuje konstrukciju. Uz to je stalno izložena kiši, suncu i vjetru, pa materijal mora dobro podnositi vremenske uslove." },
      { type: "p", text: "Aluminij ispunjava sve to. Lagan je, čvrst, ne rđa i zadržava boju godinama, pa su aluminijske ograde za balkone jedan od najpraktičnijih izbora, i na novogradnji i pri zamjeni stare željezne ograde." },
      { type: "h2", text: "Zašto aluminij za balkon" },
      { type: "ul", items: [
        "Lagan je, pa ne opterećuje balkonsku ploču ni parapet.",
        "Ne rđa jer ne sadrži željezo, ni na kiši ni uz more.",
        "Plastificira se u boji po izboru, pa se uklapa uz stolariju i fasadu.",
        "Ne traži ličenje ni brušenje, dovoljno je povremeno pranje vodom.",
        "Profili se sijeku po mjeri, pa ograda prati stvarnu dužinu balkona.",
      ] },
      { type: "h2", text: "Vrste balkonskih ograda po ispuni" },
      { type: "p", text: "Konstrukcija je kod svih varijanti slična, a izgled i nivo privatnosti određuje ispuna. Četiri rješenja pokrivaju gotovo sve balkone." },
      { type: "table", headers: ["Ispuna", "Privatnost", "Pogled i svjetlo", "Napomena"], rows: [
        ["Vertikalne šipke", "Niska", "Otvoren pogled", "Klasičan izgled, najčešći izbor"],
        ["Horizontalne lamele", "Srednja do visoka", "Zaklanja pod uglom", "Moderan izgled, propušta zrak"],
        ["Puni paneli", "Potpuna", "Zatvara pogled", "Najviše zaklona od ulice i susjeda"],
        ["Staklena ispuna", "Niska", "Potpuno otvoren pogled", "Najčistiji izgled, traži redovno pranje"],
      ] },
      { type: "p", text: "Na balkonima okrenutim prema ulici najčešće se biraju horizontalne lamele ili puni paneli, jer daju zaklon a ne zatvaraju potpuno strujanje zraka. Kod balkona s pogledom bira se staklo ili rijetke vertikalne šipke, da se pogled ne kvari." },
      { type: "h2", text: "Visina i sigurnost balkonske ograde" },
      { type: "p", text: "Balkonska ograda je sigurnosni element, ne samo ukras. Visina i razmak ispune propisani su građevinskim propisima, a zahtjev raste sa visinom balkona iznad terena. Kod stanova na višim spratovima i kod balkona na koje izlaze djeca, razmak između šipki drži se malim da se kroz njega ne može proći." },
      { type: "p", text: "Ako mijenjate postojeću ogradu na zgradi, provjerite i pravila upravitelja, jer neke zgrade traže da sve ograde na fasadi budu istog izgleda i boje. Bolje to riješiti prije izrade nego nakon montaže." },
      { type: "h2", text: "Montaža na balkonsku ploču ili parapet" },
      { type: "p", text: "Način sidrenja zavisi od toga šta se zatekne na terenu. Ograda se najčešće sidri odozgo u parapetni zid ili bočno u čelo balkonske ploče. Bočno sidrenje ostavlja punu širinu balkona, ali traži zdrav beton na čelu ploče." },
      { type: "p", text: "Kod starijih zgrada rub ploče zna biti oštećen ili prekriven slojevima estriha, pa se mjesta sidrenja biraju prema stvarnom stanju. Zato se balkonske ograde uvijek mjere i pregledaju na licu mjesta, a ne po dimenzijama datim preko telefona." },
      { type: "h2", text: "Šta utiče na cijenu balkonske ograde" },
      { type: "ul", items: [
        "Dužina ograde i broj uglova, jer svaki ugao traži dodatnu obradu.",
        "Visina, koja zavisi od propisa i spratnosti.",
        "Vrsta ispune: šipke su povoljnije, puni paneli i staklo skuplji.",
        "Način sidrenja i stanje podloge na koju se ograda veže.",
        "Boja po RAL kartici i posebni tonovi poput drvenog dekora.",
      ] },
      { type: "h2", text: "Izrada po mjeri" },
      { type: "p", text: "Svaki balkon je drugačiji, pa se balkonska ograda mora raditi po tačnoj mjeri. Izađemo, izmjerimo, provjerimo podlogu za sidrenje, dogovorimo model i boju, pa izradimo i montiramo sami, uz pisanu garanciju na rad. Mjerenje i ponuda su bez obaveze: 062 543 464." },
    ],
    faq: [
      { q: "Je li aluminijska ograda za balkon sigurna?", a: "Da. Aluminijski profili su čvrsti, a sidrenje se prilagođava podlozi i visini balkona. Visina ograde i razmak ispune rade se prema građevinskim propisima, koji su stroži što je balkon viši. Sigurnost je kod balkonskih ograda prioritet." },
      { q: "Koliko košta aluminijska ograda za balkon?", a: "Cijena zavisi od dužine, visine, vrste ispune i načina sidrenja. Ograde s vertikalnim šipkama su povoljnije, dok puni paneli i staklena ispuna koštaju više. Tačnu cijenu dajemo nakon mjerenja na licu mjesta, bez obaveze." },
      { q: "Može li se ograda uklopiti uz boju fasade?", a: "Da, boju birate sami po RAL kartici, pa se ograda uklapa uz stolariju i fasadu. Radimo je po mjeri vašeg balkona. Ako zgrada traži jedinstven izgled ograda na fasadi, uskladimo se s tim tonom." },
      { q: "Može li se stara željezna ograda zamijeniti aluminijskom?", a: "Da, i to je čest posao. Staru ogradu skinemo, pregledamo stanje ploče ili parapeta i prilagodimo sidrenje onome što zateknemo. Aluminijska ograda je lakša od željezne, pa manje opterećuje konstrukciju." },
      { q: "Koja ispuna daje najviše privatnosti na balkonu?", a: "Puni paneli daju potpunu privatnost prema ulici i susjedima. Horizontalne lamele su srednje rješenje jer zaklanjaju pogled pod uglom, ali propuštaju zrak i svjetlo. Staklo i vertikalne šipke ostavljaju pogled otvorenim." },
    ],
    relatedService: { label: "Aluminijske ograde", href: "/usluge/aluminijske-ograde" },
  },
  {
    slug: "koliko-kosta-aluminijska-ograda",
    title: "Koliko košta aluminijska ograda? Šta utiče na cijenu",
    metaTitle: "Koliko Košta Aluminijska Ograda?",
    metaDescription:
      "Cijena aluminijske ograde zavisi od dužine, visine, modela i kapije. Objašnjavamo šta utiče na cijenu i kako do tačne ponude po mjeri, bez skrivenih troškova.",
    keywords: [
      "koliko košta aluminijska ograda",
      "koliko kosta aluminijumska ograda",
      "cijena aluminijske ograde",
      "aluminijska ograda cijena",
    ],
    excerpt:
      "Ne postoji jedna cifra jer svaka ograda je po mjeri. Evo šta određuje cijenu i kako dobiti tačnu ponudu.",
    heroImage: "/images/projekti/kamena-ograda-1.jpg",
    date: "2026-07-18",
    readingMinutes: 5,
    body: [
      { type: "p", text: "Najčešće pitanje prije kupovine ograde je koliko košta. Pošten odgovor je da ne postoji jedna cijena, jer se aluminijska ograda radi po mjeri. Dva dvorišta rijetko traže istu ogradu, pa se i cijena razlikuje." },
      { type: "p", text: "Umjesto nasumične cifre, korisnije je razumjeti šta određuje cijenu, da znate na čemu je zasnovana ponuda koju dobijete." },
      { type: "h2", text: "Šta utiče na cijenu" },
      { type: "ul", items: [
        "Dužina ograde: više metara znači više materijala i rada.",
        "Visina: viša ograda traži više profila.",
        "Model i gustina ispune: puni paneli i gušće šipke troše više materijala od rijetkih.",
        "Kapije: pješačke i ulazne kapije, posebno s motorom i daljinskim, dodaju na cijenu.",
        "Teren i montaža: nagib, tip podloge i pristup utiču na rad.",
        "Boja i završna obrada: posebni tonovi mogu uticati na cijenu.",
      ] },
      { type: "h2", text: "Zašto ponuda po mjeri" },
      { type: "p", text: "Ponuda po mjeri je jedini način da dobijete tačnu cijenu, a ne procjenu koja se kasnije mijenja. Kad izmjerimo na licu mjesta i dogovorimo model, cijena je fiksna i držimo je se, kao i dogovorenog roka." },
      { type: "h2", text: "Kako dobiti ponudu" },
      { type: "p", text: "Pozovite 062 543 464 i dogovorite izlazak. Mjerenje i ponuda su bez obaveze. Na osnovu dimenzija, modela i kapije dobijate jasnu cijenu, a mi sve izrađujemo i montiramo sami, uz pisanu garanciju." },
    ],
    faq: [
      { q: "Zašto ne objavljujete cijenu po metru?", a: "Jer bi bila netačna. Cijena zavisi od visine, modela, kapija i terena, pa fiksna cifra po metru vodi u pogrešna očekivanja. Ponuda po mjeri je tačnija i poštenija." },
      { q: "Je li mjerenje i ponuda besplatno?", a: "Da, izlazak, mjerenje i ponuda su bez obaveze. Tek kad se dogovorimo, krećemo u izradu." },
      { q: "Držite li se dogovorene cijene?", a: "Da. Nakon ponude cijena je fiksna i držimo se dogovorenog roka i cijene." },
    ],
    relatedService: { label: "Aluminijske ograde", href: "/usluge/aluminijske-ograde" },
  },
  {
    slug: "koliko-kosta-aluminijska-nadstresnica",
    title: "Koliko košta aluminijska nadstrešnica? Šta utiče na cijenu",
    metaTitle: "Koliko Košta Aluminijska Nadstrešnica?",
    metaDescription:
      "Cijena aluminijske nadstrešnice zavisi od površine, raspona, pokrova i montaže. Objašnjavamo svaku stavku i kako do tačne ponude za carport ili terasu.",
    keywords: [
      "aluminijske nadstrešnice cijena",
      "alu nadstrešnice cijena",
      "koliko košta nadstrešnica",
      "cijena nadstrešnice za auto",
      "carport cijena",
      "nadstrešnica za terasu cijena",
    ],
    excerpt:
      "Nadstrešnica se računa po kvadratu, ali kvadrat nije isti za svaki objekat. Evo šest stavki koje pomjeraju cijenu i kako dobiti tačnu ponudu.",
    heroImage: "/images/hero-img.jpg",
    date: "2026-09-09",
    readingMinutes: 6,
    body: [
      { type: "p", text: "Prvo pitanje prije naručivanja nadstrešnice je koliko košta. Cijena aluminijske nadstrešnice računa se po kvadratu natkrivene površine, ali taj kvadrat nije isti za carport na sredini dvorišta i za nadstrešnicu vezanu za fasadu. Zato ista površina zna imati osjetno različitu cijenu." },
      { type: "p", text: "Umjesto cifre koja se poslije mijenja, korisnije je znati šta ulazi u ponudu. Kad razumijete stavke, lako uporedite dvije ponude i vidite gdje se zapravo razlikuju." },
      { type: "h2", text: "Šta utiče na cijenu nadstrešnice" },
      { type: "ul", items: [
        "Površina: više kvadrata znači više profila i pokrova.",
        "Raspon između stubova: veliki raspon bez srednjeg stuba traži jači profil, pa nosiva konstrukcija poskupi.",
        "Pokrov: trapezni lim je najpovoljniji, komorni polikarbonat je u sredini, kaljeno staklo je najskuplje.",
        "Tip montaže: samostojeći carport ima više stubova i stopa od nadstrešnice vezane za fasadu, pa košta više.",
        "Podloga: ako nema betonske ploče, treba izliti temeljne stope, što je poseban trošak.",
        "Dodaci: oluk, boja po RAL kartici, rasvjeta i bočne ispune računaju se odvojeno.",
      ] },
      { type: "h2", text: "Koliko pokrov mijenja cijenu" },
      { type: "p", text: "Nosiva konstrukcija je uvijek aluminijska, pa najveću razliku u cijeni pravi izbor pokrova. Tri rješenja pokrivaju gotovo sve situacije." },
      { type: "table", headers: ["Pokrov", "Nivo cijene", "Svjetlo ispod", "Najčešće za"], rows: [
        ["Trapezni lim", "Najpovoljniji", "Ne propušta, puna sjena", "Dvorište, ekonomski objekti"],
        ["Komorni polikarbonat", "Srednji", "Propušta difuzno", "Carport, prilaz, ulaz"],
        ["Kaljeno staklo", "Najskuplji", "Propušta bistro", "Terasa uz kuću"],
      ] },
      { type: "p", text: "Polikarbonat je najčešći izbor za carport jer je lagan, dobro podnosi grad i propušta svjetlo, pa dvorište ne ostaje u mraku. Staklo se bira za terase gdje je izgled važan i gdje se pokrov redovno pere." },
      { type: "h2", text: "Zašto carport košta više od nadstrešnice uz kuću" },
      { type: "p", text: "Nadstrešnica uz kuću jednom stranom se veže za fasadu, pa nosi manje stubova i traži manje temeljnih stopa. Samostojeći carport mora stajati sam, sa stubovima na obje strane i jačim vezama, pa je i materijala i rada više." },
      { type: "p", text: "Ako imate raspoloživ zid uz prilaz, nadstrešnica vezana za fasadu obično je povoljnije rješenje za isti broj kvadrata. Kada je parking na sredini dvorišta, samostojeći carport je jedina opcija." },
      { type: "h2", text: "Šta se često zaboravi u računici" },
      { type: "p", text: "Dvije stavke najčešće iznenade. Prva je podloga: ako se nadstrešnica postavlja na zemlju ili šljunak, treba izliti temeljne stope i sačekati da beton očvrsne, pa se produžava i rok. Druga je odvod vode, jer bez oluka voda s pokrova pada uz temelj ili uz zid kuće." },
      { type: "p", text: "Obje stavke se lako previde u ponudi preko telefona, a vide se odmah na terenu. Zato izlazak i mjerenje uvijek daju tačniju cifru od procjene na osnovu opisa." },
      { type: "h2", text: "Kako dobiti tačnu cijenu" },
      { type: "p", text: "Pozovite 062 543 464 i dogovorite izlazak. Izmjerimo prostor, provjerimo podlogu i raspon, dogovorimo pokrov i boju, pa dobijete jasnu cijenu. Mjerenje i ponuda su besplatni i bez obaveze, a nakon dogovora cijena je fiksna." },
      { type: "p", text: "Sve izrađujemo i montiramo sami, bez podizvođača, uz pisanu garanciju na rad. Radimo po cijeloj BiH, a po dogovoru i u Hrvatskoj, Sloveniji i Austriji." },
    ],
    faq: [
      { q: "Koliko košta aluminijska nadstrešnica po kvadratu?", a: "Ne postoji jedna cifra po kvadratu jer se cijena mijenja s rasponom, pokrovom i tipom montaže. Isti broj kvadrata košta različito za samostojeći carport i za nadstrešnicu vezanu za fasadu. Tačnu cijenu dajemo nakon mjerenja na licu mjesta." },
      { q: "Koji pokrov je najjeftiniji za nadstrešnicu?", a: "Trapezni lim je najpovoljniji i daje punu sjenu, pa se često bira za dvorište i ekonomske objekte. Komorni polikarbonat je nešto skuplji, ali propušta svjetlo. Kaljeno staklo je najskuplja opcija i bira se uglavnom za terase." },
      { q: "Je li mjerenje i ponuda besplatno?", a: "Da, izlazak na teren, mjerenje i ponuda su bez obaveze. Tek kad se dogovorimo oko modela, pokrova i cijene, krećemo u izradu. Nakon ponude cijena je fiksna i držimo se dogovorenog roka." },
      { q: "Treba li nadstrešnici betonska podloga?", a: "Stubovi se sidre u temeljne stope, pa ako nema betonske ploče, stope treba izliti. To je poseban trošak i traži vrijeme da beton očvrsne. Ako već imate betonirani prilaz, montaža je brža i jeftinija." },
    ],
    relatedService: { label: "Aluminijske nadstrešnice", href: "/usluge/nadstresnice" },
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Najnoviji prvi
export const BLOG_POSTS_SORTED = [...BLOG_POSTS].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date)
);
