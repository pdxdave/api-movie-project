import React from 'react'
import Styled from 'styled-components'

const SpinMe = Styled.div `
    border: 5px solid orange;
    border-top: 5px solid red;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 0.8s linear infinite;
    margin: 20px auto;

    @keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
`

const Spinner = () => {
    return (
        <SpinMe>
            
        </SpinMe>
    )
}

export default Spinner