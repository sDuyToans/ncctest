import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';

const Header = () => {
    return (
        <div className='header-container'>
            <Logo/>
        </div>
    )
}

export default Header;