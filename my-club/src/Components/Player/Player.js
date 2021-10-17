import React, { useState } from 'react';
import './Player.css'
import FakeData from '../../FakeData/FakaData'
import Players from '../Players/Players';
import ClubMembers from '../ClubMembers/ClubMembers';

const Player = () => {
    const first13 = FakeData.slice(0,13);
    const [player, setPlayer]=useState(first13 );
    const [club, setClub] =useState([]);
    
    const handlePlayerAdded =(player) =>{
        console.log("player added", player)
        const newClubMember =[...club, player];
        setClub(newClubMember);
    }
    


    return (
        <div className="player-container">
            <div className="plr-container">
             {
                 player.map(plr =><Players handlePlayerAdded={handlePlayerAdded} player={plr} ></Players>)
             }
            </div>
            <div className="club-container">
                    <ClubMembers club={club}></ClubMembers>
            </div>
        </div>
    );
};

export default Player;