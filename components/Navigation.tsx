'use client'

import React from 'react'
import { useState } from 'react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChartBarIcon,
  CogIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  RocketLaunchIcon,
  CloudIcon,
  PresentationChartBarIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  BeakerIcon,
  CursorArrowRaysIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  HeartIcon,
  ShoppingBagIcon,
  TruckIcon,
  SignalIcon,
  BriefcaseIcon,
  LifebuoyIcon,
  AcademicCapIcon,
  WrenchIcon
} from '@heroicons/react/24/outline'

import Link from 'next/link'

interface NavigationItem {
  name: string
  href: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  image?: string
  features?: string[]
  useCases?: string[]
  impact?: string[]
  color?: string
}

interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

interface NavigationSection {
  title: string
  icon: any
  color: string
  groups: NavigationGroup[]
  featured?: NavigationItem
}

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  // Individual navigation items with proper SVG icons
  const navigationItems = [
    { name: 'Products', href: '/products', icon: CogIcon, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', icon: BoltIcon, hasDropdown: true },
    { name: 'Industries', href: '/industries', icon: BuildingOfficeIcon, hasDropdown: true },
    { name: 'Services', href: '/services', icon: UserGroupIcon, hasDropdown: true },
    { name: 'About', href: '/about', icon: BuildingOffice2Icon, hasDropdown: true }
  ]

  const dropdownContent: Record<string, any> = {
    'Products': {
      layout: 'single-column',
      items: [
        {
          name: 'CogniAgent',
          href: '/products/cogniagent',
          description: 'Agentic AI Platform',
          icon: RocketLaunchIcon,
          color: 'from-indigo-500 to-violet-600'
        },
        {
          name: 'CogniKube',
          href: '/products/cognikube',
          description: 'AI-Powered DevSecOps Orchestration',
          icon: CloudIcon,
          color: 'from-sky-500 to-blue-600'
        },
        {
          name: 'CogniInsights',
          href: '/products/cogniinsights',
          description: 'Analytics & BI platform',
          icon: PresentationChartBarIcon,
          color: 'from-cyan-500 to-teal-600'
        },
        {
          name: 'CogniNova',
          href: '/products/cogninova',
          description: 'AI-Powered School ERP and LMS with AI Coach Suite',
          icon: AcademicCapIcon,
          color: 'from-emerald-500 to-teal-600'
        },
        {
          name: 'CogniForge',
          href: '/products/cogniforge',
          description: 'ERP for Manufacturing Companies',
          icon: WrenchIcon,
          color: 'from-orange-500 to-red-600'
        },
      ]
    },
    'Solutions': {
      layout: 'single-column',
      items: [
        {
          name: 'CogniVibe',
          href: '/solutions/cognivibe',
          description: 'AI powered SDLC framework',
          icon: BoltIcon,
          color: 'from-indigo-600 to-purple-600'
        },
        {
          name: 'CogniTest',
          href: '/solutions/cognitest',
          description: 'AI powered test automation',
          icon: BeakerIcon,
          color: 'from-emerald-600 to-teal-600'
        },
        {
          name: 'CogniOps',
          href: '/solutions/cogniops',
          description: 'DevOps automation',
          icon: WrenchScrewdriverIcon,
          color: 'from-orange-600 to-red-600'
        }
      ]
    },
    'Industries': {
      layout: 'two-column',
      leftItems: [
        {
          name: 'Banking & Finance',
          href: '/industries/banking',
          description: 'Financial AI solutions',
          icon: BanknotesIcon,
          color: 'from-blue-600 to-indigo-600'
        },
        {
          name: 'Healthcare',
          href: '/industries/healthcare',
          description: 'Healthcare automation',
          icon: HeartIcon,
          color: 'from-rose-600 to-pink-600'
        },
        {
          name: 'Retail & E-commerce',
          href: '/industries/retail',
          description: 'Retail intelligence',
          icon: ShoppingBagIcon,
          color: 'from-amber-600 to-orange-600'
        }
      ],
      rightItems: [
        {
          name: 'Insurance',
          href: '/industries/insurance',
          description: 'Process automation',
          icon: ShieldCheckIcon,
          color: 'from-teal-600 to-emerald-600'
        },
        {
          name: 'Logistics',
          href: '/industries/logistics',
          description: 'Supply chain optimization',
          icon: TruckIcon,
          color: 'from-cyan-600 to-sky-600'
        },
        {
          name: 'Telecommunications',
          href: '/industries/telecom',
          description: 'Network optimization',
          icon: SignalIcon,
          color: 'from-violet-600 to-fuchsia-600'
        }
      ]
    },
    'Services': {
      layout: 'two-column',
      leftItems: [
        { name: 'AI Consulting', href: '/services/ai-consulting', description: 'Strategic AI implementation', icon: CursorArrowRaysIcon, color: 'from-purple-600 to-indigo-600' },
        { name: 'AI Development', href: '/services/ai-development', description: 'Custom AI solutions', icon: ComputerDesktopIcon, color: 'from-sky-600 to-blue-600' },
        { name: 'Data Engineering', href: '/services/data-engineering', description: 'Data pipeline solutions', icon: ChartBarIcon, color: 'from-teal-600 to-emerald-600' }
      ],
      rightItems: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Cloud transformation', icon: CloudIcon, color: 'from-orange-600 to-red-600' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security solutions', icon: ShieldCheckIcon, color: 'from-purple-600 to-red-700' }
      ]
    },
    'About': {
      layout: 'two-column',
      leftItems: [
        { name: 'About us', href: '/about', description: 'Our story and mission', icon: BuildingOffice2Icon, color: 'from-blue-600 to-indigo-600' },
        { name: 'Life at Cogniwide', href: '/about/life-at-cogniwide', description: 'Culture and team', icon: LifebuoyIcon, color: 'from-green-500 to-teal-500' }
      ],
      rightItems: [
        { name: 'Careers', href: '/careers', description: 'Join our team', icon: BriefcaseIcon, color: 'from-rose-600 to-pink-600' }
      ]
    }
  }

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-brand-blue-dark backdrop-blur-md shadow-xl border-b border-gray-600 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-gray-600/60 rounded-lg blur-sm -z-10 group-hover:blur-md transition-all duration-300" suppressHydrationWarning></div>
                <img
                  src="/logo-dark.png"
                  alt="Cogniwide"
                  className="h-7 w-auto group-hover:scale-105 transition-all duration-300 relative z-10 group-hover:brightness-110"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Compact */}
          <div className="hidden lg:block flex-1 mx-auto">
            <div className="flex items-center justify-center space-x-6">
              {navigationItems.map((item) => {
                const content = dropdownContent[item.name];
                const isTwoColumn = content.layout === 'two-column';

                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-100 hover:text-white transition-all duration-300 rounded-lg hover:bg-gray-700/30">
                      <span>{item.name}</span>
                      <ChevronDownIcon className="w-3 h-3" />
                    </button>

                    {activeDropdown === item.name && (
                      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 pt-2 z-50 ${isTwoColumn ? 'w-[530px]' : 'w-80'}`}>
                        <div className="bg-gray-700 rounded-xl shadow-2xl border border-gray-600 overflow-hidden">
                          <div className="p-3 bg-gray-700">
                            {isTwoColumn ? (
                              <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1.5">
                                  {content.leftItems?.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="dropdown-item flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gray-600/50 transition-all duration-200 group border border-transparent hover:border-gray-600/50"
                                      onClick={closeDropdown}
                                    >
                                      <div suppressHydrationWarning className={"w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200 " + (subItem.color ? ("bg-gradient-to-br " + subItem.color) : "bg-gray-600/50") + " group-hover:brightness-110"}>
                                        {React.createElement(subItem.icon, { className: "w-4 h-4 text-white drop-shadow-sm" })}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                          <div className="font-medium text-sm text-gray-100 group-hover:text-white transition-colors duration-200 truncate">
                                            {subItem.name}
                                          </div>
                                          {subItem.badge && (
                                            <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-600 text-white">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-200 leading-relaxed">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                <div className="space-y-1.5 border-l border-gray-600 pl-3">
                                  {content.rightItems?.map((subItem: any) => (
                                    <Link
                                      key={subItem.name}
                                      href={subItem.href}
                                      className="dropdown-item flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gray-600/50 transition-all duration-200 group border border-transparent hover:border-gray-600/50"
                                      onClick={closeDropdown}
                                    >
                                      <div className="w-7 h-7 rounded-md bg-brand-blue flex items-center justify-center transition-all duration-200">
                                        {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <div className="flex items-center space-x-2">
                                          <div className="font-medium text-sm text-gray-100 group-hover:text-white transition-colors duration-200 truncate">
                                            {subItem.name}
                                          </div>
                                          {subItem.badge && (
                                            <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-600 text-white">
                                              {subItem.badge}
                                            </span>
                                          )}
                                        </div>
                                        <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-200 leading-relaxed">
                                          {subItem.description}
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-1.5">
                                {content.items?.map((subItem: any) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="dropdown-item flex items-center space-x-3 p-2.5 rounded-lg hover:bg-gray-600/50 transition-all duration-200 group border border-transparent hover:border-gray-600/50"
                                    onClick={closeDropdown}
                                  >
                                    <div className="w-7 h-7 rounded-md bg-brand-blue flex items-center justify-center transition-all duration-200">
                                      {React.createElement(subItem.icon, { className: "w-4 h-4 text-white" })}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center space-x-2">
                                        <div className="font-medium text-sm text-gray-100 group-hover:text-white transition-colors duration-200 truncate">
                                          {subItem.name}
                                        </div>
                                        {subItem.badge && (
                                          <span className="px-2 py-0.5 text-xs font-medium rounded bg-gray-600 text-white">
                                            {subItem.badge}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-200 leading-relaxed">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link href="/contact">
              <button className="bg-brand-blue text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-brand-blue-dark transition-all duration-200">
                <span>Contact Us</span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-100 hover:text-white hover:bg-gray-700/40 hover:shadow-md transition-all duration-300 rounded-lg group"
            >
              <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                {isOpen ? (
                  <XMarkIcon className="h-5 w-5" />
                ) : (
                  <Bars3Icon className="h-5 w-5" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-600/50 bg-gray-700 backdrop-blur-xl shadow-2xl rounded-b-xl overflow-hidden">
            <div className="px-3 py-3 space-y-1">
              {navigationItems.map((item, index) => (
                <div className="text-white" key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        className={`flex items-center justify-between w-full text-left p-3 rounded-lg transition-all duration-300 group ${activeDropdown === item.name
                          ? 'bg-gray-600 text-white shadow-md'
                          : 'hover:bg-gray-600/40 hover:text-white hover:shadow-sm'
                          }`}
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <span className="font-medium text-sm">{item.name}</span>
                        <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="ml-3 space-y-1 overflow-hidden">
                          {(dropdownContent[item.name]?.items || (dropdownContent[item.name]?.leftItems || []).concat(dropdownContent[item.name]?.rightItems || [])).map((subItem: any) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-600/40 transition-all duration-200 group border border-transparent hover:border-gray-600/50"
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="w-10 h-10 rounded-lg bg-brand-blue flex items-center justify-center transition-all duration-200 flex-shrink-0">
                                {React.createElement(subItem.icon, { className: "w-5 h-5 text-white" })}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center space-x-2 mb-1">
                                  <span className="font-semibold text-sm text-gray-100 group-hover:text-white transition-colors duration-300 truncate">
                                    {subItem.name}
                                  </span>
                                  {subItem.badge && (
                                    <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-gray-600 text-white shadow-sm flex-shrink-0">
                                      {subItem.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                  {subItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 px-3 rounded-lg hover:bg-gray-600/40 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium text-sm text-gray-100">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA */}
              <div className="border-t border-gray-600 pt-3 mt-3">
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-4 bg-brand-blue text-white rounded-lg font-medium hover:bg-brand-blue-dark transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation