import React, {useContext}from 'react'
import {Link} from 'react-router-dom'
import Background from '../../images/header-picture.png'
import styled from 'styled-components'
import Button from '../../elements/Button'
import ThemeContext from '../ThemeContext'

const HeaderElement = styled.header`
    position: relative;
    height: 180px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 10px;
`

const Div = styled.div`
    position: absolute;
    bottom: 0;
    left: 45%;
`

const NavLink = styled(Link)`
    color: #ffcb02;
    font-weight: bold;
    text-decoration: none;
`

const Header = () => {
    const theme = useContext(ThemeContext);
        return (
            <HeaderElement style={theme}>
                <Div>
                    <Button>
                    <NavLink to="/pokemons">Pokemons</NavLink>
                    </Button>
                    | | | 
                    <Button>
                    <NavLink to="/types">Types</NavLink>
                    </Button>
                </Div>
            </HeaderElement>
        )
    }

    

export default Header
