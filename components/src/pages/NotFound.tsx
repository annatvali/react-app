import CSS from 'csstype';
import ImgNotFound from '../assets/404.png';

const NotFountStyle: CSS.Properties = {
    position: 'absolute',
    maxWidth: '80%',
    zIndex: '-1'

}

export default function NotFound() {
    return (
        <>
            <img src={ImgNotFound} style={NotFountStyle} alt='Page Not Found' />
        </>
    )
}