import { useLanguageContext } from "context/languageContext"
import styled from "styled-components"
import { Languages } from "types/languages"

interface LangProps {
    lang: Languages
}

interface LWProps {
    active: boolean
}

export const LangItem: React.FC<LangProps> = ({lang}) => {
    const { currentLang, setCurrentLang } = useLanguageContext()

    return (
        <LangWrapper active={currentLang === lang.name} onClick={()=>setCurrentLang(lang.name)}><span>{lang.name}</span></LangWrapper>
    )
}

const LangWrapper = styled.li<LWProps>`

    font-size: ${({theme}) => theme.fontSizes.lang};
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;

    span {
        opacity: ${({active}) => active ? 1 : 0.45};
    }

`