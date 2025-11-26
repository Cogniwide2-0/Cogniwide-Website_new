'use client'

import React from 'react'
import { motion } from 'framer-motion'

const CogniForgeDashboard = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="relative bg-brand-dark-grey/90 rounded-2xl shadow-2xl p-8 border border-brand-yellow/20">
        {/* CogniForge Manufacturing Dashboard */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-brand-yellow to-brand-yellow-dark flex items-center justify-center text-brand-dark-grey">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9 9H15V15H9V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-brand-white">CogniForge Dashboard</div>
                <div className="text-sm text-brand-grey">Real-time monitoring</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
              <span className="text-sm text-brand-green font-medium">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-brand-medium-grey/10 rounded-lg p-4 text-center border border-brand-medium-grey/20">
              <div className="text-2xl font-bold text-brand-yellow">24</div>
              <div className="text-xs text-brand-yellow-light">Active</div>
            </div>
            <div className="bg-brand-medium-grey/10 rounded-lg p-4 text-center border border-brand-medium-grey/20">
              <div className="text-2xl font-bold text-brand-yellow">95%</div>
              <div className="text-xs text-brand-yellow-light">Efficiency</div>
            </div>
            <div className="bg-brand-medium-grey/10 rounded-lg p-4 text-center border border-brand-medium-grey/20">
              <div className="text-2xl font-bold text-brand-yellow">1.2k</div>
              <div className="text-xs text-brand-yellow-light">Tasks/Hour</div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-brand-medium-grey/50 rounded-lg border border-brand-yellow/10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-dark-grey rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-brand-white">Primary Process</span>
              </div>
              <span className="text-xs text-brand-yellow font-medium">Running</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-brand-medium-grey/50 rounded-lg border border-brand-yellow/10">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand-dark-grey rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-brand-white">Secondary Process</span>
              </div>
              <span className="text-xs text-brand-yellow font-medium">Processing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-yellow rounded-full animate-bounce"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-brand-yellow-light rounded-full animate-pulse"></div>
    </motion.div>
  )
}

export default CogniForgeDashboard