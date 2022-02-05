import esen from './img/esen.jpeg';
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return(
        <div className='header-container'>
            <img src={esen} alt="Picture of Esen"/>
            <div className="headers">
                <p className='fullname'>Esengül Yildirim</p>
                <p className='title'>Web Developer student</p>
                <p className='website'>esengul.website</p>
            </div>
        </div>
    )
}

export default Header;