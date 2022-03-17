import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
    const [active,setActive] = useState('About');
    useEffect(() => {
        let currentURL = window.location.href;
        if(currentURL.endsWith('/') || currentURL.endsWith('/about'))
            setActive('About');
        else if(currentURL.endsWith('/projects'))
            setActive('Projects');
        else if(currentURL.endsWith('/skills'))
            setActive('Skills');
        else if(currentURL.endsWith('/profile'))
            setActive('Profile');
    },[active])

    const navbar_variant = {
        hidden : {
            y : '-30vh',
            opacity : 0
        },
        visible : {
            y : 0,
            opacity : 1
        }
    }

    return (
        <nav className="app__navbar">
            <motion.div className="navbar"
            variants={navbar_variant}
            initial='hidden'
            animate='visible'
        >
            <div className="active">
                {active}
            </div>
            <div className="navbar__items">
                {active !== 'About' &&
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <div className="navbar__item" onClick={() => setActive('About')}>About</div>
                    </Link>
                }
                {active !== 'Projects' &&
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <div className="navbar__item" onClick={() => setActive('Projects')}>Projects</div>
                    </Link>
                }
                {active !== 'Skills' &&
                    <Link to="/skills" style={{ textDecoration: 'none' }}>
                        <div className="navbar__item" onClick={() => setActive('Skills')}>Skills</div>
                    </Link>
                }
                {active !== 'Profile' &&
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                        <div className="navbar__item" onClick={() => setActive('Profile')}>Profile</div>
                    </Link>
                }
            </div>
        </motion.div>
                
        </nav>
    );
}

export default Navbar;