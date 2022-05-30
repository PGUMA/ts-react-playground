import TR from './tr'
import { Rows } from '../data'

type Props = {
  rows: Rows
}

const Component: React.FC<Props> = ({ rows }) => (
  <tbody>
    {rows.map((row) => (
      <TR key={row.id} {...row} />
    ))}
  </tbody>
)

export default Component
