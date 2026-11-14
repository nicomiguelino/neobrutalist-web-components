// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE_URL = process.env.SITE_URL || 'https://nicomiguelino.github.io';
const BASE_PATH = process.env.BASE_PATH || undefined;

export default defineConfig({
	site: SITE_URL,
	base: BASE_PATH,
	integrations: [
		starlight({
			title: 'Neobrutalist Web Components',
			description: 'Neobrutalist custom elements for TypeScript and vanilla HTML/CSS/JS apps.',
			customCss: ['./src/styles/neobrutalist.css'],
			components: {
				SocialIcons: './src/components/SocialIcons.astro',
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/nicomiguelino/neobrutalist-web-components',
				},
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ slug: 'guides/getting-started' },
						{ slug: 'guides/typescript' },
						{ slug: 'guides/theming' },
						{ slug: 'guides/contributing' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
