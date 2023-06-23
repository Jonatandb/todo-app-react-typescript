import { FILTER_BUTTONS } from '../consts'
import { type FilterValue } from '../types'

interface Props {
  filterSelected: FilterValue
  onFilterChange: (filter: FilterValue) => void
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
      {
        Object.entries(FILTER_BUTTONS).map((filterButton) => {
          const key = filterButton[0]
          const { href, literal } = filterButton[1]

          const isSelected = key === filterSelected
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a href={href}
                className={className}
                onClick={(event) => {
                  event.preventDefault()
                  onFilterChange(key as FilterValue)
                }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Filters
