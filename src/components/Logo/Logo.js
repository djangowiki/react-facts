import './logo.styles.css'
import { logo } from '../../constants/images'

export default function Logo() {
    return (
        <div className='logo-container'>
            <img src={logo} alt='logo' className='logo' />
            <h3 className='logo-name'>React Facts</h3>
        </div>
    )
}