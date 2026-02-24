import { useEffect, useState } from "react";

interface CountdownProps {
    targetDate: string;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const Time = ({ targetDate }: CountdownProps) => {

    const calculateTimeLeft = (): TimeLeft => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <section className="countdown-section">

            <p className="countdown-label">
                Tan solo falta para conocer a nuestro pequeño milagro
            </p>

            <div className="countdown-container">

                <div className="h-10 border-2 border-amber-500 rounded-full p-2">
                    <span>{timeLeft.days}</span>
                    <small>días</small>
                </div>

                <div className="countdown-box">
                    <span>{timeLeft.hours}</span>
                    <small>horas</small>
                </div>

                <div className="countdown-box">
                    <span>{timeLeft.minutes}</span>
                    <small>min</small>
                </div>

                <div className="countdown-box">
                    <span>{timeLeft.seconds}</span>
                    <small>seg</small>
                </div>

            </div>

        </section>
    );
}

export default Time;