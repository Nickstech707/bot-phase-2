import React from "react";

function BotSpecs({ bot, onEnlist, onGoBack }) {
  return (
    <div className="specs-container">
      <div className="specs-img">
        <img alt="oh no!" className="specs-img" src={bot.avatar_url} />
      </div>
      <div className="specs-grid">
        <>
          <h2>Bot Name: {bot.name}</h2>
          <p>
            <small>Catchphrase: {bot.catchphrase}</small>
          </p>
          <p className="bot-class"> Class: {bot.bot_class}</p>
        </>

        <div>
          <span>
            <i className="fas fa-heartbeat" />
            <strong>{bot.health}</strong>
          </span>
          <div>
            <i className="fas fa-bolt" />
            <strong>{bot.damage}</strong>
          </div>
          <div>
            <i className="fas fa-shield-alt" />
            <strong>{bot.armor}</strong>
          </div>
        </div>

        <div>
          <strong>Created at: {bot.created_at}</strong>
        </div>
        <div>
          <strong>Updated at: {bot.updated_at}</strong>
        </div>
        <button className="btn" on onClick={onGoBack}>
          Go Back
        </button>
        <button className="btn" onClick={() => onEnlist(bot)}>
          Enlist
        </button>
      </div>
    </div>
  );
}

export default BotSpecs;
