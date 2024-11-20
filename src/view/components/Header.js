import '../assets/css/Header.css'
import { useState, useRef, useEffect } from 'react';
import { MdMenu } from "react-icons/md"
import { Link } from 'react-router-dom'

const Header = ({ title, onUserSigningOut, linkTitle, linkPath }) => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="back-header">
            <div className="header">
                <div ref={menuRef}>
                    <button className='menu-button' onClick={() => setIsOpen(!isOpen)}><MdMenu className='md-menu'/></button>
                    <nav className={`menu ${isOpen ? 'active' : ''}`}>
                        <ul className='menu-list'>
                            <li className='menu-item'> <Link className='link-item' to={linkPath}>{linkTitle}</Link></li>
                        </ul>
                    </nav>
                    </div>

                <h1>{title}</h1>

                <button className='signout-button' onClick={onUserSigningOut}>Sign Out</button>
            </div>
        </div>
    )
}
export default Header