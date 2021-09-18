import {useState} from "react";

const PokemonNames=["Bulbasaur","Ivysaur","Venusaur","Squirtle"]

const CaughtPokemon = (props)=>{
  console.log(props);

  const [caught, setCaught]=useState([]);

  ;
  
  const catchPokemon = () => {
    
    let randomPosition = Math.floor(Math.random()*PokemonNames.length)
    const randomPokemon = PokemonNames[randomPosition]
    const newCaught = caught.concat(randomPokemon)
    setCaught(newCaught)
  
      
    
  };

    
  return (
    <div>
      
    <p>Caught {caught.length} Pokémon on {props.date}</p>
    <button onClick={catchPokemon}>Click</button>
    <ul>
      {caught.map((pokemon)=>{
        return<li >{pokemon}</li>
      })}
    </ul>
    </div>
  )
}

  export default CaughtPokemon;