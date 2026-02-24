interface DividerProps {
    className?: string
}

export default function GoldDivider({ className = '' }: DividerProps) {
    return (
        <div className={`flex items-center justify-center gap-3 ${className}`}>
            <div
                className="h-px flex-1 max-w-[52px]"
                style={{ background: 'linear-gradient(to right, transparent, #c9a96e)' }}
            />
            <div className="flex gap-1.5 items-center">
                <div className="w-1 h-1 rounded-full bg-gold-500" style={{ background: '#c9a96e' }} />
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                    <path
                        d="M7 1 Q9 5 7 9 Q5 5 7 1Z"
                        fill="#c9a96e"
                        opacity="0.7"
                    />
                </svg>
                <div className="w-1 h-1 rounded-full" style={{ background: '#c9a96e' }} />
            </div>
            <div
                className="h-px flex-1 max-w-[52px]"
                style={{ background: 'linear-gradient(to left, transparent, #c9a96e)' }}
            />
        </div>
    )
}