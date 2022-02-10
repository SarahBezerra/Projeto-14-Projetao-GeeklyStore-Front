import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Sidebar() {
    
    return(
        <Container>
            <div className="sidebar">
                <Link to="/carrinho_de_compras">
                    <ion-icon name="cart-outline"></ion-icon>
                    Carrinho
                </Link>

                <hr/>

                <Link to="/favoritos">
                    <ion-icon name="heart-outline"></ion-icon>
                    Favoritos
                </Link>

                <hr/>

                <Link to="/historico">
                    <ion-icon name="reader-outline"></ion-icon>
                    Histórico
                </Link>

                <hr/>
                
                <Link to="/login">
                    <ion-icon name="exit-outline"></ion-icon>
                    Sair
                </Link>
            </div>

            <div className="blur"></div>
        </Container>

    )
}

const Container = styled.div`
    display: flex;
    position: fixed;
    margin-top: 50px;
    height: 100%;
    min-width: 100vh;
    z-index: 2;


    .sidebar {
        width: 210px;

        display: flex;
        flex-direction: column;

        background-color: #FFF;
        font-size: 18px;

        a:first-child {
            margin-top: 10px;
        }

        a {
            width: 100%;
            height: 34px;
            margin: 2px 0;
            padding-left: 10px;

            display: flex;
            align-items: center;

        }

        ion-icon {
            color: #604A4E;
            font-size: 25px;
            margin-right: 12px;
        }

        hr {
            width: 180px
        }
    }

    .blur {
        min-width: 100vh;
        width: 100%;
        background: #000;
        opacity: 0.90;
    }
`