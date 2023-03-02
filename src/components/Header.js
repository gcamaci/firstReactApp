import logo from '../logo.svg'

import './Header.css';


const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} className='Header-logo' alt='logo'/>
            <h1>Hello World</h1>
        </div>
    )

}

export {Header}