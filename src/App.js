
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Todo from './components/Todo';
import PageNotFound  from './components/PageNotFound';
import Invalidcrd from './components/Invalidcrd'
function App() {
 
  return (
    <>
   <div className='main_container'>
    <header>
      <h2 className='header_todo'>TO DO APP</h2>
    </header>
  
   <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/invalidcrd' element={<Invalidcrd/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
   </div>
    
  
    </>
  
  );
}

export default App;
