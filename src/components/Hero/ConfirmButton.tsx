import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ConfirmButtonProps {
    whatsappNumber?: string  // e.g. "5491112345678"
    message?: string
}

export default function ConfirmButton({
    whatsappNumber = '573128241064',
    message = '¡Hola! Confirmo mi asistencia al Baby Shower de Pollictor Junior 🍼🐾',
}: ConfirmButtonProps) {
    const [confirmed, setConfirmed] = useState(false)

    const handleClick = () => {
        setConfirmed(true)
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
        setTimeout(() => window.open(url, '_blank'), 400)
        setTimeout(() => setConfirmed(false), 3000)
    }

    return (
        <motion.button
            onClick={handleClick}
            whileTap={{ scale: 0.96 }}
            className="
        relative w-full max-w-xs mx-auto flex items-center justify-center gap-3
        px-8 py-4 rounded-full font-sans font-semibold text-base
        overflow-hidden cursor-pointer select-none
        transition-all duration-200
      "
            style={{
                background: confirmed
                    ? 'linear-gradient(135deg, #68c840, #4aa828)'
                    : 'linear-gradient(120deg, #e8d0a0 0%, #f8e8b8 30%, #e8c880 50%, #f8e8b8 70%, #e8d0a0 100%)',
                backgroundSize: '200% auto',
                animation: confirmed ? 'none' : 'shimmer 3s linear infinite',
                border: '1.5px solid rgba(160, 120, 64, 0.55)',
                boxShadow: '0 4px 18px rgba(160,120,64,0.22), inset 0 1px 0 rgba(255,255,255,0.55)',
                color: confirmed ? 'white' : '#7a5020',
            }}
        >
            {/* Inner shimmer strip */}
            <span
                className="absolute inset-x-6 top-0 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,200,0.7), transparent)' }}
            />

            <AnimatePresence mode="wait">
                {confirmed ? (
                    <motion.span
                        key="confirmed"
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-xl">✓</span>
                        <span>¡Confirmado!</span>
                    </motion.span>
                ) : (
                    <motion.span
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2.5"
                    >
                        <span className="text-xl animate-heartbeat inline-block">🧡</span>
                        <span>Confirmar Asistencia</span>
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.button>
    )
}