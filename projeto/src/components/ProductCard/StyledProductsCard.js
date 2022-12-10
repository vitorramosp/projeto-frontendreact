import styled from "styled-components"

export const ProductCardContainer = styled.article`
border: 1px solid black;
    margin: 8px 0;
    margin-right: 8px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    > div {
        padding: 8px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-price-and-cart-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

        button {
            padding: 4px;
        }
    }

    .cart-card-delete-btn {
        position: absolute;
        top: 0;
        right: 0;
        background-color: #ff5c5c;
        color: white;
    }
`
