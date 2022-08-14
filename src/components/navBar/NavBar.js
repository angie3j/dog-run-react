import { Link } from 'react-router-dom';
import styles from "./NavBar.scss";

import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseSquare } from 'react-icons/ai';


const NavBar = () => {

    return(
        <div className={styles.header}>
            <div className={styles.header__content}>

                <div>
                    <span className={styles.logo}>Crotona Park Community Dog Run</span>
                </div>

                <div>
                <nav className='nav'>
                {/* <div className='logo'>
                    <Link to='/'>

                    </Link>
                </div> */}

                    <ul className={styles.nav__item}>
                        <Link to='/events'>Events</Link>
                    </ul>

                    <ul className={styles.nav__item}>
                        <Link to='/breeds'>Dog Breeds</Link>
                    </ul>

                    <ul className={styles.nav__item}>
                        <Link to='/shop'>Shop</Link>
                    </ul>

                    <ul className={styles.nav__item}>
                        <Link to='/signin'>Sign In</Link>
                    </ul>

                    <ul className={styles.nav__item}>
                        <Link to='/about'>About Us</Link>
                    </ul>

                    <div className={styles.nav__button}>
                    </div>

                </nav>
                </div>

                <div>
                    <div className={styles.header__button}></div>
                    <button className={styles.header__toggler}></button>
                </div>
            </div>
        </div>
    )
}

const Button = () => {
    return <button className={styles.button}>Button</button>
}
export default NavBar; 