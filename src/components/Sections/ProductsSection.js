import Container from '../base/Container';
import Img from '../base/Img';
import P from '../base/P';
import Section from '../base/Section';
import H3 from '../base/heading/H3';
import AdvantageCard from '../common/AdvantageCard';
import AppButton from '../common/AppButton';
import FlexBox from '../common/FlexBox';
import GridBox from '../common/GridBox';

export default function ProductsSection({ reverst, title, advantages, children, image }){
  return(
    <Section>
      <GridBox className='grid-cols-2 items-center m-8 justify-items-center gap-8'>
        <Container>
            <H3 className='text-4xl font-extrabold'>{title}</H3>
            <P className='my-6'>{children}</P>
            <FlexBox className='gap-3'>
              {advantages.map((item, index) => (
                <AdvantageCard advantage={item} key={index}/>
              ))}
            </FlexBox>
            <AppButton purple primary>Get it</AppButton>
        </Container>
        <Img url={image} className={reverst && '-order-1'}/>
      </GridBox>
    </Section>
  );
}