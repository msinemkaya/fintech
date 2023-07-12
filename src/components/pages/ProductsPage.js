import Footer from '../Sections/Footer';
import ProductsHeadingSection from '../Sections/ProductsHeadingSection';
import ProductsSection from '../Sections/ProductsSection';
import UseCasesSection from '../Sections/UseCasesSection';
import turnkey from '../../images/TurnkeyImage.png'

export default function ProductsPage({  }){

  const cases = [
    {
      company: 'Company name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
    {
      company: 'Company name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut '
    },
    {
      company: 'Company name',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia'
    },
    {
      company: 'Company name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
    },
    {
      company: '',
      desc: ''
    },
    {
      company: '',
      desc: ''
    },
    {
      company: 'Company name',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
    },
  ]

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
    <>
      <ProductsHeadingSection/>
      <ProductsSection title='Turnkey Fintech Solutions' image={turnkey} advantages={advantages}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </ProductsSection>
      <UseCasesSection cases={cases}/>
      <Footer/>
    </>
  );
}