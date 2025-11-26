'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'CogniVibe',
    description: 'AI-powered SDLC framework that unifies your entire software development lifecycle. Automate workflows, eliminate friction, and ship world-class products faster than ever.',
    features: ['Unified SDLC Framework', 'Workflow Automation', 'Friction Elimination', 'Accelerated Delivery'],
    href: '/solutions/cognivibe',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBg: 'bg-brand-blue',
    iconColor: 'text-white',
    accentColor: 'text-brand-blue'
  },
  {
    name: 'CogniTest',
    description: 'AI-powered test automation solution covering functional & non-functional testing, test data generation, and screen comparison pixel-by-pixel via CogniPixel.',
    features: ['Test Automation', 'CogniPixel Technology', 'Test Data Generation', 'Quality Assurance'],
    href: '/solutions/cognitest',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'bg-green-50',
    borderColor: 'text-brand-green',
    iconBg: 'bg-brand-green',
    iconColor: 'text-white',
    accentColor: 'text-brand-green'
  },
  {
    name: 'CogniOps',
    description: 'AI-powered Cloud & DevOps solution used to create and deploy DevOps pipelines seamlessly with Helm charts. Migrate from any cloud with existing services.',
    features: ['DevOps Automation', 'Helm Chart Integration', 'Cloud Migration', 'Pipeline Management'],
    href: '/solutions/cogniops',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5C3 15 3 12.5 4.5 11L11 4.5C12.5 3 15 3 16.5 4.5C18 6 18 8.5 16.5 10L13 13.5C12.5 14 11.5 14 11 13.5C10.5 13 10.5 12 11 11.5L14.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 7.5L10 10C9.5 10.5 9.5 11.5 10 12C10.5 12.5 11.5 12.5 12 12L15.5 8.5C17 7 17 4.5 15.5 3C14 1.5 11.5 1.5 10 3L3.5 9.5C2 11 2 13.5 3.5 15C5 16.5 7.5 16.5 9 15L12.5 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    bgColor: 'bg-brand-yellow-light-bg',
    borderColor: 'border-brand-yellow-light',
    iconBg: 'bg-brand-yellow',
    iconColor: 'text-white',
    accentColor: 'text-brand-yellow'
  }
];

const SolutionShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4"
          >
            AI-Powered <span className="text-brand-dark-grey">Development Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive frameworks that streamline development, testing, and deployment with intelligent automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              viewport={{ once: true }}
              className={`group relative ${solution.bgColor} rounded-xl p-6 border-2 ${solution.borderColor} hover:shadow-lg transition-all duration-300`}
            >
              <div className="relative">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${solution.iconBg} flex items-center justify-center ${solution.iconColor}`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{solution.name}</h3>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <svg className={`w-4 h-4 ${solution.accentColor} flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={solution.href}>
                  <button className={`w-full ${solution.iconBg} ${solution.iconColor} px-4 py-2.5 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity duration-200 flex items-center justify-center`}>
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/solutions">
            <button className="bg-brand-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-blue-dark transition-colors duration-200 inline-flex items-center">
              View All Solutions
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionShowcase;