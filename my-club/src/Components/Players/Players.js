import React from 'react';
import './Players.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    // console.log(props);
    const {image, Name,Salary} = props.player;

        return (
        <div className="players">
            <div>
                <img src={image} alt=""/>
            </div>
            <div>
            <h4>{Name}</h4>
            <br/>
            <p>Salary:${Salary}</p>
            <button className="main-button" onClick={()=> props.handlePlayerAdded(props.player)}><FontAwesomeIcon icon={faUser} /> Add To Club</button>
            </div>
        </div>
    );
};

export default Players;