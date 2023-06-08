import Button from '../base/Button';
import {ReactComponent as Poly} from '../../images/Polygon.svg';
import Icon from './Icon';
import classNames from 'classnames';
import A from '../base/A'

export default function ContactButton({ type, className, to, fill='transparent' }){
  
  const finalClasses = classNames('relative h-11 w-10 flex items-center justify-center group', className)

  return(
    <A to={to}>
      <Button className={finalClasses}>
        <Poly className={`absolute inset-0 ${fill}`}/>
        <Icon type={type} size={18} className='z-10'/>
      </Button>
    </A>
  );
}