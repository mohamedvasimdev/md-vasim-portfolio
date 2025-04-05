
const projectData = [
    {
        images: 'portfolio.png',
        title: 'Portfolio',
        content: 'My portfolio website was created to showcase my projects and skills, and its built using React with Vite, along with HTML and CSS for structure and styling.',
        websiteUrl: 'https://mohamedvasimdev.github.io/md-vasim-portfolio/'
    },
    {
        images: 'jessup.png',
        title: 'Jessup Manufacturing',
        content: 'Magento 2 ecommerce project, focusing on enhancing the user interface (UI) and improving the overall shopping experience. Implemented major UI changes, customized themes, and optimized the ecommerce flow, including product listing, cart, checkout, and account management. Integrated third-party extensions and ensured a responsive and user-friendly design.',
        websiteUrl: 'https://www.jessupmfg.com/'
    },
    {
        images: 'continentalbattery.png',
        title: 'Continental Battery',
        content: 'This Magento 2 project was developed with support for a multi-store setup, handling around 10 individual stores under a single installation. Additionally, a custom Store Locator feature was implemented, enabling users to easily find nearby store locations based on their region or preferences.',
        websiteUrl: 'https://www.continentalbattery.com/'
    },
    {
        images: 'frontpointsecurity.png',
        title: 'Frontpointsecurity',
        content: 'FrontPoint is a robust e-commerce platform developed using Magento 2, specifically designed for selling CCTV cameras with extensive customization options. The project emphasizes flexibility, allowing customers to configure their security systems according to their specific needs.',
        websiteUrl: 'https://www.frontpointsecurity.com/'
    },
    {
        images: '3prosolution.png',
        title: '3prosolution',
        content: 'The 3ProSolution website was developed using WordPress with a fully custom theme tailored to the client branding and business needs. The project was built with a combination of PHP, HTML, and CSS, ensuring a responsive and user-friendly interface.',
        websiteUrl: 'https://www.3prosolutions.com/'
    },
    {
        images: 'blendedlearning.png',
        title: 'Blended Learning',
        content: 'Blended Learning is an e-learning website developed using WordPress, designed to offer a smooth and engaging learning experience. The platform allows users to purchase and access online courses and is integrated with a third-party plugin to connect with a CRM system for fetching and managing user data.',
        websiteUrl: 'https://www.blendedlearning.sg/'
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
                                <img src={`images/${projectValue.images}`} width="100%" alt="images" />
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