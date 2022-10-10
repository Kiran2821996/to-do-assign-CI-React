import { useState } from 'react';
import Login from './Login';
import Todo from './Todo';

function App() {
  const[login,setLogin]=useState(false)
  return (
    <>
    {login?<Todo /> :<Login  setLogin={setLogin}/>}
    
  
    </>
  
  );
}

export default App;
