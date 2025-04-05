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
                <p>With strong experience in React.js and Magento. I specialize in building clean, responsive, and high-performance user interfaces. 
                    I’m passionate about creating seamless user experiences and always stay updated with the latest trends in web development.</p>
                <Button label='Resume' href="/mohamed-vasim-resume.pdf" />
                </div>
        </div>
    )
}

export default Home