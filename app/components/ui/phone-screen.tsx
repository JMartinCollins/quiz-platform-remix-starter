'use client'

// import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils"

interface PhoneScreenProps {
    children: React.ReactNode
    title?: string
    className?: string
}

export default function PhoneScreen({ children, title = 'App', className }: PhoneScreenProps) {
    const [isOn, setIsOn] = useState(true)

    const togglePhone = () => setIsOn(!isOn)

    return (
        <div className={cn("flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4", className)}>
            <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] shadow-xl overflow-hidden">
                {/* Phone frame */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-20"></div>

                {/* Screen */}
                <div
                    className="absolute inset-2 bg-white rounded-3xl overflow-hidden"
                //   initial={{ opacity: 0 }}
                //   animate={{ opacity: isOn ? 1 : 0 }}
                //   transition={{ duration: 0.3 }}
                >
                    {/* Status bar */}
                    <div className="h-6 bg-gray-800 flex justify-between items-center px-4 text-white text-xs">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                            </svg>
                        </div>
                    </div>

                    {/* App content */}
                    <div className="h-[calc(100%-1.5rem)] pt-6 flex flex-col">
                        <h2 className="text-center font-bold text-xl mb-4">{title}</h2>
                        <div className="px-4 flex-1 overflow-y-auto scrollbar-hide">
                            {children}
                        </div>
                    </div>
                </div>

                {/* Home button */}
                <button
                    className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center focus:outline-none"
                    onClick={togglePhone}
                >
                    <div className="w-8 h-8 rounded-sm border-2 border-white"></div>
                </button>
            </div>

            <Button className="mt-8" onClick={togglePhone}>
                {isOn ? 'Turn Off' : 'Turn On'}
            </Button>
        </div>
    )
}