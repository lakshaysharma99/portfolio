import './Header.css';
import lakshay from '../../assets/Lakshay_new.png'
import Typewriter from 'typewriter-effect';


const Header = () => {
    return(
        <div id='home' className="header">
            <div className="app-header">
                <div className='header-img'>
                <img src={lakshay}/>
                <h1>LAKSHAY SHARMA</h1>
                </div>
                <div className='header-about'>
                    {/* <Typewriter onInit={(typewriter) => {
                        typewriter.typeString('I am a final year student at NIT Kurukshetra. I am a Production Engineer by degree. And a CODER by passion. I am skilled in Python, JavaScript, ReactJS, HTML, CSS and Figma. I am also skilled in Data Analytics. I have tried various domains during 4 years of my college life.')
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString('I am a final year student at NIT Kurukshetra. I am a Production Engineer by degree. And a CODER by passion. I am skilled in Python, JavaScript, ReactJS, HTML, CSS and Figma. I am also skilled in Data Analytics. I have tried various domains during 4 years of my college life.')
                        .start();
                    }}
                    /> */}
                <p>
                I am a final year student at NIT Kurukshetra. I am a Production Engineer by degree. And a CODER by passion. I am skilled in Python, JavaScript, ReactJS, HTML, CSS and Figma. I am also skilled in Data Analytics. I have tried various domains during 4 years of my college life.
                </p>
                </div>
            </div>
        </div>
    )
}

export default Header