import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Friends from './components/Friends/Friend';

function App() {
  const [friends,setFriends]=useState([]);
  useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json ())
.then(data=>setFriends(data))
},[])
  return (
    <div className='App' >
      <h1>Friends:{friends.length}</h1>
      {
        friends.map(friend =><Friends friend={friend}></Friends>)
      }
    </div>
  );
}

export default App;
