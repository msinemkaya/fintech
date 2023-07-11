import Container from '../base/Container';
import P from '../base/P';
import H5 from '../base/heading/H5';
import LearnMore from './LearnMore';

export default function HowWeWorkCard({ title, buttonText, to, children }){
  return(
    <Container className='p-8 flex-1'>
      <H5 className='text-2xl font-semibold'>
        {title}
      </H5>
      <P className='mb-8 mt-4'>
        {children}
      </P>
      <LearnMore text={buttonText} to={to}/>
    </Container>
  );
}