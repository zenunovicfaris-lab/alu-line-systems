"use client";

export default function WhatsAppFAB() {
  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50, width: 56, height: 56 }}>
      <a
        href="https://wa.me/38762543464"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Kontaktirajte nas na WhatsApp"
        className="hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          clipPath: "circle(50%)",
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          flexShrink: 0,
        }}
      >
        <svg viewBox="0 0 32 32" width="30" height="30" fill="white" aria-hidden="true">
          <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.72 1.78 6.7L2 30l7.52-1.75A13.94 13.94 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm7.27 19.27c-.3.84-1.76 1.6-2.42 1.67-.63.07-1.22.3-4.1-.86-3.46-1.4-5.67-4.9-5.84-5.13-.17-.23-1.38-1.84-1.38-3.5s.87-2.48 1.18-2.82c.3-.34.66-.43.88-.43l.63.01c.2 0 .47-.08.74.56.28.66.94 2.3 1.02 2.47.08.17.13.37.02.6-.1.22-.16.36-.31.55-.16.2-.33.44-.47.59-.16.16-.32.34-.14.66.18.32.8 1.32 1.72 2.14 1.18 1.05 2.18 1.38 2.5 1.53.32.16.5.13.68-.08.18-.2.78-.9 1-1.22.2-.31.4-.26.68-.16.27.1 1.73.82 2.03.96.3.15.5.22.57.34.07.12.07.68-.23 1.52z" />
        </svg>
      </a>
    </div>
  );
}
