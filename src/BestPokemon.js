//mport react from "react"

const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
 const BestPokemon =  props=>{
  
    return(
     <div>
         <p>My favorite pokemon is {props.name}, the color of Squirtl is {props.color} </p>
         <ul>
         {abilities.map((name, index) => 
        <li key={index}>{name}</li>
      )}
         </ul>
      </div>
    )
  }

  export default BestPokemon;