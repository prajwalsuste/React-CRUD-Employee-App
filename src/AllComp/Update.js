import { useState } from "react";
import axios from "axios";
export default function Update()
{

     const [id,setId]=useState();
      const [name,setName]=useState();
        const [salary,setSalary]=useState();
          const [address,setAddress]=useState();


    const updateEmp=(e)=>{
        e.preventDefault();
        axios.put("http://localhost:3000/employees/"+id,{name,salary,address})
        .then((res)=>{
            console.log("updates");
            console.log(res.data);
        })
        .catch(err=>console.log(err))

    }

    return<>
    <h1>Update Comp</h1><br></br>
      <form onSubmit={updateEmp}>
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
                    <td><input type="reset"></input></td>
                    <td><input type="submit" value="Update" className="btn btn-success"></input></td>
                </tr>
            </table>
        </form>
        </>
}