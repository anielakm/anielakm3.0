import { device } from "assets/device"
import { useMenuContext } from "context/menuContext"
import styled, { css } from 'styled-components'

interface BurgerProps {
    isMenuOpen: boolean
}

export const Navburger: React.FC<{}> = () => {
    const { isMenuOpen ,setIsMenuOpen } = useMenuContext()
    return (
        <Burger isMenuOpen={isMenuOpen}>
            <BurgerWrapper onClick={()=>setIsMenuOpen(!isMenuOpen)}>
                <BurgerItem />
                <BurgerItem />
                <BurgerItem />
            </BurgerWrapper>
        </Burger>
    )
}

const Burger = styled.div<BurgerProps>`

    background-color: ${({theme}) => theme.colors.white};
    padding: 15px;
    position: fixed;
    top: 0;
    right: 0;
    transition: all .3s;
    box-shadow: ${({isMenuOpen}) => isMenuOpen ? 'none' : 'rgb(0, 0, 0, 0.1) 0px 0px 10px 5px'};
    z-index: 100;

    @media ${device.mobile} {
        display: none;
    }

    ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`

        span:nth-child(1), span:nth-child(2) {
            position: absolute;
            top: 7px;

        }

        span:nth-child(1) {
            left: 0;
            transform: rotate(45deg);
        }

        span:nth-child(2) {
            right: 0;
            transform: rotate(-45deg);
        }

        span:nth-child(3) {
            display: none;
        }
      
    `}


`

const BurgerWrapper = styled.div`

    width: 23px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;

`

const BurgerItem = styled.span`

    background-color: ${({theme}) => theme.colors.black};
    height: 1.5px;
    width: 100%;
    transition: all .3s;

`