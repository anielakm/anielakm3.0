import { device } from "assets/device"
import { HeroImg } from "components/atoms/HeroImg/HeroImg"
import { HeroAbout } from "components/molecules/HeroAbout/HeroAbout"
import styled from "styled-components"

export const Hero:React.FC = () => {
    return (

        <HeroWrapper>
            <HeroImg />
            <HeroAbout />
        </HeroWrapper>

    )
}

const HeroWrapper = styled.header`


    @media ${device.mobile} {
        display: flex;
        margin-top: 100px;
    }

`
