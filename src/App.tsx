import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: 1,
    title: '1',
    completed: false
  },
  {
    id: 2,
    title: '2',
    completed: false
  },
  {
    id: 3,
    title: '3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)

  return (
    <Todos todos={todos} />
  )
}

export default App
