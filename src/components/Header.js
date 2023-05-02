import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import Logo from '../assets/img/logo.jpg'

const Title = ()=>{
    return(
        <div>
            <Link to='/'>
                <img data-testid='logo' src={Logo} alt="food villa logo" className='h-24 ml-3 p-2'/>
            </Link>
        </div>
    )
}

const Header = ()=>{
    const cartItems = useSelector(store=>store.cart.items);

    return (
        <div className='flex justify-between bg-pink-50 shadow-lg'>
        <Title/>
        <div className='flex items-center'>
        <ul className='flex'>
            <li className='mx-2 font-bold text-lg hover:bg-pink-200 px-4 py-3 rounded-xl active:bg-pink-200'><Link to='/'>Home</Link></li>
            <li className='mx-2 font-bold text-lg hover:bg-pink-200 px-4 py-3 rounded-xl'><Link to='/about'>About</Link></li>
            <li className='mx-2 font-bold text-lg hover:bg-pink-200 px-4 py-3 rounded-xl'><Link to='/contact'>Contact</Link></li>
            <li className='mx-2 font-bold text-lg hover:bg-pink-200 px-4 py-3 rounded-xl'><Link to='/instamart'>Instamart</Link></li>
            <li className='mx-2 font-bold text-lg hover:bg-pink-200 px-4 py-3 rounded-xl'><Link to='/cart' data-testid="cart">Cart- {cartItems.length} items</Link></li>
        </ul>
        </div>
    </div>
    );
};

export default Header;