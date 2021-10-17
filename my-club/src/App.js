import logo from './logo.svg';
import './App.css';
// import Header from './Components/Header';
import Header from './Components/Header/Header';
import Player from './Components/Player/Player';
import { useEffect, useState } from 'react';
import playerData from './FakeData/FakaData';

function App() {
  const [player, setPlayerData ] = useState([]);
  useEffect(() => {
    setPlayerData(playerData);
    console.log(playerData);
  },[])
  const handlePlayer =(player) =>{console.log(player)}; 
  return (
    <div >
      <Header></Header>
      <Player></Player>
    </div>
  );
}

export default App;