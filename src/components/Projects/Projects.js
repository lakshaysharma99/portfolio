import './Projects.css'
import gpt from '../../assets/modernsite.png'
import vid from '../../assets/dip-final-lakshay-short.webm';
import ipl from '../../assets/ipl.png'

const Projects = () => {
    return(
        <div  id='project' className='project_section'>
            <br></br>    
            <h1>Projects</h1>
            <div className='projects'>
                <div className='project_card'>
                    <div className='card-image'>
                        <a href='http://zygomorphous-confus.000webhostapp.com/#wgpt3'><img src={gpt} alt='modern-site' /></a>
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
                        <h3>Hand Gesture Controller</h3>
                        <ul>
                            <li>Hand Gesture Contoller made using Python.</li>
                            <li>Used Python libraries like Numpy, PyAutoGUI, OpenCV.</li>
                            <li>The image is captured from the camera and hand gesture are tracked to control the game.</li>
                        </ul>
                    </div>
                </div>
                <div className='project_card'>
                <div className='card-image'>
                        <a href='https://github.com/lakshaysharma99/EDA-IPL'><img src={ipl} alt='modern-site' /></a>
                    </div>
                    <div className='card-text'>
                        <h3>EDA on IPL Data</h3>
                        <ul>
                            <li>Exploratory data analysis on IPL dataset.</li>
                            <li>Used Python and its libraries, Numpy, Padas, MatPlotLib.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;