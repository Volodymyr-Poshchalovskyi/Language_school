// * The main Header component, providing primary navigation for the site.
// * It includes both desktop and mobile views and utilizes Headless UI for accessibility.
// * This version uses the system's theme preference and has a distinct border for dark mode.
// * It is also adapted for devices with a "notch" or "safe area" at the top.

'use client';

import React, { useState } from 'react';
// * NavLink for active link styling, Link for general navigation.
import { NavLink, Link, useLocation } from 'react-router-dom';
// ! Imports all necessary components and icons from Headless UI and Heroicons.
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  UserGroupIcon,
  HomeIcon,
  AcademicCapIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Logo from '../../assets/Logo.jpeg';

// * Static data for the dropdown menu links.
const products = [
  {
    name: 'Персональні заняття',
    description: 'Підходить якщо готові багато говорити',
    href: '/single-form',
    icon: UserIcon,
  },
  {
    name: 'Парні заняття',
    description: 'Ідеально для навчання з другом чи партнером',
    href: '/dual-form',
    icon: UserGroupIcon,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // * useLocation hook is used to determine the active state of navigation links.
  const location = useLocation();
  const isLearningFormsActive = products.some((item) =>
    location.pathname.startsWith(item.href)
  );

  // ? A helper function to dynamically apply CSS classes based on link activity.
  const navLinkStyles = ({ isActive }) =>
    `text-sm font-semibold leading-6 transition-colors duration-200 ${
      isActive ? 'text-blue-600' : 'text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600'
    }`;

  return (
    // ! Added dark mode classes, transition, a distinct bottom border, and top padding for the notch.
    <header className="bg-white dark:bg-gray-800 sticky top-0 z-40 shadow-sm transition-colors duration-300 border-b border-gray-200 dark:border-gray-700 pt-[env(safe-area-inset-top)]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* ! Brand Logo: The home link for the application. */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Besondres Deutch</span>
            <img
              alt="Besondres Deutch Logo"
              src={Logo}
              className="h-12 w-12 rounded-full object-cover"
              width="48"
              height="48"
            />
          </Link>
        </div>

        {/* * Mobile Menu Button (Burger Icon) for small screens. */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>

        {/* --- Desktop Navigation --- */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={navLinkStyles}>
            Головна
          </NavLink>
          {/* ! A popover menu for 'Forms of Study', using a custom active state check. */}
          <Popover className="relative">
            <PopoverButton
              className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors duration-200 ${
                isLearningFormsActive
                  ? 'text-blue-600'
                  : 'text-gray-900 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-600'
              }`}
            >
              Форми навчання
              <ChevronDownIcon
                aria-hidden="true"
                className="w-5 h-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              // ! Added dark mode styles to the dropdown panel.
              className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white dark:bg-gray-700 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {/* * Maps through the 'products' array to render dropdown links. */}
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-500">
                      <item.icon
                        aria-hidden="true"
                        className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.href}
                        className="block font-semibold text-gray-900 dark:text-gray-200"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <NavLink to="/about" className={navLinkStyles}>
            Про нас
          </NavLink>
        </PopoverGroup>

        {/* * Desktop call-to-action buttons. */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a
            href="https://t.me/ashveme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 dark:bg-gray-700 px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Підтримка
          </a>

          <Link
            to="/application"
            className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Подати Заявку
          </Link>
        </div>
      </nav>

      {/* --- Mobile Dialog Menu --- */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        {/* ! RESTORED SECTION: The entire mobile menu panel, which was previously missing. */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-800 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Besondres Deutch</span>
              <img
                alt="Besondres Deutch Logo"
                src={Logo}
                className="h-12 w-12 rounded-full object-cover"
                width="48"
                height="48"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 flex flex-col justify-between h-full">
              {/* * Top section of the mobile menu. */}
              <div className="space-y-2 py-6">
                {/* ! Mobile NavLink for the Home page. */}
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive ? 'bg-gray-100 dark:bg-gray-700 text-blue-600' : 'text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HomeIcon className="h-6 w-6 flex-none" />
                  Головна
                </NavLink>

                {/* ! Mobile Disclosure component for the dropdown menu. */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                      isLearningFormsActive
                        ? 'bg-gray-100 dark:bg-gray-700 text-blue-600'
                        : 'text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <span className="flex items-center gap-x-3">
                      <AcademicCapIcon className="h-6 w-6 flex-none" />
                      Форми навчання
                    </span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {/* * Maps through 'products' to render mobile dropdown links. */}
                    {products.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          `flex items-center gap-x-3 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 ${isActive ? 'bg-gray-50 dark:bg-gray-700' : 'text-gray-900 dark:text-gray-200'} hover:bg-gray-50 dark:hover:bg-gray-700`
                        }
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400 dark:text-gray-500" />
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive ? 'bg-gray-100 dark:bg-gray-700 text-blue-600' : 'text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <InformationCircleIcon className="h-6 w-6 flex-none" />
                  Про нас
                </NavLink>
              </div>

              {/* * Bottom section of the mobile menu with buttons. */}
              <div className="space-y-4 py-6 border-t border-gray-200 dark:border-gray-700">
                <Link
                  to="/application"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white text-center bg-blue-600 hover:bg-blue-700 transition"
                >
                  Подати Заявку
                </Link>
                <a
                  href="https://t.me/ashveme"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 dark:text-gray-200 text-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  Підтримка
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}