import Education from "./Education";

const About = () => {
    // const skillPercentage = [95, 70, 75];
    // const skillName = ['HTML', 'CSS', 'JavaScript']
    // const clipValue = ["0px, 100px, 50px, 50px", "0px, 50px, 40px, 50px", "0px, 90px, 80px, 50px"]
    const skillSet = [
        {id: 1, skillName: 'HTML', SkillPerentage: 95},
        {id: 2, skillName: 'CSS', SkillPerentage: 85},
        {id: 3, skillName: 'JavaScript', SkillPerentage: 80},
        {id: 4, skillName: 'React JS', SkillPerentage: 80},
        {id: 4, skillName: 'Magento 2', SkillPerentage: 80},
        {id: 4, skillName: 'React JS', SkillPerentage: 60}
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