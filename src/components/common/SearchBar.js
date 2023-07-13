import Container from '../base/Container';
import ContactInput from './ContactInput';
import Icon from './Icon';

export default function SearchBar({...rest}){

  return(
    <Container className='relative w-full lg:basis-2/5 -order-1 md:order-2'>
      <Icon type='search' className='absolute left-0 top-3' size={24}/>
      <ContactInput type='text' placeholder='Search' className='pl-8' {...rest}/>
    </Container>
  );
}