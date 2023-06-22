import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId } from './types'

const mockTodos = [
  {
    id: 1,
    title: 'Crear proyecto con Vite/React/TypeScript',
    completed: true
  },
  {
    id: 2,
    title: 'Aprender React con TypeScript',
    completed: false
  },
  {
    id: 3,
    title: 'Publicar web online',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const hadleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={hadleRemove} />
    </div>
  )
}

export default App
