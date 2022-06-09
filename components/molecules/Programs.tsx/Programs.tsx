import styled from "styled-components"
import { texts } from "data/texts";
import { Heading } from "components/atoms/Heading/Heading";
import { useLanguageContext } from "context/languageContext";
import Image from "next/image";
import img from 'assets/images/akm3.jpg'
import { device } from "assets/device";
import { Li } from "components/atoms/Li/Li";

export const Programs: React.FC = () => {
    const {currentLang} = useLanguageContext();
    return (
        <ProgramsWrapper>
             <Col>
                <ImgWrapper>
                    <Image
                        src={img}
                        alt={currentLang === 'pl' ? texts.programs.title.pl : texts.programs.title.en}
                        width={430}
                        height={430}
                    />
                </ImgWrapper>
                <PistacioBlock />
            </Col>
            <Col>
                <Heading text={currentLang === 'pl' ? texts.programs.title.pl : texts.programs.title.en} />
                <Ul>
                    {
                        currentLang === 'pl' ? 
                        texts.programs.items.pl.map(tech => <Li key={tech}>{tech}</Li>) 
                        :
                        texts.programs.items.en.map(tech => <Li key={tech}>{tech}</Li>) 
                    }
                    
                </Ul>
            </Col>
           
        </ProgramsWrapper>
    )
}

const ProgramsWrapper = styled.div`
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
        padding: 0;
        
        &:first-child {
            padding: 0;
        }
        &:last-child {
            padding-left: 5%;
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

const PistacioBlock = styled.div`

    width: 90%;
    height: 8vw;
    background-color: ${({theme}) => theme.colors.pistacio};
    position: absolute;
    bottom: 0;
    left: 0;

    @media ${device.laptop} {
        display: none;
    }

`