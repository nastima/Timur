import Love from '../assets/love.png'
import Okak from '../assets/okak.png'

type Props = {
  ending: 'good' | 'bad'
  onOpenGift: () => void
  onRetry: () => void
}

const FinalResult = ({ ending, onOpenGift, onRetry }: Props) => {
  const backgroundImage = ending === 'good' ? Love : Okak

  return (
    <div
      className={`scene-enter final-result final-result--${ending}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="final-result__content">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-rose-400">
          Финал
        </p>
        <h2 className="mb-4 text-4xl font-bold leading-[1.02] tracking-[-0.03em] text-rose-950 max-md:text-3xl">
          {ending === 'good' ? 'И жили они долго и счастливо' : 'Окак'}
        </h2>
        <p className="max-w-md text-base leading-relaxed text-rose-900/80">
          {ending === 'good'
            ? 'Я знала, что ты сделаешь правильный выбор 😍'
            : 'Тебе стоит пересмотреть приоритеты 😈'}
        </p>
        {ending === 'good' ? (
          <button
            type="button"
            className="mt-6 inline-flex rounded-full bg-rose-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-300/40 transition hover:-translate-y-0.5 hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            onClick={onOpenGift}
          >
            Нажать на подарочек
          </button>
        ) : null}
        {ending === 'bad' ? (
          <button
            type="button"
            className="mt-6 inline-flex rounded-full bg-rose-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-rose-300/40 transition hover:-translate-y-0.5 hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-300"
            onClick={onRetry}
          >
            Подумать еще
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default FinalResult
