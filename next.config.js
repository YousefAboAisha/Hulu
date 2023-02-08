/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trending/?page=1",
        permanent: true,
      },
      {
        source: "/genre",
        destination: "/trending/?page=1",
        permanent: true,
      },
    ]
  },
  images: {
    domains: ["image.tmdb.org"],
  },
}

module.exports = nextConfig
