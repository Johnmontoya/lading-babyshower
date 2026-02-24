import ConfirmButton from './Hero/ConfirmButton'
import { motion } from 'framer-motion'
import Illustration from './Hero/Illustration'
import BotanicalCorner from './Counter/BotanicalCorner'

const EVENT = {
    date: '2026-04-19',
    time: '16:00 hs',
    whatsapp: '573128241064',   // número con código de país, sin "+"
    babyName: 'Pollictor Junior',
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const Hero = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center p-4"
        >

            <motion.div
                className="relative w-full max-w-sm overflow-hidden rounded-[2.2rem]"
                style={{
                    boxShadow:
                        '0 20px 60px rgba(90,58,42,0.16), 0 4px 12px rgba(90,58,42,0.08)',
                }}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >

                {/* ── TOP SECTION: Illustration ── */}
                <BotanicalCorner position="bl" />
                <BotanicalCorner position="br" />
                <div
                    className="relative w-full"
                    style={{
                        background: 'linear-gradient(180deg, #eef8f0 0%, #f5f0e8 75%, #ede4d8 100%)',
                        paddingBottom: '0',
                    }}
                >
                    {/* Botanical corners */}
                    <BotanicalCorner position="tl" />
                    <BotanicalCorner position="tr" />


                    {/* Subtle top bokeh dots */}
                    {[
                        { x: '12%', y: '8%', size: 6, color: '#ff9090', delay: 0 },
                        { x: '82%', y: '6%', size: 5, color: '#ffe060', delay: 0.3 },
                        { x: '50%', y: '5%', size: 4, color: '#80e080', delay: 0.6 },
                        { x: '25%', y: '88%', size: 5, color: '#ffb8d0', delay: 0.2 },
                        { x: '75%', y: '90%', size: 4, color: '#b8e8a0', delay: 0.5 },
                    ].map((dot, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                left: dot.x,
                                top: dot.y,
                                width: dot.size,
                                height: dot.size,
                                background: dot.color,
                                opacity: 0.5,
                                filter: 'blur(1px)',
                            }}
                            animate={{ opacity: [0.3, 0.7, 0.3], scale: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 3 + i * 0.4, delay: dot.delay, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    ))}

                    {/* Illustration */}
                    <div className="relative z-10 w-full animate-float-up">
                        <Illustration />
                    </div>
                </div>

                {/* ── BOTTOM SECTION: Info ── */}
                <div
                    className="relative flex flex-col items-center px-8 pb-10 pt-6 gap-5"
                    style={{
                        background: 'linear-gradient(175deg, #ede8e0 0%, #f2ece4 100%)',
                    }}
                >
                    {/* Wave divider at top */}
                    <div className="absolute -top-px left-0 right-0 overflow-hidden leading-none">
                        <svg viewBox="0 0 320 20" className="w-full" preserveAspectRatio="none">
                            <path
                                d="M0 20 Q40 8 80 14 Q120 20 160 12 Q200 4 240 14 Q280 22 320 10 L320 20 Z"
                                fill="#ede8e0"
                            />
                        </svg>
                    </div>

                    {/* Accent line */}
                    <motion.div
                        className="flex justify-center items-center gap-2 mt-1"
                        {...fadeUp(0.15)}
                    >
                        <div className="h-px w-10" style={{ background: 'linear-gradient(to right, transparent, #2a7a6e)' }} />
                        <span
                            className="w-full font-sans text-[0.65rem] uppercase tracking-[0.22em] font-bold"
                            style={{ color: '#2a7a6e' }}
                        >
                            ¡Nos hace mucha ilusión!
                        </span>
                        <div className="h-px w-10" style={{ background: 'linear-gradient(to left, transparent, #2a7a6e)' }} />
                    </motion.div>

                    {/* Main title */}
                    <motion.div className="text-center" {...fadeUp(0.25)}>
                        <h1
                            className="font-serif font-bold leading-tight"
                            style={{ fontSize: '2.05rem', color: '#2a3a30', letterSpacing: '-0.01em' }}
                        >
                            Baby Shower de
                            <br />
                            <span style={{ color: '#1a5a50' }}>{EVENT.babyName}</span>
                        </h1>
                    </motion.div>

                    {/* Date & time */}
                    <motion.div
                        className="flex flex-col items-center gap-1"
                        {...fadeUp(0.35)}
                    >
                        <div
                            className="flex items-center gap-2 font-sans text-sm font-light"
                            style={{ color: '#6a5a4a' }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a7a6e" strokeWidth="2" strokeLinecap="round">
                                <rect x="3" y="4" width="18" height="18" rx="3" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                            <span>{EVENT.date}</span>
                        </div>
                        <div
                            className="flex items-center gap-2 font-sans text-sm font-light"
                            style={{ color: '#6a5a4a' }}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2a7a6e" strokeWidth="2" strokeLinecap="round">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>{EVENT.time}</span>
                        </div>
                    </motion.div>

                    {/* Thin gold divider */}
                    <motion.div
                        className="w-full flex items-center gap-3"
                        {...fadeUp(0.42)}
                    >
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.5))' }} />
                        <span style={{ color: '#c9a96e', fontSize: '1rem' }}>✦</span>
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(201,169,110,0.5))' }} />
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div className="w-full" {...fadeUp(0.5)}>
                        <ConfirmButton
                            whatsappNumber={EVENT.whatsapp}
                            message={`¡Hola! Confirmo mi asistencia al Baby Shower de ${EVENT.babyName} 🍼🐾🎈`}
                        />
                    </motion.div>

                    {/* Footer paw prints */}
                    <motion.div
                        className="flex gap-3 opacity-30 mt-1"
                        {...fadeUp(0.58)}
                    >
                        {['🐾', '🐾', '🐾'].map((p, i) => (
                            <span key={i} style={{ fontSize: '0.85rem', animationDelay: `${i * 0.25}s` }}>
                                {p}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Hero
