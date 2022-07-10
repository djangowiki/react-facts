import './navbar.styles.css'
import { Logo, Menu } from '../../components'

export default function Navbar() {
    return (
        <nav className='nav-container'>
            <Logo />
            <Menu />
        </nav>
    )
}