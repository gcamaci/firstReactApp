import logo from '../logo.svg'

import './Header.css';


const Header = () => {
    return (
        <header className='Header'>
            <img src={logo} className='Header-logo' alt='logo'/>
            <h1>Hello World</h1>
           
            

        </header>
    )

}

export {Header}