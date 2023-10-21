import {Link} from 'react-router-dom';

export default function TopSection() {
    return(
    <div classname='topSection'>
        <h1>Welcome to Little Lemon</h1>
        <p>We are a family owned Mediterranean restaurant, 
        focused on traditional recipes served with a modern twist.
        </p>
        <Link to='/reservations'><button> Reseve a Table</button> </Link>
    </div>
    )
}