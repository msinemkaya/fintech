import FlexBox from './FlexBox';
import Container from '../base/Container';
import {ReactComponent as Logo} from '../../images/Logo.svg';
import NavLinks from './NavLinks';
import A from '../base/A'
import AppButton from '../common/AppButton'
import Icon from './Icon';
import { useState } from 'react';

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

  const [menu, setMenu]=useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return(
    <FlexBox className={`justify-between py-2 px-6 top-0 h-16 items-center sticky bg-background-base z-50 ${menu && 'relative'}`}>
      <Container>
        <Logo className='h-12'/>
      </Container>
      <FlexBox className={`gap-6 py-6 sm:py-0 md:gap-8 sm:flex-row absolute sm:static flex-col mx-auto sm:mx-0 self-start sm:self-auto bg-background-base transition-all w-screen sm:w-auto left-0 duration-300 z-50 ${menu ? 'top-0 ' : '-top-96'}`}>
        {links.map((link, index) => (
          <NavLinks to={link.to} key={index}>
            {link.text}
          </NavLinks>
        ))}
      </FlexBox>
      <Icon type='menu' size={24} className='block sm:hidden hover:text-primary-purple z-50' onClick={handleClick}/>
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