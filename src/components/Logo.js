import React from 'react'
import logo from '../logo.png'

function Logo() {
    const style = {
        width: '1000px',
        height: '550px',
        opacity: 0.5,
        paddingTop: '10px'
        }
    return <img src={logo} alt="Logo" style={style} />
}


export default Logo