import React, { useCallback, useMemo, useReducer } from 'react'
import { rows } from './data'
import Thead from './components/thead'
import Tbody from './components/tbody'
import Counter from './components/counter'
import { initialState, reducer } from './components/counter/reducer'
import { decrement, increment } from './components/counter/actionCreators'

type Props = {
  countLabel: string
  onClickIncrement: () => void
  onClickDecrement: () => void
}

const Component: React.FC<Props> = ({ countLabel, onClickIncrement, onClickDecrement }) => (
  <div>
    Count: {countLabel}
    <button type="button" onClick={onClickIncrement}>
      +
    </button>
    <button type="button" onClick={onClickDecrement}>
      -
    </button>
  </div>
)

const Container: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState({ count: 0 }))
  const countLabel = useMemo(() => `${state.count} ${state.unit}`, [state])
  const onClickIncrement = useCallback(() => dispatch(increment()), [])
  const onClickDecrement = useCallback(() => dispatch(decrement()), [])

  return (
    <Component
      countLabel={countLabel}
      onClickIncrement={onClickIncrement}
      onClickDecrement={onClickDecrement}
    />
  )
}

const App: React.FC = () => (
  <div>
    <h1>健康に関する調査</h1>
    <table>
      <Thead />
      <Tbody rows={rows} />
    </table>
    <Counter />
    <Container />
  </div>
)

export default App
