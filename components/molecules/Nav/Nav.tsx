import { MenuLink } from "types/menu"
import styled from 'styled-components'
import { NavItem } from "components/atoms/NavItem.tsx/NavItem"
import { device } from "assets/device"

interface NavProps {
    router: MenuLink[]
}

export const Nav: React.FC<NavProps> = ({router}) => {

    return (
        <NavWrapper>
            {router.map(route => <NavItem route={route} key={route.name} />)}
        </NavWrapper>
    )
}

const NavWrapper = styled.ul`

    display: flex;
    gap: 20px;

    @media ${device.maxMobile} {
        flex-direction: column;
        text-align: center;
    }

`

