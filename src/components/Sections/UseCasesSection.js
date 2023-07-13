import Container from '../base/Container';
import P from '../base/P';
import H3 from '../base/heading/H3';
import AppSection from '../common/AppSection';
import FlexBox from '../common/FlexBox';
import UseCaseCard from '../common/UseCaseCard';

export default function UseCasesSection({ cases }){
  return(
    <AppSection className='lg:flex-row flex-col mt-28 lg:mt-0 lg:gap-28'>
      <Container className='min-w-[10rem] max-w-[20rem] w-60'>
        <H3 className='text-4xl font-extrabold'>Use cases</H3>
        <P className='opacity-90'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</P>
      </Container>
      <FlexBox className='gap-3 flex-wrap content-center semi-sm:h-card justify-center mx-auto semi-sm:my-0 semi-sm:flex-col shrink-0 flex-row semi-sm:items-center items-stretch h-auto semi-sm:mt-0 my-12'>
        {
          cases.map((item, index) => (
            <UseCaseCard item={item} key={index}/>
          ))
        }
      </FlexBox>
    </AppSection>
  );
}