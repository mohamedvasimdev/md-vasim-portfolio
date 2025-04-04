function Header() {

    const navListItems = [
        {
            menuTitle: 'Home',
            icons: 'fa fa-home'
        },
        {
            menuTitle: 'About',
            icons: 'fa fa-user'
        },
        {
            menuTitle: 'Projects',
            icons: 'fa fa-folder-open'
        },
        {
            menuTitle: 'Contact',
            icons: 'fa fa-comments'
        }
    ]

    return ( 
        <>
            <header>
                <nav>
                    <ul>
                        {navListItems.map((items) => {
                            return <>
                            <li key={items.menuTitle}>
                                <a href={`#${items.menuTitle.toLowerCase()}`}>
                                    <div className="menu-icons"><i className={items.icons}></i></div>
                                    <div className="menuTitle">{items.menuTitle}</div>
                                </a>
                            </li>
                            </>
                        })}
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;