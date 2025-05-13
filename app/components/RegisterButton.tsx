'use client'

import { Button } from "@/components/ui/button"

export function RegisterButton() {
  return (
    <Button 
      onClick={() => window.open('https://app.sola.day/event/ethnile', '_blank')}
      className="bg-[#4ECDC4] text-white  hover:bg-[#3DBDB4] "
    >
      Register Now
    </Button>
  )
} 