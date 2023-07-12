import Container from '../base/Container';
import P from '../base/P';
import H5 from '../base/heading/H5';

export default function AdvantageCard({ advantage }){
  return(
    <Container className='p-5 bg-primary-light flex-1 my-5'>
      <H5 className='font-bold mb-2'>{advantage.title}</H5>
      <P className='opacity-90'>{advantage.content}</P>
    </Container>
  );
}