import { device } from "assets/device"
import { Heading } from "components/atoms/Heading/Heading"
import { ProjectList } from "components/molecules/ProjectList/ProjectList"
import { texts } from "data/texts"
import styled from "styled-components"

export const Portfolio: React.FC = () => {

    return (
        <PortfolioWrapper>
            <Heading text="Portfolio" big />
            <ProjectList projects={texts.portfolio.commercial} />
        </PortfolioWrapper>
    )
}


const PortfolioWrapper = styled.div`

    margin-top: 50px;

    @media ${device.mobile} {
        margin-top: 100px;
    }

    @media ${device.tablet} {
        margin-top: 200px;
    }

`