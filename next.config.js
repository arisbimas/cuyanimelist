/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'cdn.myanimelist.net'
            }, {
                hostname: 'avatars.githubusercontent.com'
            }
            , {
                hostname: 'picsum.photos'
            }
        ]
    }
}

module.exports = nextConfig
