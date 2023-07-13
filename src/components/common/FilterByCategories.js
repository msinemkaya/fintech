import Container from '../base/Container';
import P from '../base/P';
import CategoryButton from './CategoryButton';
import FlexBox from './FlexBox';

export default function FilterByCategories({ categories }){

  return(
    <Container>
      <P className='font-bold mb-6'>
        Filter by categories
      </P>
      <FlexBox className='gap-3 flex-wrap'>
        {categories.map((category, index) => (
          <CategoryButton key={index}>
            {category}
          </CategoryButton>
        ))}
      </FlexBox>
    </Container>
  );
}