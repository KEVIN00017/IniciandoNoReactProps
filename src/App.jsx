import { useState } from 'react'
import './App.css'
import Header from './header.jsx'
function App() {
 
/*utilizando a funçao header*/
  return (
    <>
    
    <Header name="WebProg" links={["Sobre","Contato","Login"]}></Header>




     <main>
      <section className='apresentaçao'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, ea omnis? Veniam, necessitatibus consectetur at enim ipsa repellat, earum dolorum expedita commodi hic sed aperiam vel, eligendi laborum obcaecati veritatis!</p>
      </section>
      <section className='apresentaçao'>
       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat cum natus cupiditate. Tempore reprehenderit voluptatum quos dolore odit obcaecati, magni a sint voluptas eius minus distinctio aliquam. Quaerat, dolorum!</p>
      </section>
      <section className='apresentaçao'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum placeat cum natus cupiditate. Tempore reprehenderit voluptatum quos dolore odit obcaecati, magni a sint voluptas eius minus distinctio aliquam. Quaerat, dolorum!</p>
      </section>
     </main>
    </>
  )
}

export default App
