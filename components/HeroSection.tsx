'use client'

import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('main-content')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative bg-gray-100 py-20 lg:py-20 overflow-hidden">
      {/* Simple decorative circles */}
      <div className="absolute inset-0 z-0">
        {/* <div className="absolute top-20 right-32 w-64 h-64 bg-gray-200 rounded-full opacity-40" /> */}
        {/* <div className="absolute top-32 right-20 w-48 h-48 bg-white rounded-full border-2 border-gray-300" /> */}
        {/* <div className="absolute bottom-20 left-10 w-4 h-4 bg-brand-red rounded-full" /> */}
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-brand-purple rounded-full" />
        {/* <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-brand-yellow rounded-full" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Brand Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-md px-3 py-1.5 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-blue text-sm font-medium">Enterprise AI Platform</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Business with{' '}
              <span className="text-brand-blue">Intelligent</span>{' '}
              <span className="text-brand-blue">Agents</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Deploy AI-powered automation that thinks, learns, and adapts. Scale intelligent workflows across your entire enterprise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/products">
                <motion.button
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue-dark transition-all shadow-lg hover:shadow-xl w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Platform
                </motion.button>
              </Link>

              <Link href="/demo">
                <motion.button
                  className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue hover:text-white transition-all w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Demo
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators - Compact */}
            <motion.div
              className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="bg-brand-blue/10 backdrop-blur-sm rounded-lg p-3 border border-brand-blue/20 text-center">
                <div className="text-xl font-bold text-brand-blue mb-1">95%</div>
                <div className="text-gray-700 text-xs font-medium">Automation Rate</div>
              </div>
              <div className="bg-brand-green/10 backdrop-blur-sm rounded-lg p-3 border border-brand-green/20 text-center">
                <div className="text-xl font-bold text-brand-green mb-1">$2.4M</div>
                <div className="text-gray-700 text-xs font-medium">Annual Savings</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual - Generic Enterprise AI Platform */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main Platform Overview */}
            <div className="relative bg-white rounded-xl p-5 border border-gray-200 shadow-lg">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-7 h-7 bg-brand-blue rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">Cogniwide Platform</div>
                    <div className="text-gray-500 text-xs">Enterprise AI Suite</div>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5">
                  <div className="w-2 h-2 bg-brand-green rounded-full"></div>
                  <span className="text-brand-green text-xs font-medium">Active</span>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-2 gap-2.5 mb-4">
                <motion.div
                  className="bg-blue-50 rounded-lg p-3 border border-blue-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <div className="w-6 h-6 mb-1.5 bg-brand-blue rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-gray-900">CogniAgent</div>
                  <div className="text-xs text-gray-600">AI Automation</div>
                </motion.div>

                <motion.div
                  className="bg-green-50 rounded-lg p-3 border border-green-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <div className="w-6 h-6 mb-1.5 bg-brand-green rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-gray-900">CogniKube</div>
                  <div className="text-xs text-gray-600">K8s Platform</div>
                </motion.div>

                <motion.div
                  className="bg-purple-50 rounded-lg p-3 border border-purple-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  <div className="w-6 h-6 mb-1.5 bg-brand-purple rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-gray-900">CogniInsights</div>
                  <div className="text-xs text-gray-600">BI Analytics</div>
                </motion.div>

                <motion.div
                  className="bg-yellow-50 rounded-lg p-3 border border-yellow-200"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <div className="w-6 h-6 mb-1.5 bg-brand-yellow rounded flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div className="text-xs font-semibold text-gray-900">Services</div>
                  <div className="text-xs text-gray-600">Consulting</div>
                </motion.div>
              </div>

              {/* Enterprise Metrics */}
              <div className="space-y-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                  className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-green rounded-full"></div>
                    <span className="text-gray-700 text-xs">Enterprise Deployment</span>
                  </div>
                  <span className="text-brand-green text-xs font-medium">Ready</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1 }}
                  className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-blue rounded-full"></div>
                    <span className="text-gray-700 text-xs">Multi-Cloud Support</span>
                  </div>
                  <span className="text-brand-blue text-xs font-medium">Active</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.1 }}
                  className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full"></div>
                    <span className="text-gray-700 text-xs">24/7 AI Operations</span>
                  </div>
                  <span className="text-brand-yellow-dark text-xs font-medium">Running</span>
                </motion.div>
              </div>
            </div>

            {/* Floating Elements */}
            {/* <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-brand-yellow rounded-full" />
            <div className="absolute top-1/3 -right-2 w-3 h-3 bg-brand-red rounded-full" />
            <div className="absolute bottom-1/4 -left-2 w-3 h-3 bg-brand-purple rounded-full" /> */}
          </motion.div>
        </div>


      </div>
    </section>
  )
}

export default HeroSection