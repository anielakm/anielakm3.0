import { device } from "assets/device"
import { ProjectItem } from "components/atoms/Project/Project"
import styled from "styled-components"
import { Project } from "types/project"

interface ProjectListProps {
    projects: Array<Project>
}

export const ProjectList: React.FC<ProjectListProps> = ({projects}) => {

    return (
        <ProjectListWrapper>
           {projects.map(item => <ProjectItem project={item} />)}
        </ProjectListWrapper>
    )
}


const ProjectListWrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 2vw;
    margin-top: 50px;

    @media ${device.tablet} {
        gap: 10px;
        margin-top: 100px;
    }

`