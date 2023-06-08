import Section from '../base/Section';
import Container from '../base/Container';
import Span from '../base/Span';
import P from '../base/P';
import H3 from '../base/heading/H3';
import H5 from '../base/heading/H5';
import Img from '../base/Img'
import Layout from '../../images/Layout.png'
import GridBox from '../common/GridBox';

export default function ReasonsSection(){

  const reasons = [
    {
      heading: 'Work with experts',
      text: 'We have more than 10 years of experience in the financial sphere and learnt a lot about it'
    },
    {
      heading: 'Get experience',
      text: 'We attend professional exhibitions and are ready to share the experience'
    },
    {
      heading: 'Get in touch with the right companies',
      text: 'We have wide range of contacts to make your business work better'
    },
    {
      heading: '24/7 online consultants',
      text: 'Our experts are ready to answer your question at any time'
    },
  ]

  return(
    <Section className='py-24'>
      <H3 className='font-extrabold text-3xl sm:text-[40px] sm:leading-[60px] text-center mb-16'>
        Here are 4 reasons why we are
        <br />
        the <Span className='text-primary-purple'>best fit for your company</Span>
      </H3>
      <GridBox className='px-6 gap-x-24 lg:grid-cols-2 xl:ml-44'>
        <Container className='space-y-8'>
          {reasons.map((reason,index) => (
            <Container key={index}>
              <H5 className='font-semibold text-xl sm:text-2xl'>{reason.heading}</H5>
              <P>{reason.text}</P>
            </Container>
          ))}
        </Container>
          <Img url={Layout} className='object-fit h-full hidden lg:block'/>
      </GridBox>
    </Section>
  );
}