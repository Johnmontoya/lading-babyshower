import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TimeBlockProps {
    value: number
    label: string
    padLength?: number
}

export default function TimeBlock({ value, label, padLength = 2 }: TimeBlockProps) {
    const [displayValue, setDisplayValue] = useState(value)
    const [key, setKey] = useState(0)
    const prevRef = useRef(value)

    useEffect(() => {
        if (value !== prevRef.current) {
            prevRef.current = value
            setDisplayValue(value)
            setKey(k => k + 1)
        }
    }, [value])

    const formatted = String(displayValue).padStart(padLength, '0')

    return (
        <div
            className="
        relative flex flex-col items-center justify-center
        min-w-[70px] px-3 py-3.5 rounded-2xl
        select-none cursor-default
        transition-transform duration-200 hover:-translate-y-1 hover:scale-105
      "
            style={{
                background: 'linear-gradient(160deg, #f4e8d4 0%, #eadbc0 100%)',
                border: '1px solid rgba(201,169,110,0.5)',
                boxShadow: '0 4px 16px rgba(107,76,59,0.12), inset 0 1px 0 rgba(255,255,255,0.65)',
            }}
        >
            {/* Gold shimmer top strip */}
            <div
                className="absolute top-0 left-2 right-2 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(to right, transparent, #e8c98a, transparent)' }}
            />

            {/* Number with flip animation */}
            <div className="perspective-800 overflow-hidden leading-none mb-1.5">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={key}
                        initial={{ rotateX: 90, opacity: 0, y: -8 }}
                        animate={{ rotateX: 0, opacity: 1, y: 0 }}
                        exit={{ rotateX: -90, opacity: 0, y: 8 }}
                        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                        className="block font-serif text-3xl font-semibold text-earth-700 backface-hidden"
                        style={{
                            textShadow: '0 1px 4px rgba(107,76,59,0.15)',
                            color: '#5a3a2a',
                        }}
                    >
                        {formatted}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Label */}
            <span
                className="text-[0.62rem] uppercase tracking-widest font-sans font-normal"
                style={{ color: '#c9a96e' }}
            >
                {label}
            </span>
        </div>
    )
}