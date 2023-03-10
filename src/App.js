import './App.css';
import { uniqueId } from './utils/uniqueId';
import { Overview } from './components/Overview';
import React, {Component} from 'react'
class App extends Component {
  constructor() {
    super()

    this.state = {
      task: {
        text:'',
        taskId: uniqueId()
      },
      tasks:[],
    }
    this.onTaskChange = this.onTaskChange.bind(this)
    this.pushTasks = this.pushTasks.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
  }
  
  onTaskChange(e){
    this.setState({
      task: {
        text: e.target.value,
        taskId: this.state.task.taskId,
      },
    })
  }
  pushTasks(e){
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        taskId: uniqueId()
      },
    })
  }

  deleteTask(e){
    const code = parseInt(e.target.id)
    this.setState(prevState => {
      return {
        tasks: prevState.tasks.filter((task) => task.taskId !== code),
      }
    })
  }

  render(){
    const {task,tasks} = this.state

    return (
      <div className='main-content'>
        <form onSubmit={this.pushTasks}>
          <label htmlFor='taskInput'>Task</label>
          <input
          type='text'
          id='taskInput'
          onChange={this.onTaskChange}
          value={task.text}
          />
          <button type='submit'>submit</button>
        </form>
        <Overview tasks={tasks} taskDelete={this.deleteTask}/>

        
      </div>
    )
  }
}

export default App;
