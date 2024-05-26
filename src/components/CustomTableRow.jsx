import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

function CustomTableRow({ id, name, price, year, trigger, setTrigger, photo }) {
    const deleteElement = (id) =>{
        axios.delete('http://localhost:3000/api/' + id).then(
            res=> setTrigger(!trigger)
        )
    }
    return (

        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{year}</td>
            <td><Link to={'/edit/' + id}><button>Edit</button></Link></td>
            <td><button onClick={()=>deleteElement(id)}>Delete</button></td>
            <td><img src={photo} alt="" width="150px" height="100px" style={{display: 'flex'}}/></td>
        </tr>

    )
}

export default CustomTableRow
