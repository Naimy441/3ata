'use client'

import CountUp from 'react-countup'
import { useEffect, useState } from 'react'

const stats = [
  { label: 'Downloads', value: 1356 },
  { label: 'Donations Processed', value: 1000, prefix: '$', suffix: '+' },
  { label: 'Impressions', value: 11492 },
]

export default function Stats() {
  const [startCount, setStartCount] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const statsSection = document.getElementById('stats-section')
      if (statsSection && statsSection.getBoundingClientRect().top < window.innerHeight) {
        setStartCount(true)
        window.removeEventListener('scroll', onScroll)
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="stats-section" className="py-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-3xl md:text-5xl font-bold text-purple-800">
                {startCount ? (
                  <CountUp
                    end={stat.value}
                    duration={2}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                ) : (
                  `${stat.prefix || ''}0${stat.suffix || ''}`
                )}
              </p>
              <p className="text-gray-600 mt-2 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}