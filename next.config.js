/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org","lh3.googleusercontent.com","i.ibb.co","res.cloudinary.com","encrypted-tbn0.gstatic.com", "scontent.fjdh1-1.fna.fbcdn.net", "vercel.com"]
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

module.exports = nextConfig
