import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content:space-between;
    background-color:#07184a;
    color: white;
    padding: 4px;

    .change-buttons{
        display: flex;
        align-items:center;
        justify-content:space-between;

    }
    button{
        background-color: white;
        width:70px;
        height:60px;
        margin: 0 4px;
        border-radius:8px;

        :hover{
            cursor: pointer;
            filter: brightness(1.15)
        }
        :active{
            filter: brightness(0.85)
        }
        
    }
    
    .cart-btn {
        position: relative;
    }

    .cart-badge {
        position: absolute;
        top: 10%;
        right: 10%;
        border-radius: 50%;
        background-color: white;
        height: 18px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 50px;
        height: 50px;
    }
`