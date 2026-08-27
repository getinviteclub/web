/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite compilar a otra carpeta sin pisar el .next que usa `pnpm dev`.
  // Correr `next build` con el dev server prendido corrompe el cache
  // compartido (Cannot find module './614.js', assets en 404).
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
