import Img from '../base/Img';
import FlexBox from './FlexBox';
import Badge from './Badge';
import Span from '../base/Span';
import H5 from '../base/heading/H5';
import P from '../base/P';
import Container from '../base/Container';

export default function BlogNewsCard({ img, topics, date, title, children }){
  return(
    <Container className='p-8 blognews'>
      <Img url={img} className='mb-6'/>
      <Container>
        <FlexBox className='gap-3 newsflexbox'>
          {topics.map((topic, index) => (
            <Badge key={index}>
              {topic}
            </Badge>
          ))}
        </FlexBox>
        <Span className='py-4 text-xs text-primary-blue font-bold self-start'>
          {date}
        </Span>
        <H5 className='text-2xl font-semibold'>{title}</H5>
        <P className='line-clamp-4'>
          {children}
        </P>
      </Container>
    </Container>
  );
}