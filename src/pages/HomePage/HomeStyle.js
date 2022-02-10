import styled from "styled-components";

export const Categories = styled.div`
    width: 100%;
    height: auto;
    padding: 80px 15px 30px;

    h2 {
        padding-bottom: 5px;
        font-size: 20px;
        font-weight: 700;
    }
`
export const CategoryList = styled.div`
    width: 100%;
    height: 90px;

    display: flex;
    align-items: center;
    overflow: auto;

    li {
        display: flex;
        gap: 20px;
    }

    ul {
        width: auto;
        height: auto;
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div {
            width: 50px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #D4CFCC;
            border-radius: 50%;        
            box-shadow: 1px 0px 6px 0px rgba(255,255,255,0.36);            

            ion-icon {
                font-size: 25px;
                color: #190D17;
            }
        }

        p {
            text-align: center;
            margin-top: 5px;
        }
    }
`

export const Products = styled.div`
    width: 100%;
    height: auto;
    padding: 0 15px;

    h2 {
        padding-bottom: 15px;
        font-size: 20px;
        font-weight: 700;
    }

`
export const ProductsList = styled.li`
    padding-bottom: 30px;
    gap: 15px;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    ul {
        width: 160px;
        height: 285px;
        background-color: #D4CFCC;
        border-radius: 5px;

        position: relative;

        img {
            width: 100%;
            height: 180px;
            border-radius: 5px;
            margin-bottom: 3px;
        }

        .infos {
            padding: 5px;
        }

        p.name {
            font-size: 17px;
            color: #190D17;
            font-weight: 600;
            margin-bottom: 3px;
        }

        p.description {
            font-size: 14px;
            color: #474747;
            margin-bottom: 10px;
        }

        p.price {
            font-size: 16px;
            color: #346C32;
            font-weight: 600;

            position: absolute;
            bottom: 5px;
            left: 5px;
        }

        ion-icon {
            padding: 8px;
            background: #9F8795;
            opacity: 0.7;
            border-radius: 50%;

            position: absolute;
            top: 5px;
            right: 5px;

            font-size: 22px;
            color: #000;
        }
    }

`

export const Footer = styled.p`
    text-align: center;
    padding-bottom: 25px;
`