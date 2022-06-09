import { device } from "assets/device"
import styled from "styled-components"

interface LiProps {
    children: JSX.Element | String,
}


export const Li: React.FC<LiProps> = ({children}) => <LiWrapper>{children}</LiWrapper>

const LiWrapper = styled.li`

    font-size: ${({theme})=> theme.fontSizes.body3};
    font-weight: 300;

    @media ${device.mobile} {
        font-size: ${({theme})=> theme.fontSizes.body};
    }

    @media ${device.laptopM} {
        margin-bottom: 8px;
    }

`