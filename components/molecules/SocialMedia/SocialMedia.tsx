import { SocialMedia } from "types/sm"
import styled from 'styled-components'
import { SocialMediaItem } from "components/atoms/SocialMediaItem/SocialMediItem"

interface SMProps {
    sm: SocialMedia[]
    big?: boolean
}

export const SocialMediaList: React.FC<SMProps> = ({sm, big = false}) => {
    return (
        <SMWrapper>
            {sm.map(item => <SocialMediaItem sm={item} key={item.name} big={big} />)}
        </SMWrapper>
    )
}

const SMWrapper = styled.ul`

    display: flex;
    gap: 10px;

`