import { Link } from 'react-router-dom';

export default function NavLink({ children, to }){
  return(
    <Link to={to} className='font-medium text-primary-dark link-shadow hover:text-primary-purple'>
      {children}
    </Link>
  );
}