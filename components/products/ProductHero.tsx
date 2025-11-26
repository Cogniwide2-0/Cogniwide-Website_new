'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Section from '@/components/layout/Section'
import CogniForgeDashboard from './CogniForgeDashboard'
import CogniNovaDashboard from './CogniNovaDashboard'
import CogniAgentDashboard from './CogniAgentDashboard'
import CogniKubeDashboard from './CogniKubeDashboard'
import CogniInsightsDashboard from './CogniInsightsDashboard'

interface ProductData {
  name: string
  tagline: string
  description: string
  icon: React.ReactNode
  color: string
  features: string[]
  benefits: string[]
  useCases: string[]
}

interface ProductHeroProps {
  title?: string
  subtitle?: string
  primaryCTA?: string
  secondaryCTA?: string
  backgroundPattern?: 'chat' | 'agents' | 'documents'
  product?: ProductData
}

const ProductHero: React.FC<ProductHeroProps> = ({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundPattern,
  product
}) => {
  const patternClasses = {
    chat: 'bg-gradient-to-br from-blue-50 to-indigo-100',
    agents: 'bg-gradient-to-br from-purple-50 to-pink-100',
    documents: 'bg-gradient-to-br from-green-50 to-emerald-100'
  }

  // If product data is provided, use the new enhanced layout
  if (product) {
    return (
      <div className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0 bg-brand-blue/5"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(37, 99, 235, 0.15) 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Subtle accent elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center lg:justify-start mb-6"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-blue shadow-lg">
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  {product.name}
                </motion.h1>

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3xl text-brand-blue mb-6 font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {product.tagline}
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {product.description}
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <button className="bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue-dark transition-all shadow-lg hover:shadow-xl">
                    Schedule Demo
                  </button>
                  <button className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue hover:text-white transition-all">
                    Learn More
                  </button>
                </motion.div>
              </div>

              {/* Right Visual - Product Specific Dashboard */}
              {product.name === 'CogniForge' && <CogniForgeDashboard />}
              {product.name === 'CogniNova' && <CogniNovaDashboard />}
              {product.name === 'CogniAgent' && <CogniAgentDashboard />}
              {product.name === 'CogniKube' && <CogniKubeDashboard />}
              {product.name === 'CogniInsights' && <CogniInsightsDashboard />}
              {product.name !== 'CogniForge' && product.name !== 'CogniNova' && product.name !== 'CogniAgent' && product.name !== 'CogniKube' && product.name !== 'CogniInsights' && (
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                    {/* Generic Dashboard for other products */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                            {product.icon}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{product.name} Dashboard</div>
                            <div className="text-sm text-gray-600">Real-time monitoring</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                          <span className="text-sm text-brand-green font-medium">Active</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-200">
                          <div className="text-2xl font-bold text-brand-blue">24</div>
                          <div className="text-xs text-gray-600">Active</div>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4 text-center border border-green-200">
                          <div className="text-2xl font-bold text-brand-green">95%</div>
                          <div className="text-xs text-gray-600">Efficiency</div>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-200">
                          <div className="text-2xl font-bold text-brand-purple">1.2k</div>
                          <div className="text-xs text-gray-600">Tasks/Hour</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Primary Process</span>
                          </div>
                          <span className="text-xs text-brand-green font-medium">Running</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Secondary Process</span>
                          </div>
                          <span className="text-xs text-brand-blue font-medium">Processing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Powerful capabilities designed to transform your operations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.slice(0, 6).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-blue-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200 hover:border-brand-blue"
                >
                  <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center mb-4">
                    <div className="w-6 h-6 text-white">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Advanced capabilities to enhance your workflow and productivity.
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-gradient-to-br from-brand-blue-light1 to-blue-50 rounded-2xl p-8 mt-16 border border-blue-200 shadow-lg"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Measurable Business Impact
                </h3>
                <p className="text-gray-600 text-sm">
                  Real results from organizations using our solutions
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                    className="text-center p-4 bg-white rounded-xl shadow-sm border border-blue-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="text-2xl font-bold text-brand-blue mb-1">
                      {benefit}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {index === 0 && 'Improvement'}
                      {index === 1 && 'Efficiency Gain'}
                      {index === 2 && 'Speed Increase'}
                      {index === 3 && 'Growth'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  // Original layout for backward compatibility
  return (
    <Section
      background="white"
      padding="xl"
      className={`${patternClasses[backgroundPattern || 'chat']} relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {(backgroundPattern || 'chat') === 'chat' && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100" />
        )}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark-grey mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-brand-medium-grey mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button variant="primary" size="lg">
            {primaryCTA}
          </Button>
          <Button variant="secondary" size="lg">
            {secondaryCTA}
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default ProductHero
export { ProductHero }