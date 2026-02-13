import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
	UmamiConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Kesallyの博客",
	subtitle: "一个不起眼的小博客",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: true, // Display the credit text of the banner image
			text: "Bing", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	background: {
		enable: true, // Enable background image
		//src: "https://eo-pic.2x.nz/h", // Background image URL (supports HTTPS)
		src: "https://bing.img.run/rand_1366x768.php", // Bing daily theme
		position: "center", // Background position: 'top', 'center', 'bottom'
		size: "cover", // Background size: 'cover', 'contain', 'auto'
		repeat: "no-repeat", // Background repeat: 'no-repeat', 'repeat', 'repeat-x', 'repeat-y'
		attachment: "fixed", // Background attachment: 'fixed', 'scroll', 'local'
		opacity: 0.5, // Background opacity (0-1)
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
			src: "/favicon/favicon.ico", // Path of the favicon, relative to the /public directory
			theme: "light", // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
			sizes: "32x32", // (Optional) Size of the favicon, set only if you have favicons of different sizes
		},
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "仓库信息",
			url: "/commit/", // Internal links should not include the base path, as it is automatically added
			external: false, // Show an external link icon and will open in a new tab
		},
		{
			name: "统计信息",
			url: "https://umami.kesally.ren/share/RzrwsaMm3PImjmmT", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Kesally",
	bio: "实迷途其未远，觉今是而昨非。", // A short bio to display on the homepage
	links: [
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/kesally/fuwari",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com/kesally",
		},
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://twitter.com/cnkesally",
		},
		{
			name: "Email",
			icon: "fa6-solid:envelope",
			url: "mailto:admin@kesally.ren",
		},
		{
			name: "QQ",
			icon: "fa7-brands:qq",
			url: "https://qq.com",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/kesally",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
export const umamiConfig: UmamiConfig = {
	enable: true,
	baseUrl: "https://umami.kesally.ren",
	shareId: "RzrwsaMm3PImjmmT",
	timezone: "Asia/Shanghai",
};
