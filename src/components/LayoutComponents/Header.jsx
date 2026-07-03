'use client';

import React, { useState, useMemo, Fragment, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const shouldPulse = pathname !== '/' || scrolled;

  // Scroll listener for sticky header transitions
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLearningFormsActive = useMemo(
    () => products.some((item) => pathname.startsWith(item.href)),
    [pathname]
  );

  const getNavLinkClass = (href) => {
    const isActive = pathname === href;
    return `relative inline-flex items-center text-sm font-bold leading-6 transition-colors duration-300 py-1 px-1 h-8 group cursor-pointer ${
      isActive
        ? 'text-[#F6AA1C]'
        : 'text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] dark:hover:text-[#E85F5C]'
    }`;
  };

  const getMobileNavLinkClass = (href) => {
    const isActive = pathname === href;
    return `flex items-center gap-3 -mx-3 block rounded-xl px-4 py-3 text-base font-bold transition-all ${
      isActive
        ? 'bg-[#F6AA1C]/15 text-[#F6AA1C]'
        : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/5 dark:hover:bg-white/5'
    }`;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg border-b flex items-center pt-[env(safe-area-inset-top)] ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg border-[#69140E]/10 dark:border-[#FFFFFF]/10 h-16'
            : 'bg-white/40 dark:bg-gray-900/40 border-transparent h-24'
        }`}
      >
        <nav
          aria-label="Global"
          className="w-full mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <span className="sr-only">Besondres Deutch</span>
              <div className="relative overflow-hidden rounded-full shadow-md border-2 border-transparent group-hover:border-[#FFD700] transition-all duration-300">
                <img
                  alt="Besondres Deutch Logo"
                  src={Logo.src}
                  className="h-11 w-11 rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width="44"
                  height="44"
                />
              </div>
              <span className="font-extrabold text-lg text-[#69140E] dark:text-white tracking-wide transition-colors group-hover:text-[#E85F5C] dark:group-hover:text-[#FFD700]" style={{ fontFamily: "'Viaoda Libre', cursive" }}>
                Besondres Deutch
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/10 dark:hover:bg-white/10 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatedMenuIcon isOpen={mobileMenuOpen} />
            </button>
          </div>

          {/* Desktop Nav Links */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-10 items-center">
            <Link href="/" className={getNavLinkClass('/')}>
              Головна
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#F6AA1C] transform transition-transform duration-300 origin-left ${pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>

            <Popover className="relative">
              {({ close }) => (
                <>
                  <PopoverButton
                    className={`relative flex items-center gap-x-1 text-sm font-bold leading-6 transition-colors duration-300 outline-none py-1 px-1 h-8 group cursor-pointer ${
                      isLearningFormsActive
                        ? 'text-[#F6AA1C]'
                        : 'text-[#69140E] dark:text-[#FFFFFF] hover:text-[#E85F5C] dark:hover:text-[#E85F5C]'
                    }`}
                  >
                    Форми навчання
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="w-4 h-4 flex-none text-[#69140E]/50 dark:text-white/50 transition-transform duration-300 group-hover:rotate-180"
                    />
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#F6AA1C] transform transition-transform duration-300 origin-left ${isLearningFormsActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </PopoverButton>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <PopoverPanel
                      className="absolute left-1/2 z-10 mt-5 w-screen max-w-sm -translate-x-1/2 overflow-hidden rounded-3xl bg-white dark:bg-gray-900 shadow-2xl ring-1 ring-black/5 dark:ring-white/10 p-2"
                    >
                      {products.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-4 rounded-2xl p-3.5 text-sm leading-6 hover:bg-[#F6AA1C]/10 dark:hover:bg-[#F6AA1C]/5 transition-colors duration-300"
                        >
                          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-[#69140E]/5 dark:bg-[#FFFFFF]/5 group-hover:bg-[#FFD700] transition-colors duration-300">
                            <item.icon
                              aria-hidden="true"
                              className="h-5 w-5 text-[#69140E] dark:text-[#FFFFFF] group-hover:text-[#69140E] transition-colors duration-300"
                            />
                          </div>
                          <div className="flex-auto">
                            <Link
                              href={item.href}
                              onClick={close}
                              className="block font-bold text-[#69140E] dark:text-[#FFFFFF]"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-0.5 text-xs text-[#69140E]/70 dark:text-white/70">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </PopoverPanel>
                  </Transition>
                </>
              )}
            </Popover>

            <Link href="/about" className={getNavLinkClass('/about')}>
              Про нас
              <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#F6AA1C] transform transition-transform duration-300 origin-left ${pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          </PopoverGroup>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <a
              href="https://t.me/ashveme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-x-2 rounded-full border-2 border-[#69140E]/20 dark:border-white/20 px-4 py-2 text-sm font-bold text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E] hover:text-white hover:border-[#69140E] dark:hover:bg-white dark:hover:text-[#69140E] dark:hover:border-white transition-all duration-300"
            >
              Підтримка
            </a>
            <Link
              href="/application"
              className={`relative overflow-hidden inline-flex items-center gap-x-1 rounded-full bg-gradient-to-r from-[#FFD700] to-[#F6AA1C] px-6 py-2.5 text-sm font-bold text-[#69140E] shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group ${
                shouldPulse ? 'animate-btn-pulse' : ''
              }`}
            >
              <span className="relative z-10">Подати Заявку</span>
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#F6AA1C] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
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
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
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
          <DialogPanel className="fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 flex flex-col justify-between shadow-2xl">
            <div className="flex-grow">
              <div className="flex items-center justify-between pb-6 border-b border-gray-100 dark:border-gray-800">
                <span className="font-extrabold text-[#69140E] dark:text-white" style={{ fontFamily: "'Viaoda Libre', cursive" }}>
                  Меню сайту
                </span>
                <button
                  type="button"
                  className="rounded-xl p-2.5 text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/5 dark:hover:bg-white/5 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-8 flow-root">
                <nav className="-my-6 space-y-2">
                  <Link
                    href="/"
                    className={getMobileNavLinkClass('/')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <HomeIcon className="h-5 w-5" /> Головна
                  </Link>

                  {/* Disclosure для форм навчання */}
                  <Disclosure as="div" className="space-y-1">
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className={`flex w-full items-center justify-between rounded-xl py-3 pl-4 pr-3.5 text-base font-bold transition-all ${
                            isLearningFormsActive
                              ? 'bg-[#F6AA1C]/15 text-[#F6AA1C]'
                              : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/5 dark:hover:bg-white/5'
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <AcademicCapIcon className="h-5 w-5" /> Форми навчання
                          </span>
                          <ChevronDownIcon
                            className={`h-5 w-5 flex-none transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </DisclosureButton>
                        <DisclosurePanel className="mt-1 space-y-1 pl-4 border-l border-gray-100 dark:border-gray-800 ml-6">
                          {products.map((item) => {
                            const isSubActive = pathname === item.href;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-lg py-2.5 px-4 text-sm font-semibold transition-all ${
                                  isSubActive
                                    ? 'text-[#F6AA1C] bg-[#F6AA1C]/10'
                                    : 'text-[#69140E] dark:text-[#FFFFFF] hover:bg-[#69140E]/5 dark:hover:bg-white/5'
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <item.icon className="h-4 w-4" /> {item.name}
                              </Link>
                            );
                          })}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>

                  <Link
                    href="/about"
                    className={getMobileNavLinkClass('/about')}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <InformationCircleIcon className="h-5 w-5" /> Про нас
                  </Link>
                </nav>
              </div>
            </div>

            <div className="py-6 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800 mt-auto">
              <a
                href="https://t.me/ashveme"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border-2 border-[#69140E]/20 dark:border-white/20 py-2.5 text-base font-bold text-[#69140E] dark:text-white hover:bg-[#69140E]/10 text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Підтримка
              </a>
              <Link
                href="/application"
                className={`text-center rounded-full py-3 text-base font-bold bg-gradient-to-r from-[#FFD700] to-[#F6AA1C] text-[#69140E] shadow-md hover:shadow-lg active:scale-95 transition-all ${
                  shouldPulse ? 'animate-btn-pulse' : ''
                }`}
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