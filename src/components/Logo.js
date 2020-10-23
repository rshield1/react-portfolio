import React from 'react'
import logo from '../logo.png'

function Logo() {
    const style = {
        width: '1200px',
        height: '700px',
        opacity: 0.8,
        paddingTop: '10px'
        }
    return <img src={logo} alt="Logo" style={style} />
}


export default Logo