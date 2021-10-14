import React, { useState } from 'react';
const Increment=()=>{
    let [data,updatedata]=useState({name:"",email:"",pwd:""});
    function show(event)
    {
            let d={...data,[event.target.name]:event.target.value};
            console.log(d);
            //d[event.target.name]=event.target.value;
            updatedata(d);
    }
    function submit(event)
    {
        event.preventDefault();
        console.log(data);
        updatedata({name:"",email:"",pwd:""});
    }
    return (
        <>
           <h1>{data.name} {data.email} {data.pwd}</h1>
           <form onSubmit={submit}>
           NAME<input type="text" name="name" value={data.name} onChange={show} ></input><br/>
           EMAIL<input type="text" name="email" value={data.email} onChange={show} ></input><br/>
           PASSWORD<input type="password" name="pwd" value={data.pwd}  onChange={show} /><br/>
           <button className="btn btn-primary">Submit</button>
           </form>
        </>
    )
}
export default Increment;