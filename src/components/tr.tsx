import React from 'react'
import { Row } from '../data'

const Component: React.FC<Row> = ({ id, age, answers }) => (
  <tr>
    <th>{age}</th>
    {answers.map((answer, i) => {
      if (answer === null) {
        return <td key={i}>-</td>
      }
      return <td key={i}>{`${answer * 100}%`}</td>
    })}
  </tr>
)

export default Component
