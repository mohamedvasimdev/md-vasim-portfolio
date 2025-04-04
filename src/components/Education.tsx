const experiences = [
    {
        icons : "fa fa-code",
        year: "2020",
        status: "Completed",
        position: "Frontend Developer",
        company: "TechCorp",
        shortDescription: "Worked on building responsive web applications.",
    },
    {   
        icons : "fa fa-code",
        year: "2021",
        status: "Ongoing",
        position: "React Developer",
        company: "WebDev Inc.",
        shortDescription: "Developing scalable React components and features.",
    },
    {   
        icons : "fa fa-code",
        year: "2021",
        status: "Ongoing",
        position: "React Developer",
        company: "WebDev Inc.",
        shortDescription: "Developing scalable React components and features.",
    },
];

const educations = [
    {   
        icons : "fa fa-car",
        year: "2020",
        status: "Completed",
        position: "Frontend Developer",
        company: "TechCorp",
        shortDescription: "Worked on building responsive web applications.",
    },
    {
        icons : "fa fa-car",
        year: "2021",
        status: "Ongoing",
        position: "React Developer",
        company: "WebDev Inc.",
        shortDescription: "Developing scalable React components and features.",
    },
    {
        icons : "fa fa-car",
        year: "2021",
        status: "Ongoing",
        position: "React Developer",
        company: "WebDev Inc.",
        shortDescription: "Developing scalable React components and features.",
    },
];

const Education = () => {
    return (
        <>
        {console.log(experiences)}
            {/* Experience */}
            <h3>Experience & Education</h3>
                <div className="expertise-section">
                    <div className="experience-section">
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
                    <div className="education-section">
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

