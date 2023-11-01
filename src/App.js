import {useState,useEffect} from 'react';
import './App.css';
import Logo from './components/logo/logo.component';
import { CardList } from './components/cardList/cardList.component';
import { SearchBox } from './components/search/search.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState('');

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data=>setMonsters(data));
},[]);

const onSearchChange = (e) => {
  // console.log(e.target.value)
  setSearchValue(e.target.value);
}

const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className='app'>
      <Logo />
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters={filteredMonsters}  />
    </div>
  );
}

export default App;
