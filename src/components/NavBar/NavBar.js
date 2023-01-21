import './NavBar.css';

const NavBar = () => {
    return(
        <div className="navbar">
            <p><a href='#home'>Home</a></p>
            <p><a href='#skill'>Skills</a></p>
            <p><a href='#project'>Projects</a></p>
            {/* <p><a href='#features'>Case Studies</a></p> */}
            {/* <p><a href='#blog'>Library</a></p> */}
        </div>
    )
}

export default NavBar