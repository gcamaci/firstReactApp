import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/Main';
import React, {Component} from 'react'


class App extends Component {
  constructor() {
    super()
  }


  render(){
    return (
      <div className='main-content'>
        <Header/>
        <MainContent/>
      </div>
    )
  }
}

export default App;
