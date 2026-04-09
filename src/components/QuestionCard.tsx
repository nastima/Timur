import type { Question } from '../types/types.ts'

type Props = {
    question: Question
    onAnswer: (id: number) => void
    errorMessage: string | null
    shakeKey: number
}

const QuestionCard = ({question, onAnswer, errorMessage, shakeKey}: Props) => {
    return (
        <div
            key={`${question.id}-${shakeKey}`}
            className={`flex flex-col gap-7 ${errorMessage ? 'question-card-shake' : 'scene-enter'}`}
        >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-400">
                Вопрос {question.id}
            </p>
            <h2 className='max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.03em] text-rose-950 max-md:text-3xl'>
                {question.question}
            </h2>
            {errorMessage ? (
                <div className="rounded-[1.5rem] border border-rose-300/80 bg-gradient-to-r from-rose-100 to-pink-100 px-4 py-3 text-sm font-medium text-rose-900 shadow-sm">
                    Хм, подумай еще раз 😈 {errorMessage}
                </div>
            ) : null}
            <div className="flex flex-col gap-3">
                {question.answers.map((answer) => (
                    <button
                        className="group w-full rounded-[1.6rem] border border-rose-200/80 bg-gradient-to-r from-white/95 to-rose-50/70 px-6 py-5 text-left text-base leading-relaxed font-medium text-rose-900/85 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-rose-300 hover:from-white hover:to-rose-100 hover:shadow-lg focus:outline-none"
                        key={answer.id}
                        onClick={() => onAnswer(answer.id)}
                    >
                        <span className="flex items-center justify-between gap-4">
                            <span>{answer.text}</span>
                            <span className="text-lg text-rose-300 transition group-hover:translate-x-1 group-hover:text-rose-500">
                                →
                            </span>
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
