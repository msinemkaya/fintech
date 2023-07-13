import Span from '../base/Span'
export default function Badge({ children }){
  return(
    <Span className='py-2 px-5 bg-secondary-light border-primary-grey border rounded-full text-xs first-letter:uppercase text-primary-dark hover:bg-primary-blue hover:text-white transition-all duration-500 whitespace-nowrap flex-auto text-center'>
      {children}
    </Span>
  );
}