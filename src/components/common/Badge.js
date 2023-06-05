import Span from '../base/Span'
export default function Badge({ children }){
  return(
    <Span className='h-8 px-5 py-2 bg-secondary-light border border-primary-gray rounded-full text-primary-dark hover:bg-primary-blue hover:text-white transition-all duration-500'>
      {children}
    </Span>
  );
}