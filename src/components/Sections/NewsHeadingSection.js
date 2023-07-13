import Section from '../base/Section';
import H2 from '../base/heading/H2';
import FilterByCategories from '../common/FilterByCategories';
import FlexBox from '../common/FlexBox';

export default function NewsHeadingSection(){

  const categories = [
    'forex',
    'updates',
    'stocks',
    'real-time data',
    'cryptocurrency',
    'indicies',
    'ETF-s',
    'technical guides',
    'financial statements',
  ]

  return(
    <Section className='my-16'>
      <H2 className='font-extrabold text-5xl text-center'>News</H2>
      <FlexBox className='my-14 px-8'>
        <FilterByCategories categories={categories}/>
      </FlexBox>
    </Section>
  );
}