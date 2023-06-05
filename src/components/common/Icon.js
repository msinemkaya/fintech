import Span from '../base/Span'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'

export default function Icon({ type, className, size = 16 }){

  const icons = {
    chat: <BsFillChatDotsFill size={size}/>,
    right: <AiOutlineArrowRight size={size}/>,
  }

  return(
    <Span className={className}>
      {icons[type]}
    </Span>
  );
}