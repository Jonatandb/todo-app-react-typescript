
import { type Todo as TodoType } from '../types'

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, title, completed }) => {
  return (
    <div className='view'>
      <input type="checkbox" className="toggle" checked={completed} onClick={() => { }} />
      <label htmlFor="title">{title}</label>
      <button className="destroy" onClick={() => {}}></button>
    </div>
  )
}
