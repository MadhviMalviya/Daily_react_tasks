import './App.css';
import Routing from './Daily_react_tasks/Routing';
import Phonebook from './Daily_react_tasks/Phonebook';
import Todo from './Daily_react_tasks/Todo';
import DisplayApi from './Daily_react_tasks/DisplayApi';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import SearchItem from './Daily_react_tasks/SearchItem';
import Counter from './Daily_react_tasks/Counter';

function App() {
  return (
   <div className='App'>
    <BrowserRouter>
    <Routing/>
      <Routes  >
        <Route path='/' element={<DisplayApi />} />
        <Route path='todo' element={<Todo/>} />
        <Route path='counter' element={<Counter/>} />
        <Route path='searchitem' element={<SearchItem/>} />
        <Route path='phonebook' element={<Phonebook />} />
      </Routes>
      </BrowserRouter>
      </div> 
   
  );
}

export default App;
