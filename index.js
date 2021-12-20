const fetch = require('node-fetch');

function getStatsBySteamURL(_url)
{
    let url = `https://brawlhalla-api.herokuapp.com/v1/ranked/steamurl?steam_url=${_url}`; 
    let settings = { method: "Get" };    
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            return json;
        });
}

module.exports.bhopenapi = bhopenapi;