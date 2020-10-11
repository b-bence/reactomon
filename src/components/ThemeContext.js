import React, {createContext} from 'react'

export const themes = {
    dark:{
        color: "white",
        backgroundColor: "#222831"
    },
    light:{
        color: "black",
        backgroundColor: "#eeeeee"
    }
};

const ThemeContext = createContext();

export default ThemeContext;
