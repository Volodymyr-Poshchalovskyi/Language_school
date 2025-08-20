'use client';

import React, { useState, useMemo, Fragment } from 'react';
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
  Transition,
} from '@headlessui/react';
import {
  XMarkIcon,
  UserIcon,
  UserGroupIcon,
  HomeIcon,
  AcademicCapIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Logo from '../../assets/Logo.jpeg';

// Animated Menu Icon for mobile
const AnimatedMenuIcon = ({ isOpen }) => (
  <div className="relative h-6 w-6">
    <span
      aria-hidden="true"
      className={`absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition duration-300 ease-in-out ${
        isOpen ? 'rotate-45' : '-translate-y-2'
      }`}
    />
    <span
      aria-hidden="true"
      className={`absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-0' : ''
      }`}
    />
    <span
      aria-hidden="true"
      className={`absolute top-1/2 left-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 bg-current transition duration-300 ease-in-out ${
        isOpen ? '-rotate-45' : 'translate-y-2'
      }`}
    />
  </div>
);

// Products for learning forms
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

  const isLearningFormsActive = useMemo(
    () => products.some((item) => location.pathname.startsWith(item.href)),
    [location.pathname]
  );

  const navLinkStyles = ({ isActive }) =>
  `text-sm font-semibold leading-6 transition-colors duration-200 ${
    isActive
      ? 'text-[#F6AA1C]' // темніший жовто-помаранчевий
      : 'text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] dark:hover:text-[#E85F5C]'
  }`;


  return (
    <>
      <header className="bg-white/40 dark:bg-gray-900/60 fixed top-0 left-0 right-0 z-50 shadow-md transition-all duration-300 border-b border-[#69140E]/10 dark:border-[#FFFFFF]/10 pt-[env(safe-area-inset-top)] backdrop-blur-md">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* Logo */}
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

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#69140E] dark:text-[#FFFFFF]"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatedMenuIcon isOpen={mobileMenuOpen} />
            </button>
          </div>

          {/* Desktop Nav Links */}
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
      ? 'text-[#F6AA1C]' // темніший жовто-помаранчевий
      : 'text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] dark:hover:text-[#E85F5C]'
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
                    className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-[#FFFFFF] dark:bg-gray-900 shadow-lg ring-1 ring-[#69140E]/10 dark:ring-[#FFFFFF]/10"
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
                            <p className="mt-1 text-[#69140E]/80 dark:text-[#FFFFFF]/80">
                              {item.description}
                            </p>
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

          {/* Desktop Right Buttons */}
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
      </header>

      {/* Mobile menu, show/hide based on `mobileMenuOpen` state. */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-30" onClick={() => setMobileMenuOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </Transition.Child>
        </div>
        <Transition.Child
          as={Fragment}
          enter="transition ease-out duration-300 transform"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in duration-200 transform"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col justify-between">
            <div className="flex-grow">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-[#69140E] dark:text-[#FFFFFF]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-25 flow-root">
                <nav className="-my-6 divide-y divide-gray-500/10 space-y-2">
                  <NavLink
  to="/"
  className={({ isActive }) =>
    `flex items-center gap-2 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
      isActive
        ? 'text-[#F6AA1C]' // замінено на темніший жовто-помаранчевий
        : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#F6AA1C]/10'
    }`
  }
  onClick={() => setMobileMenuOpen(false)}
>
  <HomeIcon className="h-5 w-5" /> Головна
</NavLink>

                  {/* Disclosure для форм навчання */}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 transition-colors ${
                            isLearningFormsActive
                              ? 'bg-[#F6AA1C]/10 text-[#F6AA1C]'
                              : 'text-[#F6AA1C] dark:text-[#FFFFFF] hover:bg-[#F6AA1C]/10'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <AcademicCapIcon className="h-5 w-5" /> Форми навчання
                          </span>
                          <ChevronDownIcon
                            className={`h-5 w-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {[...products].map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className="flex items-center gap-2 rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#F6AA1C]/10"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <item.icon className="h-4 w-4" /> {item.name}
                            </NavLink>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>

                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `flex items-center gap-2 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                        isActive ? 'bg-[#F6AA1C]/10 text-[#FFD700]' : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#F6AA1C]/10'
                      }`
                    }
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <InformationCircleIcon className="h-5 w-5" /> Про нас
                  </NavLink>
                </nav>
              </div>
            </div>

            <div className="py-6 flex flex-col gap-2 border-t border-[#69140E]/10 dark:border-[#FFFFFF]/10 mt-auto">
              <a
                href="https://t.me/ashveme"
                target="_blank"
                rel="noopener noreferrer"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/10 dark:hover:bg-[#FFFFFF]/10 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Підтримка
              </a>
              <Link
                to="/application"
                className="text-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 bg-[#FFD700] text-[#69140E] shadow-sm hover:bg-[#F6AA1C] transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Подати Заявку
              </Link>
            </div>
          </DialogPanel>
        </Transition.Child>
      </Dialog>
    </>
  );
}