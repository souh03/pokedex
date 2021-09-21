//import React from "react";
import Logo from "./logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";

const App = () =>{
  const logWhenClicked = () => {
    console.log("Image has been clicked!");
  };
 
  const date = new Date().toLocaleDateString();
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  return(
  <div>
   <Logo handleClick={logWhenClicked }  appName={"Pokedex"} />
   <BestPokemon abilities={abilities} name='Charizard' color='orange'/>
   <CaughtPokemon date={date} />
   <PokemonMovesSelector/>
  </div>
  );
};


  
 

export default App;
