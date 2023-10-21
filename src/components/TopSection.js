import {Link} from 'react-router-dom';

export default function TopSection() {
    return(
    <div classname='topSection'>
        <h1 className='topSectionH'>Welcome to Little Lemon</h1>
        <p className='topSectionP' >We are a family owned Mediterranean restaurant, 
        focused on traditional recipes served with a modern twist. <Link to='/reservations' className='text'><b>Reserve Your Table today.</b></Link> 
        </p>
    </div>
    )
}