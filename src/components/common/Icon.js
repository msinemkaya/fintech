import Span from '../base/Span'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
import { SlSocialLinkedin , SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl'

export default function Icon({ type, className, size = 16 }){

  const icons = {
    chat: <BsFillChatDotsFill size={size}/>,
    right: <AiOutlineArrowRight size={size}/>,
    twitter: <SlSocialTwitter size={size}/>,
    linkedin: <SlSocialLinkedin size={size}/>,
    instagram: <SlSocialInstagram size={size}/>,
    search: <AiOutlineSearch size={size}/>
  }

  return(
    <Span className={className}>
      {icons[type]}
    </Span>
  );
}