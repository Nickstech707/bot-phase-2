import React, { useEffect, useState } from "react";
import BotSpecs from "./BotSpecs";

function BotCollection({ addToArmy, handleDischarge }) {
  // State variables
  const [bots, setBots] = useState([]); // List of bots fetched from the server
  const [army, setArmy] = useState([]); // List of selected bots in the army
  const [selectedBot, setSelectedBot] = useState(null); // Currently selected bot

  // Fetch bots from the server on component mount
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bots");
        }
        return response.json();
      })
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error fetching bots:", error);
      });
  }, []);

  // Handle bot selection
  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
  };

  // Handle adding a bot to the army
  const handleAddToArmy = (bot) => {
    // Check if the bot is already in the army
    if (!army.find((armyBot) => armyBot.id === bot.id)) {
      // Add the bot to the army and call the addToArmy function
      setArmy([...army, bot]);
      addToArmy(bot);
    } else {
      // Log a message if the bot is already in the army
      console.log(`${bot.name} is already in your army.`);
    }
  };

  // Render the BotCollection component
  return (
    <div className="bot-collection">
      {selectedBot ? (
        // Render the BotSpecs component if a bot is selected
        <BotSpecs
          bot={selectedBot}
          onAddToArmy={handleAddToArmy}
          onEnlist={handleAddToArmy}
          onGoBack={() => setSelectedBot(null)}
        />
      ) : (
        // Render the list of bots if no bot is selected
        <div className="bot-list">
          {bots.map((bot) => (
            // Render each bot in the list
            <div
              key={bot.id}
              className="bot-item"
              onClick={() => handleSelectBot(bot)}
            >
              <div className="image">
                <img src={bot.avatar_url} alt={bot.name} />
              </div>
              <div className="content">
                <div className="name">{bot.name}</div>
                <div>
                  <small>{bot.catchphrase}</small>
                </div>
              </div>
              <div>
                <span>
                  <i className="fas fa-heartbeat" />
                  {bot.health}
                </span>
                <span>
                  <i className="fas fa-bolt" />
                  {bot.damage}
                </span>
                <span>
                  <i className="fas fa-shield-alt" />
                  {bot.armor}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BotCollection;
