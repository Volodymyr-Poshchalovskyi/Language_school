'use client'

import { useState } from 'react'
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

const products = [
  { name: 'Персональні заняття', description: 'Підходить якщо готові багато говорити', href: '#', icon: ChartPieIcon },
  { name: 'Групові заняття', description: 'Підходить для більшої практики слухання', href: '#', icon: CursorArrowRaysIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* ! Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt=""
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* ! Mobile: Подати Заявку + Burger */}
        <div className="flex items-center gap-4 lg:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Подати Заявку
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* ! Desktop nav */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold text-gray-900">
            Головна
          </a>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
              Форми навчання
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <a href="#" className="text-sm font-semibold text-gray-900">
            Про нас
          </a>
        </PopoverGroup>

        {/* ! Desktop: кнопки підтримки та подати заявку справа */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
          <a
            href="https://t.me/your_support_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-x-2 rounded-md bg-blue-100 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-200 transition"
          >
            {/* * Іконка Telegram збільшена */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 240"
              fill="none"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <circle cx="120" cy="120" r="120" fill="#2CA5E0" />
              <path
                d="M86.3 162.6c-1.5 0-1.8-0.7-1.4-1.5l7.3-21.7 40.1-38.3-55.1 34.5-23.7-7.4c-1.4-0.4-1.4-1.4 0.3-2l88.3-34.1c1.7-0.7 3.3 0.4 2.7 3l-15.9 66.6c-0.3 1.5-1.1 1.9-2.3 1.2l-24.9-18.4-12.9 12.4c-0.5 0.5-1.1 0.8-1.8 0.8z"
                fill="white"
              />
            </svg>
            Підтримка
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-x-1 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition"
          >
            Подати Заявку
          </a>
        </div>
      </nav>

      {/* ! Mobile dialog menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {/* ! Головна */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Головна
                </a>

                {/* ! Форми навчання (дропдаун) */}
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Форми навчання
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                {/* ! Про нас */}
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Про нас
                </a>

                {/* ! Підтримка */}
                <a
                  href="https://t.me/your_support_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-x-2 rounded-lg bg-blue-100 px-3 py-2 text-base font-semibold text-blue-700 hover:bg-blue-200 transition -mx-3"
                >
                  {/* * Іконка Telegram збільшена */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 240 240"
                    fill="none"
                    className="h-8 w-8"
                    aria-hidden="true"
                  >
                    <circle cx="120" cy="120" r="120" fill="#2CA5E0" />
                    <path
                      d="M86.3 162.6c-1.5 0-1.8-0.7-1.4-1.5l7.3-21.7 40.1-38.3-55.1 34.5-23.7-7.4c-1.4-0.4-1.4-1.4 0.3-2l88.3-34.1c1.7-0.7 3.3 0.4 2.7 3l-15.9 66.6c-0.3 1.5-1.1 1.9-2.3 1.2l-24.9-18.4-12.9 12.4c-0.5 0.5-1.1 0.8-1.8 0.8z"
                      fill="white"
                    />
                  </svg>
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
