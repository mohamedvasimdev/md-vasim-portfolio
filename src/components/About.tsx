import Education from "./Education";

const About = () => {
    const skillSet = [
        {id: 1, skillName: 'HTML5', SkillPerentage: 95},
        {id: 2, skillName: 'CSS3', SkillPerentage: 95},
        {id: 2, skillName: 'LESS', SkillPerentage: 90},
        {id: 3, skillName: 'JavaScript', SkillPerentage: 70},
        {id: 4, skillName: 'Magento 2', SkillPerentage: 70},
        {id: 4, skillName: 'GraphQL', SkillPerentage: 60},
    ]
    return (
        <>
            <div id="about" className="about-section">
                {/* Skills Section */}
                <div className="skills-section">
                    <h1>About <span className="highligh-color">Me</span></h1>
                    <h3>My Skills</h3>
                    <div className="progressBar">
                    {skillSet.map(value => {
                       return <>
                        <div className="progressBarIndividual">
                            <div className="skillWrapper">
                                <div className="skillsTitle">{value.skillName}</div>
                                <div className="countPercentage">{value.SkillPerentage}%</div>
                            </div>
                            <div className="progressLine">
                                <div className="progressInlineLine" style={{width:`${value.SkillPerentage}%`}}></div>
                            </div>
                        </div>
                        </> 
                    })}
                    </div>
                </div>   
                <Education />   
            </div>
        </>
    )
}

export default About