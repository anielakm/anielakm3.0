import { SocialMediaList } from "components/molecules/SocialMedia/SocialMedia"
import styled from "styled-components"
import sm from "data/sm"
import { device } from "assets/device"

export const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <H2>Aniela Katana-Matłok</H2>
            <SocialMediaList sm={sm} big />
            <Copyright><span>Template by Aniela Katana-Matłok.</span> <span>&copy; All rights reserved.</span></Copyright>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`

    background-color: ${({theme}) => theme.colors.beige};
    color: ${({theme}) => theme.colors.white};
    text-align: center;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.mobile} {
        padding-top: 100px;
    }

`

const H2 = styled.h2`

    font-size: ${({theme}) => theme.fontSizes.headline3};
    font-weight: 300;
    letter-spacing: 3px;
    margin-bottom: 30px;

    @media ${device.mobile} {
        font-size: ${({theme}) => theme.fontSizes.headline1};
    }

`

const Copyright = styled.div`

    margin-top: 60px;
    font-size: ${({theme}) => theme.fontSizes.body2};
    padding: 0 15px 20px;

    @media ${device.mobile} {
        margin-top: 100px;
    }


    @media ${device.maxMobileM} {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

`