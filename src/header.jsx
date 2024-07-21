import react from 'react'
import './App.css'
import Menu from './Menu.jsx'
//Criando A funçao header generica para poder usar o nome que eu quiser apenas mudando o name no app.jsx


function Header(props) {

    return (
        <header className='navbar'>
            <h1 id='title'>{props.name}</h1>
            <Menu links={props.links}></Menu>
        </header>
    )
}

export default Header