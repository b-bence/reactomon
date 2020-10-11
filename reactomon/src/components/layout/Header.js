import React, {useContext}from 'react'
import {Link} from 'react-router-dom'
import Background from '../../images/header-picture.png'
import styled from 'styled-components'
import Button from '../../elements/Button'
import ThemeContext from '../ThemeContext'

const HeaderElement = styled.header`
    transition: all 0.25s linear;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 300px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 10px;
    background-size: 350px 200px;
`

const Div = styled.div`
transition: all 0.25s linear;
    padding: 0;
    height: 25px;
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NavLink = styled(Link)`
`

const Header = () => {
    const theme = useContext(ThemeContext);
        return (
            <HeaderElement style={theme}>
                <Div>
                    
                    <NavLink to="/pokemons">
                    <Button style={buttonStyle}>POKEMONS</Button>
                    </NavLink>
                    
                    {/* <Button>
                    <NavLink to="/types">Types</NavLink>
                    </Button> */}

                    <NavLink to="/catched">
                    <Button style={buttonStyle}>CATCHED</Button>
                    </NavLink>
                    
                </Div>
            </HeaderElement>
        )
    }

    const buttonStyle = {
        backgroundColor: '#4056AC',
        color: "#fbd46d",
        fontWeight: "bold",
        cursor: 'pointer'
    }
    

export default Header
