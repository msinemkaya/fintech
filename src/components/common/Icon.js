import Span from '../base/Span'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
import { SlSocialLinkedin , SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl'
import { CgMenuRight } from 'react-icons/cg'

export default function Icon({ type, className, size = 16, ...rest }){

  const icons = {
    chat: <BsFillChatDotsFill size={size}/>,
    right: <AiOutlineArrowRight size={size}/>,
    twitter: <SlSocialTwitter size={size}/>,
    linkedin: <SlSocialLinkedin size={size}/>,
    instagram: <SlSocialInstagram size={size}/>,
    search: <AiOutlineSearch size={size}/>,
    menu: <CgMenuRight size={size}/>
  }

  return(
    <Span className={className} {...rest}>
      {icons[type]}
    </Span>
  );
}