import {useState,useEffect} from 'react';
import './App.css';
import Logo from './components/logo/logo.component';
import { CardList } from './components/cardList/cardList.component';

function App() {
  const [monsters, setMonsters] = useState([]);

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data=>setMonsters(data));
},[]);

  return (
    <div>
      <Logo />
      <CardList monsters={monsters}  />
    </div>
  );
}

export default App;
