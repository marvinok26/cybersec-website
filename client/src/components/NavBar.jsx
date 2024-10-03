'use client';

import logo1 from '../images/logo1.jpeg';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
  { name: 'Office Automation', description: 'Seamless automation for improved performance and collaboration', href: '/services', icon: ChartPieIcon },
  { name: 'Cloud Solutions', description: 'Flexible and innovative cloud services', href: '/services', icon: CursorArrowRaysIcon },
  { name: 'Cybersecurity', description: 'Protect your data with reliable, secure solutions', href: '/services', icon: FingerPrintIcon },
  { name: 'Networking', description: 'Fast and reliable secure connections', href: '/services', icon: ArrowPathIcon },
  { name: 'Datacenter Solutions', description: 'Efficient and scalable infrastructure for your data needs', href: '/services', icon: SquaresPlusIcon },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact Us', href: '/contact', icon: PhoneIcon },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  let closeTimeout;

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setServicesOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setServicesOpen(true);
  };

  useEffect(() => {
    return () => {
      clearTimeout(closeTimeout); // Clean up timeout on unmount
    };
  }, []);

  return (
    <header className="bg-white fixed top-0 left-0 w-full z-50" role="banner">
      <nav aria-label="Global Navigation" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Alamat Group Limited</span>
            <img 
              alt="Alamat Group Limited Logo"
              src={logo1} 
              className="h-[2.5rem] w-auto" 
              loading="lazy" // Lazy loading for performance
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            aria-expanded={mobileMenuOpen} // Accessibility improvement
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:flex-1">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </a>
          <a href="/about" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <Popover className="relative">
            <div
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/services">Services</a>
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </div>
            {servicesOpen && (
              <PopoverPanel
                static
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
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
                        <a href={item.href} className="block font-semibold text-gray-900" rel="noopener noreferrer"> {/* Security improvement */}
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            )}
          </Popover>

          <a href="/careers" className="text-sm font-semibold leading-6 text-gray-900">
            Careers
          </a>
          <a href="/contact" className="text-sm font-semibold leading-6 text-gray-900">
            Contact
          </a>
        </PopoverGroup>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Alamat Group Limited</span>
              <img 
                alt="Alamat Group Limited Logo" 
                src={logo1} 
                className="h-8 w-auto" 
                loading="lazy" 
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <a
                href="/"
                className="-mx-3 mt-4 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="/about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                About
              </a>
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <a
                href="/careers"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Careers
              </a>
              <a
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Contact
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
