interface BotanicalCornerProps {
    position: 'tl' | 'tr' | 'bl' | 'br'
}

export default function BotanicalCorner({ position }: BotanicalCornerProps) {
    const transforms: Record<BotanicalCornerProps['position'], string> = {
        tl: 'scale(1,1)',
        tr: 'scale(-1,1)',
        bl: 'scale(1,-1)',
        br: 'scale(-1,-1)',
    }

    return (
        <div
            className="absolute w-36 h-36 pointer-events-none opacity-55 animate-petal-sway"
            style={{
                ...(position === 'tl' && { top: -14, left: -14 }),
                ...(position === 'tr' && { top: -14, right: -14 }),
                ...(position === 'bl' && { bottom: -14, left: -14 }),
                ...(position === 'br' && { bottom: -14, right: -14 }),
                transformOrigin: 'center',
                transform: transforms[position],
                animationDelay: position === 'tr' || position === 'bl' ? '1.2s' : '0s',
            }}
        >
            <svg viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Main stems */}
                <path
                    d="M12 133 Q28 85 72 32 Q90 14 110 8"
                    stroke="#7a9e7e"
                    strokeWidth="1.8"
                    fill="none"
                    opacity="0.65"
                    strokeLinecap="round"
                />
                <path
                    d="M12 133 Q50 95 105 65"
                    stroke="#9ab89a"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.45"
                    strokeLinecap="round"
                />
                <path
                    d="M12 133 Q65 110 130 88"
                    stroke="#9ab89a"
                    strokeWidth="1"
                    fill="none"
                    opacity="0.3"
                    strokeLinecap="round"
                />

                {/* Leaves along main stem */}
                <ellipse cx="42" cy="90" rx="13" ry="8" fill="#a8c8a8" opacity="0.55" transform="rotate(-35 42 90)" />
                <ellipse cx="60" cy="68" rx="11" ry="7" fill="#b8d4b0" opacity="0.52" transform="rotate(-55 60 68)" />
                <ellipse cx="76" cy="48" rx="10" ry="6.5" fill="#c0d8b8" opacity="0.50" transform="rotate(-68 76 48)" />
                <ellipse cx="92" cy="30" rx="9" ry="6" fill="#c8e0c0" opacity="0.48" transform="rotate(-78 92 30)" />

                {/* Side leaves */}
                <ellipse cx="28" cy="108" rx="12" ry="7.5" fill="#a0c098" opacity="0.48" transform="rotate(-18 28 108)" />
                <ellipse cx="55" cy="82" rx="10" ry="6.5" fill="#b0cc9c" opacity="0.45" transform="rotate(-42 55 82)" />
                <ellipse cx="85" cy="58" rx="8.5" ry="5.5" fill="#bcd4a8" opacity="0.42" transform="rotate(-62 85 58)" />

                {/* Small flower buds */}
                <circle cx="110" cy="8" r="3.5" fill="#c9a96e" opacity="0.5" />
                <circle cx="112" cy="6" r="2" fill="#e8d898" opacity="0.6" />
                <circle cx="22" cy="122" r="3" fill="#d4b880" opacity="0.45" />
                <circle cx="130" cy="88" r="2.5" fill="#c0a870" opacity="0.4" />

                {/* Tiny dots / berries */}
                <circle cx="48" cy="74" r="2" fill="#d4c090" opacity="0.5" />
                <circle cx="70" cy="52" r="1.8" fill="#c8b080" opacity="0.45" />
                <circle cx="96" cy="36" r="1.5" fill="#d0b870" opacity="0.4" />

                {/* Tiny curling tendrils */}
                <path
                    d="M40 92 Q32 80 38 72"
                    stroke="#9ab89a"
                    strokeWidth="0.8"
                    fill="none"
                    opacity="0.35"
                    strokeLinecap="round"
                />
                <path
                    d="M75 50 Q82 40 78 30"
                    stroke="#9ab89a"
                    strokeWidth="0.8"
                    fill="none"
                    opacity="0.35"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    )
}