import react from "react"
import "./App.css"


function Menu(props) {
    const Lista=props.links.map((link,index) => {
    
        return (
            <li key={index}>{link}</li>
        )
    })
    return (
        <ul >
            <li className='nav'>{Lista}</li>
        </ul>

    )
}
export default Menu