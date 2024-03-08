 
import BrandShopCard from '../../components/BrandShopCard';
import ProjectCard from '../../components/ProjectCard';
import ProjectHotel from '../../components/ProjectHotel';
import TitleSection from './../shared/TItleSection';

 

const  Projects = () => {
    return (
        <div>
            <TitleSection title=' My Projects'></TitleSection>
           <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
           <ProjectCard></ProjectCard>
            <ProjectHotel></ProjectHotel>
            <BrandShopCard></BrandShopCard>
           </div>
        </div>
    );
};

export default Projects;