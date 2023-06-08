import HeadingSection from '../Sections/HeadingSection';
import NewsSection from '../Sections/NewsSection';
import ReasonsSection from '../Sections/ReasonsSection';
import ServiceSection from '../Sections/ServiceSection';

export default function HomePage(){

  return(
    <>
      <HeadingSection/>
      <ServiceSection/>
      <ReasonsSection/>
      <NewsSection/>
    </>
  );
}