import Button from '../base/Button';
import {ReactComponent as Poly} from '../../images/Polygon.svg';
import Icon from './Icon';
import classNames from 'classnames';
import A from '../base/A'

export default function ContactButton({ type, className, to }){
  
  const finalClasses = classNames('relative h-11 w-10 flex items-center justify-center', className)

  return(
    <A to={to}>
      <Button className={finalClasses}>
        <Poly className='absolute inset-0'/>
        <Icon type={type} className='text-white' size={18} />
      </Button>
    </A>
  );
}