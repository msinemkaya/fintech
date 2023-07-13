import Container from '../base/Container';
import Form from '../base/Form';
import Span from '../base/Span';
import ContactInput from './ContactInput';
import { useState } from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Checkbox from './Checkbox';
import AppButton from './AppButton';


export default function ContactForm(){
  const [selected, setSelected] = useState('US');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [help, setHelp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleNameChange = ({target}) => {
    setName(target.value)
  }
  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }
  const handlePhoneChange = ({target}) => {
    setPhone(target.value)
  }
  const handleHelpChange = ({target}) => {
    setHelp(target.value)
  }

  return(
    <Form onSubmit={handleSubmit}>
      <ContactInput type='text' label='Name' placeholder='Your name' value={name} onChange={handleNameChange}/>
      <ContactInput type='email' label='Email' placeholder='info@email.com' value={email} onChange={handleEmailChange}/>
      <Container className='relative'>
        <ContactInput type='tel' label='Phone' className='pl-24' value={phone} onChange={handlePhoneChange}/>
        <ReactFlagsSelect
          selected={selected}
          onSelect={(code) => setSelected(code)}
          countries={["US", "GB", "FR", "DE", "IT"]}
          customLabels={{"US": "+1","GB": "+2","FR": "+3","DE": "+4","IT": "+5"}}
          showOptionLabel={false}
          fullWidth={false}
          optionsSize={22}
          selectedSize={22}
          className="menu-flags !absolute top-6 -left-3"
        />
      </Container>
      <ContactInput type='text' label='How can we help?' placeholder='Tell us a little about your needs' value={help} onChange={handleHelpChange}/>
      <Container>
        <Span className='font-medium mb-8 block'>What is your priority?</Span>
        <Checkbox id='turnkey' label='Turnkey Fintech Solutions'/>
        <Checkbox id='fintech' label='Fintech Consultations'/>
        <Checkbox id='investment' label='Investment in Fintech Companies'/>
      </Container>
      <AppButton primary gray>
        Send
      </AppButton>
    </Form>
  );
}