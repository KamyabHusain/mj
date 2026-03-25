import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "maktabahjafariyah.org",
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);
