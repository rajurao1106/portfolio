
import './Exprience.css'
import html from '../../assets/html-5.png'
import css from '../../assets/css-3.png'
import javascript from '../../assets/js.png'
import react from '../../assets/react.png'
import python from '../../assets/python.png'


const Exprience = () => {
  return (
    <div className='container2'>
      <div className="exprience">
        <h1>EXPERIENCE WITH</h1>
        <div className="language">
          <img src={html} alt="" />
          <img src={css} alt="" />
          <img src={javascript} alt="" />
          <img src={react} alt="" />
          <img src={python} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Exprience