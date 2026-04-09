import { useState } from 'react'
import QuestionCard from './components/QuestionCard.tsx'
import './App.css'
import { questions } from './types/types.ts'
import FinalResult from './components/FinalResult.tsx'
import GiftChoices from './components/GiftChoices.tsx'
import PaymentScene from './components/PaymentScene.tsx'
import BenchScene from './components/BenchScene.tsx'

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [finalEnding, setFinalEnding] = useState<'good' | 'bad' | null>(null)
  const [screen, setScreen] = useState<'quiz' | 'final' | 'gift' | 'payment' | 'bench'>('quiz')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [shakeKey, setShakeKey] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]

  // const [answer, setAnswer] = useState<number[]>(0)

  const handleAnswer = (id: number) => {
    const selectedAnswer = currentQuestion.answers.find((answer) => answer.id === id)

    if (!selectedAnswer) {
      return
    }

    if (currentQuestion.type === 'check') {
      if (!selectedAnswer.isCorrect) {
        setErrorMessage(selectedAnswer.errorMessage ?? 'Неправильный ответ')
        setShakeKey((prev) => prev + 1)
        return
      }

      setErrorMessage(null)
      setCurrentQuestionIndex((prev) => prev + 1)
      return
    }

    if (currentQuestion.type === 'final') {
      setErrorMessage(null)
      setFinalEnding(selectedAnswer.ending ?? 'bad')
      setScreen('final')
      return
    }

    setErrorMessage(null)
    setCurrentQuestionIndex((prev) => prev + 1)
  }

  const handleRetry = () => {
    setFinalEnding(null)
    setErrorMessage(null)
    setCurrentQuestionIndex(4)
    setScreen('quiz')
  }

  const handleOpenGift = () => {
    setScreen('gift')
  }

  const handleOpenPayment = () => {
    setScreen('payment')
  }

  const handleOpenBench = () => {
    setScreen('bench')
  }

  const handleBackToGifts = () => {
    setScreen('gift')
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden p-8 max-md:p-4">
      <div className="pointer-events-none absolute left-[-8rem] top-[-6rem] h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-8rem] right-[-4rem] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
      <section className="scene-enter relative w-full max-w-3xl rounded-[2rem] border border-white/60 bg-white/78 p-10 shadow-[0_28px_80px_rgba(136,19,55,0.12),0_8px_20px_rgba(15,23,42,0.06)] backdrop-blur-xl max-md:p-6">
        {screen === 'final' && finalEnding ? (
          <FinalResult
            ending={finalEnding}
            onOpenGift={handleOpenGift}
            onRetry={handleRetry}
          />
        ) : screen === 'gift' ? (
          <GiftChoices
            onSelectBench={handleOpenBench}
            onSelectPayment={handleOpenPayment}
          />
        ) : screen === 'payment' ? (
          <PaymentScene onBackToGifts={handleBackToGifts} />
        ) : screen === 'bench' ? (
          <BenchScene onBackToGifts={handleBackToGifts} />
        ) : screen === 'quiz' ? (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            errorMessage={errorMessage}
            shakeKey={shakeKey}
          />
        ) : null}
      </section>
    </main>
  )
}

export default App
