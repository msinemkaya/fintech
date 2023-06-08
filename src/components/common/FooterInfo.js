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
    <FlexBox className='py-14 px-32 gap-20 flex-wrap'>
      <Logo className='w-6'/>
      <Container>
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
      <FlexBox className='gap-14 !items-start'>
        <FlexBox className='flex-col !items-start gap-3'>
          {links.map((link, index) => (
            <NavLinks to={link.to} key={index}>
              {link.text}
            </NavLinks>
          ))}
        </FlexBox>
        <FlexBox className='flex-col !items-start gap-3'>
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