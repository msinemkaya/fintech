import Container from '../base/Container';
import P from '../base/P';
import LearnMore from './LearnMore';
import H5 from '../base/heading/H5';
import FlexBox from './FlexBox';

export default function ServiceCard({ card }){
  return(
    <FlexBox className='p-8 flex-col !items-start'>
      {card.icon}
      <H5 className='text-2xl font-semibold mt-8 mb-5 line-clamp-2'>{card.heading}</H5>
      <P className='mb-10'>{card.content}</P>
      <Container className='mt-auto'>
        <LearnMore to='#'/>
      </Container>
    </FlexBox>
  );
}