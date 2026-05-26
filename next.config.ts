import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js'
			}
		}
	},
	webpack(config) {
		type WebpackRule = {
			test?: RegExp;
			exclude?: RegExp;
			use?: string[];
		};

		const rules = config.module?.rules as WebpackRule[];

		const fileLoaderRule = rules?.find((rule) => rule.test?.test?.('.svg'));
		if (fileLoaderRule) {
			fileLoaderRule.exclude = /\.svg$/i;
		}

		rules?.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack']
		});

		return config;
	}
};

export default nextConfig;
