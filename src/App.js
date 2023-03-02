
import './App.css';
import { Header } from './components/Header';
import { MainContent } from './components/Main';

const App = () => {
  return (
    <div className='main-content'>
      <Header/>
      <MainContent/>
    </div>
  );
}

export default App;
