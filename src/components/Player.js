import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false); //assuming the user did not edit the names

  function handleEditClick() {
    //function if the user pressed the edit button
    setIsEditing((editing) => !editing); // best practice for updating the state
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>; //setting the player name with a variable
  //let btnCaption = "Edit";

  if (isEditing) {
    //again if the user pressed the editing button and wants to add the name there

    editableplayerName = (
      <input type="text " required value={playerName} onChange={handleChange} />
    ); // the new player name is the player name the user will be entering
    //btnCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player ">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
