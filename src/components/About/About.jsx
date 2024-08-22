import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState})=>{
    return(
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Education must be barrier free in both physical and virtual spaces. Edusity's tools are fully-accessible and compliant with international standards.</p>
                <p>Everyone, everywhere has the right to access education. Edusity's mission is to overcome whatever obstacles individuals, communities and societies may encounter on the path to growing and sharing humanity's knowledge.</p>
                <p>Edusity and the Babb Group, a leading academic consultancy focused on online curriculum development and professor recruitment, formed a strategic merger in February 2022.</p>
            </div>
        </div>
    )
}

export default About