import React, { useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [army, setArmy] = useState([]);

  // Function to add a bot to the army
  const addToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  // Function to remove a bot from the army
  const handleReleaseFromArmy = (bot) => {
    const updatedArmy = army.filter((armyBot) => armyBot.id !== bot.id);
    setArmy(updatedArmy);
  };

  // Function to discharge a bot from the army and send a DELETE request to the backend
  const handleDischarge = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedArmy = army.filter((armyBot) => armyBot.id !== bot.id);
          setArmy(updatedArmy);
          console.log("Bot discharged from service and deleted from backend.");
        } else {
          console.error("Failed to discharge bot:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error discharging bot:", error);
      });
  };

  return (
    <div>
      {/* Render the YourBotArmy component and pass the army state and the necessary functions as props */}
      <YourBotArmy
        army={army}
        handleReleaseFromArmy={handleReleaseFromArmy}
        handleDischarge={handleDischarge}
      />

      {/* Render the BotCollection component and pass the army state and the necessary functions as props */}
      <BotCollection
        addToArmy={addToArmy}
        army={army}
        handleDischarge={handleDischarge}
      />
    </div>
  );
}

export default BotsPage;
