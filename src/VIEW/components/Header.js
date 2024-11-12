import '../assets/css/Header.css'

const Header = ({ title, onUserSigningOut }) => {
    return (
        <div className="back-header">
            <div className="header">
                <h1>{title}</h1>

                <button className='signout-button' onClick={onUserSigningOut}>Sign Out</button>
            </div>
        </div>
    )
}
export default Header