export const rows: Rows = [
  {
    id: 'up-20-un30',
    age: '20~30歳',
    answers: [0.18, 0.22, 0.37, 0.23],
  },
  {
    id: 'up-20-un30',
    age: '30~40歳',
    answers: [0.12, 0.28, 0.42, 0.18],
  },
  {
    id: 'up-50-un60',
    age: '50~60歳',
    answers: [null, null, null, null],
  },
]

export type Row = {
  id: string
  age: string
  answers: (number | null)[]
}

export type Rows = Row[]
