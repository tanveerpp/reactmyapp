import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Rest from './Rest';
import {BrowserRouter} from 'react-router-dom';
import App from './App'
function Adminlogin() {
    let [data,updatedate]=useState({id:'',pwd:''})
    function getdata(event)
    {
        updatedate({...data,[event.target.name]:event.target.value});
    }
    function submits(event)
    {
        event.preventDefault();
        if(data.id==="admin"&&data.pwd==="12345")
        {
            ReactDOM.render(
                <React.StrictMode>
                  <BrowserRouter>
                  <Rest/>
                  </BrowserRouter>
                </React.StrictMode>,
                document.getElementById('root')
              );
        }
        else
        {
            alert("Invalid id and password");
        }
    }
    return (
        <>
        <div className="container">
            <form action="" onSubmit={submits}>
            <div className="form-group">
                <label>ID</label>
                <input type="text" name="id" value={data.id} onChange={getdata} className="form-control" placeholder="please enter Id"></input>
            </div>
            <div className="form-group">
                <label>PASSWORD</label>
                <input type="password" value={data.pwd} name="pwd" onChange={getdata} className="form-control" placeholder="please enter Password"></input>
            </div>
           <button className="btn btn-primary">Login</button>
            </form>   
            </div>
        </>
    )
}
export default Adminlogin
