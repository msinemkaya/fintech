import Section from '../base/Section';
import ProductsSection from './ProductsSection';
import turnkey from '../../images/TurnkeyImage.png'
import consultation from '../../images/ConsultationImage.png'
import investment from '../../images/InvestmentImage.png'

export default function Products(){
 
  const advantages = [
    {
      title: 'Advantage',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      title: 'Advantage',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
    {
      title: 'Advantage',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    },
  ]
  
  return(
    <Section className='space-y-20'>
      <ProductsSection title='Turnkey Fintech Solutions' image={turnkey} advantages={advantages}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ProductsSection>
      <ProductsSection title='Investment in Fintech Companies' image={investment} advantages={advantages} reverst>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ProductsSection>
      <ProductsSection title='Fintech Consultations' image={consultation} advantages={advantages}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ProductsSection>
    </Section>
  );
}