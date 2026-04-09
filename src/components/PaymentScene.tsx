import { useEffect, useState } from 'react'

type Props = {
  onBackToGifts: () => void
}

const PaymentScene = ({ onBackToGifts }: Props) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(timer)
          return 100
        }

        return Math.min(prev + 2, 100)
      })
    }, 120)

    return () => window.clearInterval(timer)
  }, [])

  const isFinished = progress >= 100

  return (
    <div className="scene-enter flex min-h-[26rem] flex-col justify-center gap-8">
      <div className="space-y-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-400">
          Денежный ритуал
        </p>
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-rose-950 max-md:text-3xl">
          Перевожу денежку
        </h2>
      </div>

      <div className="rounded-[2rem] border border-rose-200 bg-gradient-to-br from-white via-rose-50 to-rose-100 p-8 shadow-lg shadow-rose-200/30">
        <div className="relative mx-auto h-6 w-full max-w-2xl rounded-full bg-rose-200/70">
          <div
            className="h-full rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-pink-400 transition-[width] duration-200"
            style={{ width: `${progress}%` }}
          />
          <div
            className="absolute top-1/2 -translate-y-1/2 text-3xl transition-[left] duration-200"
            style={{ left: `calc(${progress}% - 1rem)` }}
          >
            💸
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm font-medium text-rose-700/80">
          <span>Собираем пачку купюр</span>
          <span>{progress}%</span>
        </div>

        <div className="mt-8 rounded-[1.5rem] bg-white/80 px-5 py-4 text-center text-base leading-relaxed text-rose-900/80 shadow-sm">
          {isFinished
            ? 'Перевод успешно отправлен.'
            : 'Денежки уже бегут, подожди еще чуть-чуть.'}
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-[1.25rem] border border-rose-300 bg-white px-5 py-3 text-sm font-semibold text-rose-900 transition hover:-translate-y-0.5 hover:bg-rose-50 focus:outline-none focus:ring-2 focus:ring-rose-300"
          onClick={onBackToGifts}
        >
          Хочу второй подарок
        </button>
      </div>
    </div>
  )
}

export default PaymentScene
