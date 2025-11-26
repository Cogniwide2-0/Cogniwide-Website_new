'use client'
 
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
 
const TrustIndicators = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
 
  const clientLogos = [
    { name: 'Quess', logo: '/clients/Quess.png' },
    { name: 'Alfardan', logo: '/clients/alfardan.png' },
    { name: 'Almuzaini', logo: '/clients/almuzaini.png' },
    { name: 'Awnic', logo: '/clients/awnic.png' },
    { name: 'Federal Bank', logo: '/clients/federalbank.png' },
    { name: 'Fifth9', logo: '/clients/fifth9.png' },
    { name: 'Lycamobile', logo: '/clients/lycamobile.png' },
  ]
 
  const testimonials = [
    {
      quote: "We wanted to extend reach and improve customer access to our services by adding Whats App and Chatbot channel. Cogniwide has helped us boost our support to a whole new level. Their valuable support has been crucial to our success in launching a sophisticated BOT to provide great experiences to our customers. They have professional team to support us all throughout the project phase in providing timely response to all the queries raised.",
      author: "Muralikrishnan R",
      title: "CFO, AWNIC",
      company: "ALWATHBA NATIONAL INSURANCE CO"
    },
    {
      quote: "As a large organization, we receive thousands of queries that need immediate resolution each day. This was the key reason we looked for a virtual assistant to support our employees. We went ahead with Cogniwide’s CogniAssist, and how it worked! It was utterly simple to use and had everything we needed to solve our problem.",
      author: "Leading Workforce ",
      title: "Management Company",
      company: "India"
    },
    {
      quote: "Covid-19 has disrupted our lives, some more so than the others – like the daily wage workers. Hence, we planned to build a platform to help furloughed people return to work faster. Cogniwide brought clarity and expertise to this project and delivered a robust, user-friendly platform that helps job-seekers find lucrative and trustworthy opportunities in testing times.",
      author: "Jennifer Park",
      title: "Leading Consulting Company",
      company: "United Kingdom"
    },
    {
      quote: " Cogniwide helped us shift to an advanced capability that helps us stay in the lead. With CogniAssist, our customers always have help at hand and information at hand. Also, our support desk team can focus on complex queries.",
      author: "Jennifer",
      title: "Leading Insurance Company",
      company: "Dubai"
    }
  ]
 
  const statistics = [
    { number: 75, suffix: '%', label: 'Average Efficiency Gain' },
    { number: 99.9, suffix: '%', label: 'Platform Uptime' },
    { number: 24, suffix: '/7', label: 'AI Agent Availability' }
  ]
 
  const [animatedStats, setAnimatedStats] = useState(statistics.map(() => 0))
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])
 
  useEffect(() => {
    const animateStats = () => {
      statistics.forEach((stat, index) => {
        let current = 0
        const increment = stat.number / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }
          setAnimatedStats(prev => {
            const newStats = [...prev]
            newStats[index] = current
            return newStats
          })
        }, 30)
      })
    }
 
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
 
    const element = document.getElementById('statistics')
    if (element) observer.observe(element)
 
    return () => observer.disconnect()
  }, [])
 
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gray-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-50 rounded-full blur-3xl"></div>
      </div>
     
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       
        {/* Client Logos */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="text-center text-gray-900 text-3xl lg:text-4xl mb-12 font-medium">
            Trusted by leading <span className='text-brand-blue'>Enterprises Worldwide</span>
          </h3>
         
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -100 * 7] }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ width: `${7 * 200}px` }}
            >
              {clientLogos.concat(clientLogos).map((client, index) => (
                <motion.div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-400 ease-out group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 7) * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain transition-all duration-300 hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
 
        {/* Statistics */}
        <motion.div
          id="statistics"
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number === 99.9
                  ? animatedStats[index].toFixed(1)
                  : Math.floor(animatedStats[index])
                }
                <span className="text-brand-blue">{stat.suffix}</span>
              </motion.div>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
 
        {/* Testimonials */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            What Our Clients Say
          </h3>
         
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-3 border border-gray-200/50 shadow-lg">
            <div className="relative h-80 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 flex flex-col justify-center text-center px-8"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{
                    opacity: currentTestimonial === index ? 1 : 0,
                    x: currentTestimonial === index ? 0 : currentTestimonial < index ? 100 : -100
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <svg className="w-8 h-8 text-brand-blue mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <blockquote className="text-xl text-gray-800 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="text-gray-600">
                    <p className="font-semibold text-gray-900 text-lg">{testimonial.author}</p>
                    <p className="text-sm">{testimonial.title}</p>
                    <p className="text-sm">{testimonial.company}</p>
                  </div>
                </motion.div>
              ))}
            </div>
 
            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index
                      ? 'bg-brand-blue'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
 
export default TrustIndicators