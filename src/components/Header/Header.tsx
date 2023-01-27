import { Link } from 'react-router-dom'
import './Header.scss'
export const Header = () => {
  return (
    <div className="header-container">
       <Link style={{ textDecoration: "none", color: "white" }} to='/'>LOGIN COM FIREBASE</Link>
    </div>
  )
}