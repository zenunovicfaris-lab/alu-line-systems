# ALU LINE Systems — Detaljan pregled projekta

> Kompletan opis: šta je projekat, kakav je sajt, dizajn, UI/UX, struktura, tehnologija i sve što je urađeno.
> Domen: `https://www.alu-line-systems.com`

---

## 1. Šta je ovo (biznis)

**ALU LINE Systems** je zanatska firma iz **Srebrenika, Bosna i Hercegovina**. Izrađuje i montira aluminijske sisteme i vrata po mjeri, po narudžbi. Sve radi sama (izrada + montaža), bez podizvođača, uz pisanu garanciju na rad.

**Proizvodi / usluge:**
- **Aluminijske ograde** — dvorišne, balkonske, grilje ograde
- **Kapije** — klizne (s motorom, na daljinski) i pješačke
- **Roletne** — nadgradne i podgradne, za aluminijske i PVC sisteme
- **Garažna vrata** — rolo, sekcijska, industrijska, s daljinskim upravljanjem
- **Nadstrešnice** — za auto (carport), ulaz i terasu
- **Drvena vrata** — sobna (unutrašnja) i ulazna, po narudžbi, s dovratnikom

**Područje rada:** cijela BiH (sjedište Srebrenik; redovno Tuzla, Gračanica, Gradačac i okolina), te **Hrvatska, Slovenija i Austrija**.

**Kontakt:** telefon / WhatsApp / Viber **062 543 464**, Facebook stranica, Srebrenik. Radno vrijeme Pon–Sub 08:00–17:00.

**Ciljna publika:** vlasnici kuća i stanova u Tuzlanskom kantonu koji traže ograde/roletne/vrata po mjeri, plus dijaspora iz BiH u HR/SI/AT koja želi majstora iz kraja.

---

## 2. Tehnologija (stack)

| Sloj | Tehnologija |
|------|-------------|
| Framework | **Next.js 14.2.35** (App Router) |
| Jezik | **TypeScript 5** |
| UI biblioteka | **React 18** |
| Stilizacija | **Tailwind CSS 3.4.1** |
| Animacije | **Framer Motion 12** |
| Ikonice | **lucide-react** |
| Font | **Outfit** (Google font, preko `next/font`, težine 100–900) |
| Rendering | **Statički (SSG)** — sve stranice se prerenderuju u statički HTML |

**Karakteristike:**
- Svih 21 stranica su statične (brzo učitavanje, jeftin hosting, dobro za SEO).
- `next/image` za optimizaciju slika (lazy load, responsive `sizes`).
- Nema baze podataka — sadržaj je u TypeScript fajlovima (`lib/`), što je brzo i lako za održavanje.

---

## 3. Dizajn sistem

### Boje (`tailwind.config.ts`)
| Naziv | Hex | Upotreba |
|-------|-----|----------|
| `alu-blue` | `#143c5f` | primarna, akcenti, dugmad, linkovi |
| `alu-dark` | `#0f1620` | tamne sekcije (hero, kontakt, footer) |
| `alu-gray` | `#f8fafc` | svijetla pozadina kartica |
| `alu-light` | `#1e5a8a` | hover na dugmadima |
| `alu-text` | `#556f7e` | prigušen tekst |

### Tipografija
- **Outfit** kroz cijeli sajt. Naslovi debeli (`font-black`, 800–900), tijelo lagano.
- Veliki, čvrsti naslovi (`text-4xl` do `text-6xl`), prošireni razmak slova (`tracking-tight` / `tracking-widest`).

### Vizuelni jezik
- **Moderno, čisto, dosta praznog prostora.** Zaobljene kartice (`rounded-2xl`), tanke sive ivice (`border-gray-100`), meke sjene (`shadow-xl` s plavim tonom).
- **Kontrast svijetlo/tamno:** svijetle sekcije s bijelom/sivom pozadinom, tamne sekcije (hero, kontakt, footer) na `alu-dark` s plavim radijalnim akcentima.
- **Suptilni pozadinski akcenti:** radijalni gradijenti, mrežasti uzorci i gradijentne linije niske prozirnosti (0.02–0.15).
- **Konzistentan easing:** custom kubna kriva `[0.22, 1, 0.36, 1]` za sve tranzicije.

### Animacije (Framer Motion)
- **Scroll reveal:** elementi ulaze uz fade + pomak (`useInView` / `whileInView`, `once: true`).
- **Stagger:** kartice se pojavljuju jedna za drugom (`staggerChildren`).
- **Hover:** blago uvećanje (`scale`), pomak strelica (`translate-x`), rast sjene.
- **Custom keyframes** u Tailwindu: `float`, `glow-pulse` (definisani, dostupni).

---

## 4. UI/UX detaljno

### Navbar (`components/Navbar.tsx`)
- **Fiksiran** na vrhu. Preko hera je **proziran s bijelim tekstom**; nakon skrola postaje **frosted-bijeli** (`backdrop-blur-xl`, sjena).
- **Desktop:** logo + linkovi (Početna, Usluge, Lokacije, Blog, Projekti, Kontakt) + telefon + dugme "Zatraži Ponudu".
- **Mobitel:** hamburger → **slide-in panel** zdesna s backdrop-blur pozadinom, animirane stavke, CTA dugmad.
- **Animirana linija** ispod aktivne stavke — prati **stvarnu stranicu** (`pathname`), radi na svim podstranicama.
- **Pametna navigacija:** hash-linkovi (`#kontakt`) na homepageu skrolaju glatko; s podstranica vode na `/#kontakt`; prave rute (`/usluge`) idu preko routera.

### Homepage (jedan scroll) — redoslijed sekcija
1. **HeroSection** — pozadinski video/slika, glavni naslov, CTA, logotipi brendova (REHAU, Salamander, Schüco, VEKA).
2. **ProjectsSection** — galerija realizovanih projekata (prikazuje prva 4, "Prikaži više/manje" toggle).
3. **ProductsSection** (`id="usluge"`) — "Šta nudimo": 3 kartice usluga (ograde/kapije, vrata, roletne) + linkovi na nadstrešnice i drvena vrata + red prednosti (po mjeri, brza montaža, garancija, područje rada).
4. **DoorGallerySection** (`id="galerija-vrata"`) — galerija drvenih vrata s tabovima "Postavljena vrata" / "Katalog vrata", **lightbox** za pregled svih fotografija, link na stranicu drvenih vrata.
5. **ReviewsSection** — recenzije / utisci klijenata.
6. **ContactSection** (`id="kontakt"`) — telefon, lokacija, radno vrijeme, dugme za ponudu, Facebook, **Google Maps embed** (tamno filtriran), stat traka (10+ godina, 100+ klijenata, Europa).
7. **Footer** — brend, brzi linkovi, kolona Usluge (svih 5), kolona Lokacije (svih 7), telefon, Facebook, kredit izrađivaču.
8. **ScrollToTop** — dugme za povratak na vrh.

### UX principi primijenjeni
- **Mobile-first responsive** — sve mreže se sažimaju, mobilni meni, slike `max-width:100%`.
- **CTA na svakom koraku** — telefon/WhatsApp/Viber i "Zatraži ponudu" ponavljaju se logično.
- **Glatko skrolanje** za sidra, **lightbox** za slike, **akordeoni** za FAQ.
- **Konzistentnost** — iste kartice, boje, razmaci i animacije na svim stranicama (podstranice izgledaju native).

> Napomena: komponente `AboutSection.tsx`, `CtaSection.tsx`, `GallerySection.tsx` postoje u kodu ali **nisu** u trenutnom homepage sastavu (ranije verzije / rezerva).

---

## 5. Struktura stranica (21 URL)

```
/                                  Homepage (jedan scroll)
│
├── /usluge                        Hub usluga (5 kartica)
│   ├── /usluge/aluminijske-ograde
│   ├── /usluge/roletne
│   ├── /usluge/garazna-i-sekcijska-vrata
│   ├── /usluge/nadstresnice
│   └── /usluge/drvena-vrata
│
├── /lokacije                      Hub lokacija (7 kartica)
│   ├── /lokacije/srebrenik
│   ├── /lokacije/tuzla
│   ├── /lokacije/gracanica
│   ├── /lokacije/gradacac
│   ├── /lokacije/slovenija
│   ├── /lokacije/hrvatska
│   └── /lokacije/austrija
│
├── /blog                          Hub bloga (featured + grid)
│   ├── /blog/ograda-za-dvoriste-vrste-i-kako-izabrati   (pillar, ~650 riječi + tabela)
│   ├── /blog/panelna-ili-aluminijska-ograda
│   ├── /blog/aluminijska-ili-kovana-ograda
│   ├── /blog/ograda-za-balkon-aluminijske-balkonske-ograde
│   └── /blog/koliko-kosta-aluminijska-ograda
│
├── /sitemap.xml                   Auto-generisan (21 URL)
└── /robots.txt                    Auto-generisan (+ link na sitemap)
```

### Anatomija podstranice
- **Uslužne:** tamni hero (breadcrumb, H1, uvod, CTA) → prose sekcije (2–3 H2) → grid "Šta nudimo" → galerija radova → FAQ → interni linkovi → kontakt → footer.
- **Lokacijske:** hero → jedinstven lokalni tekst (2 H2) → grid usluga u gradu → FAQ → interni linkovi → kontakt → footer.
- **Blog:** hero → meta (datum, vrijeme čitanja) → sadržaj (H2/paragrafi/liste/tabela) → CTA blok → FAQ → "Pročitajte i ovo" → kontakt → footer.

---

## 6. Organizacija koda

```
app/
  layout.tsx              Root: metadata, LocalBusiness JSON-LD, font
  page.tsx                Homepage (slaže sekcije)
  sitemap.ts, robots.ts   SEO rute (auto)
  usluge/                 hub + [slug] (dinamičke uslužne stranice)
  lokacije/               hub + [slug] (dinamičke lokacijske stranice)
  blog/                   hub + [slug] (dinamički članci)

components/
  (homepage sekcije: Navbar, Hero, Projects, Products, DoorGallery, Reviews, Contact, Footer, ScrollToTop)
  subpage/                SubPageHero, ProseSection, FeatureGrid, GalleryGrid, FaqSection, FaqAccordion, InternalLinks
  blog/                   BlogContent (renderuje blokove: paragraf/H2/lista/tabela)

lib/
  site.ts                 Centralna konfiguracija: domen, NAP, radno vrijeme, areaServed, Facebook, GBP
  content.ts              Podaci za 5 uslužnih + 7 lokacijskih stranica
  blog.ts                 Podaci za 5 članaka (blok-struktura sadržaja)
```

**Ključna prednost:** sve tekstualne izmjene i nove stranice rade se izmjenom podataka u `lib/` — bez diranja UI koda. Nova usluga ili lokacija = jedan objekat u nizu, stranica se generiše sama (ruta, meta, schema, sitemap, footer, interni linkovi).

---

## 7. Šta je sve urađeno (SEO / GEO / AEO + funkcionalnost)

### Tehnički SEO
- **LocalBusiness JSON-LD** (`HomeAndConstructionBusiness`) — naziv, telefon, adresa, radno vrijeme, područja rada, katalog usluga, `sameAs` (Facebook + Google Business Profile).
- **`metadataBase`, canonical** na svakoj stranici, **Open Graph + Twitter Card**, robots direktive (`max-image-preview:large`).
- **`sitemap.xml`** (21 URL, auto) i **`robots.txt`** (auto, s linkom na sitemap).
- **Google Search Console** verifikacija (meta tag).

### Arhitektura stranica
- Iz **jedne stranice** napravljena struktura: **5 uslužnih + 7 lokacijskih + 5 blog + 3 hub** stranice.
- Svaka cilja svoju grupu ključnih riječi (nema kanibalizacije).

### Sadržaj (copywriting + humanizer)
- Uslužne stranice proširene na **~350–525 riječi** (klizne kapije, carport dodani iz stvarne ponude).
- Lokacijske stranice s **jedinstvenim tekstom po gradu/zemlji** (~300–340 riječi) — bez "doorway" penala; iskorištene **stvarne reference** (Banovići, Bileća, Međugorje).
- Blog: pillar "ograda za dvorište" **~650 riječi + tabela poređenja** (panelna/kovana/aluminijska).
- **Ključne riječi iz stvarne Ahrefs analize** (ograda za dvorište, panelna ograda, kovana ograda, ograda za balkon, cijena, klizne kapije...).
- **Humanizer prolaz:** bez em dasheva, bez uzvičnika, bez AI-filler fraza (usklađeno s "stop-slop" stilom).

### On-page
- Naslovi **≤60 znakova**, meta opisi **150–160**, jedan `<h1>` po stranici, keyword u prvih 100 riječi, keyword-rich `<h2>`, opisni alt tekstovi.

### Structured data po tipu stranice
- Uslužne: `Service` + `BreadcrumbList` + `FAQPage` + `WebPage/SpeakableSpecification`.
- Lokacijske: `LocalBusiness` + `BreadcrumbList` + `FAQPage` + `Speakable`.
- Blog: `Article` + `BreadcrumbList` + `FAQPage` + `Speakable`.
- **AEO/GEO:** FAQ u formatu direktnog odgovora (za Google AI Overviews / featured snippet), Speakable za glasovnu pretragu, faktička gustina za AI citiranje.

### Interno povezivanje
- **Homepage → svih 5 usluga** (keyword anchori) — ranije 0.
- **Topical cluster:** stranica ograda ↔ 5 blog vodiča (oba smjera).
- `InternalLinks` blokovi na svakoj podstranici (ostale usluge, lokacije, drugi gradovi, drugi članci).
- **Footer** linka svih 5 usluga + svih 7 lokacija + blog; **Navbar** hubove + blog.
- Nema orphan stranica.

### Slike
- Galerije: roletne (6 novih), garažna vrata (3 nove stvarne fotografije).
- Hero slike po usluzi usklađene (roletne, garažna, drvena vrata katalog; nadstrešnice placeholder).
- Ispravljeni pogrešni alt tekstovi (drvena vrata su bila označena kao "garažna").
- Sve putanje case-sensitive uskladjene (za Linux server).

### Nova usluga otkrivena iz materijala
- Na osnovu slika u projektu i FB opisa dodana **stranica drvenih vrata** (postojećih 34 slike) — cijela nova linija proizvoda koja nije bila predstavljena.

### Popravke grešaka (bugfix)
- **Navbar hover** — uklonjen overlay koji je "bijelio" tekst na prelazu miša.
- **Navbar linija** — sada prati stvarnu stranicu (ranije ostajala na prethodnoj nakon navigacije).
- **Nadstrešnice** — uklonjena galerija (nije bilo pravih slika), tekst ostaje i rangira.

### Dokumentacija
- `SEO-MASTER-PLAN.md` — kompletna SEO strategija i plan.
- `PROJECT-OVERVIEW.md` — ovaj dokument.

---

## 8. Šta preostaje (na vlasniku / kasnije)

- **Google Business Profile** — dodavati fotografije radova i prikupljati recenzije (najveći izvor lokalnih poziva).
- **Deploy + Search Console** — dodati sitemap, zatražiti indeksiranje (21 URL).
- **Slike nadstrešnica/carporta** — kad se naslikaju, zamijeniti placeholder.
- **Tačna ulica** — kad bude poznata, upisati u `lib/site.ts` (jača lokalni NAP u schemi).
- **Više blog članaka** — za roletne i garažna vrata (blog je trenutno fokusiran na ograde).
- **Verzije na stranim jezicima** — ako se cilja domaće tržište HR/SI/AT (hrvatski, slovenački, njemački).
