import FlexBox from './FlexBox';
import {ReactComponent as Poly} from '../../images/FilledPolygon.svg';
import Container from '../base/Container';
import P from '../base/P';
import Span from '../base/Span';


export default function AboutInfoCard({ count, children }){
  return(
    <FlexBox className='w-full'>
      <Container className='relative flex items-center justify-center w-28 h-32 shrink-0'>
        <Poly className='absolute top-0 w-20 lg:w-28'/>
        <P className='text-white font-extrabold text-3xl lg:text-4xl z-10'>{count}</P>
      </Container>
      <Span className='text-xs opacity-90 shrink ml-2'>{children}</Span>
    </FlexBox>
  );
}