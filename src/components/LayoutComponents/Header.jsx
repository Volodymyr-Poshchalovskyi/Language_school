// * The main Header component, providing primary navigation for the site.
// * This version has been restyled with the new brand color palette.

'use client';

import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
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
  
  const location = useLocation();
  const isLearningFormsActive = products.some((item) =>
    location.pathname.startsWith(item.href)
  );

  const navLinkStyles = ({ isActive }) =>
    `text-sm font-semibold leading-6 transition-colors duration-200 ${
      isActive 
      ? 'text-[#FFD700]' // Активний колір: Золотий
      : 'text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] dark:hover:text-[#E85F5C]'
    }`;

  return (
    // ! ЗМІНА ТУТ: Фон темного режиму змінено на нейтральний dark:bg-gray-900
    <header className="bg-[#FFFFFF] dark:bg-gray-900 sticky top-0 z-40 shadow-md transition-colors duration-300 border-b border-[#69140E]/10 dark:border-[#FFFFFF]/10 pt-[env(safe-area-inset-top)]">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
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

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#69140E] dark:text-[#FFFFFF]"
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
          
          <Popover className="relative">
            {({ close }) => (
              <>
                <PopoverButton
                  className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors duration-200 outline-none ${
                    isLearningFormsActive
                      ? 'text-[#FFD700]'
                      : 'text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] dark:hover:text-[#E85F5C]'
                  }`}
                >
                  Форми навчання
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="w-5 h-5 flex-none text-gray-400"
                  />
                </PopoverButton>

                {/* ! ЗМІНА ТУТ: Фон темного режиму змінено на нейтральний dark:bg-gray-900 */}
                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-[#FFFFFF] dark:bg-gray-900 shadow-lg ring-1 ring-[#69140E]/10 dark:ring-[#FFFFFF]/10 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-[#F6AA1C]/10 dark:hover:bg-[#F6AA1C]/5"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-[#69140E]/5 dark:bg-[#FFFFFF]/5">
                          <item.icon
                            aria-hidden="true"
                            className="h-6 w-6 text-[#69140E] dark:text-[#FFFFFF] group-hover:text-[#FFD700]"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            to={item.href}
                            onClick={close}
                            className="block font-semibold text-[#69140E] dark:text-[#FFFFFF]"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-[#69140E]/80 dark:text-[#FFFFFF]/80">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <NavLink to="/about" className={navLinkStyles}>
            Про нас
          </NavLink>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a
            href="https://t.me/ashveme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 rounded-md bg-[#69140E]/10 dark:bg-[#FFFFFF]/10 px-3 py-2 text-sm font-semibold text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/20 dark:hover:bg-[#FFFFFF]/20 transition"
          >
            Підтримка
          </a>

          <Link
            to="/application"
            className="inline-flex items-center gap-x-1 rounded-md bg-[#FFD700] px-4 py-2 text-sm font-semibold text-[#69140E] shadow-sm hover:bg-[#F6AA1C] transition"
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
        {/* ! ЗМІНА ТУТ: Фон темного режиму змінено на нейтральний dark:bg-gray-900 */}
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#FFFFFF] dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 ring-[#69140E]/10 dark:ring-[#FFFFFF]/10">
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
              className="-m-2.5 rounded-md p-2.5 text-[#69140E] dark:text-[#FFFFFF]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 flex flex-col justify-between h-full">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${isActive ? 'bg-[#F6AA1C]/10 text-[#FFD700]' : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#F6AA1C]/10'}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HomeIcon className="h-6 w-6 flex-none" />
                  Головна
                </NavLink>

                <Disclosure as="div" className="-mx-3">
                  {({ close }) => (
                    <>
                      <DisclosureButton
                        className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 transition-colors ${
                          isLearningFormsActive
                            ? 'bg-[#F6AA1C]/10 text-[#FFD700]'
                            : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#F6AA1C]/10'
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
                        {products.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className={({ isActive }) =>
                              `flex items-center gap-x-3 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 transition-colors ${isActive ? 'bg-[#F6AA1C]/10' : 'text-[#69140E] dark:text-[#FFFFFF]'} hover:bg-[#F6AA1C]/10`
                            }
                            onClick={() => {
                              setMobileMenuOpen(false);
                              close();
                            }}
                          >
                            <item.icon className="h-5 w-5 flex-none text-[#69140E]/60 dark:text-[#FFFFFF]/60" />
                            {item.name}
                          </NavLink>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${isActive ? 'bg-[#F6AA1C]/10 text-[#FFD700]' : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#F6AA1C]/10'}`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <InformationCircleIcon className="h-6 w-6 flex-none" />
                  Про нас
                </NavLink>
              </div>

              <div className="space-y-4 py-6 border-t border-[#69140E]/10 dark:border-[#FFFFFF]/10">
                <Link
                  to="/application"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-center bg-[#FFD700] text-[#69140E] hover:bg-[#F6AA1C] transition"
                >
                  Подати Заявку
                </Link>
                <a
                  href="https://t.me/ashveme"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-center bg-[#69140E]/10 dark:bg-[#FFFFFF]/10 text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/20 dark:hover:bg-[#FFFFFF]/20 transition"
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