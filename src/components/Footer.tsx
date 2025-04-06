const socialData = [
    {
        url: 'https://linkedin.com/in/mohamed-vasim',
        icon : 'fa fa-linkedin'
    },
    {
        url: 'mailto:mohamedvasimdev@gmail.com',
        icon : 'fa fa-envelope'
    },
    {
        url: 'https://github.com/mohamedvasimdev',
        icon : 'fa fa-github'
    },
]
const Footer = () => {
    return <>
    <footer className="footer">
        <ul className="socialLinks">
            {socialData.map(value => {
                return <>
                    <li><a href={value.url} target="_blank"><i className={value.icon}></i></a></li>
                </>
            })}
        </ul>
    </footer>
    </>
}

export default Footer;