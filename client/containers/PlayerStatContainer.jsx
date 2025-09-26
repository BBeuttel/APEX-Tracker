
const PlayerStatContainer = ({ legendStats, pickedLegend, userName }) => {
    const info = {
    userName: userName,
    legend: pickedLegend,
    brKills: legendStats.legends.all[pickedLegend]?.data[0].value,
    killsGlobalRank:
      legendStats.legends.all[pickedLegend]?.data[0].rank.topPercent,
    brDamage: legendStats.legends.all[pickedLegend]?.data[1].value,
    damageGlobalRank:
      legendStats.legends.all[pickedLegend]?.data[1].rank.topPercent,
  };
  return(
    <div>

    </div>
)
};
  // const info = {
  //   userName: userName,
  //   legend: pickedLegend,
  //   brKills: legendStats.legends.all[pickedLegend]?.data[0].value,
  //   killsGlobalRank:
  //     legendStats.legends.all[pickedLegend]?.data[0].rank.topPercent,
  //   brDamage: legendStats.legends.all[pickedLegend]?.data[1].value,
  //   damageGlobalRank:
  //     legendStats.legends.all[pickedLegend]?.data[1].rank.topPercent,
  // };

  // return (
  //   <div id='PlayerStatContainer'>
  //     <div>
  //       <ul className='playerStatsList'>
  //         <li className='playerStat'>User Name: {info.userName}</li>
  //         <li className='playerStat'>Legend: {info.legend}</li>
  //         <li className='playerStat'>Kills: {info.brKills}</li>
  //         <li className='playerStat'>Percent Rank: {info.killsGlobalRank}</li>
  //         <li className='playerStat'>Damage: {info.brDamage}</li>
  //         <li className='playerStat'>Percent Rank: {info.damageGlobalRank}</li>
  //       </ul>
  //     </div>
  //   </div>
  // );


export default <PlayerStatContainer />;
