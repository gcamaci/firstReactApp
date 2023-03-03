import React, {Component} from 'react'




const ParaComponent = () => {
    
    return (
        <h1>This should be name</h1>
    )
}
class MainContent extends Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div className="main-container">
                <ParaComponent/>
                <h1>This is my very first React Project</h1>
                <p>learning to create and render multiple components</p>
            </div>
            
        )
    }
}
export {MainContent}