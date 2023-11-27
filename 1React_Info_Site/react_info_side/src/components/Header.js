import logo from '../logo.svg'
import React from 'react'

export function Header(props) {
  return (
        <nav className={props.darkMode ? 'dark' : ''}>
            <img  src={logo} alt='logo' width='80px'/>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
  )
}