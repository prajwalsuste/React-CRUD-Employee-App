import axios from "axios";
import { useState } from "react"

export default function Delete()
{
    const [id,setId]=useState();


    const removeEmp=(e)=>{
        e.preventDefault()
        console.log("id = "+id );
        axios.delete("http://localhost:3000/employees/"+id)
        .then(()=>{
            console.log("employee deleted")
        })
        .catch((err)=>{console.log(err)})
    }

    return <>
        <h1>Delete Comp</h1>
        <form onSubmit={removeEmp}>
            Id <input type="text" onChange={(e)=>{setId(e.target.value)}}></input>
            <input type="submit" value="Delete" className="btn btn-danger"></input>
        </form>
        </>
}