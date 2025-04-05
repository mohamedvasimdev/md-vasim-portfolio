const experiences = [
    {
        icons : "fa fa-code",
        year: "2020",
        status: "Ongoing",
        position: "Software Developer",
        company: "Echidna",
        shortDescription: "Working as a Magento and React developer at Echidna, building dynamic ecommerce frontends.Responsible for integrating Magento GraphQL with React to deliver seamless user experiences..",
    },
    {   
        icons : "fa fa-code",
        year: "2019 to 2021",
        status: "Completed",
        position: "Web Developer",
        company: "Zinavo",
        shortDescription: "Worked as a Magento developer at Zinavo, developing and customizing ecommerce websites. Handled theme development, module integration, and performance optimization..",
    }
];

const educations = [
    {   
        icons : "fa fa-car",
        year: "2015 to 2019",
        status: "Completed",
        position: "B.E. CSE",
        company: "MIET Engineering College",
        shortDescription: "Completed B.E. in Computer Science and Engineering from 2015 to 2019, gaining a strong foundation in programming, data structures, and software development..",
    },
    {
        icons : "fa fa-car",
        year: "2014 to 2015",
        status: "Completed",
        position: "HSC",
        company: "SFS Mat. HR. Sec.",
        shortDescription: "Completed Higher Secondary Education (HSC) in 2015 with a focus on Mathematics and Computer Science. Developed a strong interest in fundamentals of programming..",
    }
];

const Education = () => {
    return (
        <>
        {console.log(experiences)}
            {/* Experience */}
            <h3>Experience & Education</h3>
                <div className="expertise-section">
                    <div className="experience-expertise-section">
                        {experiences.map((values: any) => {
                            return (
                                <div className="detail-box">
                                    <span className="icons"><i className={values.icons}></i></span>
                                    <h5>{values.year} - {values.status}</h5>
                                    <h4>{values.position}<span className="company-name"> - {values.company}</span></h4>
                                    <p>{values.shortDescription}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="education-experience-section">
                        <div className="experience-section">
                            {educations.map((values: any) => {
                                return (
                                    <div className="detail-box">
                                        <span className="icons"><i className={values.icons}></i></span>
                                        <h5>{values.year} - {values.status}</h5>
                                        <h4>{values.position}<span className="company-name"> - {values.company}</span></h4>
                                        <p>{values.shortDescription}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>   
        </>
    )
}

export default Education

