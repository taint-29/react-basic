import React from "react";
import './Nav.scss'
import {
    
    Link, NavLink
  } from "react-router-dom";

class Nav extends React.Component{
    render(){

        return (
            <>

            <div className="topnav">
                < NavLink to="/home" activeClassName="active">
                    Home
                </NavLink>
                < NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                < NavLink to="/user" activeClassName="active">
                    Users
                </NavLink>
                < NavLink to="/about" activeClassName="active">
                    About
                </NavLink>

                {/* <NavLink to="/home">Home</NavLink>
                <NavLink to="/todo">todo</NavLink>
                <NavLink to="/about">about</NavLink> */}

                {/* <a className="active" href="/home">Home</a>
                <a href="/todo">Todo</a>
                <a href="/about">About</a> */}
            </div>
            </>
        )
    }
}

export default Nav