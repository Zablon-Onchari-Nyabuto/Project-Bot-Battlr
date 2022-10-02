import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
   //start here with your code for step one
  const [botListed, setBotListed] = useState([]);
  const [botArmy, setBotArmy] = useState([]);


useEffect (() => {
  fetch("http://localhost:8002/bots")
  .then(response => response.json())
  .then(bots => setBotListed(bots))
},[]);

function addBotToArmy(armyBot){
  if(!botArmy.find(botListed => botListed === armyBot)){
    const foundBot = botListed.find(botListed => botListed === armyBot)

    setBotArmy([...botArmy, foundBot])
  }
}

function removeBotFromYourBotArmy(armyBot) {
  const botArmyList = botArmy.filter((botListed)=> botListed !== armyBot)
  setBotArmy(botArmyList)
}

function removeBotPermanentlyFromYourBotArmy (armyBot) {
  if(botArmy.find((botListed) => botListed === armyBot)){
    const filterBots = botListed.filter(botListed => botListed !== armyBot)
    const filterBotArmy = botArmy.filter(botListed => botListed !== armyBot)

    setBotListed(filterBots)
    setBotArmy(filterBotArmy)

    fetch(`http://localhost:8002/bots/${armyBot.id}`, {
      method: "DELETE"
    })
  }
}
  return (
    <div>
      <YourBotArmy botArmy={botArmy} removeBot={removeBotFromYourBotArmy} deleteBot= {removeBotPermanentlyFromYourBotArmy} />
      <BotCollection botListed={botListed}  addBot={addBotToArmy} deleteBot={removeBotPermanentlyFromYourBotArmy} />
    </div>
  )
}

export default BotsPage;
