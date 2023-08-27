/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["upload.wikimedia.org"], // 画像を使用する許可されたホスト名を配列で指定
  },
}

module.exports = nextConfig