import Section from '../base/Section'
import Contact from '../common/Contact';
import FooterInfo from '../common/FooterInfo';

export default function Footer(){
  return(
    <Section className='h-nav-screen'>
      <Contact />
      <FooterInfo/>
    </Section>
  );
}