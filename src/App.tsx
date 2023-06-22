import { useState } from 'react'
import { Todos } from './components/Todos'

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
  const [todos] = useState(mockTodos)

  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}

export default App
