import Span from '../base/Span';
import AppSection from '../common/AppSection';
import AppButton from '../common/AppButton';
import Img from '../base/Img'
import headerimage from '../../images/Header-image.png'
import FlexBox from '../common/FlexBox';
import H1 from '../base/heading/H1'
import GridBox from '../common/GridBox';

export default function HeadingSection(){
  return(
    <AppSection className='py-8 h-nav-screen'>
        <GridBox className='grid-cols-2 gap-4 w-full grid-rows-1 h-full'>
          <FlexBox className='flex-col justify-center !items-start'>
            <H1 className='font-extrabold text-6xl mb-3'>
              Financial solutions that you need
            </H1>
            <Span className='text-xl font-light opacity-90 mb-8 block'>We will find the right solution precisely for your business </Span>
            <AppButton primary purple>Contact us</AppButton>
          </FlexBox>
          <Img url={headerimage} className='object-fit h-full justify-self-end'/>
        </GridBox>
    </AppSection>
  );
}