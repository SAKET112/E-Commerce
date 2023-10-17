import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className='navbar'>
      
        <Link to='/'>Shopify</Link>
        <Link to='/cart'>Cart <FontAwesomeIcon icon={faCartShopping} /></Link>
      
    </div>
  )
}

export default Navbar