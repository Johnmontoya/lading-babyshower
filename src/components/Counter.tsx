import { motion } from 'framer-motion'
import BotanicalCorner from './Counter/BotanicalCorner'
import GoldDivider from './Counter/GoldDivider'
import Illustration from './Counter/Illustration'
import TimeBlock from './Counter/TimeBlock'
import { useCountdown } from '../hooks/useCountdown'
import flores from '../assets/flores2.svg'

// ⚠️  Change this to the real wedding date!
const WEDDING_DATE = new Date('2026-12-31T16:00:00')

const staggerParent = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
}

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Time() {
    const { days, hours, minutes, seconds, isOver } = useCountdown(WEDDING_DATE)

    return (
        <>
            <div className="absolute w-full h-full">
                <img src={flores} alt="Background" className="z-30 absolute -top-3 -right-4 w-64 h-64 object-cover" />
            </div>
            <div
                className="min-h-screen flex items-center justify-center p-4"
            >
                {/* Card */}
                <motion.div
                    className="relative rounded-[2rem] w-full max-w-sm overflow-hidden text-center"
                    style={{
                        background: 'linear-gradient(155deg, #fdf8f1 0%, #f5ecdf 100%)',
                        boxShadow:
                            '0 12px 48px rgba(107,76,59,0.14), 0 2px 8px rgba(107,76,59,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                        padding: '44px 32px 52px',
                    }}
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Botanical corners */}
                    <BotanicalCorner position="tl" />
                    <BotanicalCorner position="tr" />
                    <BotanicalCorner position="bl" />
                    <BotanicalCorner position="br" />

                    <motion.div
                        className="relative z-10 flex flex-col items-center"
                        variants={staggerParent}
                        initial="hidden"
                        animate="show"
                    >
                        {/* Gold divider top */}
                        <motion.div {...fadeUp(0.58)} className="w-full">
                            <GoldDivider className="mb-2" />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            {...fadeUp(0.58)}
                            className="font-serif text-4xl font-semibold mb-1.5 tracking-wide"
                            style={{ color: '#5a3a2a', textShadow: '0 2px 14px rgba(107,76,59,0.1)' }}
                        >
                            Loco y Tatiana
                        </motion.h1>

                        <motion.div {...fadeUp(0.58)} className="w-full">
                            <GoldDivider className="mb-4" />
                        </motion.div>

                        {/* Subtitle */}
                        <motion.p
                            {...fadeUp(0.58)}
                            className="font-sans font-light text-sm leading-relaxed max-w-[270px] mb-7"
                            style={{ color: '#8a6a58' }}
                        >
                            Con mucha ilusión queremos que seas parte
                            <br />
                            de este hermoso momento.
                        </motion.p>

                        {/* Illustration */}
                        <motion.div
                            {...fadeUp(0.58)}
                            className="relative w-56 h-56 rounded-full overflow-hidden mb-8 animate-float-bob"
                            style={{
                                boxShadow:
                                    '0 6px 28px rgba(107,76,59,0.18), 0 0 0 7px rgba(201,169,110,0.22), 0 0 0 13px rgba(201,169,110,0.08)',
                            }}
                        >
                            <Illustration />
                        </motion.div>

                        {/* Countdown label */}
                        <motion.div
                            {...fadeUp(0.58)}
                            className="flex items-center gap-3 w-full max-w-xs mb-4"
                        >
                            <div
                                className="flex-1 h-px"
                                style={{ background: 'linear-gradient(to right, transparent, #c9a96e, transparent)' }}
                            />
                            <span
                                className="font-serif italic text-base whitespace-nowrap"
                                style={{ color: '#5a3a2a' }}
                            >
                                Tan solo falta
                            </span>
                            <div
                                className="flex-1 h-px"
                                style={{ background: 'linear-gradient(to right, transparent, #c9a96e, transparent)' }}
                            />
                        </motion.div>

                        {/* Countdown blocks */}
                        <motion.div
                            {...fadeUp(0.58)}
                            className="flex gap-3 justify-center flex-wrap"
                        >
                            {isOver ? (
                                <p className="font-serif text-xl text-earth-700" style={{ color: '#5a3a2a' }}>
                                    ¡El gran día ha llegado! 🎉
                                </p>
                            ) : (
                                <>
                                    <TimeBlock value={days} label="Días" padLength={3} />
                                    <TimeBlock value={hours} label="Horas" />
                                    <TimeBlock value={minutes} label="Minutos" />
                                    <TimeBlock value={seconds} label="Segundos" />
                                </>
                            )}
                        </motion.div>

                        {/* Hearts */}
                        <motion.div
                            {...fadeUp(0.58)}
                            className="mt-7 flex gap-4 justify-center"
                        >
                            {['♡', '♡', '♡'].map((h, i) => (
                                <span
                                    key={i}
                                    className="text-xl animate-heart-pulse"
                                    style={{
                                        color: '#c9836eff',
                                        animationDelay: `${i * 0.35}s`,
                                        display: 'inline-block',
                                    }}
                                >
                                    {h}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}