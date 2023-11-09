import {Link} from 'react-scroll';


import './nav.scss'


const Nav = () => {

    return (
        <nav>
            <div className='nav-link-container'>
                <a href='#'>BOOK</a>
            </div>
            <div className='nav-link-container'>
                <Link to='about' smooth={true} duration={1000}>MENU</Link>
            </div>
            <div className='nav-link-container'>
                <Link to='about' smooth={true} duration={1000}>FIND US</Link>
            </div >
            
            
            
        </nav>
    )
}

export default Nav;