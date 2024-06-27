import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Routing from './Daily_react_tasks/Routing';
import Phonebook from './Daily_react_tasks/Phonebook';
import Todo from './Daily_react_tasks/Todo';
import DisplayApi from './Daily_react_tasks/DisplayApi';
import SearchItem from './Daily_react_tasks/SearchItem';
import Counter from './Daily_react_tasks/Counter';
import AddEditDelete from './Daily_react_tasks/AddEditDelete';
import ColorChange from './Daily_react_tasks/ColorChange';
import ClickChange from './Daily_react_tasks/ClickChange';
import TodoApp from './Daily_react_tasks/TodoApp';
import Location from './Daily_react_tasks/Location';
import Contact from './Daily_react_tasks/Contact';
import Nav from './Daily_react_tasks/Nav';
import ShowCountry from './Daily_react_tasks/ShowCountry';
import LoginPage from './Daily_react_tasks/LoginPage';
import Tokenbtn from './Daily_react_tasks/Tokenbtn';
import Registration from './Daily_react_tasks/Registration';
import ImageUpload from './Daily_react_tasks/ImageUpload';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routing />
        <Routes  >
          <Route path='nav' element={<Nav />} />
          <Route path='todo' element={<Todo />} />
          <Route path='/' element={<DisplayApi />} />

          <Route path='contact' element={<Contact />} />
          <Route path='todoapp' element={<TodoApp />} />
          <Route path='location' element={<Location />} />

          <Route path='counter' element={<Counter />} />
          <Route path='tokenbtn' element={<Tokenbtn />} />

          <Route path='phonebook' element={<Phonebook />} />
          <Route path='clickchange' element={<ClickChange />} />
          <Route path='colorchange' element={<ColorChange />} />

          <Route path='searchitem' element={<SearchItem />} />
          <Route path='showcountry' element={<ShowCountry />} />
          <Route path='registration' element={<Registration />} />

          <Route path='addeditdelete' element={<AddEditDelete />} />
          <Route path='/imageupload' element={<ImageUpload />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
