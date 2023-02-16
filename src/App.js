import './App.css';
import { useState } from 'react';
import { context } from './context';
import { itemContext } from './itemContext';
import Items from './components/Items';
import Total from './components/Total';


function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (
    <context.Provider value={{total,setTotal}}>
      
      <itemContext.Provider value = {{item,setItem}}>
        <div className='App'>
          <h2>Shopping Cart</h2>
            <Total />
            <Items />
        </div>
      </itemContext.Provider>
      
    </context.Provider>
      
  );
}
export default App;
