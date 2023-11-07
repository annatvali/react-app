// import { useContext } from 'react';
// import Context from './Context';
import logo from '../assets/Star_Wars_Logo.svg'

export default function Header () {

    // const ItemDetails = useContext(Context);

    const Logo = () => {
        return (
            <img src={logo} style={{height: 48, padding: 16 }} alt="Star Wars Logo" />
        )
    }
    return (
        <>
            <Logo />
        </>
    )
}