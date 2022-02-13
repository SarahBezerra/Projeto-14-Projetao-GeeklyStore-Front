import styled from "styled-components";

const CheckoutContainer = styled.div `
    width: 83%;

    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 100px;
        height: 100px;
        margin-bottom: 35px;
    }

    span{
        font-size: 25px;
        text-align: center;
        font-weight: 600;
        color: #D4CFCC
    }

    a{
        display: flex;
        font-size: 20px;
        margin-top: 150px;
        color: #D4CFCC
    }

    ion-icon{
        margin-right: 10px;
        
    }

    button{
        width: 100%;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 15%;

        border: none;
        border-radius: 50px;
        background-color: #9F8795;

        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #190D17;
    }

`

export default CheckoutContainer