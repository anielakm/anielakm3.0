import { SocialMedia } from "types/sm"
import styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from "next/link"

interface SocialMediaProps {
    sm: SocialMedia
    big: boolean
}

interface SMProps {
    big: boolean
}

export const SocialMediaItem: React.FC<SocialMediaProps> = ({sm, big}) => {
    return (
        <SMItem big={big}>
            {sm.name === 'github' ? <Link href={sm.path}><a target="_blank" ><AiFillGithub /></a></Link> : <Link href={sm.path}><a target="_blank" ><AiFillLinkedin /></a></Link> }
        </SMItem>
    )
}

const SMItem = styled.li<SMProps>`

    svg {
        font-size: ${({big}) => big ? '30px' : '20px'};
    }

`