//import react from "react"

const Logo = (props) =>{
  console.log(props);
  return (
    <header>
    <h1>welcome to the {props.appName}</h1>
    <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' alt=""  ></img>
  </header>
  )
}

  export default Logo;
