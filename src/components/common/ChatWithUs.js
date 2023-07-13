import AppButton from './AppButton';
import Icon from './Icon';
import Span from '../base/Span';
import ContactButton from './ContactButton';
import P from '../base/P';
import Container from '../base/Container';
import FlexBox from './FlexBox';

export default function ChatWithUs() {
  
  const types = ['twitter', 'linkedin', 'instagram']

  return (
    <Container className='pl-14'>
      <AppButton primary purple className='gap-2 whitespace-nowrap'>
        <Span>Chat with us</Span>
        <Icon type='chat' />
      </AppButton>
      <FlexBox className='gap-3 my-6'>
        {types.map((type, index) => (
          <ContactButton
            to='#'
            type={type}
            key={index}
            className='text-black hover:text-white'
            fill='group-hover:fill-primary-purple group-hover:contrast-200'
          />
        ))}
      </FlexBox>
      <P className='text-xs'>
        Freeland Park, Finage Office Lytchett House, 13, Wareham Rd, Poole BH16
        6FA
      </P>
    </Container>
  )
}
