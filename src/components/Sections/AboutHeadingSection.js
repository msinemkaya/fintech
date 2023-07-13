import Span from '../base/Span';
import AboutInfoCard from '../common/AboutInfoCard';
import AppSection from '../common/AppSection';
import FlexBox from '../common/FlexBox';
import PrimaryHeading from '../common/PrimaryHeading';

export default function AboutHeadingSection(){

  const infoCards = [
    {
      count: '10',
      text: 'years of a successful work'
    },
    {
      count: '3k+',
      text: 'satisfied customers'
    },
    {
      count: '11k+',
      text: 'consultations'
    },
  ]

  return(
    <AppSection className='flex-col gap-24'>
      <FlexBox className='gap-8 mt-24'>
        <PrimaryHeading className='basis-3/5 mx-auto py-36 sm:py-0'>
          We are experts in <Span className='text-primary-purple'>fintech solutions</Span>
        </PrimaryHeading>
        <Span className='basis-2/5 hidden sm:block'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
        </Span>
      </FlexBox>
      <FlexBox className='lg:gap-28 semi-md:gap-20 gap-12 flex-col lg:flex-row'>
        <Span className='basis-2/6'>
          <Span className='font-bold'>We're on a mission</Span> to simplify financial
          data and computing, so developers and their teams can spend more time building software,
          that changes the API services forever
        </Span>
        <FlexBox className='gap-2 sm:flex-row flex-col'>
          {infoCards.map((card, index)=> (
            <AboutInfoCard count={card.count} key={index}>
              {card.text}
            </AboutInfoCard>
          ))}
        </FlexBox>
      </FlexBox>
    </AppSection>
  );
}