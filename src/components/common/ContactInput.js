import Input from '../base/Input'
import Span from '../base/Span'

export default function ContactInput({ label, type, placeholder, value, ...rest }){
  return(
    <>
      <Span className='font-medium block'>{label}</Span>
      <Input type={type} placeholder={placeholder} className='bg-transparent border-b focus:outline-none border-primary-light w-full h-12 py-3 mb-8' value={value} {...rest}/>
    </>
  );
}