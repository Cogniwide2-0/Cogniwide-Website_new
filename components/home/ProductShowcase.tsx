'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const products = [
  {
    name: 'CogniAgent',
    description: 'AI-powered agentic automation platform that orchestrates intelligent agents to streamline complex business processes and decision-making.',
    features: ['Autonomous Agent Orchestration', 'Multi-Agent Collaboration', 'Intelligent Process Automation', 'Real-time Decision Making'],
    href: '/products/cogniagent',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'CogniKube',
    description: 'AI-powered Kubernetes Orchestration Platform that simplifies container management with intelligent scaling, monitoring, and multi-cloud deployment.',
    features: ['AI-Powered Auto-Scaling', 'Multi-Cloud Orchestration', 'Intelligent Monitoring', 'Automated Operations'],
    href: '/products/cognikube',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 4.21L12 6.81L16.5 4.21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 19.79V14.6L3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12L16.5 14.6V19.79" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22.81V17L7.5 14.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'CogniInsights',
    description: 'Analytics platform that enables one-click migration between BI tools using PortBI, and seamless MDM management with CogniCraft.',
    features: ['One-Click BI Migration', 'PortBI Integration', 'CogniCraft MDM', 'Advanced Analytics Dashboard'],
    href: '/products/cogniinsights',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9L12 6L16 10L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 9H12V18H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 10H19V18H16V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
];

export const ProductShowcase = () => {
  return (
    <section className="py-20 lg:py-32 bg-brand-blue-light1 relative overflow-hidden font-poppins">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark-grey mb-6"
          >
            Enterprise<span className="text-brand-blue"> AI Products</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-xl text-brand-dark-gray max-w-3xl mx-auto"
          >
            Transform your business with our comprehensive suite of AI solutions designed to automate, optimize, and accelerate your operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            // Use different colors for visual variety while staying consistent - no yellow on dark background
            const colors = [
              { bg: 'bg-blue-500', text: 'text-white' },
              { bg: 'bg-brand-green', text: 'text-white' },
              { bg: 'bg-brand-yellow', text: 'text-white' }
            ];
            const colorScheme = colors[index % colors.length];

            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative bg-brand-white/10 backdrop-blur-sm rounded-2xl p-8 border border-brand-white/20 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-yellow-400/30 flex flex-col"
              >
                {/* Subtle Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-xl ${colorScheme.bg} flex items-center justify-center ${colorScheme.text} shadow-lg group-hover:scale-105 group-hover:shadow-xl transition-all duration-300`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-gray group-hover:text-brand-dark-gray transition-colors duration-300">{product.name}</h3>
                    </div>
                  </div>

                  <p className="text-brand-dark-gray mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8 flex-grow">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <svg className="w-4 h-4 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-brand-dark-gray font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={product.href} className="mt-auto">
                    <button className="w-full bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-blue-dark hover:shadow-lg hover:shadow-yellow-400/30 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-[1.02]">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/products">
            <button className="border-2 border-brand-white bg-brand-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-brand-blue-dark hover:text-white transition-colors duration-300 flex items-center mx-auto">
              View All Products
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};