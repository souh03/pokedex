//import react from "react"

const Logo = (props) =>{
  
  
  return (
    <header>
    <h1>welcome to the {props.appName}</h1>
    <img  onClick={props.handleClic} src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt=""  ></img>
  </header>
  )
}

  export default Logo;
