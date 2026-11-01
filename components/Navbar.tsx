"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { parsePath } from "@/lib/i18n/paths";
import { useLocalizePath, useT } from "@/components/i18n/LocaleProvider";
import {
  LanguageDropdown,
  LanguageSegmented,
} from "@/components/i18n/LanguageSwitcher";

// href: bosanska putanja ili #sekcija na početnoj
const navLinks = [
  { id: "home", href: "#pocetna" },
  { id: "services", href: "/usluge" },
  { id: "locations", href: "/lokacije" },
  { id: "blog", href: "/blog" },
  { id: "projects", href: "#projekti" },
  { id: "contact", href: "#kontakt" },
] as const;

type NavId = (typeof navLinks)[number]["id"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<NavId>("home");
  const pathname = usePathname();
  const router = useRouter();
  const t = useT();
  const localize = useLocalizePath();
  const { bsPath } = parsePath(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Aktivna stavka prati stvarnu stranicu (ne ostaje na prethodnoj nakon navigacije)
  useEffect(() => {
    if (bsPath.startsWith("/usluge")) setActiveLink("services");
    else if (bsPath.startsWith("/lokacije")) setActiveLink("locations");
    else if (bsPath.startsWith("/blog")) setActiveLink("blog");
    else if (bsPath === "/") setActiveLink("home");
  }, [bsPath]);

  const handleNavClick = (id: NavId, href: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setActiveLink(id);
    setMenuOpen(false);

    // Prava ruta (npr. /usluge) — koristi router
    if (href.startsWith("/")) {
      router.push(localize(href));
      return;
    }

    // Hash link (#sekcija)
    if (bsPath === "/") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // S podstranice — idi na početnu pa na sekciju
      window.location.href = localize(`/${href}`);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-white/90 border-b border-alu-line"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href={localize("/")}
              onClick={(e) => handleNavClick("home", "#pocetna", e)}
              className="flex items-center gap-3 flex-shrink-0 whitespace-nowrap group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/images/logo/alu-line.png"
                alt="ALU LINE Systems"
                width={44}
                height={44}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span
                  className={`text-xl font-black tracking-widest transition-colors duration-300 ${
                    scrolled ? "text-alu-dark" : "text-white"
                  }`}
                >
                  ALU <span className="text-alu-blue">LINE</span>
                </span>
                <span
                  className={`text-[9px] font-medium tracking-[0.3em] transition-colors duration-300 ${
                    scrolled ? "text-gray-400" : "text-white/50"
                  }`}
                >
                  SYSTEMS
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id, link.href)}
                  className={`relative px-2.5 xl:px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors duration-300 rounded-lg ${
                    scrolled
                      ? "text-gray-700 hover:text-alu-dark"
                      : "text-white/80 hover:text-white"
                  }`}
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {t.nav[link.id]}
                  {activeLink === link.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0.5 left-2.5 right-2.5 xl:left-4 xl:right-4 h-0.5 bg-alu-blue rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* CTA Button + Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              {/* Phone number (desktop) */}
              <a
                href="tel:+38762543464"
                className={`hidden xl:flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                  scrolled ? "text-gray-500 hover:text-alu-blue" : "text-white/60 hover:text-white"
                }`}
              >
                <Phone size={14} />
                <span>{t.common.phoneDisplay}</span>
              </a>

              {/* Language switcher (desktop) */}
              <div className="hidden lg:block">
                <LanguageDropdown scrolled={scrolled} />
              </div>

              {/* CTA Button */}
              <a
                href={localize("/#kontakt")}
                onClick={(e) => handleNavClick("contact", "#kontakt", e)}
                className="hidden lg:flex items-center gap-2 px-4 xl:px-5 py-2.5 bg-alu-blue text-white text-sm font-semibold whitespace-nowrap rounded-sm transition-colors duration-200 hover:bg-alu-light"
              >
                {t.nav.requestQuote}
                <ChevronRight size={14} />
              </a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={menuOpen}
                className={`lg:hidden p-2.5 rounded-xl transition-colors duration-300 ${
                  scrolled ? "text-alu-dark hover:bg-gray-100" : "text-white hover:bg-white/10"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/images/logo/alu-line.png"
                    alt="ALU LINE Systems"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-black tracking-widest text-alu-dark">
                      ALU <span className="text-alu-blue">LINE</span>
                    </span>
                    <span className="text-[8px] font-medium tracking-[0.3em] text-gray-400">
                      SYSTEMS
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label={t.nav.closeMenu}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.05 + i * 0.07,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    onClick={() => handleNavClick(link.id, link.href)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-200 group ${
                      activeLink === link.id
                        ? "bg-alu-blue text-white"
                        : "text-gray-700 hover:bg-gray-50 hover:text-alu-blue"
                    }`}
                  >
                    {t.nav[link.id]}
                    <ChevronRight
                      size={16}
                      className={`transition-transform duration-200 group-hover:translate-x-1 ${
                        activeLink === link.id ? "opacity-100" : "opacity-40"
                      }`}
                    />
                  </motion.button>
                ))}
              </nav>

              {/* Language (mobile) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="px-6 pb-5"
              >
                <LanguageSegmented onSelect={() => setMenuOpen(false)} />
              </motion.div>

              {/* Mobile CTA */}
              <div className="px-6 pb-8 space-y-3">
                <motion.a
                  href="tel:+38762543464"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 border-2 border-alu-blue text-alu-blue rounded-xl text-sm font-semibold hover:bg-alu-blue hover:text-white transition-all duration-300"
                >
                  <Phone size={16} />
                  {t.nav.callUs}
                </motion.a>
                <motion.a
                  href={localize("/#kontakt")}
                  onClick={(e) => handleNavClick("contact", "#kontakt", e)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-alu-blue text-white rounded-xl text-sm font-semibold hover:bg-alu-light transition-all duration-300"
                >
                  {t.nav.requestQuote}
                  <ChevronRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
