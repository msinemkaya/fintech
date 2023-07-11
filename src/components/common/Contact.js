import Container from '../base/Container'
import P from '../base/P';
import Span from '../base/Span';
import H3 from '../base/heading/H3';
import useContactHeading from '../hooks/use-contact-heading';
import ContactButton from './ContactButton';
import FlexBox from './FlexBox';
import Form from '../base/Form'
import ContactInput from './ContactInput';
import AppButton from './AppButton'
import { useState } from 'react';

export default function Contact(){
  
  const content = useContactHeading()

  const types = ['twitter', 'linkedin', 'instagram']
  const [email, setEmail] = useState('')
  const [help, setHelp] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleMail = ({target}) => {
    setEmail(target.value)
  }
  const handleHelp = ({target}) => {
    setHelp(target.value)
  }

  return(
    <FlexBox className='bg-primary-dark md:px-32 px-12 py-14 justify-center text-white sm:flex-row flex-col gap-y-16'>
      <Container className='sm:basis-4/6 w-full'>
        <H3 className='font-extrabold text-4xl mb-2'>{content}</H3>
        <P className='mb-6'>You can reach us anytime via <Span className='font-bold'>info@stackpair.com</Span></P>
        <FlexBox className='gap-3'>
          {types.map((type,index) => (
            <ContactButton type={type} key={index} to='#' className='hover:scale-110'/>
          ))}
        </FlexBox>
      </Container>
      <Form className='sm:basis-2/4 w-full' onSubmit={handleSubmit}>
        <ContactInput type='email' label='Email' placeholder='info@email.com' value={email} onChange={handleMail}/>
        <ContactInput type='text' label='How can we help?' placeholder='Tell us a little about your needs' value={help} onChange={handleHelp}/>
        <AppButton primary white className='origin-left'>Submit</AppButton>
      </Form>
    </FlexBox>
  );
}