import fetch from 'node-fetch';

const apexController = {};

apexController.getPlayerInfo = (req, res, next) => {
  console.log('🥞 getPlayerInfo middleware working');
  const { userName, selectedPlatform } = req.body;
//   console.log(req.body);
  const apexAPI = `https://api.mozambiquehe.re/bridge?auth=75d0d1136439b55b2b07469218e8f36f&player=${userName}&platform=${selectedPlatform}`;
//   console.log(apexAPI);
  fetch(apexAPI)
    .then((response) => response.json())
    .then((data) => {
    // console.log(data);
    res.locals.playerInfo = data;
    return next()
}).catch((error) => {
  console.log(error);
  return next();
});
};

apexController.legendPicks = (req, res, next) => {
  console.log('🌶️ legendPicks middleware working');
  let playerInfo = res.locals.playerInfo
  //console.log(playerInfo.legends.all)
  //res.locals.brKills = playerInfo.legends.all
  //console.log(res.locals.brKills);
  return next();

}

export default apexController;
