import React from "react";

function YourBotArmy({ army, handleReleaseFromArmy, handleDischarge }) {
  const handleReleaseClick = (bot) => {
    handleReleaseFromArmy(bot);
  };

  return (
    <div className="bot-army">
      <div className="bot lists">
        <div className="grid">
          {army.map((bot) => (
            <div key={bot.id}>
              <div className="bot-item">
                <div>
                  <img src={bot.avatar_url} alt={bot.name} />
                  <div>{bot.name}</div>
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
                  <div className="extra content">
                    <span>
                      {" "}
                      <button
                        className="btn"
                        onClick={() => handleReleaseClick(bot)}
                      >
                        Remove from Army
                      </button>
                    </span>

                    <span>
                      {" "}
                      <button
                        className="btn"
                        onClick={() => handleDischarge(bot)}
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default YourBotArmy;
