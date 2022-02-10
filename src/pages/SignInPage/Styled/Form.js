import styled from "styled-components"

const Form = styled.form `
    width: 100%;

    display: flex;
    flex-direction: column;

    input{
        width: 100%;
        height: 48px;

        background-color: #604A4E;
        border: 2px solid #9F8795;
        border-radius: 50px;
        margin-bottom: 15px;

        ::placeholder{
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0em;
            text-align: left;
            color: #D4CFCC;
            opacity: 0.5;

            padding-left: 20px;
        }
    }

    button{
        width: 100%;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-bottom: 15%;

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

export default Form