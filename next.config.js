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

  reactStrictMode: true,

  images: {
    domains: ["image.tmdb.org"],
  },

  dependencies: {
    "react-icons": "^4.7.1",
  },
}

module.exports = nextConfig
