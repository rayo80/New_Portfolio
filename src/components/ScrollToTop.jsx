import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const ScrollToTop = () => {
    const {pathname} =useLocation();

    const arriba = () => {
        window.scrollTo(0,0);
    }
    useEffect(arriba,[pathname]);

    return null;
}
 
export default ScrollToTop;