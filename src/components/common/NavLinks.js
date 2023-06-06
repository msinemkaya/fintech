import { NavLink } from 'react-router-dom'

export default function NavLinks({ children, to }){
  return(
    <NavLink to={to} className={({isActive}) => isActive ? 'text-primary-purple font-semibold link-shadow first-letter:uppercase' : 'font-medium text-primary-dark link-shadow hover:text-primary-purple first-letter:uppercase'}>
      {children}
    </NavLink>
  );
}