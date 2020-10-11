import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TypeItem from './TypeItem'

const TypeList = props => {

    const [types, setState] = useState([])

    useEffect (() => {
        console.log("Type list Axios call")
        axios.get("https://pokeapi.co/api/v2/type")
        .then(res => setState(res.data.results))
      },[])

    return types.map((type) => (
            <TypeItem type={type} />
        ))
}


export default TypeList