import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, setBotArmy, setBots }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot, id) => (
          <BotCard
            bot={bot}
            key={id}
            setBotArmy={setBotArmy}
            setBots={setBots}
          />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
