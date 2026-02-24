import botanicalCorner from '../../assets/botanica.svg'
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
            className="absolute z-30 w-36 h-36 pointer-events-none opacity-55 animate-petal-sway"
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
            <img src={botanicalCorner} alt="Botanical Corner" />
        </div>
    )
}