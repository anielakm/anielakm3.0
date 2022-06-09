import styled, { css } from "styled-components"

interface ButtonProps {
    link: string
    text: string
    light?: boolean
}

interface BWProps {
    light: boolean
}

export const Button: React.FC<ButtonProps> = ({link, text, light = false}) => {
    return (
        <ButtonWrapper href={link} target="_blank" light={light}>
            {text}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.a<BWProps>`

    display: inline-block;
    background-color: ${({theme, light}) => light ? theme.colors.pistacio : theme.colors.black};
    color: ${({theme, light}) => light ? theme.colors.black : theme.colors.white};
    font-size: ${({theme, light}) => light ? theme.fontSizes.headline3 : theme.fontSizes.btn};
    font-family: ${({theme}) => theme.fontFamily.playf};
    letter-spacing: ${({light}) => light ? '2.5px' : '.5px' };
    padding: ${({light}) => light ? '12px 20px' : '7px 10px'} ;
    border: 1px solid ${({theme, light}) => light ? theme.colors.pistacio : theme.colors.black};
    transition: all .3s;
    width: fit-content;

   
    ${({ light }) =>
    light ?

    css`
        &:hover {
            opacity: .7;
        }
    `
    
    :
    css`

        &:hover {
            background-color: transparent;
            color: ${({theme}) => theme.colors.black};
        }


    `}


`