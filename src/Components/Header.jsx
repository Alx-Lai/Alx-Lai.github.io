import "./Header.css";
import brand from '../Images/brand.png'
const Header = ()=>{
    return (
        <header className='header'>
            <a href='/'>
                <img src={brand}></img>
            </a>
        </header>
    )
}
export default Header;