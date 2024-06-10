/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'st.depositphotos.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
            {
                protocol: 'https',
                hostname: 'static.vecteezy.com'
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com'
            },
            {
                protocol: 'https',
                hostname: 'i0.wp.com'
            },
            {
                protocol: 'https',
                hostname: 'i.blogs.es'
            }      
          ],
        
      },
};

export default nextConfig;
