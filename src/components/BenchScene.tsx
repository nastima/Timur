import { useEffect, useState } from 'react'
import BenchImage from '../assets/skamy.jpeg'

const floatingGifts = [
  { id: 1, icon: '🎁', top: '8%', left: '12%', delay: '0s' },
  { id: 2, icon: '✨', top: '18%', left: '78%', delay: '0.2s' },
  { id: 3, icon: '💝', top: '52%', left: '8%', delay: '0.35s' },
  { id: 4, icon: '🎀', top: '66%', left: '82%', delay: '0.5s' },
  { id: 5, icon: '💖', top: '80%', left: '22%', delay: '0.65s' },
  { id: 6, icon: '✨', top: '28%', left: '58%', delay: '0.8s' },
]

const BenchScene = () => {
  const [isGone, setIsGone] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsGone(true)
    }, 1800)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="scene-enter relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-rose-50 to-rose-100 p-6">
      {!isGone ? (
        <>
          {floatingGifts.map((gift) => (
            <span
              key={gift.id}
              className="bench-gift pointer-events-none absolute text-3xl"
              style={{ top: gift.top, left: gift.left, animationDelay: gift.delay }}
            >
              {gift.icon}
            </span>
          ))}

          <div className="bench-card max-w-xl rounded-[2rem] border border-rose-200 bg-white/85 p-5 shadow-xl shadow-rose-200/30">
            <img
              className="h-[22rem] w-full rounded-[1.5rem] object-cover"
              src={BenchImage}
              alt="Скамья"
            />
          </div>
        </>
      ) : (
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-rose-400">
            Финальный выбор
          </p>
          <h2 className="text-4xl font-bold leading-tight text-rose-950 max-md:text-3xl">
            Скамья так скамья
          </h2>
        </div>
      )}
    </div>
  )
}

export default BenchScene
