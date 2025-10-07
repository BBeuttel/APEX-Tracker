import { useState } from 'react';


const PlayerSearchContainer = ({ pickedLegend, setPlayerStatContainer, setUserName, userName, setLegendStats }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('');

  console.log('[PlayerSearchContainer] pickedLegend:', pickedLegend);
  console.log(
    '[PlayerSearchContainer] setPlayerStatContainer is function:',
    typeof setPlayerStatContainer === 'function'
  );

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePlatformChange = (event) => {
    setSelectedPlatform(event.target.value);
  };

  const fetchRequest = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/player-info', {
        method: 'POST',
        body: JSON.stringify({ userName, selectedPlatform }),
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
      });
      const data = await response.json();
      setLegendStats(data);
      console.log('Fetched data: ', data);
      setPlayerStatContainer(true);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

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
    </div>
  );
};

export default PlayerSearchContainer;
