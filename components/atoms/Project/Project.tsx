import { device } from "assets/device";
import { Button } from "components/atoms/Button/Button";
import { useLanguageContext } from "context/languageContext";
import styled from "styled-components";
import { Project } from "types/project";

interface ProjectProps {
    project: Project
}

interface PIProps {
    image: string
}
export const ProjectItem: React.FC<ProjectProps> = ({project}) => {
    const {currentLang} = useLanguageContext();
    return (
        <ProjectItemWrapper image={project.photo.toLowerCase()} data-aos="fade-up">
           <ProjectDetails>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>{currentLang === 'pl' ? project.description.pl : project.description.en}</ProjectDescription>
                <Button text={currentLang === 'pl' ? 'przejdź na stronę' : 'visit page'} link={project.path} />
           </ProjectDetails>
        </ProjectItemWrapper>
        
    )
}


const ProjectItemWrapper = styled.div<PIProps>`

    background-image: ${({image}) => `url('/projects/${image}.png')`};
    background-size: cover;
    background-position: center top;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49vw;
    height: 49vw;

    @media ${device.mobileM} {
        height: 40vw;
    }
    

    @media ${device.tablet} {
        width: calc(50% - 5px);
        height: 25vw;
        min-height: 300px;

    }

    &:hover > div {
        opacity: 1;
    }

`

const ProjectDetails = styled.div`

    width: 90%;
    height: 85%;
    background-color: rgba(255,255,255,.85);
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0;
    transition: all .3s;

`

const ProjectTitle = styled.h3`
    
`
const ProjectDescription = styled.p`

    margin: 20px 0 30px;
    font-size: ${({theme}) => theme.fontSizes.body3};
    line-height: ${({theme}) => theme.fontSizes.headline4};

`