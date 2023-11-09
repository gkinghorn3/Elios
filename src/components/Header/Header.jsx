import './header.styles.scss';

const Header = () => {

 return (
    <header className='flex'>
      
        <div className='logo-container'>
            <img src='/images/logo-main.png' alt="Elios logo" className='logo'/>
        </div>
        <img src='/icons/down-icon.svg' className='down-icon'/>
    </header>
 )

}


export default Header;