import Container from '../base/Container';
import P from '../base/P';
import H3 from '../base/heading/H3';
import AppSection from '../common/AppSection';
import FlexBox from '../common/FlexBox';
import UseCaseCard from '../common/UseCaseCard';

export default function UseCasesSection({ cases }){
  return(
    <AppSection className='xl:flex-row flex-col mt-28 lg:mt-0 lg:gap-28'>
      <Container className='min-w-[15rem] max-w-[20rem]'>
        <H3 className='text-4xl font-extrabold'>Use cases</H3>
        <P className='opacity-90'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</P>
      </Container>
      <FlexBox className='gap-3 flex-wrap content-center h-card justify-center mx-auto my-0 flex-col shrink-0'>
        {
          cases.map((item, index) => (
            <UseCaseCard item={item} key={index}/>
          ))
        }
      </FlexBox>
    </AppSection>
  );
}