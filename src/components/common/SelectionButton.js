import A from '../base/A';
import Button from '../base/Button';
import {ReactComponent as Poly} from '../../images/Polygon.svg';
import Img from '../base/Img';
import FlexBox from './FlexBox';
import P from '../base/P';

export default function SelectionButton({ selection }){
  return(
    <Button className='group'>
      <A className='flex items-center justify-center gap-3'>
        <FlexBox className='relative justify-center h-11 w-10'>
          <Poly className='absolute inset-0 group-hover:fill-primary-light'/>
          <Img url={selection.icon} className='z-20'/>
        </FlexBox>
        <P className='text-2xl font-bold whitespace-nowrap group-hover:text-primary-purple'>{selection.text}</P>
      </A>
    </Button>
  );
}