import { Link } from 'react-router-dom'
import './category-card.scss'

function CategoryCard({item}) {
  return (
    <Link to={'/gigs?category=ay7aga'}> 
    <div className='categoryCard'>
        <img src={item.img} alt="" />
        <span className='description'>{item.description}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default CategoryCard