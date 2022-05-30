import { useCallback, useMemo, useState } from 'react'

const Component: React.FC = () => {
  const [count, setCount] = useState<number | null>(0)
  const double = useMemo<number | null>(() => {
    if (count === null) return null
    return count * 2
  }, [count])
  const handleClick = useCallback(() => {
    if (count === null) return null
    return setCount(count + 1)
  }, [count])

  return (
    <div>
      <p>count: {count}</p>
      <p>double: {double}</p>
      <button type="button" onClick={handleClick}>
        +1
      </button>
    </div>
  )
}

export default Component
