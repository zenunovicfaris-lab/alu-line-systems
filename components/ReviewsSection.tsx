"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const avatarColors = [
  "#4285F4",
  "#EA4335",
  "#34A853",
  "#9C27B0",
  "#FF6D00",
];

const reviews = [
  {
    name: "Emir Hadžić",
    location: "Srebrenik",
    initials: "EH",
    text: "Ugradili su nam aluminijsku ogradu oko cijelog dvorišta. Kvalitet materijala je odličan, a majstori su bili precizni i uredni. Sve preporučujem!",
    time: "prije 2 mjeseca",
  },
  {
    name: "Amina Delić",
    location: "Tuzla",
    initials: "AD",
    text: "Naručili smo roletne za cijelu kuću. Brza isporuka, profesionalna ugradnja i fer cijena. Definitivno ćemo opet sarađivati.",
    time: "prije 3 mjeseca",
  },
  {
    name: "Nedim Kovačević",
    location: "Bileća",
    initials: "NK",
    text: "Grilje ograda sa kapijom - izgledaju fantastično. Komšije stalno pitaju gdje smo radili. Ekipa je korektna i drže se dogovorenog roka.",
    time: "prije 1 mjesec",
  },
  {
    name: "Lejla Mehmedović",
    location: "Međugorje",
    initials: "LM",
    text: "Zadovoljni smo i kvalitetom i cijenom. Komunikacija je bila odlična od prvog poziva do završetka ugradnje. Hvala ekipi!",
    time: "prije 4 mjeseca",
  },
  {
    name: "Samir Begić",
    location: "Banovići",
    initials: "SB",
    text: "Profesionalan pristup od samog početka. Dobili smo tačno ono što smo zamislili. Aluminijumska ograda izgleda moderno i kvalitetno je urađena.",
    time: "prije 2 mjeseca",
  },
];

function GoogleG() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
      <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" fill="#FBBC05"/>
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function StarsBig() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#FBBC04">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  color,
  index,
}: {
  review: (typeof reviews)[number];
  color: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay: (index % 3) * 0.09 }}
      className="relative bg-white rounded-2xl p-6 flex flex-col gap-4"
      style={{
        boxShadow: "0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* Google G — top right */}
      <div className="absolute top-5 right-5 opacity-80">
        <GoogleG />
      </div>

      {/* Avatar + name */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
          style={{ backgroundColor: color }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 leading-none mb-0.5">{review.name}</p>
          <p className="text-[11px] text-gray-400">{review.location}</p>
        </div>
      </div>

      {/* Stars */}
      <Stars />

      {/* Text */}
      <p className="text-sm text-gray-600 leading-relaxed flex-1">
        &quot;{review.text}&quot;
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-50">
        <span className="text-[11px] text-gray-400 font-medium">{review.time}</span>
        <span className="text-[11px] text-gray-400 font-medium tracking-wide">Google recenzija</span>
      </div>
    </motion.div>
  );
}

export default function ReviewsSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="relative py-24 lg:py-32 bg-alu-gray overflow-hidden">
      {/* Top edge line */}
      <div
        className="absolute top-0 left-0 w-full h-px opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent, #143c5f 30%, #143c5f 70%, transparent)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading + summary */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 32 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-14"
        >
          {/* Left — title */}
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.2em] uppercase border border-alu-blue/25 text-alu-blue mb-5">
              Recenzije
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-alu-dark leading-tight tracking-tight mb-3">
              Šta kažu naši klijenti
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Prosječna ocjena 5.0 - bazirano na Google recenzijama
            </p>
          </div>

          {/* Right — Google summary card */}
          <div
            className="flex-shrink-0 flex items-center gap-5 bg-white rounded-2xl px-7 py-5 self-start md:self-auto"
            style={{
              boxShadow: "0 2px 12px rgba(0,0,0,0.07), 0 1px 3px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-4xl font-bold text-gray-900 leading-none">5.0</span>
              <StarsBig />
              <span className="text-[11px] text-gray-400 font-medium mt-0.5">{reviews.length} recenzija</span>
            </div>
            <div className="w-px h-14 bg-gray-100" />
            <div className="flex flex-col items-center gap-1.5">
              <GoogleG />
              <span className="text-[11px] text-gray-500 font-semibold tracking-wide">Google</span>
            </div>
          </div>
        </motion.div>

        {/* Cards grid — 3 top, 2 bottom centred */}
        <div className="flex flex-col gap-5">
          {/* Row 1 — first 3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.slice(0, 3).map((review, i) => (
              <ReviewCard key={review.name} review={review} color={avatarColors[i]} index={i} />
            ))}
          </div>
          {/* Row 2 — last 2, centred */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:w-2/3 md:mx-auto">
            {reviews.slice(3).map((review, i) => (
              <ReviewCard key={review.name} review={review} color={avatarColors[3 + i]} index={3 + i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
