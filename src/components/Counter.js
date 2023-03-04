import React, {Component} from "react";

class Counter extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(){
        super()
        this.state = {
            count: 0,
        }
        this.countUp = this.countUp.bind(this)
    }

    countUp() {
        this.setState({
          count: this.state.count + 1,
        });
      }


    render(){
        return(
            <div>
                <button onClick={this.countUp}>count</button>
                <p>{this.state.count}</p>
            </div>

        )
    }
}



export {Counter}