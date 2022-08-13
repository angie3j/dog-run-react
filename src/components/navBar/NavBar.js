import { Link } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {

    return(
        <>
        <nav className='NavBar'>
        {/* <div className='logo'>
            <Link to='/'>

            </Link>
        </div> */}

        <div className='links'>

             <ul>
                <Link to='/events'>Events</Link>
            </ul>

            <ul>
                <Link to='/breeds'>Dog Breeds</Link>
            </ul>

            <ul>
                <Link to='/shop'>Shop</Link>
            </ul>

            <ul>
                <Link to='/signin'>Sign In</Link>
            </ul>

            <ul>
                <Link to='/about'>About Us</Link>
            </ul>

        </div>

        </nav>
        </>
    )

}

export default NavBar; 