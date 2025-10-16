import { Pathnames } from 'next-intl/navigation';

// Supported locales - add or remove as needed
export const locales = ['en', 'zh', 'es', 'fr', 'de', 'it', 'pt', 'ko', 'ja', 'zh-TW'] as const;
export const defaultLocale = 'en' as const;

// Path configuration - add your routes here
export const pathnames = {
  '/': '/',
  // Add your custom routes here
  // Example: '/about': '/about',
  // Example: '/contact': '/contact',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;

// Menu configuration interface
export interface MenuItem {
  label: string; // Translation key from messages
  href: string;
  icon?: string; // Optional icon name
}

// Configure your navigation menu items here
// The label should match keys in your messages/*.json files under "navigation"
export const menuItems: MenuItem[] = [
  // Example menu items - customize these for your project
  // { label: 'home', href: '/' },
  // { label: 'about', href: '/about' },
  // { label: 'contact', href: '/contact' },
];

// Site configuration
export const siteConfig = {
  name: 'Your Site Name',
  description: 'Your site description',
  url: 'https://your-domain.com',
};
