import styled from "styled-components"
import { texts } from "data/texts";
import { Heading } from "components/atoms/Heading/Heading";
import { useLanguageContext } from "context/languageContext";
import Image from "next/image";
import img from 'assets/images/akm4.jpg'
import { device } from "assets/device";
import { Li } from "components/atoms/Li/Li";

export const OtherSkills: React.FC = () => {
    const {currentLang} = useLanguageContext();
    return (
        <OtherSkillsWrapper>

            <Col>
                <Heading text={currentLang === 'pl' ? texts.other.title.pl : texts.other.title.en} />
                <Ul>
                    {
                        currentLang === 'pl' ? 
                        texts.other.items.pl.map(tech => <Li key={tech}>{tech}</Li>) 
                        :
                        texts.other.items.en.map(tech => <Li key={tech}>{tech}</Li>) 
                    }
                    
                </Ul>
            </Col>
             <Col>
                <ImgWrapper>
                    <PistacioBlock />

                    <Image
                        src={img}
                        alt={currentLang === 'pl' ? texts.other.title.pl : texts.other.title.en}
                        width={430}
                        height={430}
                    />

                </ImgWrapper>
            </Col>
           
           
        </OtherSkillsWrapper>
    )
}

const OtherSkillsWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 50px;
    padding-top: 50px;
    padding-bottom: 20px;

    @media ${device.laptop} {
        margin-top: 100px;
    }
`
const Col = styled.div`

    width: 50%;
    padding-right: 5%;

    &:first-child {
        padding-left: 5%;
    }

    @media ${device.laptop} {
        &:last-child {
            order: -1;
        }
        padding: 0;
       
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

const PistacioBlock = styled.div`

    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.pistacio};
    position: absolute;
    bottom: -10px;
    right: -10px;

    @media ${device.laptop} {
        display: none;
    }

`