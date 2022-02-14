import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Sidebar from './Sidebar';

export default function Header({setToken}) {

    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    
    return(
        <>
        <Container sidebar={sidebar}>
            <div onClick={showSidebar}>
                <ion-icon name="list-outline"></ion-icon>
            </div>
            <p>GEEKLY</p>
            <Link to="shopping-cart">
                <ion-icon name="cart-outline"></ion-icon>
            </Link>
        </Container>
        
        {sidebar ? <Sidebar setToken={setToken}/> : ''}
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    padding: 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 2;
    
    background-color: #FFF;

    ion-icon {
        color: #190D17;
        font-size: 30px;
    }

    p {
        color: #190D17;
        font-size: 25px;
        font-weight: 700;
    }
`