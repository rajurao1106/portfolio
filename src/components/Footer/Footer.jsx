
import './Footer.css'
import instagram from '../../assets/instagram.png'
import youtube from '../../assets/youtube.png'
import facebook from '../../assets/facebook.png'

function Footer() {
  return (
    <div className='footer'>
      <footer>
        <h1>Contact us</h1>
        <p>Experienced Frontend Web Developer with 3 years of expertise in designing and implementing user-friendly, responsive web interfaces. Proficient in HTML, CSS, JavaScript, and modern frontend framework like React. Adept at collaborating with cross-functional teams to deliver high-quality web solutions. Strong problem-solving skills and a passion for creating seamless user experiences.</p>
        <p>rajurao1106@gmail.com</p>
         <div className="social">
            <a href="https://www.instagram.com/rajurao1107?igsh=MWJoc3JjZmN0bHFqeQ=="><img src={instagram} alt="" /></a>
            <a href="https://youtube.com/@webtech178?si=dqbyBzcTdY9xJ8Pr"><img src={youtube} alt="" /></a>
            <a href="https://www.facebook.com/profile.php?id=100035409559017"><img src={facebook} alt="" /> </a>
         </div>
      </footer>
    </div>
  )
}

export default Footer
