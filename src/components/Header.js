import logo from '../logo.svg'
import './Header.css';
import React, {Component} from 'react'



class Header extends Component {
    constructor(){
        super()
    }

    render() {
        return (
            <div className='Header'>
                <img src={logo} className='Header-logo' alt='logo'/>
                <h1>Hello World</h1>
            </div>
        )
    }
}

export {Header}