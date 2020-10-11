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
    height: 220px;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    text-align: center;
    padding: 10px;
`

const Div = styled.div`
transition: all 0.25s linear;
    padding: 0;
    height: 25px;
    width: 220px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* flex-direction: row;  */
    /* position: absolute;
    bottom: 0;
    left: 45%; */
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
                    {/* <Button>
                    <NavLink to="/types">Types</NavLink>
                    </Button> */}
                    <Button>
                    <NavLink to="/catched">Catched</NavLink>
                    </Button>
                </Div>
            </HeaderElement>
        )
    }

    

export default Header
