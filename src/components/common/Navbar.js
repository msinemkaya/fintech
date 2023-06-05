import FlexBox from './FlexBox';
import Container from '../base/Container';
import {ReactComponent as Logo} from '../../images/Logo.svg';
import NavLinks from './NavLinks';
import A from '../base/A'
import AppButton from '../common/AppButton'
import Icon from './Icon';

export default function Navbar(){

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
      to: '/products',
      text: 'products and services'
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
    <FlexBox className='justify-between h-16 py-2 px-6 '>
      <Container>
        <Logo className='h-12'/>
      </Container>
      <FlexBox className='gap-6 md:gap-8 lg-gap-14'>
        {links.map((link, index) => (
          <NavLinks to={link.to} key={index}>
            {link.text}
          </NavLinks>
        ))}
      </FlexBox>
      <FlexBox className='hidden lg:flex gap-3'>
        <A className='text-xs link-shadow' to='mailto:info@stackpair.com'>info@stackpair.com</A>
        <AppButton dark className='flex items-center gap-2'>
          Chat with us
          <Icon type='chat' size={12}/>
        </AppButton>
      </FlexBox>
    </FlexBox>
  );
}