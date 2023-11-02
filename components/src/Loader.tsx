import { Component } from 'react';
import Loader from './assets/loader.gif';

export default class LoaderImg extends Component {
    render() {
        return(
            <img src={Loader} alt='Loading...' />
        )
    }
}
