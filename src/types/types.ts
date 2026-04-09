export type Answer = {
  id: number
  text: string
  isCorrect?: boolean
  errorMessage?: string
  ending?: 'good' | 'bad'
}

export type Question = {
  id: number
  question: string
  answers: Answer[]
  type: 'check' | 'ordinary' | 'final'
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'Ты меня любишь?',
    type: 'ordinary',
    answers: [
      { id: 1, text: 'Да' },
      { id: 2, text: 'Нет, но я подумаю' },
    ],
  },
  {
    id: 2,
    question: 'Я знаю, что точно любишь (это не вопрос)',
    type: 'ordinary',
    answers: [
      { id: 1, text: 'ДА!' },
      { id: 2, text: 'Ну конечно, ДА!' },
    ],
  },
  {
    id: 3,
    question: 'Какое у меня цвет глаз?',
    type: 'check',
    answers: [
      { id: 1, text: 'Голубые', errorMessage: 'Подумай хорошенько' },
      { id: 2, text: 'Голубо-серо-зеленые', isCorrect: true},
      { id: 3, text: 'Зелено-голубые', errorMessage: 'Подумай хорошенько' },
      { id: 4, text: 'Карие', errorMessage: 'Подумай хорошенько' },
    ],
  },
  {
    id: 4,
    question: 'Какая у меня самая любимая еда?',
    type: 'check',
    answers: [
      { id: 1, text: 'Пицца', errorMessage: 'Ты уверен?' },
      { id: 2, text: 'Суши', errorMessage: 'Ты уверен?' },
      { id: 3, text: 'Сладости', isCorrect: true},
    ],
  },
  {
    id: 5,
    question: 'Чтобы ты выбрал: Провести со мной всю жизнь или стать самым богатым холостиком?',
    type: 'final',
    answers: [
      { id: 1, text: 'Провести с тобой всю жизнь', ending: 'good' },
      { id: 2, text: 'Стать самым богатым холостиком, конечно', ending: 'bad' },
    ],
  },
]
