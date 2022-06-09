import { device } from "assets/device"
import { OtherSkills } from "components/molecules/OtherSkills/OtherSkills"
import { Programs } from "components/molecules/Programs.tsx/Programs"
import styled from "styled-components"

export const Skills: React.FC = () => {
    return (
        <SkillsWrapper data-aos="fade-right">
            <Programs />
            <OtherSkills />
        </SkillsWrapper>
        
    )
}

const SkillsWrapper = styled.div`
    
    margin-bottom: 50px;

    @media ${device.laptop} {
        display: flex;
        position: relative;
        padding-left: 10%;
        margin-bottom: 100px;
        margin-top: 100px;

        >* {
            width: 50%;
            max-width: 550px;
        }

        &:before {
            width: 80%;
            height: 80px;
            content: '';
            position: absolute;
            bottom: -30px;
            left: 0;
            background-color: ${({theme}) => theme.colors.pistacio};
        }

    }

`