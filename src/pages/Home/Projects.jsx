 
 
import ProjectCard from '../../components/ProjectCard';
import ProjectFood from '../../components/ProjectFood';
import ProjectHotel from '../../components/ProjectHotel';
import TitleSection from './../shared/TItleSection';

 

const  Projects = () => {
    return (
        <div>
            <TitleSection title=' My Projects'></TitleSection>
           <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <ProjectFood></ProjectFood>
           <ProjectCard></ProjectCard>
            <ProjectHotel></ProjectHotel>
         
           </div>
        </div>
    );
};

export default Projects;