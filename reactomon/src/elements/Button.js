import styled from 'styled-components'

export default styled.button`
    
    height: 30px;
    width: 90px;
    background: #4f8a8b;
    border-radius: 10px;
    cursor: grab;
    &:disabled{
        background: grey;
        cursor: not-allowed;
    }

    font-size: 11px;
    color: white;
    font-family: 'Cabin', sans-serif;
    /* color: #ffcb02; */
`