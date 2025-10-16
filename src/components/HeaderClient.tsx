'use client'

import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Logo } from './Logo'
import { useTranslations } from 'next-intl' 
import { Link } from '../navigation'
import { usePathname } from '../navigation'
import { useLocale } from 'next-intl'
import { menuItems } from '@/config'

const languages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'it', name: 'Italiano' },
  { code: 'pt', name: 'Português' },
  { code: 'ko', name: '한국어' },
  { code: 'ja', name: '日本語' },
  { code: 'zh-TW', name: '繁體中文' },
]

function LanguageSwitcher() {
  const pathname = usePathname()
  const locale = useLocale()
  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0]
  
  // Get the path without locale, handling both default and non-default locales
  const pathWithoutLocale = pathname.split('/').slice(locale === 'en' ? 1 : 2).join('/') || '/'

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {currentLanguage.name}
        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {languages.map((language) => (
              <Menu.Item key={language.code}>
                {({ active }) => (
                  <Link
                    href={pathWithoutLocale}
                    locale={language.code}
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } block px-4 py-2 text-sm`}
                  >
                    {language.name}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block w-full p-2 text-left text-sm text-gray-700 hover:bg-gray-50"
    >
      {children}
    </Link>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <div className="flex h-6 w-6 items-center justify-center">
      {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
    </div>
  )
}

function MobileNavigation() {
  const t = useTranslations('navigation')
  
  // Only show mobile menu if there are menu items
  if (menuItems.length === 0) {
    return null
  }
  
  return (
    <Popover>
      <Popover.Button
        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
        type="button"
      >
        <MobileNavIcon open={false} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="duration-150 ease-in"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5"
            >
              <div className="flex flex-row-reverse items-center justify-between">
                <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                  <MobileNavIcon open={true} />
                </Popover.Button>
                <h2 className="text-sm font-medium text-zinc-600">Navigation</h2>
              </div>
              <nav className="mt-6">
                <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800">
                  {menuItems.map((item) => (
                    <li key={item.href}>
                      <MobileNavLink href={item.href}>{t(item.label)}</MobileNavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </div>
      </Transition>
    </Popover>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm leading-6 text-gray-700 hover:text-gray-900"
    >
      {children}
    </Link>
  )
}

export function HeaderClient() {
  const t = useTranslations('navigation')
  
  return (
    <header className="py-4 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center md:gap-x-12">
              <Link href="/" aria-label="Home">
                <Logo className="h-10 w-auto" />
              </Link>
              {menuItems.length > 0 && (
                <div className="hidden md:flex md:gap-x-6">
                  {menuItems.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {t(item.label)}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <LanguageSwitcher />
              {menuItems.length > 0 && (
                <div className="-mr-1 md:hidden">
                  <MobileNavigation />
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
