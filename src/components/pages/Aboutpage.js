import AboutHeadingSection from '../Sections/AboutHeadingSection';
import Footer from '../Sections/Footer';
import HowWeWorkSection from '../Sections/HowWeWorkSection';
import UseCasesSection from '../Sections/UseCasesSection';

export default function AboutPage(){

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

  return(
    <>
      <AboutHeadingSection/>
      <HowWeWorkSection/>
      <UseCasesSection cases={cases}/>
      <Footer/>
    </>
  );
}