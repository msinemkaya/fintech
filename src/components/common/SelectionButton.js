import A from '../base/A';
import Button from '../base/Button';
import {ReactComponent as Poly} from '../../images/Polygon.svg';
import Img from '../base/Img';
import FlexBox from './FlexBox';
import P from '../base/P';
import Span from '../base/Span';

export default function SelectionButton({ selection }){
  return(
    <Button className='group'>
      <A className={`flex justify-center gap-3 ${!selection.subtext && 'items-center'}`}>
        <FlexBox className='relative justify-center h-11 w-10'>
          <Poly className='absolute inset-0 group-hover:fill-primary-light'/>
          <Img url={selection.icon} className='z-20'/>
        </FlexBox>
        <FlexBox className='flex-col !items-start'>
          <P className='sm:text-2xl text-xl font-bold whitespace-nowrap group-hover:text-primary-purple'>{selection.text}</P>
          {selection.name && (
            <Span className='mb-2 text-primary-grey font-bold'>{selection.name}</Span>
          )}
          {selection.subtext && (
            <Span className='mb-2'>{selection.subtext}</Span>
          )}
        </FlexBox>
      </A>
    </Button>
  );
}