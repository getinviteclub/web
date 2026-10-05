/** @type {import('next').NextConfig} */
const nextConfig = {
  // Permite compilar a otra carpeta sin pisar el .next que usa `pnpm dev`.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // ⚠️ SOLO PARA MAQUETAR: fotos de Pinterest en la demo de Nocturna
      // (content/wedding/nocturna/). Tienen derechos de sus autores: se
      // reemplazan por fotos propias antes de publicar, y entonces se
      // borra esta entrada.
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
  },
};

export default nextConfig;
