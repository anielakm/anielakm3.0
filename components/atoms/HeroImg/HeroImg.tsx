import Image from "next/image"
import styled from "styled-components"
import image from 'assets/images/akm-hero.jpg'
import { device } from "assets/device"

export const HeroImg:React.FC = () => {
    return (

        <ImgWrapper>
            <Image 
                src={image}
                layout="intrinsic"
                alt="Picture"
                objectFit="cover"
                quality={100}
                loading="lazy"
            />
        </ImgWrapper>

    )
}

const ImgWrapper = styled.header`

    width: 100%;
    position: relative;

    @media ${device.mobile} {
        width: 55%;
    }

    @media ${device.tablet} {
        width: 50%;
    }

`
