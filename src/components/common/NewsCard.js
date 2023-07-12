import Container from '../base/Container'
import Img from '../base/Img'
import P from '../base/P'
import H6 from '../base/heading/H6'
import FlexBox from './FlexBox'
import LearnMore from './LearnMore'

export default function NewsCard({ news }){
  return(
    <Container className='p-6 lg:basis-1/3 h-64 grow even:bg-secondary-light'>
      <H6 className='font-bold'>{news.title}</H6>
      <FlexBox className='gap-3'>
        <Container className='basis-1/2 shrink w-full'>
          <P className='overflow-hidden text-ellipsis line-clamp-4 mb-3 basis-1'>{news.text}</P>
          <LearnMore text='Read More'/>
        </Container>
        <Img url={news.img} className='w-64 hidden sm:block ml-auto'/>
      </FlexBox>
    </Container>
  );
}