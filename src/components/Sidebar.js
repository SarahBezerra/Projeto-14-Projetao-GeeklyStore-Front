import styled from 'styled-components'

export default function Sidebar() {
    
    return(
        <Container>
            <div className="option">
                <ion-icon name="cart-outline"></ion-icon>
                Carrinho
            </div>

            <hr/>

            <div className="option">
                <ion-icon name="heart-outline"></ion-icon>
                Favoritos
            </div>

            <hr/>

            <div className="option">
                <ion-icon name="reader-outline"></ion-icon>
                Histórico
            </div>

            <hr/>
            
            <div className="option">
                <ion-icon name="exit-outline"></ion-icon>
                Sair
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 200px;
    height: 100%;
    margin-top: 50px;

    position: fixed;
    z-index: 2;

    display: flex;
    flex-direction: column;

    background-color: #FFF;
    font-size: 18px;
    color: #000;

    div:first-child {
        margin-top: 10px;
    }

    .option {
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
        color: #9F8795;
        width: 180px
    }

`