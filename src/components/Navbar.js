import React, { Component } from 'react'
import logo from '../images/logo.png'
import { FaAlignRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default class Navbar extends 
Component {
    state={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({ isOpen:!this.state.isOpen })
    }
    render() {
        return <nav className="navbar"> 
        <div className="nav-center">
        <div className="nav-header">
        <Link to="/">
            <img className="logo" 
                 style={{ width: "40px", height: "auto" }} 
                 src={ logo } alt="Manny's Real Estate App" />
        </Link>
        <button 
            type="button" 
            className="nav-btn"
            onClick={ this.handleToggle }
        >
        <FaAlignRight className="nav-icon" />
        </button>
        </div>
        <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
                <Link to="/"> Home </Link>
            </li>
            <li>
                <Link to="/comingsoon"> Locations </Link>
            </li>
            <li>
                <Link to="/rooms"> Rooms </Link>
            </li>
            <li>
                <Link to="/comingsoon"> About </Link>
            </li>
            <li>
                <Link to="/comingsoon"> Our Team </Link>
            </li>
            <li>
                <Link to="/comingsoon"> Reserve Now </Link>
            </li>
        </ul>
        </div>
        </nav>
    }
}
