import BlogNewsSection from '../Sections/BlogNewsSection';
import Footer from '../Sections/Footer';
import NewsHeadingSection from '../Sections/NewsHeadingSection';

export default function BlogPage(){
  return(
    <>
      <NewsHeadingSection/>
      <BlogNewsSection/>
      <Footer/>
    </>
  );
}