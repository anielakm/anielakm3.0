import { device } from "assets/device"
import styled, { css } from "styled-components"

interface HeadingProps {
    text: string
    big?: boolean
}

interface H2Props {
    big: boolean
}

export const Heading: React.FC<HeadingProps> = ({text, big = false}) => {
    return (
        <H2 big={big}>{text}</H2>
    )
}

const H2 = styled.h2<H2Props>`

    ${({ big }) =>
    big ?
    css`

        text-align: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-weight: 300;
        font-size: ${({theme}) => theme.fontSizes.headline2};

        @media ${device.laptop} {
            font-size: ${({theme}) => theme.fontSizes.headline1};
        }
    
    ` : 
    css`
        
        font-size: ${({theme}) => theme.fontSizes.headline5};
        font-weight: 600;
        max-width: 350px;
        margin-right: 0;
        margin-left: auto;

        @media ${device.mobile} {
            font-size: ${({theme}) => theme.fontSizes.headline3};
        }

        @media ${device.laptopM} {
            font-size: ${({theme}) => theme.fontSizes.headline2};
        }
        
    `
    }

`