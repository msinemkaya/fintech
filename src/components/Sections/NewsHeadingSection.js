import Section from '../base/Section';
import H2 from '../base/heading/H2';
import FilterByCategories from '../common/FilterByCategories';
import FlexBox from '../common/FlexBox';
import SearchBar from '../common/SearchBar';
import { useState } from 'react';

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

  const [value, setValue] = useState('')

  const handleSearch = ({target}) => {
    setValue(target.value)
  }

  return(
    <Section className='my-16'>
      <H2 className='font-extrabold text-5xl text-center'>News</H2>
      <FlexBox className='my-14 px-8 gap-3 flex-col md:flex-row'>
        <FilterByCategories categories={categories}/>
        <SearchBar value={value} onChange={handleSearch}/>
      </FlexBox>
    </Section>
  );
}