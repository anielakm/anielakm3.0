import { device } from "assets/device"
import { Heading } from "components/atoms/Heading/Heading"
import { ProjectList } from "components/molecules/ProjectList/ProjectList"
import { texts } from "data/texts"
import styled from "styled-components"

export const Portfolio: React.FC = () => {

    return (
        <PortfolioWrapper id="portfolio">
            <Heading text="Portfolio" big />
            <ProjectList projects={texts.portfolio.commercial} />
        </PortfolioWrapper>
    )
}


const PortfolioWrapper = styled.div`

    margin-top: -30px;
    padding-top: 50px;

    @media ${device.mobile} {
        padding-top: 100px;
        margin-top: -30px;
    }

    @media ${device.tablet} {
        margin-top: -50px;
        padding-top: 150px;
    }

`