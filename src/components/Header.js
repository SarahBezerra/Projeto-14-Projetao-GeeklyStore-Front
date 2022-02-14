import { useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useUser } from '../services/auth';
import Sidebar from './Sidebar';

export default function Header({setToken}) {

    const [ sidebar, setSidebar ] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const {user} = useUser();
    
    return(
        <>
        <Container sidebar={sidebar}>
            <div onClick={showSidebar}>
                <ion-icon name="list-outline"></ion-icon>
            </div>
            <p>GEEKLY</p>
            <MiniContainer>
                <img src = {user.avatar} alt = "Imagem do usuário"/>
                <Link to="shopping-cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </MiniContainer>
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

        padding-left: 45px;
    }

    img{
        width: 40px;
        height: 40px;

        border-radius: 50px;
        margin-right: 5px;
    }
`

const MiniContainer = styled.div`
    display: flex;
    align-items: center;
`