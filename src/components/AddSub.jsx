import React, { useEffect, useState } from 'react';
const AddSub=()=>{
    let [n,changenum]=useState(0);
    let [n1,changenum1]=useState(100);
    useEffect(()=>{
        window.alert('clicked sucessfully');
    },[n])
    return(
        <>
            <button className="btn btn-primary" onClick={
                ()=>{
                    changenum(n+1);
                }
            }>increment <span className="badge bg-danger">{n}</span></button>
            <button className="btn btn-primary" onClick={
                ()=>{
                    changenum1(n1-1);
                }
            }>decrement <span className="badge bg-danger">{n1}</span></button>
        </>
    )
}
export default AddSub;