import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer.js'

export function Filter() {
  const dispatch = useDispatch()

  const filter = useSelector((state) => state.filter)

  const handleChange = (event) => dispatch(setFilter(event.target.value))

  return (
    <label>
      filter{' '}
      <input
        type="search"
        name="filter"
        id="filter"
        value={filter}
        onChange={handleChange}
        aria-label="Filter"
      />
    </label>
  )
}
