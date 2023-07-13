import Container from '../base/Container';
import ChatWithUs from './ChatWithUs';
import Contacts from './Contacts';
import H2 from '../base/heading/H2';

export default function ContactInfos(){

  return(
    <Container>
      <H2 className='text-5xl font-extrabold'>Contact us</H2>
      <Contacts/>
      <ChatWithUs/>
    </Container>
  );
}