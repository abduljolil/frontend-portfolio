 
import FrontendSkill from "../../components/FrontendSkill";
import OtherSkill from "../../components/Other";
import TitleSection from "../shared/TItleSection";

 
 

 

const Skills = () => {
    return (
        <div>
            <TitleSection title='My Skills'></TitleSection>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
            <FrontendSkill></FrontendSkill>  
             <OtherSkill></OtherSkill>
            </div>

        </div>
    );
};

export default Skills;