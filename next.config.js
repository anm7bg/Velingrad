/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "velingrad.powweb.space",
          },
        ],
      },
}

module.exports = nextConfig
module.exports = {
  extends: [
    //...
    'plugin:@next/next/recommended',
  ],
}