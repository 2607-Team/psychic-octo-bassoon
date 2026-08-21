import { useState } from 'react';
import './App.css';
import Goodbye from './components/Goodbye';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Goodbye/>
    </>
  )
}

export default App;
