# ALU LINE Systems — SEO / GEO / AEO Master Plan

> Konsolidovan plan iz cijelog rada. Spreman za implementaciju odjednom.
> Sajt: `https://www.alu-line-systems.com` · Lokalni biznis, Srebrenik BiH · Next.js 14 (App Router).
> Cilj: više organske trafike, bolje pozicioniranje na Googlu, vidljivost u AI pretragama, bez thin/doorway sadržaja.

---

## 0. Kako koristiti ovaj dokument

Sve je grupisano u **faze**. Svaka faza ima konkretne zadatke po fajlu. Većina sadržajnih izmjena je u dva fajla:
- `lib/content.ts` — uslužne i lokacijske stranice
- `lib/blog.ts` — blog članci

Meta/naslovi su u `generateMetadata` funkcijama ruta i u `app/layout.tsx`.

Nakon svake faze: `npx next build` mora proći, pa `git` radi korisnik ručno (ništa se ne commita ni pushuje automatski).

---

## 1. Status — šta je VEĆ urađeno

### ✅ Prioritet 2 — Tehnički SEO (gotovo)
- `LocalBusiness` (`HomeAndConstructionBusiness`) JSON-LD u `app/layout.tsx`
- `metadataBase`, canonical, Twitter card, OG slika, robots direktive
- `app/sitemap.ts` (17 URL-ova), `app/robots.ts`
- Centralna konfiguracija `lib/site.ts` (domen, NAP, radno vrijeme, areaServed)

### ✅ Prioritet 3 — Arhitektura stranica (gotovo)
- 4 uslužne: `/usluge/{aluminijske-ograde, roletne, garazna-i-sekcijska-vrata, nadstresnice}`
- 4 lokacijske: `/lokacije/{srebrenik, tuzla, gracanica, gradacac}`
- 2 hub-a: `/usluge`, `/lokacije`
- Svaka ima `Service`/`LocalBusiness` + `BreadcrumbList` + `FAQPage` JSON-LD, interno linkovanje
- Navbar/Footer linkovi rade sa podstranica (`/#sekcija`)

### ✅ Prioritet 4 — Blog (gotovo)
- `/blog` + 5 članaka (`lib/blog.ts`), `Article` + `Breadcrumb` + `FAQPage` schema
- Ciljaju stvarne Ahrefs ključne riječi (ograda za dvorište, panelna, kovana, balkon, cijena)

### ⛔ Prioritet 1 — Google Business Profile (NIJE, van koda — korisnik radi)
Najveći pojedinačni izvor lokalnih poziva. Vidi §8.

---

## 2. Nalaz revizije sadržaja (izmjereno)

| Stranica | Riječi (body) | Problem |
|----------|--------------:|---------|
| `/usluge/aluminijske-ograde` | ~335 | plitko za konkurentan termin |
| `/usluge/roletne` | ~261 | plitko |
| `/usluge/garazna-i-sekcijska-vrata` | ~276 | plitko |
| `/usluge/nadstresnice` | ~198 | vrlo plitko |
| `/lokacije/*` (4) | **136–159** | **thin + repetitivno → doorway rizik** |
| Blog (5) | ~400–650 | ok; pillar teme mogu dublje |

**4 glavna problema:**
1. Lokacijske stranice skoro identične → Google ih može tretirati kao doorway (ignorisati/kazniti).
2. Uslužne stranice pretanke za konkurenciju (cilj 600+ riječi).
3. Ključne riječi se rijetko ponavljaju u body tekstu; H2 ne nose keyword; nema keyworda u prvih 100 riječi.
4. FAQ nije u AEO/GEO formatu (pitanje-naslov + direktan odgovor 40-60 riječi), pa gubimo AI Overviews / featured snippet priliku.

---

## 3. Pravila pisanja (primjenjuje se na SVE tekstove)

**Copywriting (iz skilla):**
- Jasnoća prije doskočica. Benefit prije osobine. Konkretno prije uopšteno.
- Jezik kupca ("ograda za dvorište", "koliko košta"), ne firmin žargon.
- Jedna ideja po sekciji, logičan tok ka pozivu.
- Jaki CTA: "Zatraži besplatnu ponudu", "Pozovi 062 543 464" (ne "Pošalji").

**House style / humanizer (obavezno):**
- **Bez em dasheva (—)** u vidljivom tekstu. Koristi zarez, tačku ili zagradu. (Repo već ima "drop em dashes" konvenciju.)
- Bez AI-filler fraza: "u današnjem svijetu", "kada je riječ o", "nije tajna da", "bilo da...".
- Bez "rule of three" nabrajanja radi ritma. Bez uzvičnika.
- Kratke rečenice, aktivni glagoli ("izrađujemo i montiramo", ne "montaža se vrši").

**SEO on-page (iz seo-audit):**
- Jedan `<h1>` po stranici, sadrži primarni keyword.
- Primarni keyword u **prvih 100 riječi** teksta.
- H2 naslovi nose keyword varijante i, gdje ima smisla, formu pitanja (AEO).
- Opisni interni anchor tekst (ne "saznaj više" svugdje — vidi §7).
- Bez keyword cannibalization (vidi keyword mapu §6).

---

## 4. FAZA A — Naslovi i meta opisi (brzo, veliki učinak)

**Problem:** template `%s | ALU LINE Systems` + dugi metaTitle = naslovi ~72-76 znakova, odsijecaju se u SERP-u. Cilj **≤ 60 znakova** (uključujući brend), meta opis **150-160**.

**Rješenje:** koristi apsolutne, kraće naslove. Tabela izmjena:

| Ruta | Novi `title` (≤60) |
|------|--------------------|
| `/` (layout.tsx) | `Aluminijske Ograde, Roletne i Vrata | ALU LINE` |
| `/usluge/aluminijske-ograde` | `Aluminijske Ograde po Mjeri | ALU LINE Systems` |
| `/usluge/roletne` | `Roletne po Mjeri, ALU i PVC | ALU LINE Systems` |
| `/usluge/garazna-i-sekcijska-vrata` | `Garažna Rolo i Sekcijska Vrata | ALU LINE` |
| `/usluge/nadstresnice` | `Aluminijske Nadstrešnice | ALU LINE Systems` |
| `/lokacije/srebrenik` | `Aluminijske Ograde Srebrenik | ALU LINE` |
| `/lokacije/tuzla` | `Aluminijske Ograde Tuzla | ALU LINE` |
| `/lokacije/gracanica` | `Aluminijske Ograde Gračanica | ALU LINE` |
| `/lokacije/gradacac` | `Aluminijske Ograde Gradačac | ALU LINE` |

> Napomena: metaTitle za lokacije već čisti od "| ALU LINE" duplikata; template dodaje brend. Ako naslov + brend prelazi 60, postavi `title: { absolute: "..." }` u `generateMetadata`.

Meta opisi: provjeri da svaki ima 150-160 znakova, primarni keyword i CTA ("Pozovite 062 543 464"). Većina već zadovoljava; skratiti one preko 160.

---

## 5. FAZA B — Uslužne stranice (proširiti na 600+ riječi)

Za svaku od 4 uslužne stranice u `lib/content.ts`, proširiti `intro` + dodati nove sekcije. Preporučena struktura (H2 nose keyword + formu pitanja gdje paše):

1. **Intro (2-3 pasusa)** — primarni keyword u prve 1-2 rečenice.
2. **H2: Prednosti [proizvoda]** — benefiti, ne osobine.
3. **H2: [Vrste/modeli]** — postojeći `features` + prošireni opisi.
4. **H2: Kako biramo mjeru i montiramo** — proces (mjerenje → izrada → montaža → garancija). Gradi E-E-A-T (iskustvo).
5. **H2: Zašto ALU LINE** — 10+ godina, sve radimo sami, pisana garancija, područje rada.
6. **Galerija** (postojeća).
7. **FAQ** (prošireno, AEO format — vidi §7 dio o FAQ).

**Per-page keyword fokus (primarni + sekundarni):**

| Stranica | Primarni | Sekundarni (utkati prirodno) |
|----------|----------|------------------------------|
| aluminijske-ograde | aluminijska ograda / aluminijske ograde | ograda za dvorište, dvorišne ograde, balkonske ograde, kovana vs aluminijska, aluminijske kapije, panelna ograda (poređenje) |
| roletne | roletne | nadgradne roletne, podgradne roletne, aluminijske roletne, roletne za PVC, roletne cijena |
| garazna-i-sekcijska-vrata | garažna vrata | rolo vrata, sekcijska vrata, industrijska vrata, garažna vrata daljinsko |
| nadstresnice | aluminijske nadstrešnice | nadstrešnica za auto, nadstrešnica za terasu, nadstrešnica za ulaz |

**GEO faktička gustina (iz seo-geo-aeo):** ubaci konkretne, citabilne činjenice koje AI voli citirati: "aluminij ne rđa jer ne sadrži željezo", "plastifikacija drži boju godinama", "10+ godina iskustva", "sve izrađujemo i montiramo sami, bez podizvođača". To su i E-E-A-T signali.

---

## 6. FAZA C — Lokacijske stranice (anti-doorway, 350+ riječi, JEDINSTVENO)

**Ovo je najvažnija faza.** Cilj: 4 stranice koje Google vidi kao genuinno korisne, ne kopije. Svaka mora imati **jedinstven** uvod, jedinstven FAQ i lokalni kontekst.

**Zajednička struktura (ali unikatni tekst po gradu):**
1. H1: `Aluminijske ograde, roletne i vrata u [grad]` (postoji).
2. Intro (3 pasusa) — **unikatno po gradu**, primarni keyword `aluminijske ograde [grad]` u prvih 100 riječi.
3. H2: `Naše usluge u [grad]` — 4 usluge, svaka s rečenicom vezanom za grad.
4. H2: `Zašto mještani [grada] biraju nas` — lokalni ugao (vidi dolje).
5. H2: FAQ (unikatna pitanja po gradu, AEO format).
6. Interni linkovi ka uslugama + drugim gradovima + `ContactSection` (mapa, NAP).

**Unikatni lokalni ugao po gradu (da NIJE doorway):**

| Grad | Jedinstven ugao (piši iskreno, bez izmišljanja) |
|------|--------------------------------------------------|
| **Srebrenik** | Sjedište firme. Naglasak: najbrži izlazak i montaža, reference u gradu, poznajemo lokalni teren. |
| **Tuzla** | Najveći grad u kantonu, mnogo stanova/zgrada → naglasak **balkonske ograde i roletne za stambene objekte**, uz dvorišne ograde za kuće u prigradskim naseljima. |
| **Gračanica** | Blizu Srebrenika, kraj s tradicijom porodičnih kuća i dvorišta → naglasak **dvorišne ograde i ulazne kapije**. |
| **Gradačac** | Pokrivamo grad i okolinu; naglasak **nadstrešnice i ograde za porodične kuće**. Spomen da radimo šire područje (Modriča, Srnice) ako je tačno. |

**Pravila protiv doorway penala (seo-audit → Local Business):**
- NAP identičan svugdje (062 543 464, Srebrenik) — konzistentnost je faktor.
- Ne ponavljati iste rečenice između gradova. Svaki intro napisan iznova.
- Ne praviti novi grad ako mu ne možemo dati genuinno drugačiji sadržaj (bolje 4 dobre nego 10 tankih).
- `areaServed` u schema po gradu (postoji).

> **Napomena:** skill `programmatic-seo` NIJE poslan. Za 4 grada ne treba — ovo se radi ručno i kvalitetnije. Ako kasnije želiš 10+ gradova/naselja skalirati, tada pošalji `programmatic-seo` (kako generisati unikatne stranice iz podatkovnih tačaka bez thin sadržaja).

---

## 7. FAZA D — FAQ svugdje (AEO / GEO optimizacija)

Iz **seo-geo-aeo**: featured snippet i AI Overviews biraju sadržaj gdje je pitanje-naslov + **direktan odgovor u 40-60 riječi** odmah ispod.

**Pravila za svaki FAQ odgovor:**
- Pitanje formulisano kako ljudi kucaju/pitaju ("Koliko košta aluminijska ograda?", "Da li aluminijska ograda rđa?").
- Prva rečenica = direktan odgovor (40-60 riječi), pa detalj.
- Ubaci prirodno primarni keyword.
- Min. 3-4 FAQ po uslužnoj/lokacijskoj stranici, 3+ po blogu.

**Dodati FAQ gdje fali** (npr. lokacije imaju samo 2 → dodati na 3-4, unikatno po gradu).

**Schema dodaci (GEO/AEO):**
- `FAQPage` — već imamo svuda. Zadržati.
- `HowTo` — dodati na blog "kako se postavlja panelna ograda" ako ga napišemo (koraci montaže).
- `SpeakableSpecification` — dodati na FAQ sekcije (glasovna pretraga). Nisko-rizičan dodatak u postojeći JSON-LD.
- `Organization` `sameAs` — dodati Facebook (imamo) + Google Business Profile URL kad se napravi (jača entity graph za AI).

---

## 8. FAZA E — Blog (produbiti + proširiti)

- **Pillar "ograda za dvorište"** → produbiti na 900+ riječi (najširi termin, najveći volumen). Dodati H2: tabela poređenja (panelna vs kovana vs aluminijska) — tabele hvataju table featured snippet.
- H2 naslovi u formi pitanja gdje paše.
- Svaki članak: keyword u prvih 100 riječi, interni link ka `/usluge/aluminijske-ograde` s **keyword-rich anchorom** (ne "ovdje").
- **Sljedeći članci (kad korisnik pošalje volumene):** "kako se postavlja panelna ograda" (+HowTo schema), teme za roletne i garažna vrata (blog je trenutno fence-težak).

---

## 9. Interno linkovanje (anchor tekst plan)

Trenutno dosta "Saznaj više". Zamijeniti opisnim, keyword-rich anchorima:

| Umjesto | Koristi |
|---------|---------|
| "Saznaj više" | "Aluminijske ograde po mjeri" |
| "Pogledaj uslugu" | "Roletne za ALU i PVC sisteme" |
| Blog → usluga "ovdje" | "izrada aluminijskih ograda po mjeri" |
| Lokacija → usluga | "aluminijske ograde u [grad]" |

Zadržati postojeće `InternalLinks` blokove, samo poboljšati anchor tekst i osigurati da svaka nova/plitka stranica ima ≥2 interna linka koja vode ka njoj (nema orphan stranica).

---

## 10. Keyword mapa (protiv cannibalization)

Jedna stranica = jedan primarni keyword. Provjereno da se ne biju:

| URL | Primarni keyword | Namjera |
|-----|------------------|---------|
| `/` | aluminijske ograde roletne vrata Srebrenik | brand + local |
| `/usluge/aluminijske-ograde` | aluminijska ograda (info+prodaja) | komercijalno |
| `/usluge/roletne` | roletne | komercijalno |
| `/usluge/garazna-i-sekcijska-vrata` | garažna vrata | komercijalno |
| `/usluge/nadstresnice` | aluminijske nadstrešnice | komercijalno |
| `/lokacije/tuzla` | aluminijske ograde Tuzla | local komercijalno |
| `/lokacije/gracanica` | aluminijske ograde Gračanica | local |
| `/lokacije/gradacac` | aluminijske ograde Gradačac | local |
| `/lokacije/srebrenik` | aluminijske ograde Srebrenik | local |
| `/blog/ograda-za-dvoriste...` | ograda za dvorište | informativno (pillar) |
| `/blog/panelna-ili-aluminijska-ograda` | panelna ograda | informativno |
| `/blog/aluminijska-ili-kovana-ograda` | kovana ograda | informativno |
| `/blog/ograda-za-balkon...` | ograda za balkon | informativno |
| `/blog/koliko-kosta-aluminijska-ograda` | koliko košta aluminijska ograda | informativno |

Blog (informativno) hvata istraživanje i linkuje ka uslugama (komercijalno) → nema preklapanja namjere.

---

## 11. Prioritet 1 — Google Business Profile (KORISNIK, van koda)

Najveći izvor lokalnih poziva. Koraci:
1. Registruj/preuzmi na business.google.com. Kategorija: proizvođač aluminijskih proizvoda / izrada ograda.
2. NAP **identičan** sajtu: telefon 062 543 464, Srebrenik. (Kad dobiješ tačnu ulicu → upiši u `lib/site.ts` `street` i u GBP.)
3. 15-20 fotografija stvarnih radova.
4. Zamoli 5-10 klijenata za recenzije (recenzije = #1 faktor za local pack).
5. Dodaj GBP URL u `sameAs` (layout.tsx JSON-LD) kad ga dobiješ.

---

## 12. Redoslijed implementacije (jedan prolaz)

1. **Faza A** — naslovi/meta (layout.tsx + 10 `generateMetadata`).
2. **Faza C** — lokacijske stranice (najveći rizik) — unikatni sadržaj u `lib/content.ts`.
3. **Faza B** — uslužne stranice na 600+ u `lib/content.ts`.
4. **Faza D** — FAQ AEO format + dopune, svuda; Speakable schema.
5. **Faza E** — blog produbljivanje (`lib/blog.ts`).
6. **Faza F (interno linkovanje)** — anchor tekst u komponentama.
7. **humanizer prolaz** — pročešljati sve nove tekstove (em dashevi, filler).
8. `npx next build` — mora proći. Provjera ćirilice (`python` skripta korištena ranije).
9. Korisnik: git commit/push + GBP (Prioritet 1) + GSC "Request Indexing".

**Nakon deploya (GSC):** dodaj sitemap, zatraži indeksiranje ključnih stranica, provjeri Rich Results Test (Service/FAQ/Article/Breadcrumb + novi Speakable).

---

## 13. Mjerenje uspjeha

- **GSC → Performance:** rast impresija/klikova po stranici i po upitu (2-8 sedmica za nove stranice).
- **GSC → Pages:** da su sve nove stranice "Indexed", bez "Crawled - not indexed" (znak thin sadržaja → produbi).
- **Local pack / GBP Insights:** pozivi, "kako doći", pregledi profila.
- **Rich Results / AI:** pojava FAQ rich rezultata; praćenje da li se pojavljujemo u AI Overviews za "aluminijske ograde [grad]".

---

## 14. Skillovi korišteni / preostali

Korišteno: `content-strategy`, `copywriting`, `seo-audit`, `seo-geo-aeo`, `humanizer` (lokalno), `seo-in-nextjs` (lokalno).

Opciono kasnije:
- `programmatic-seo` — ako se skalira na 10+ gradova/naselja bez thin sadržaja.
- `schema` — ako želimo napredne tipove (Product, Offer s cijenama, AggregateRating iz GBP recenzija).
- `ai-seo` — dublje LLM-citation taktike (preklapa se s geo-aeo).
