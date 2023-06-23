import { type FilterValue } from '../types'
import Filters from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FilterValue
  handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  filterSelected,
  handleFilterChange
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} {activeCount === 1 ? 'tarea pendiente' : 'tareas pendientes'}</strong>
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
    </footer>
  )
}
