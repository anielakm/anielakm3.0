import styled, {css} from 'styled-components'
import router from "data/menu"
import sm from "data/sm"
import { Nav } from "components/molecules/Nav/Nav"
import { SocialMediaList } from "components/molecules/SocialMedia/SocialMedia"
import { LangSwitcher } from "components/molecules/LangSwitcher/LangSwitcher"
import languages from "data/languages"
import { Navburger } from "components/atoms/NavBurger/NavBurger"
import { device } from "assets/device"
import MenuProvider, { useMenuContext } from "context/menuContext"

interface NWProps {
    isMenuOpen: boolean
}

export const Navbar: React.FC = () => {
    const { isMenuOpen } = useMenuContext()

    return (
        <>
            <NavWrapper isMenuOpen={isMenuOpen}>
                <Nav router={router} />
                <SocialMediaList sm={sm} />
                <LangSwitcher languages={languages} />
            </NavWrapper>
            <Navburger />
        </>
    )
}

const NavWrapper = styled.nav<NWProps>`
    display: flex;
    gap: 30px;
    justify-content: end;
    align-items: center;
    padding: 15px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${({theme}) => theme.colors.white};
    box-shadow: rgb(0, 0, 0, 0.05) 0px 0px 10px 5px;
    z-index: 50;

    @media ${device.maxMobile} {
        width: 100%;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        transform: translateX(100vw);
        transition: all .3s;
    }

    ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`

        transform: translateX(0) !important; 

    `}

`

