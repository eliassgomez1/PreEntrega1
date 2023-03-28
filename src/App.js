

import './App.css';
import Item from './components/Navbar/Navbar.';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return ( 
    
    <div className="App">
      <Navbar/> 
      <ItemListContainer greeting={"Bienvenidos"}/>
    </div>
  );
}

export default App;