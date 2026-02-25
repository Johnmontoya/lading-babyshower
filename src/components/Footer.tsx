import { motion } from 'framer-motion'
import FamilyIllustration from './Footer/FamilyIllustration'
import BotanicalCorner from './Counter/BotanicalCorner'

interface ClosingSectionProps {
    names: string        // "Joaco, Tatiana y Pollictor Junior"
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const Footer = ({ names }: ClosingSectionProps) => {
    return (
        <div
            className="relative flex flex-col items-center px-6 pb-10 pt-8 gap-6 -mt-10">
            <div className="relative rounded-[2rem] w-full space-y-8 max-w-sm overflow-hidden text-center"
                style={{
                    background: 'linear-gradient(155deg, #F3EBEB 0%, #F3EBEB 100%)',
                    boxShadow:
                        '0 12px 48px rgba(107,76,59,0.14), 0 2px 8px rgba(107,76,59,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                    padding: '44px 32px 52px',
                }}>

                {/* ── Botanical corner decorations ── */}
                <BotanicalCorner position="tl" />
                <BotanicalCorner position="tr" />
                <BotanicalCorner position="bl" />
                <BotanicalCorner position="br" />

                {/* Top-left */}
                <div className="absolute top-0 left-0 w-28 h-28 opacity-50 pointer-events-none">
                    <svg viewBox="0 0 112 112" fill="none">
                        <path d="M8 104 Q22 64 60 24" stroke="#90b878" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <path d="M8 104 Q40 78 88 52" stroke="#a0c490" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
                        <ellipse cx="32" cy="72" rx="12" ry="7" fill="#b0cc90" opacity="0.6" transform="rotate(-40 32 72)" />
                        <ellipse cx="50" cy="52" rx="11" ry="7" fill="#c0d8a0" opacity="0.55" transform="rotate(-58 50 52)" />
                        <ellipse cx="64" cy="34" rx="10" ry="6" fill="#c8dca8" opacity="0.5" transform="rotate(-72 64 34)" />
                        <ellipse cx="20" cy="88" rx="10" ry="6" fill="#a8c488" opacity="0.5" transform="rotate(-20 20 88)" />
                        <circle cx="72" cy="20" r="3" fill="#c9a96e" opacity="0.55" />
                        <circle cx="14" cy="96" r="2.5" fill="#d4b880" opacity="0.45" />
                    </svg>
                </div>

                {/* Top-right */}
                <div className="absolute top-0 right-0 w-28 h-28 opacity-50 pointer-events-none" style={{ transform: 'scaleX(-1)' }}>
                    <svg viewBox="0 0 112 112" fill="none">
                        <path d="M8 104 Q22 64 60 24" stroke="#90b878" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <path d="M8 104 Q40 78 88 52" stroke="#a0c490" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
                        <ellipse cx="32" cy="72" rx="12" ry="7" fill="#b0cc90" opacity="0.6" transform="rotate(-40 32 72)" />
                        <ellipse cx="50" cy="52" rx="11" ry="7" fill="#c0d8a0" opacity="0.55" transform="rotate(-58 50 52)" />
                        <ellipse cx="64" cy="34" rx="10" ry="6" fill="#c8dca8" opacity="0.5" transform="rotate(-72 64 34)" />
                        <circle cx="72" cy="20" r="3" fill="#c9a96e" opacity="0.55" />
                    </svg>
                </div>

                {/* Bottom-left */}
                <div className="absolute bottom-0 left-0 w-28 h-28 opacity-50 pointer-events-none" style={{ transform: 'scaleY(-1)' }}>
                    <svg viewBox="0 0 112 112" fill="none">
                        <path d="M8 104 Q22 64 60 24" stroke="#90b878" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <ellipse cx="32" cy="72" rx="12" ry="7" fill="#b0cc90" opacity="0.6" transform="rotate(-40 32 72)" />
                        <ellipse cx="50" cy="52" rx="11" ry="7" fill="#c0d8a0" opacity="0.55" transform="rotate(-58 50 52)" />
                        <ellipse cx="20" cy="88" rx="10" ry="6" fill="#a8c488" opacity="0.5" transform="rotate(-20 20 88)" />
                        <circle cx="14" cy="96" r="2.5" fill="#d4b880" opacity="0.45" />
                    </svg>
                </div>

                {/* Bottom-right */}
                <div className="absolute bottom-0 right-0 w-28 h-28 opacity-50 pointer-events-none" style={{ transform: 'scale(-1,-1)' }}>
                    <svg viewBox="0 0 112 112" fill="none">
                        <path d="M8 104 Q22 64 60 24" stroke="#90b878" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                        <ellipse cx="32" cy="72" rx="12" ry="7" fill="#b0cc90" opacity="0.6" transform="rotate(-40 32 72)" />
                        <ellipse cx="50" cy="52" rx="11" ry="7" fill="#c0d8a0" opacity="0.55" transform="rotate(-58 50 52)" />
                        <ellipse cx="64" cy="34" rx="10" ry="6" fill="#c8dca8" opacity="0.5" transform="rotate(-72 64 34)" />
                        <circle cx="72" cy="20" r="3" fill="#c9a96e" opacity="0.55" />
                    </svg>
                </div>

                {/* ── Header text ── */}
                <div className="relative z-10 flex flex-col items-center px-8 pt-12 pb-4 gap-4 w-full">

                    {/* Side dashes + title */}
                    <motion.div className="flex items-center gap-3 justify-center w-full" {...fadeUp(0)}>
                        <div className="flex items-center gap-1.5">
                            <div className="w-6 h-px" style={{ background: 'linear-gradient(to right, transparent, #c9a96e)' }} />
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c9a96e', opacity: 0.7 }} />
                        </div>

                        <h2
                            className="font-serif font-bold tracking-wide"
                            style={{
                                fontSize: '2.5rem',
                                color: '#3a2a1a',
                                textShadow: '0 2px 12px rgba(90,58,42,0.1)',
                                letterSpacing: '0.01em',
                            }}
                        >
                            Te esperamos
                        </h2>

                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#c9a96e', opacity: 0.7 }} />
                            <div className="w-6 h-px" style={{ background: 'linear-gradient(to left, transparent, #c9a96e)' }} />
                        </div>
                    </motion.div>

                    {/* Gold heart */}
                    <motion.div
                        className="text-2xl animate-[heartbeat_2s_ease-in-out_infinite]"
                        style={{ color: '#c9a96e', display: 'inline-block' }}
                        {...fadeUp(0.1)}
                    >
                        ♥
                    </motion.div>

                    {/* Con cariño text */}
                    <motion.div className="text-center" {...fadeUp(0.18)}>
                        <p className="font-sans font-light text-sm mb-0.5" style={{ color: '#7a6a58' }}>
                            Con cariño,
                        </p>
                        <p className="font-sans font-semibold text-base" style={{ color: '#4a3a28' }}>
                            {names}
                        </p>
                    </motion.div>
                </div>

                {/* ── Family Illustration ── */}
                <motion.div
                    className="relative z-10 w-full px-2"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="animate-[float-up_5s_ease-in-out_infinite]">
                        <FamilyIllustration />
                    </div>
                </motion.div>

                {/* ── Footer strip ── */}
                <div
                    className="relative z-10 w-full flex flex-col items-center gap-3 px-8 pb-10 pt-2"
                >
                    {/* Gold thin divider */}
                    <motion.div className="flex items-center gap-3 w-full" {...fadeUp(0.25)}>
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.45))' }} />
                        <span style={{ color: '#c9a96e', fontSize: '0.8rem', opacity: 0.8 }}>✦</span>
                        <div className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(201,169,110,0.45))' }} />
                    </motion.div>

                    {/* Small footer note */}
                    <motion.p
                        className="font-sans font-light text-xs text-center leading-relaxed"
                        style={{ color: '#a89888', maxWidth: 240 }}
                        {...fadeUp(0.32)}
                    >
                        Hecho con amor para compartir este momento tan especial contigo
                    </motion.p>

                    {/* Paw prints */}
                    <motion.div className="flex gap-3 opacity-25" {...fadeUp(0.38)}>
                        {['🐾', '🐰', '🦊'].map((p, i) => (
                            <span key={i} style={{ fontSize: '0.9rem' }}>{p}</span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Footer