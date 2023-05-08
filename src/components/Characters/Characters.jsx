import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const {getCharacters,characters} = useContext(GlobalContext)
  
  useEffect(() => {
    getCharacters();
  }, []);
  
  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <p>{character.name}</p>
            <img src={character.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
