import './App.css';

import React, {Component} from 'react'

class App extends Component {
  constructor() {
    super()

    this.state = {
      task: {
        text:'',
      },
      tasks:[],
    }
  }


  render(){
    return (
      <div className='main-content'>
        <form>
          <label>Task</label>
          <input></input>
          <button>submit</button>
        </form>

        
      </div>
    )
  }
}

export default App;
