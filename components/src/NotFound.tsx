import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <>
            <h1>Error 404 - Page Not Fount</h1>
            <Link to='/'>Back to Home</Link>
        </>
    )
}

export default NotFound;