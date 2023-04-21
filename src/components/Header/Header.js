import './Header.css';
import lakshay from '../../assets/Lakshay_new.png'
import Typewriter from 'typewriter-effect';
import javascript from '../../assets/javascript.png';
import html from '../../assets/html.svg';
import python from '../../assets/python.png';
import css from '../../assets/css.png';
import react from '../../assets/react.png';
import git from '../../assets/git.png';


const Header = () => {
    return(
        <div id='home' className="header">
            <div className="app-header">
                <div className='header-img'>
                    <div className='main_image'><img src={lakshay}/></div>
                    
                    <div className='skill_images'>
                        <span><h2>Tech Stack</h2> 
                        <img src={python} />
                        <img src={javascript} />
                        <img src={react} />
                        <img src={html} />
                        <img src={css} />
                        <img src={git} /></span>
                    </div>
                </div>
                <div className='header-about'>
                    <h1>💻 FRONT-END DEVELOPER</h1>
                    <p>👋 Hi, I am Lakshay Sharma. A front-end react developer based in Kurukshetra, Haryana.</p>        
                </div>
            </div>
        </div>
    )
}

export default Header