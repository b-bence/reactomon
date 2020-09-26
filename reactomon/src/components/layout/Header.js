import React from 'react'
import {Link} from 'react-router-dom'
import Background from '../../images/header-picture.png'

const Header = props => {
        return (
            <header style={headerStyle}>
                <div style={linkDivStyle}>
                    <button style={linkButtonStyle}>
                    <Link style={linkStyle} to="/pokemons">Pokemons</Link>
                    </button>
                    | | | 
                    <button style={linkButtonStyle}>
                    <Link style={linkStyle} to="/types">Types</Link>
                    </button>
                </div>
            </header>
        )
    }

const headerStyle={
    position: 'relative',
    height: '180px',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: "#ffcb02",
    fontWeight: "bold",
    textDecoration: "none"
}

const linkDivStyle={
    position: "absolute",
    bottom: '0',
    left: '45%'
}

const linkButtonStyle={
    height: "30px",
    background: '#2d72b8',
    borderRadius: "10px",
    borderColor: "white"
}

export default Header
