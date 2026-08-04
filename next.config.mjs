/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Vercel Blob — trajno keširane slike FB objava (produkcijski put).
      { protocol: "https", hostname: "*.public.blob.vercel-storage.com" },
      // Facebook CDN — privremeni stopgap dok se ne uvede keširanje.
      // Napomena: ovi URL-ovi ističu, pa nisu za trajni prikaz.
      { protocol: "https", hostname: "*.fbcdn.net" },
      { protocol: "https", hostname: "scontent.xx.fbcdn.net" },
    ],
  },
};

export default nextConfig;
