import './Projects.css'
import gpt from '../../assets/modernsite.png'
import vid from '../../assets/dip-final-lakshay-short.webm';

const Projects = () => {
    return(
        <div  id='project' className='project_section'>
            <br></br>    
            <h1>Projects</h1>
            <div className='projects'>
                <div className='project_card'>
                    <div className='card-image'>
                        <img src={gpt} alt='modern-site' />
                    </div>
                    <div className='card-text'>
                        <h3>Modern UI Frontend</h3>
                        <ul>
                            <li>A landing page created using ReactJS.</li>
                            <li>Used CSS gradients to give an aesthetic look to the site.</li>
                            <li>Used CSS media quesries to make the site responsive.</li>
                        </ul>
                    </div>
                </div>
                <div className='project_card'>
                    <div className='card-image'>
                    <video controls="controls">
                        <source src={vid} type="video/webm" />
                    </video>
                    </div>
                    <div className='card-text'>
                        <h3>Modern UI Frontend</h3>
                    </div>
                </div>
                <div className='project_card'>baz</div>
            </div>
        </div>
    )
}

export default Projects;