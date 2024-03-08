import TitleSection from "../shared/TItleSection";

 

 

const About = () => {
    return (
      
    <div>
      <TitleSection title='About Me'></TitleSection>
            <div className="hero   bg-base-100">
        <div className="hero-content flex-col lg:flex-row-reverse  justify-center">
        <div className='lg:w-1/2'>
                 <h2 className="text-xl font-semibold">
                Experienced junior web developer proficient in HTML, CSS, React, JavaScript, MongoDB, Node.js, and Express. Skilled in creating dynamic, responsive web applications using React and Tailwind CSS. Strong problem-solving abilities, adaptability, and eagerness to learn. Seeking remote opportunities to contribute to innovative projects, collaborate with diverse teams, and enhance skills. Passionate about clean, efficient code and staying updated with industry trends. Ready to contribute to your company's success remotely.</h2>
            </div>
          <div className="lg:w-1/2"> <img src="https://i.postimg.cc/pdpMJg5k/person-front-computer-working-html-23-2150040428.jpg" className=" w-full rounded- shadow-2xl" /></div>
           
          
        </div>
    </div>
    </div>
    );
};

export default About;