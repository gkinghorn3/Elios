import {Link} from 'react-scroll';


import './nav.scss'


const Nav = () => {

    return (
        <nav>
            <div className='nav-link-container'>
                <a href='https://elios.covergenie.uk/booking/elios-edinburgh' target='blank'>BOOK</a>
            </div>
            <div className='nav-link-container'>
                <Link to='menu' smooth={true} duration={1000}>MENU</Link>
            </div>
            <div className='nav-link-container'>
                <Link to='find-us' smooth={true} duration={1000}>FIND US</Link>
            </div >
            
            
            
        </nav>
    )
}

export default Nav;