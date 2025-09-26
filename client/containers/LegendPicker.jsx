import { useState, useEffect } from 'react';
import Ash_copy from '../Assets/copies/Ash_copy.png';
import Balistic_copy from '../Assets/copies/Balistic_copy.png';
import Bangalore_copy from '../Assets/copies/Bangalore_copy.png';
import Bloodhound_copy from '../Assets/copies/Bloodhound_copy.png';
import Catalyst_copy from '../Assets/copies/Catalyst_copy.png';
import Caustic_copy from '../Assets/copies/Caustic_copy.png';
import Conduit_copy from '../Assets/copies/Conduit_copy.png';
import Crypto_copy from '../Assets/copies/Crypto_copy.png';
import Fuse_copy from '../Assets/copies/Fuse_copy.png';
import Gibralter_copy from '../Assets/copies/Gibralter_copy.png';
import Horizon_copy from '../Assets/copies/Horizon_copy.png';
import Lifeline_copy from '../Assets/copies/Lifeline_copy.png';
import loba_copy from '../Assets/copies/loba_copy.png';
import Mad_Maggie_copy from '../Assets/copies/Mad_Maggie_copy.png';
import Mirage_copy from '../Assets/copies/Mirage_copy.png';
import NewCastle_copy from '../Assets/copies/NewCastle_copy.png';
import Octane_copy from '../Assets/copies/Octane_copy.png';
import Pathfinder_copy from '../Assets/copies/Pathfinder_copy.png';
import Rampart_copy from '../Assets/copies/Rampart_copy.png';
import Revanent_copy from '../Assets/copies/Revanent_copy.png';
import Seer_copy from '../Assets/copies/Seer_copy.png';
import Valkeryie_copy from '../Assets/copies/Valkeryie_copy.png';
import Vantage_copy from '../Assets/copies/Vantage_copy.png';
import Wattson_copy from '../Assets/copies/Wattson_copy.png';
import Wraith_copy from '../Assets/copies/Wraith_copy.png';

const legends = [
  { name: 'Bangalore', image: Bangalore_copy },
  { name: 'Fuse', image: Fuse_copy },
  { name: 'Ash', image: Ash_copy },
  { name: 'MadMaggie', image: Mad_Maggie_copy },
  { name: 'Balistic', image: Balistic_copy },
  { name: 'Pathfinder', image: Pathfinder_copy },
  { name: 'Wraith', image: Wraith_copy },
  { name: 'Octane', image: Octane_copy },
  { name: 'Revanent', image: Revanent_copy },
  { name: 'Horizon', image: Horizon_copy },
  { name: 'Bloodhound', image: Bloodhound_copy },
  { name: 'Crypto', image: Crypto_copy },
  { name: 'Valkeryie', image: Valkeryie_copy },
  { name: 'Seer', image: Seer_copy },
  { name: 'Vantage', image: Vantage_copy },
  { name: 'Gibralter', image: Gibralter_copy },
  { name: 'Lifeline', image: Lifeline_copy },
  { name: 'Mirage', image: Mirage_copy },
  { name: 'Loba', image: loba_copy },
  { name: 'NewCastle', image: NewCastle_copy },
  { name: 'Conduit', image: Conduit_copy },
  { name: 'Caustic', image: Caustic_copy },
  { name: 'Wattson', image: Wattson_copy },
  { name: 'Rampart', image: Rampart_copy },
  { name: 'Catalyst', image: Catalyst_copy },
];

const LegendPicker = () => {
  const [pickedLegend, setPickedLegend] = useState('');

  const handleLegendChange = (event) => {
    setPickedLegend(event.target.value);
    
  };

  useEffect(() => {
    console.log("Updated Legend:", pickedLegend);
  }, [pickedLegend]);

  return (
    <div id="legendPicker">
      {legends.map((legend) => (
        <button
          key={legend.name}
          onClick={handleLegendChange}
          value={legend.name}
          className={pickedLegend === legend.name ? 'selected' : ''}
        >
          <img src={legend.image} alt={legend.name} width="75px" />
        </button>
      ))}
    </div>
  );
};
  // return (
  //   <div id='legendPicker'>
  //     <button onClick={handleLegendChange} value='Bangalore'>
  //       <img src={Bangalore_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Fuse'>
  //       <img src={Fuse_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Ash'>
  //       <img src={Ash_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='MadMaggie'>
  //       <img src={Mad_Maggie_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Balistic'>
  //       <img src={Balistic_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Pathfinder'>
  //       <img src={Pathfinder_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Wraith'>
  //       <img src={Wraith_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Octane'>
  //       <img src={Octane_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Revanent'>
  //       <img src={Revanent_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Horizon'>
  //       <img src={Horizon_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Bloodhound'>
  //       <img src={Bloodhound_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Crypto'>
  //       <img src={Crypto_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Valkeryie'>
  //       <img src={Valkeryie_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Seer'>
  //       <img src={Seer_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Vantage'>
  //       <img src={Vantage_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Gibralter'>
  //       <img src={Gibralter_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Lifeline'>
  //       <img src={Lifeline_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Mirage'>
  //       <img src={Mirage_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='loba'>
  //       <img src={loba_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='NewCastle'>
  //       <img src={NewCastle_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Conduit'>
  //       <img src={Conduit_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Caustic'>
  //       <img src={Caustic_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Wattson'>
  //       <img src={Wattson_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Rampart'>
  //       <img src={Rampart_copy} width='50px' />
  //     </button>
  //     <button onClick={handleLegendChange} value='Catalyst'>
  //       <img src={Catalyst_copy} width='50px' />
  //     </button>
  //   </div>
  // );
export default LegendPicker;
