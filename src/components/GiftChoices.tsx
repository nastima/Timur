import BenchImage from '../assets/skamy.jpeg'
import KoticImage from '../assets/kotic.png'

type Props = {
  onSelectBench: () => void
  onSelectPayment: () => void
}

const GiftChoices = ({ onSelectBench, onSelectPayment }: Props) => {
  return (
    <div className="scene-enter flex flex-col gap-8">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-400">
          Подарочек
        </p>
        <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-rose-950 max-md:text-3xl">
          Выбирай, что открыть дальше
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-rose-900/80">
          Я подготовила для тебя два варианта. Нажми на карточку и посмотрим,
          куда она тебя приведет.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <button
          type="button"
          className="group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-[2rem] border border-rose-200 bg-gradient-to-br from-white via-rose-50 to-rose-100 p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-300"
          onClick={onSelectPayment}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <img
                className="h-48 w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-rose-200/60"
                src={KoticImage}
                alt="Котик рядом с карточкой денежки"
              />
            </div>
            <h3 className="text-2xl font-bold leading-tight text-rose-950">
              Перевести денежку
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-rose-900/75">
              Котик следит, чтобы перевод выглядел максимально серьезно.
            </p>
          </div>
        </button>

        <button
            type="button"
            className="group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-[2rem] border border-rose-200 bg-gradient-to-br from-white via-rose-50 to-rose-100 p-6 text-left shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-rose-300"
            onClick={onSelectBench}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <img
                  className="h-48 w-full rounded-[1.5rem] object-cover shadow-lg ring-1 ring-rose-200/60"
                  src={BenchImage}
                  alt="Скамья"
              />
            </div>
            <h3 className="text-2xl font-bold leading-tight text-rose-950">
              Получить скамью
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-rose-900/75">
              В этой карточке все закончится немного драматичнее.
            </p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default GiftChoices
