import { device } from "assets/device";
import { useLanguageContext } from "context/languageContext";
import { texts } from "data/texts";
import React from "react";
import styled from "styled-components";

export const HeroAbout: React.FC = () => {
    const {currentLang} = useLanguageContext();
    return (
        <AboutWrapper>
            <Heading>
                <H1>Aniela Katana-Matłok</H1>
                <H2>front-end developer</H2>
            </Heading>
            <P dangerouslySetInnerHTML={{__html: currentLang === 'pl' ? texts.about.pl : texts.about.en}} />
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`

    width: 100%;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 30px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media ${device.maxMobile} {
        text-align: center;
    }

    @media ${device.mobile} {
        width: 45%;
        margin-top: 0;
    }

    @media ${device.tablet} {
        width: 50%;
        padding-left: 3%;
        padding-right: 5%;

    }

`

const H1 = styled.h1`

    font-size: ${({theme}) => theme.fontSizes.headline2};
    font-family: ${({theme}) => theme.fontFamily.playf};
    font-weight: 300;
    letter-spacing: .25rem;

    @media ${device.laptopM} {
        font-size: ${({theme}) => theme.fontSizes.headline1};
    }

`

const H2 = styled.h2`

    font-size: ${({theme}) => theme.fontSizes.headline5};
    font-weight: 400;
    letter-spacing: .25rem;

    @media ${device.laptopM} {
        font-size: ${({theme}) => theme.fontSizes.headline3};

    }

`

const P = styled.p`

    font-weight: 300;
    text-align: justify;
    font-size: ${({theme}) => theme.fontSizes.body2};
    line-height: 1.25rem};
    margin-top: 30px;
    letter-spacing: .5px;

    @media ${device.laptop} {
        padding-bottom: 5%;
    }

    @media ${device.laptopM} {
        padding-left: 10%;
        padding-bottom: 10%;
        font-size: ${({theme}) => theme.fontSizes.body};
        line-height: 1.5rem};
    }

`

const Heading = styled.div``