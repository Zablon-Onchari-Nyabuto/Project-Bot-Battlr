import React, { useState } from "react";
import BotCard from "./BotCard";

function BotCollection({ botListed, addBot, deleteBot }) {
  // Your code here
  const botList = useState({
    id: "",
    name: "",
    health: "",
    damage: "",
    armor: "",
    bot_class: "",
    catchphrase: "",
    avatar_url: "",
    created_at: "",
    updated_at: ""
  })
  return (
    <div className="ui four column grid">
      <div className="row">
        {botList.map((bot) => (
          <BotCard key={bot.id} bot={bot} handleBot={addBot} handleDeleteBot={deleteBot} />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
