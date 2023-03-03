import React, {Component} from 'react'

class NameTag extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>{`${this.props.name} ${this.props.last}`}</h1>
                <button onClick={this.props.onclickBtn}>click me</button>
                
            </div>
        )
    }
}


class MainContent extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()

        this.buttonClick = this.buttonClick.bind(this)
        
        
    }

    buttonClick(){
        console.log('hello')
    }
    render(){
        return (
            <div className="main-container">
                <NameTag name='Giuseppe' last ='Camaci' onclickBtn={this.buttonClick}/>
                <h1>This is my very first React Project</h1>
                <p>learning to create and render multiple components</p>
            </div>
            
        )
    }
}
export {MainContent}