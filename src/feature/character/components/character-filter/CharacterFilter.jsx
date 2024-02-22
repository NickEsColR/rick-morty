import { DropdownMenu } from '../../../../components/dropdown-menu/DropdownMenu'
import { SearchBar } from '../../../../components/search-bar/SearchBar'
import './CharacterFilter.css'

export const CharacterFilter = () => {
  return (
    <div className='filter-container'>
      <SearchBar labelText='name' />
      <DropdownMenu labelText='status' options={['Alive', 'Dead', 'unknown']} />
      <SearchBar labelText='species' />
      <DropdownMenu labelText='gender' options={['female','male','genderless','unknown']} />
      <SearchBar labelText='type' />
    </div>
  )
}
