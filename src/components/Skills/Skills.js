import './Skills.css'
import javascript from '../../assets/javascript.png';
import html from '../../assets/html.svg';
import python from '../../assets/python.png';
import css from '../../assets/css.png';
import react from '../../assets/react.png';
import git from '../../assets/git.png';

const Skills = () => {
    return(
        <div className='skills' id='skill'>
            <br></br>
            <h1>Skills</h1>
            <div className='skill_images'>
                <img src={python} />
                <img src={javascript} />
                <img src={react} />
                <img src={html} />
                <img src={css} />
                <img src={git} />
            </div>
        </div>
    )
}

export default Skills;