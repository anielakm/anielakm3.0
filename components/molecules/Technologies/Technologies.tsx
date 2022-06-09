import styled from "styled-components"
import { texts } from "data/texts";
import { Heading } from "components/atoms/Heading/Heading";
import { useLanguageContext } from "context/languageContext";
import Image from "next/image";
import img from 'assets/images/akm2.jpg'
import { device } from "assets/device";
import { Li } from "components/atoms/Li/Li";

export const Technologies: React.FC = () => {
    const {currentLang} = useLanguageContext();
    return (
        <TechnologiesWrapper data-aos="fade-left">
            <Col>
                <Heading text={currentLang === 'pl' ? texts.technologies.title.pl : texts.technologies.title.en} />
                <Ul>
                    {
                        currentLang === 'pl' ? 
                        texts.technologies.items.pl.map(tech => <Li key={tech}>{tech}</Li>) 
                        :
                        texts.technologies.items.en.map(tech => <Li key={tech}>{tech}</Li>) 
                    }
                    
                </Ul>
            </Col>
            <Col>
                <ImgWrapper>
                    <Image
                        src={img}
                        alt={currentLang === 'pl' ? texts.technologies.title.pl : texts.technologies.title.en}
                        width={430}
                        height={430}
                    />
                </ImgWrapper>
                <BeigeBlock />
            </Col>
        </TechnologiesWrapper>
    )
}

const TechnologiesWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 50px;
    padding-top: 100px;
    padding-bottom: 20px;

    @media ${device.laptop} {
        margin-top: 100px;
    }
`
const Col = styled.div`

    text-align: right;
    width: 50%;
    padding-right: 5%;

    &:first-child {
        padding-left: 5%;
    }

    @media ${device.laptop} {
        &:last-child {
            padding-right: 15%;
        }
    }

`
const Ul = styled.ul`

    margin-top: 10px;

    @media ${device.laptopM} {
        margin-top: 30px;
    }

`


const ImgWrapper = styled.div`

    position: relative;
    height: auto;
    z-index: 2;
    

`

const BeigeBlock = styled.div`

    width: 20%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.beige};
    position: absolute;
    top: 0;
    right: 0;

    @media ${device.laptop} {
        width: 30%;
    }

`