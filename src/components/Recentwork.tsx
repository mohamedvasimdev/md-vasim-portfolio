
const projectData = [
    {
        images: 'jessup.png',
        title: 'Jessup Manufacturing',
        content: 'Magento 2 ecommerce project, focusing on enhancing the user interface (UI) and improving the overall shopping experience. Implemented major UI changes, customized themes, and optimized the ecommerce flow, including product listing, cart, checkout, and account management. Integrated third-party extensions and ensured a responsive and user-friendly design.',
        websiteUrl: 'https://www.jessupmfg.com/'
    },
    {
        images: 'project.jpg',
        title: 'Document manager 1',
        content: 'This is the content inside the popup 2'
    },
    {
        images: 'project.jpg',
        title: 'Document manager 2',
        content: 'This is the content inside the popup 3'
    },
    {
        images: 'project.jpg',
        title: 'Document manager 2',
        content: 'This is the content inside the popup 3'
    },
    {
        images: 'project.jpg',
        title: 'Document manager 2',
        content: 'This is the content inside the popup 3'
    },
    {
        images: 'project.jpg',
        title: 'Document manager 2',
        content: 'This is the content inside the popup 3'
    }
]
const Recentwork = () => {
    return (
        <>
            <div id="projects" className="recent-work-section">
                <h1>My Recent <span className="highligh-color">Works</span></h1>
                <div className="card">
                    {projectData.map(projectValue => {
                        return <>
                            <div className="cardDetails">
                                <img src={`/src/assets/images/${projectValue.images}`} width="100%" alt="images" />
                                <div className="porjectDetails">
                                    <h4 className="cardName">{projectValue.title}</h4>
                                    <p className="cardContent">{projectValue.content}</p>
                                    <div className="websiteLink"><a href={projectValue.websiteUrl} target="_extend"><i className="fa fa-link"></i></a></div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
        </>
    );
} 

export default Recentwork