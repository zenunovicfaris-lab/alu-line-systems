import { Phone, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Početna", href: "#pocetna" },
  { label: "Projekti", href: "#projekti" },
  { label: "Usluge", href: "#usluge" },
  { label: "Galerija", href: "#galerija-vrata" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  "Aluminijske Ograde",
  "Roletne (ALU & PVC)",
  "Nadstrešnice",
  "Balkonske Ograde",
];

export default function Footer() {
  return (
    <footer
      className="relative border-t"
      style={{ background: "#060a10", borderColor: "rgba(255,255,255,0.05)" }}
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-widest text-white">
                ALU <span className="text-alu-blue">LINE</span>
              </span>
              <span className="text-[9px] font-medium tracking-[0.3em] text-white/25 mt-1">
                SYSTEMS
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Profesionalna ugradnja aluminijskih ograda, roletni i nadstrešnica.
              Kvalitet i moderan dizajn bez kompromisa.
            </p>
            {/* Phone */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="tel:+38762543464"
                aria-label="ALU LINE Systems telefon"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-alu-blue/60 hover:bg-alu-blue/10 transition-all duration-300"
              >
                <Phone size={16} />
              </a>
              <span className="text-gray-500 text-sm">062 543 464</span>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61584092785799"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ALU LINE Systems na Facebooku"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-white/10 text-white/40 hover:text-white hover:border-alu-blue/60 hover:bg-alu-blue/10 transition-all duration-300"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61584092785799"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 text-sm hover:text-white transition-colors duration-200"
              >
                Alu Line Systems Facebook
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase">
              Brzi Linkovi
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group flex items-center gap-2 text-gray-500 text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-alu-blue transition-all duration-300 overflow-hidden" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-5">
            <h4 className="text-white text-sm font-bold tracking-widest uppercase">
              Usluge
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="group flex items-center gap-2 text-gray-500 text-sm cursor-default">
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: "#143c5f", opacity: 0.6 }}
                    />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; 2026 ALU LINE Systems. Srebrenik. Sva prava zadržana.
          </p>
          <p className="text-gray-600 text-xs">
            Sajt izradio{" "}
            <a
              href="https://www.zt-media.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-white transition-colors duration-200"
              style={{ color: "#F46129" }}
            >
              ZT Media
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
