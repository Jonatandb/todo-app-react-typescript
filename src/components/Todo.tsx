
import { type TodoId, type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: (id: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo }) => {
  return (
    <div className='view'>
      <input type="checkbox" className="toggle" checked={completed} onClick={() => { }} />
      <label htmlFor="title">{title}</label>
      <button className="destroy" onClick={() => { onRemoveTodo({ id }) }}></button>
    </div>
  )
}
