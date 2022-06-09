import { LangItem } from "components/atoms/LangItem/LangItem";
import React from "react";
import styled from 'styled-components'
import { Languages } from "types/languages";

interface LangProps {
    languages: Languages[]
}

export const LangSwitcher: React.FC<LangProps> = ({languages}) => {
    return (
        <LangWrapper>
            {languages.map(lang => <LangItem key={lang.name} lang={lang} />)}
        </LangWrapper>
    )
}

const LangWrapper = styled.ul`

    display: flex;
    gap: 5px;
    font-size: ${({theme}) => theme.fontSizes.nav};

    li {

        &:after {
            content: '|';
            margin-left: 5px;
        }

        &:last-child:after {
            content: ''
        }
    }

`