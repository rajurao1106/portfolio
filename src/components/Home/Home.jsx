
import './Home.css'
import raju from '../../assets/raju.jpg'

const Home = () => {
  return (
    <div className='container'>
      <section>
        <div className="image"><img src={raju} alt=""/></div>
        <div className="heading"><h1>I do code and<br/>
        make content about it!</h1></div>
        <div className="paragraph"><p>Experienced Frontend Web Developer with 3 years of expertise in designing and implementing user-friendly, responsive web interfaces. Proficient in HTML, CSS, JavaScript, and modern frontend framework like React. Adept at collaborating with cross-functional teams to deliver high-quality web solutions. Strong problem-solving skills and a passion for creating seamless user experiences.</p></div>
        <div className="btns"><a href="https://www.linkedin.com/in/raju-rao?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><button>Linkedin Profile</button></a> <a href="https://drive.google.com/drive/folders/1C55oyP3muoDAfhOok0C5Kjj3Q6IvP-Fa"><button>Download CV</button></a></div>
      </section>
    </div>
  );
}

export default Home;
