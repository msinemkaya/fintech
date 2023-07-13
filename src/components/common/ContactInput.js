import classNames from 'classnames';
import Input from '../base/Input'
import Span from '../base/Span'

export default function ContactInput({ label, type, placeholder, value, className, ...rest }){

  const finalClasses = classNames('bg-transparent border-b focus:outline-none border-primary-light w-full h-12 py-3 mb-8', className)

  return(
    <>
      <Span className='font-medium block'>{label}</Span>
      <Input type={type} placeholder={placeholder} className={finalClasses} value={value} {...rest}/>
    </>
  );
}