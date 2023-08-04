/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.prismic.io']
    },
    router: {
        staticPaths: [
          {
            path: '/characters/:slug',
            component: 'CharacterPage',
          },
        ],
    }
}

module.exports = nextConfig
