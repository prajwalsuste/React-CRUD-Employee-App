import axios from "axios";
import { useState } from "react"

export default function Create()
{

    const [id,setId]=useState();
    const [name,setName]=useState();
    const [salary,setSalary]=useState();
    const [address,setAddress]=useState();

          const saveEmp=(e)=>{
            e.preventDefault();
            let emp={id,name,salary,address}
            console.log(emp)
            axios.post("http://localhost:3000/employees",emp)
            .then((res)=>{
                console.log("saved "+res.data)
            })
            .catch((err)=>console.log(err))

          } 
    return <>
        <h1>Create Comp </h1><br></br>
        <form onSubmit={saveEmp}>
            <table align="center" border="1">
                <tr>
                    <td>ID</td>
                    <td><input type="text" onChange={(e)=>{setId(e.target.value)}}></input></td>
                </tr>
                 <tr>
                    <td>Name</td>
                    <td><input type="text" onChange={(e)=>{setName(e.target.value)}}></input></td>
                </tr>
                 <tr>
                    <td>Salary</td>
                    <td><input type="text" onChange={(e)=>{setSalary(e.target.value)}}></input></td>
                </tr>
                 <tr>
                    <td>Address</td>
                    <td><input type="text" onChange={(e)=>{setAddress(e.target.value)}}></input></td>
                </tr>
                 <tr>
                    <td></td>
                    <td><input type="reset" className="btn btn-danger"></input>{"  "}
                        <input type="submit" value="Save" className="btn btn-success"></input></td>
                </tr>
            </table>
        </form>
        </>
}