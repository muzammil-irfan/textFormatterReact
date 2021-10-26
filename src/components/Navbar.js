import React from "react"
import { Link } from 'react-router-dom';


export default function Navbar(props){
    return(

<nav className="navbar navbar-expand-lg navbar-light bg-info mb-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    
  </div>
</nav>
    )
}
