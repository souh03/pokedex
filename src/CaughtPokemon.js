import {useState} from "react";

const CaughtPokemon = (props)=>{
  console.log(props);

  const [caught, setCaught]=useState([]);

  const[pokemonNameInput,setPokemonNameInput]= useState("");
  
  const catchPokemon = () => {
    
    if (pokemonNameInput === "") {
      setCaught([]);
    } else {
      setCaught(caught + 1);
      setCaught(caught.concat(pokemonNameInput));
    }
  };

    function handleInputChange(event){
      setPokemonNameInput (event.target.value)}

  return (
    <div>
      <input type="text" 
      value={pokemonNameInput}
      onChange={handleInputChange}
      /> 
    <p>Caught {caught.length} Pokémon on {props.date}</p>
    <button onClick={catchPokemon}>Click</button>
    <ul>
      {caught.map((pokemon,index)=>{
        return<li key={index}>{pokemon}</li>
      })}
    </ul>
    </div>
  )
}

  export default CaughtPokemon;