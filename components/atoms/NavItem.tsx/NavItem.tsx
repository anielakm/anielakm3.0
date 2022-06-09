import { useLanguageContext } from "context/languageContext"
import Link from "next/link"
import styled from "styled-components"
import { MenuLink } from "types/menu"

interface NavItemProps {
    route: MenuLink
}

export const NavItem: React.FC<NavItemProps> = ({route}) => {
    const {currentLang} = useLanguageContext()

    return (
        <NavElement><Link href={route.path}>{currentLang === 'pl' ? route.name : route.nameEng}</Link></NavElement>
    )
}

const NavElement = styled.li`

    font-size: ${({theme}) => theme.fontSizes.nav};
    letter-spacing: 2px;
    font-weight: 400;

`