import List from '../base/List';
import Span from '../base/Span';
import H3 from '../base/heading/H3';
import AppSection from '../common/AppSection';
import FlexBox from '../common/FlexBox';
import HowWeWorkCard from '../common/HowWeWorkCard';

export default function HowWeWorkSection(){

  const list = [
    "email info@stackpair.com",
    'form on the website',
    'social networks'
  ]

  return(
    <AppSection className='flex-col gap-14 mt-28'>
      <H3 className='text-4xl font-extrabold'>How we work & <Span className='text-primary-purple'>what you get</Span></H3>
      <FlexBox className='!items-start md:flex-row flex-col'>
        <HowWeWorkCard title='You contact us' buttonText='Contact us'>
          You can get to us via:
          <List list={list} listClasses='list-disc list-inside'/>
        </HowWeWorkCard>
        <HowWeWorkCard title='Consultation' buttonText='Our products'>
          We will provide a detailed consultation on your case. You will get a list of possible solutions and a plan of further steps. We are available 24/7.
        </HowWeWorkCard>
        <HowWeWorkCard title='Support' buttonText='Lets get started!'>
          You will get free support for 5 further years
        </HowWeWorkCard>
      </FlexBox>
    </AppSection>
  );
}