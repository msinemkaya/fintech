import Span from '../base/Span';
import AppSection from '../common/AppSection';
import PrimaryHeading from '../common/PrimaryHeading';
import ProductSelection from '../common/ProductSelection';
import {ReactComponent as Poly} from '../../images/Polygon.svg';

export default function ProductsHeadingSection(){
  return(
    <AppSection className='relative'>
    <Poly className='absolute w-3/4 h-3/4 rotate-45 -left-1/3'/>
      <PrimaryHeading className='basis-full z-10'>
        Choose the <Span className='text-primary-purple'> product that fits you </Span>
      </PrimaryHeading>
      <ProductSelection/>
    </AppSection>
  );
}