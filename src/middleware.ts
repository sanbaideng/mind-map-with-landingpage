import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, localePrefix } from './config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,
  defaultLocale: defaultLocale,
  localePrefix: localePrefix
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en|es|fr|de|it|pt|ko|ja|zh-TW)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};
