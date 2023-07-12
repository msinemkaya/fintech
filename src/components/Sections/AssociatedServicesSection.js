import Section from '../base/Section';
import H3 from '../base/heading/H3';
import AssociatedServiceCard from '../common/AssociatedServiceCard';
import FlexBox from '../common/FlexBox';

export default function AssociatedServicesSection(){

  const services = [
    'service1',
    'service2',
    'service3',
    'service4',
    'service5',
  ]

  return(
    <Section className='my-24 mx-20'>
      <H3 className='text-4xl font-extrabold text-center mb-16'>Associated services</H3>
      <FlexBox className='justify-evenly flex-wrap gap-x-12 gap-y-6'>
        {services.map((service, index) => (
          <AssociatedServiceCard service={service} key={index}/>
        ))}
      </FlexBox>
    </Section>
  );
}