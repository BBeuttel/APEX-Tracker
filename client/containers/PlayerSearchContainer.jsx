//there should be two empty forms for player tag and platform
//within the text boxes text telling the client what to type in
//specifiy that PC for PC, PS4 for PS4 or PS5 or X1 for Xbox

//Have a submit button
//need to have the inputs be put into fetch request url replacing
//the section where playerID and platform are
import { useState, useEffect } from 'react';
//import PlayerStatContainer from './PlayerStatContainer';
// import { useEffect } from 'react';

const PlayerSearchContainer = ({ pickedLegend }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [userName, setUserName] = useState('');
  const [legendStats, setLegendStats] = useState('');


  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const fetchRequest = () => {
    fetch('http://localhost:3000/api/player-info', {
      method: 'POST',
      body: JSON.stringify({ userName, selectedPlatform }),
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
    })
      .then((response) => {
        //console.log(response)
        return response.json();
      })
      .then((data) => {
        setLegendStats(data);
      });
  };

  
  useEffect(() => {
    if (!legendStats) {
      console.log("Legend stats are not available yet.");
      return;
    }
    const info = {
      userName: userName,
      legend: pickedLegend,
      stats: legendStats.legends.all[pickedLegend]?.data
      // brKills: legendStats.legends.all[pickedLegend]?.data[0].value,
      // killsGlobalRank:
      //   legendStats.legends.all[pickedLegend]?.data[0].rank.topPercent,
      // brDamage: legendStats.legends.all[pickedLegend]?.data[1].value,
      // damageGlobalRank:
      //   legendStats.legends.all[pickedLegend]?.data[1].rank.topPercent,
    };
    console.log(info)
  
    
  }, [selectedPlatform, userName, legendStats, pickedLegend]);

  return (
    <div id='PlayerSearchContainer'>
      <h3>Player Search</h3>
      <input
        id='userName'
        placeholder='Enter User Name Here'
        value={userName}
        onChange={handleUserNameChange}
      ></input>
      <select
        id='platform'
        value={selectedPlatform}
        onChange={handlePlatformChange}
      >
        <option value=''>Choose Platform</option>
        <option value='PC'>PC</option>
        <option value='PS4'>PlayStation</option>
        <option value='X1'>XBox</option>
      </select>
      <button onClick={fetchRequest}>Submit</button>
      {/* <PlayerStatContainer legendStats={legendStats} userName={userName} pickedLegend={pickedLegend}/> */}
    </div>
  );
};

export default PlayerSearchContainer;
