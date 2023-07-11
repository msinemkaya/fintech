import FlexBox from './FlexBox';
import {ReactComponent as Logo} from '../../images/Logo.svg';
import Container from '../base/Container';
import ContactButton from './ContactButton';
import Span from '../base/Span';
import NavLinks from './NavLinks';
import A from '../base/A';

export default function FooterInfo(){

  const types = ['chat', 'twitter', 'linkedin', 'instagram']

  const links = [
    {
      to: '/',
      text: 'home'
    },
    {
      to: '/about',
      text: 'about us'
    },
    {
      to: '/blog',
      text: 'blog'
    },
    {
      to: '/contact',
      text: 'contact us'
    },
  ]

  return(
    <FlexBox className='py-14 semi-md:px-20 px-12 gap-14 flex-wrap md:flex-nowrap justify-center'>
      <Logo className='w-6 order-2 md:order-1'/>
      <Container className='md:max-w-xs md:basis-0 md:order-2 order-3'>
        <FlexBox className='gap-3'>
          {types.map((type, index) => (
            <ContactButton to='#' type={type} key={index} className='text-black hover:text-white' fill='group-hover:fill-primary-purple group-hover:contrast-200'/>
          ))}
        </FlexBox>
        <Span className='font-medium block'>info@stackpair.com</Span>
        <Span className='text-xs'>
          Freeland Park,
          Finage Office
          Lytchett House, 13,
          Wareham Rd, Poole BH16 6FA
        </Span>
      </Container>
      <FlexBox className='gap-14 !items-start min-w-0 flex order-1 md:order-3 flex-col sm:flex-row w-full'>
        <FlexBox className='flex-col !items-start gap-3'>
          {links.map((link, index) => (
            <NavLinks to={link.to} key={index}>
              {link.text}
            </NavLinks>
          ))}
        </FlexBox>
        <FlexBox className='flex-col !items-start gap-3 '>
          <NavLinks to='/products'>
            products and services
          </NavLinks>
          <A to='#'>
            Turnkey Fintech Solutions
          </A>
          <A to='#'>
            Fintech Consultations
          </A>
          <A to='#'>
            Investment on Fintech Companies
          </A>
        </FlexBox>
        <FlexBox className='flex-col !items-start gap-3'>
          <A to='#'>
            Terms of use
          </A>
          <A to='#'>
            Privacy
          </A>
          <A to='#'>
            Cookie Policy
          </A>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}