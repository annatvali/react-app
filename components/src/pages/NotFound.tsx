import CSS from 'csstype';
import ImgNotFound from '../assets/404.png';

const NotFountStyle: CSS.Properties = {
    position: 'absolute',
    maxWidth: '100%'

}

export default function NotFound() {
    return <img src={ImgNotFound} style={NotFountStyle} alt='Page Not Found' />
}