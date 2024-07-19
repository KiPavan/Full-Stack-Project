import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function edituser() {

    let navigate=useNavigate()

    const {id}=useParams()

    const[user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const{name,username,email}=user
    //e mean event
    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(() => {
        loadUser();
    }, []);
     
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")
    }

    const loadUser=async () => {
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit User</h2>
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="md-3">
                        <label htmlFor="Name" className="form-label">Name</label>
                        <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your Name"
                        name="name"
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="md-3">
                        <label htmlFor="Username" className="form-label mt-3">Username</label>
                        <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your Username"
                        name="username"
                        value={username}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <div className="md-3">
                        <label htmlFor="Name" className="form-label mt-3">E-mail</label>
                        <input 
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your E-mail address"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary mt-3" >Submit</button>
                    <Link className="btn btn-outline-danger mx-2 mt-3" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
