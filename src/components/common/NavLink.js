import A from '../base/A'

export default function NavLink({ children }){
  return(
    <A to='#' className='font-medium text-primary-dark link-shadow hover:text-primary-purple'>
      {children}
    </A>
  );
}