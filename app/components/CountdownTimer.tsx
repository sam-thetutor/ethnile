'use client'

import { useEffect, useState } from 'react'

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-07-24T00:00:00')

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex mb-8 mt-8 justify-center gap-4">
      <div className="text-center">
        <div className="text-3xl font-bold text-[#4ECDC4]">{timeLeft.days}</div>
        <div className="text-sm text-gray-300">Days</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#4ECDC4]">{timeLeft.hours}</div>
        <div className="text-sm text-gray-300">Hours</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#4ECDC4]">{timeLeft.minutes}</div>
        <div className="text-sm text-gray-300">Minutes</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-[#4ECDC4]">{timeLeft.seconds}</div>
        <div className="text-sm text-gray-300">Seconds</div>
      </div>
    </div>
  )
} 