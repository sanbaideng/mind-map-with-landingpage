import { createNavigation } from 'next-intl/navigation';

export const { Link, redirect, usePathname, useRouter } = createNavigation({
    locales: ['en', 'zh', 'es', 'fr', 'de', 'it', 'pt', 'ko', 'ja', 'zh-TW'],
    defaultLocale: 'en'
});
