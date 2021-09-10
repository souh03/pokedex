//mport react from "react"

const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
 const BestPokemon = ()=>{
  
    return(
     <div>
         <p>My favorite pokemon is Squirtl</p>
         <ul>
         {abilities.map((name, index) => 
        <li key={index}>{name}</li>
      )}
         </ul>
      </div>
    )
  }

  export default BestPokemon;