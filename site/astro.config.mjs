// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// The deploy workflow sets these for GitHub Pages project pages
// (https://<owner>.github.io/<repo>/). Locally they are unset, so dev and preview serve from "/".
const SITE_URL = process.env.SITE_URL || 'https://nicomiguelino.github.io';
const BASE_PATH = process.env.BASE_PATH || undefined;

// https://astro.build/config
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
						// Each item here is one entry in the navigation menu.
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
