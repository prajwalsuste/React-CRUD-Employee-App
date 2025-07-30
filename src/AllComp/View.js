import { useEffect, useState } from "react"
import axios from "axios"

export default function View()
{
    const [allEmp,setAllEmp]=useState([
            {"id":1,"name":"a","salary":1111,"address":"p"},
            {"id":2,"name":"b","salary":2222,"address":"m"}
    ])


    const getAllEmp=()=>{

        axios.get("http://localhost:3000/employees")
        .then((res)=>{
            // console.log(res)
            console.log(res.data)
            setAllEmp(res.data)
        })
        .catch((err)=>{console.log(err)});
    }

    useEffect(()=>{
        getAllEmp()
    },[])


    return <>
        <h2>View Comp</h2>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {
                    allEmp.map((emp,index)=>(
                        <tr key={index}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.salary}</td>
                            <td>{emp.address}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
}