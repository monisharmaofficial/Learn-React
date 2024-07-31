import { LOGO_URL } from "../utils/constant";


const Header = () => {
    return(
        <div className="header">

            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>

            <div className="nav-itmes">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Cart</li>
                    <li>Help</li>
                    <li>Sign In</li>
                </ul>  
            </div>

        </div>
    )
}

export default Header;