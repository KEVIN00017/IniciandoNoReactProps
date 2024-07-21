import react from 'react'
import './App.css'
//Criando A funçao header generica para poder usar o nome que eu quiser apenas mudando o name no app.jsx
function Header(props){
    return(
        <header className='navbar'>
        <h1 id='title'>{props.name}</h1>
        <ul className='nav'>
          <li>Sobre</li>
          <li>Contato</li>
          <li>Login</li>
        </ul>
       </header>
    )
}
export default Header