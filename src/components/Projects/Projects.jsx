
import './Projects.css'
import css from '../../assets/css-3.png'
import educity from '../../assets/educity.png'

function Projects() {
  return (
    <div className='container'>
      <div className="projects">
        <h1>PROJECTS</h1>
        <div className="pro-con">
        <div className="pro-box">
                <a href="https://rajurao1107.github.io/Educity/">
                <div className="link">
                <div className="pro-image"><img src={educity} alt="" /></div>
                <div className="pro-details">
                    <div className="text">
                    <p>Click here to visit</p>
                    <h2>Educity Website</h2>
                    </div>
                </div>
                </div>
                </a>
            </div>
            <div className="pro-box">
                <a href="http://localhost:3000">
                <div className="link">
                <div className="pro-image"><img src={css} alt="" /></div>
                <div className="pro-details">
                <div className="text">
                    <p>Click here to visit</p>
                    <h2>CSS TUTORIAL</h2>
                    </div>
                </div>
                </div>
                </a>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Projects
