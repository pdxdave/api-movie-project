import React from 'react'
import styled from 'styled-components'
import {Link} from '@reach/router'

import ticket from '../images/ticket.png'

const Header = () => {
    return (
        <TicketMaster>
        <div className="ticket-wrapper">
                <Link to="/">
                    <TicketLogo src={ticket} alt="ticket logo"/>
                </Link>
                <HeaderPhrase>
                    <h1>
                        <span style={{color: '#fff'}}>Movie </span>
                        <span style={{color: 'red'}}>MADNESS</span>
                    </h1>
                </HeaderPhrase>
        </div>
    </TicketMaster>
    )
}

export default Header

const TicketMaster = styled.div `
    background: rgb(51, 52, 56);
    box-sizing: border-box;
    .ticket-wrapper {
        max-width: 1280px;
        margin: 0 auto;
        padding: 15px 0px;
    }
`

const TicketLogo = styled.img `
    width: 150px;
    @media screen and (max-width: 1300px){
        width: 100px;
        padding-left: 50px;
    }
`

const HeaderPhrase = styled.div `
    float: right;
    margin-top: 15px;
    @media screen and (max-width: 1300px){
        padding-right: 50px;
        margin-top: 0px;
    }
`