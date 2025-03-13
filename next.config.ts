import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	compiler: {
		styledComponents: true,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://app.ftoyd.com/fronttemp-service/:path*',
			},
		];
	},
};

export default nextConfig;
