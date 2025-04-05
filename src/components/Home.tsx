import Button from './Button'

const Home = () => {
    return (
        <div id="home" className="home-section">
            <div className="profile img">
                <div className='bg-design'></div>
                <img src="images/profile-img.jpg" />
            </div>
            <div className="profile content">
                <h1>I'm Mohamed Vasim. <span>Web Developer</span></h1>
                <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, 
                I am passionate about building excellent software that improves the lives of those around me</p>
                <Button label='About Me' href="about" />
                </div>
        </div>
    )
}

export default Home