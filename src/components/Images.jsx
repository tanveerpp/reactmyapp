import React from 'react'
import {useLocation,useParams} from 'react-router-dom';
const Images = (Props) => {
    let location=useLocation();
    let {iname,lname}=useParams();
    return (
        <>
            <h1>{Props.name} Image component is running</h1>
            <h2>{location.pathname}</h2>
            <h2>{iname} {lname}</h2>
            {iname==="tanveer"?<h2>my data</h2>: null}
        </>
    )
}

export default Images
