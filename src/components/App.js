import React, { createContext } from 'react';
import Langauge from './Language'
import data from './data';
import Increment from './Increment';
import AddSub from './AddSub';
import Rest from './Rest';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {Switch,Route,NavLink} from 'react-router-dom';
import Error from './Error';
import Navbar from './Navbar';
import Images from './Images';
import Adminlogin from './Adminlogin'
const App=()=>{
  return(
    <>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={()=><Contact name="abhishek" />}></Route>
          <Route exact path="/images/:iname/:lname" render={()=><Images name="pp.jpg" />}></Route>
          <Route exact path="/admin" component={Adminlogin}></Route>
          <Route exact path="/ahome" component={Rest}></Route>
          <Route component={Error}></Route>
        </Switch>
    </>
  )
}
export default App;

