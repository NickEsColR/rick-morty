import './Pagination.css'

export const Pagination = () => {
  return (
    <nav className='pagination' role='navigation' aria-label='pagination'>
      <span className='pagination-btn'>&lt;</span>
      <ul className='pagination-list'>
        <li><span className='pagination-btn'>1</span></li>
        <li><span className='pagination-btn'>2</span></li>
        <li><span className='pagination-btn'>3</span></li>
        <li><span className='pagination-btn'>4</span></li>
        <li><span className='pagination-btn'>5</span></li>
      </ul>
      <span className='pagination-btn'>&gt;</span>
    </nav>
  )
}
