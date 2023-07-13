import Section from '../base/Section';
import ContactInfos from '../common/ContactInfos';
import GridBox from '../common/GridBox';
import ContactForm from '../common/ContactForm';

export default function ContactFormSection(){
  return(
    <Section className='container mx-auto px-8 my-14'>
      <GridBox className='grid-cols-2'>
        <ContactInfos/>
        <ContactForm/>
      </GridBox>
    </Section>
  );
}