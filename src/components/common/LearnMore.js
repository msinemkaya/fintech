import A from '../base/A'
import Span from '../base/Span'
import AppButton from './AppButton'
import Icon from './Icon'

export default function LearnMore({ to = '#', text = 'Learn More' }) {
  return (
    <A to={to} className='inline-flex gap-3 items-center hover:scale-110 transition-all duration-300 origin-left'>
      <Span className='text-xs font-bold'>{text}</Span>
      <AppButton rounded>
        <Icon type='right'/>
      </AppButton>
    </A>
  )
}
