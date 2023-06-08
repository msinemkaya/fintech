import Container from '../base/Container';
import AppSection from '../common/AppSection';
import H3 from '../base/heading/H3'
import GridBox from '../common/GridBox';
import {ReactComponent as Polygon} from '../../images/Polygon.svg';
import {ReactComponent as Card1} from '../../images/Card1.svg';
import {ReactComponent as Card2} from '../../images/Card2.svg';
import {ReactComponent as Card3} from '../../images/Card3.svg';
import P from '../base/P';
import ServiceCard from '../common/ServiceCard';

export default function ServiceSection(){

  const cards = [
    {
      icon: <Card1/>,
      heading: 'Turnkey Fintech Solutions',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      icon: <Card2/>,
      heading: 'Investment in Fintech Companies',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      icon: <Card3/>,
      heading: 'Fintech Consultations',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ]

  return(
    <AppSection className='lg:h-nav-screen'>
        <GridBox className='grid-cols-2 lg:grid-cols-4 w-full lg:grid-rows-1 gap-y-6'>
          <Container className='bg-primary-dark text-white relative overflow-hidden px-7 pt-16'>
            <Polygon className='absolute -bottom-1/3 -left-8 h-4/5 w-4/5'/>
            <H3 className='text-3xl md:text-4xl font-extrabold mb-2'>Our services</H3>
            <P>We are top solutions provider in the area</P>
          </Container>
          {cards.map((card, index) => (
            <ServiceCard card={card} key={index}/>
          ))}
        </GridBox>
      </AppSection>
  );
}