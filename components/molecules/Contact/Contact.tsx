import { device } from "assets/device"
import { Button } from "components/atoms/Button/Button"
import { Heading } from "components/atoms/Heading/Heading"
import { useLanguageContext } from "context/languageContext"
import { texts } from "data/texts"
import styled from "styled-components"
import image from 'assets/images/akm5.jpg'
import Image from "next/image"

export const Contact: React.FC = () => {
    const {currentLang} = useLanguageContext()
    return (
        <ContactWrapper data-aos="fade-up" id="contact">
            <Heading text={currentLang==='pl' ? texts.contact.pl : texts.contact.en} big />
            <Button text="kontakt@anielakm.pl" link="mailto:kontakt@anielakm.pl" light />

            <ImgWrapper>
                <Image
                    src={image}
                    layout="fill"
                    alt="Contact AKM"
                    objectFit="cover"
                    objectPosition="top"
                    quality={100}
                    loading="lazy"
                />
            </ImgWrapper>
        </ContactWrapper>
    )
}

const ContactWrapper = styled.div`

    margin-top: -100px;
    padding-top: 200px;
    text-align: center;

    >*:first-child {
        margin-bottom: 35px;
    }

`

const ImgWrapper = styled.header`

    margin-top: 100px;
    width: 100%;
    position: relative;
    height: 60vw;

    @media ${device.mobile} {
        height: 47vw;
    }

`
