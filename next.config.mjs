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
    ],
  },
};

export default nextConfig;
