import esen from './img/esen.jpeg';
import './header.css'

function Header() {
    return(
        <div className='header-container'>
                <img src={esen} alt="Picture of Esen"/>
            <p className='fullname'>Esengül Yildirim</p>
            <p className='title'>Web Developer student</p>
            <p className='website'>esengul.website</p>
        </div>
    )
}

export default Header;