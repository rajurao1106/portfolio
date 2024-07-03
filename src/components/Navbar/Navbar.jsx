import { useEffect, useState } from 'react';
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);

  return (
    <div>
      <div className={`navbar ${sticky? 'dark-nav':''}`}>
        <div className="nav-con">
            <p>D Raju Rao</p>
            <div className="menu-con">
                <ul>
                  <li><Link to='container' smooth={true} offset={-260} duration={500}>Home</Link></li>
                  <li><Link to='exprience' smooth={true} offset={-260} duration={500}>Experience</Link></li>
                  <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
                  <li><Link to='footer' smooth={true} offset={-260} duration={500}>Contact us</Link></li>
                </ul>
            </div>
        </div>
      </div><br />
      
    </div>
  );
}

export default Navbar;
