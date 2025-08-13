'use client'

import React, { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom' 
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
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from '../assets/Logo.jpeg' 

const products = [
  { name: 'Персональні заняття', description: 'Підходить якщо готові багато говорити', href: '/single-form', icon: ChartPieIcon },
  { name: 'Групові заняття', description: 'Підходить для більшої практики слухання', href: '/dual-form', icon: CursorArrowRaysIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const location = useLocation()
  const isLearningFormsActive = products.some(item => location.pathname.startsWith(item.href))

  const navLinkStyles = ({ isActive }) =>
    `text-sm font-semibold leading-6 transition-colors duration-200 ${
      isActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
    }`

  return (
    <header className="bg-white sticky top-0 z-40 shadow-sm">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Besondres Deutch</span>
            {/* --- ЗМІНЕНО ТУТ --- */}
            <img
              alt="Besondres Deutch Logo"
              src={Logo}
              className="h-12 w-12 rounded-full object-cover"
            />
          </Link>
        </div>

        {/* Mobile: Burger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink to="/" className={navLinkStyles}>
            Головна
          </NavLink>
          <Popover className="relative">
            <PopoverButton className={`flex items-center gap-x-1 text-sm font-semibold leading-6 transition-colors duration-200 ${
              isLearningFormsActive ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
            }`}>
              Форми навчання
              <ChevronDownIcon aria-hidden="true" className="w-5 h-5 flex-none text-gray-400" />
            </PopoverButton>
            
            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-5 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link to={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
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

        {/* Desktop: підтримка та подати заявку справа */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a
            href="https://t.me/ashveme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 rounded-md bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200 transition"
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

      {/* Mobile dialog menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Besondres Deutch</span>
              {/* --- ЗМІНЕНО ТУТ --- */}
              <img
                alt="Besondres Deutch Logo"
                src={Logo}
                className="h-12 w-12 rounded-full object-cover"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 flex flex-col justify-between h-full">
              {/* Верхня частина меню */}
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Головна
                </NavLink>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${
                    isLearningFormsActive ? 'bg-gray-100 text-blue-600' : 'text-gray-900 hover:bg-gray-50'
                  }`}>
                    Форми навчання
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <NavLink
                  to="/about"
                  className={({ isActive }) => `-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${isActive ? 'bg-gray-100 text-blue-600' : 'text-gray-900 hover:bg-gray-50'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Про нас
                </NavLink>
              </div>

              {/* Нижня частина меню з кнопками */}
              <div className="space-y-4 py-6 border-t border-gray-200">
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
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-700 text-center bg-gray-100 hover:bg-gray-200 transition"
                >
                  Підтримка
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
