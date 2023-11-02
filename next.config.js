/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.myanimelist.net'
            }
        ]
    }
}

module.exports = nextConfig
