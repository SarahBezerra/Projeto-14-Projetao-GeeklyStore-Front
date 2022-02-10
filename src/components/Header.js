import styled from 'styled-components'

export default function Header() {
    
    return(
        <Container>
            <ion-icon name="list-outline"></ion-icon>
            <p>GEEKLY</p>
            <ion-icon name="cart-outline"></ion-icon>
        </Container>
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