/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloudinary.kansino.nl",
        port: "",
      },
      {
        protocol: "https",
        hostname: "shared-infra-staging-cms-uploads-bucket.s3.eu-central-1.amazonaws.com",
        port: "",
      },
    ],
  },
}

module.exports = nextConfig
