import React, { useContext } from 'react';
import {Firstname,Email} from './App';
const C=()=>{
    let fname=useContext(Firstname);
    let email=useContext(Email);
    return(
        <>
         <h1>C component is running {fname} {email}</h1>
        </>
    )
}
export default C;