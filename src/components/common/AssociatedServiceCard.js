import {ReactComponent as Illustration} from '../../images/Illustration.svg'
import AppButton from './AppButton';

export default function AssociatedServiceCard({ service }){
  return(
    <AppButton primary gray className='relative h-16'>
      <Illustration className='absolute -left-8'/>
      {service}
    </AppButton>
  );
}